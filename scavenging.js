// PROGRAM VARIABLES
const PREFIX = "scavenge_optimizer_"; // Prefisso univoco per le chiavi nel localStorage
var count = 0;
var nsteps = 200;
var worker; // Parallel thread for calculations
var has_archer = game_data.units.includes("archer");
var duration_factor, duration_exponent, duration_initial_seconds;
var hours = 6;
var max_spear = -1;
var max_sword = -1;
var max_axe = -1;
var max_archer = -1;
var max_light = -1;
var max_marcher = -1;
var max_heavy = -1;

var haulsPerUnit = { "spear": 25, "sword": 15, "axe": 10, "light": 80, "heavy": 50, "archer": 10, "marcher": 50, "knight": 0 };
var lootFactors = { 0: 0.1, 1: 0.25, 2: 0.5, 3: 0.75 };
var countapikey = "optimizedScavenging";

// Funzione per verificare se un valore è un numero valido
function isValidNumber(value, min = -Infinity, max = Infinity) {
    return !isNaN(value) && value >= min && value <= max;
}

// Salva le configurazioni nel localStorage
function saveConfig(key, value) {
    if (isValidNumber(value)) {
        localStorage.setItem(PREFIX + key, value);
        console.log(`Salvato '${key}':`, value);
    } else {
        console.error(`Valore non valido per '${key}':`, value);
    }
}

// Carica le configurazioni dal localStorage
function loadConfig(key, defaultValue) {
    const value = localStorage.getItem(PREFIX + key);
    if (value !== null && isValidNumber(value)) {
        console.log(`Letto '${key}':`, value);
        return parseFloat(value);
    } else {
        console.warn(`Valore non valido o mancante per '${key}'. Utilizzo del valore predefinito:`, defaultValue);
        return defaultValue;
    }
}

// Aggiorna l'interfaccia con i valori memorizzati
function inputMemory() {
    hours = loadConfig("ScavengeTime", hours);
    document.getElementById("hours").value = hours;

    max_spear = loadConfig("max_spear", max_spear);
    document.getElementById("max_spear").value = max_spear;

    max_sword = loadConfig("max_sword", max_sword);
    document.getElementById("max_sword").value = max_sword;

    max_axe = loadConfig("max_axe", max_axe);
    document.getElementById("max_axe").value = max_axe;

    if (has_archer) {
        max_archer = loadConfig("max_archer", max_archer);
        document.getElementById("max_archer").value = max_archer;
    }

    max_light = loadConfig("max_light", max_light);
    document.getElementById("max_light").value = max_light;

    if (has_archer) {
        max_marcher = loadConfig("max_marcher", max_marcher);
        document.getElementById("max_marcher").value = max_marcher;
    }

    max_heavy = loadConfig("max_heavy", max_heavy);
    document.getElementById("max_heavy").value = max_heavy;
}

// Accetta le configurazioni dall'interfaccia e le salva
function acceptConfigs() {
    hours = parseFloat(document.getElementById("hours").value);
    saveConfig("ScavengeTime", hours);

    max_spear = parseInt(document.getElementById("max_spear").value);
    saveConfig("max_spear", max_spear);

    max_sword = parseInt(document.getElementById("max_sword").value);
    saveConfig("max_sword", max_sword);

    max_axe = parseInt(document.getElementById("max_axe").value);
    saveConfig("max_axe", max_axe);

    if (has_archer) {
        max_archer = parseInt(document.getElementById("max_archer").value);
        saveConfig("max_archer", max_archer);
    }

    max_light = parseInt(document.getElementById("max_light").value);
    saveConfig("max_light", max_light);

    if (has_archer) {
        max_marcher = parseInt(document.getElementById("max_marcher").value);
        saveConfig("max_marcher", max_marcher);
    }

    max_heavy = parseInt(document.getElementById("max_heavy").value);
    saveConfig("max_heavy", max_heavy);

    alert("Configurazioni salvate con successo!");
}

// Crea l'interfaccia utente
function createInterface() {
    if ($('button').length == 0) {
        const htmlString = `
            <div ID="scavTable">
                <table class="scavengeTable" width="15%" style="border: 7px solid rgba(121,0,0,0.71); border-image-slice: 7 7 7 7; border-image-source: url(https://dsen.innogamescdn.com/asset/cf2959e7/graphic/border/frame-gold-red.png);">
                    <tbody>
                        <tr>
                            <th style="text-align:center" colspan="13">Select unit types to scavenge with</th>
                        </tr>
                        <tr>
                            <th style="text-align:center" width="35"><a href="#" class="unit_link" data-unit="spear"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_spear.png" title="Spear fighter" alt="" class=""></a></th>
                            <th style="text-align:center" width="35"><a href="#" class="unit_link" data-unit="sword"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_sword.png" title="Swordsman" alt="" class=""></a></th>
                            <th style="text-align:center" width="35"><a href="#" class="unit_link" data-unit="axe"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_axe.png" title="Axeman" alt="" class=""></a></th>
                            ${has_archer ? '<th style="text-align:center" width="35"><a href="#" class="unit_link" data-unit="archer"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_archer.png" title="Archer" alt="" class=""></a></th>' : ''}
                            <th style="text-align:center" width="35"><a href="#" class="unit_link" data-unit="light"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_light.png" title="Light cavalry" alt="" class=""></a></th>
                            ${has_archer ? '<th style="text-align:center" width="35"><a href="#" class="unit_link" data-unit="marcher"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_marcher.png" title="Mounted Archer" alt="" class=""></a></th>' : ''}
                            <th style="text-align:center" width="35"><a href="#" class="unit_link" data-unit="heavy"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_heavy.png" title="Heavy cavalry" alt="" class=""></a></th>
                            <th style="text-align:center" nowrap width="120">Maximum runtime</th>
                        </tr>
                        <tr>
                            <td align="center"><input type="checkbox" ID="spear" name="spear" checked="checked"></td>
                            <td align="center"><input type="checkbox" ID="sword" name="sword"></td>
                            <td align="center"><input type="checkbox" ID="axe" name="axe"></td>
                            ${has_archer ? '<td align="center"><input type="checkbox" ID="archer" name="archer"></td>' : ''}
                            <td align="center"><input type="checkbox" ID="light" name="light"></td>
                            ${has_archer ? '<td align="center"><input type="checkbox" ID="marcher" name="marcher"></td>' : ''}
                            <td align="center"><input type="checkbox" ID="heavy" name="heavy"></td>
                            <td ID="runtime" align="center"><input type="text" ID="hours" name="hours" size="1" maxlength="2" align="left"> hours</td>
                        </tr>
                        <tr>
                            <th style="text-align:center" colspan="13">Insert maximum troops to use scavenging (-1 = unlimited)</th>
                        </tr>
                        <tr>
                            <td align="center"><input type="text" size="1" maxlength="5" ID="max_spear" value="-1" name="max_spear"></td>
                            <td align="center"><input type="text" size="1" maxlength="5" ID="max_sword" value="-1" name="max_sword"></td>
                            <td align="center"><input type="text" size="1" maxlength="5" ID="max_axe" value="-1" name="max_axe"></td>
                            ${has_archer ? '<td align="center"><input type="text" size="1" maxlength="5" ID="max_archer" value="-1" name="max_archer"></td>' : ''}
                            <td align="center"><input type="text" size="1" maxlength="5" ID="max_light" value="-1" name="max_light"></td>
                            ${has_archer ? '<td align="center"><input type="text" size="1" maxlength="5" ID="max_marcher" value="-1" name="max_marcher"></td>' : ''}
                            <td align="center"><input type="text" size="1" maxlength="5" ID="max_heavy" value="-1" name="max_heavy"></td>
                            <td align="center" colspan="2"><input class="btn" ID="btn-accept-configs" type="submit" value="Accept configs" tabindex="5" onclick="acceptConfigs()"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        const scavDiv = document.createElement('div');
        scavDiv.innerHTML = htmlString;
        document.getElementById("scavenge_screen").prepend(scavDiv.firstChild);

        inputMemory();
    }
}

// Avvia lo script
async function run_all() {
    if (window.location.href.indexOf('screen=place&mode=scavenge') < 0) {
        window.location.assign(game_data.link_base_pure + "place&mode=scavenge");
    }

    if (parseFloat(game_data.majorVersion) < 8.177) {
        const scavengeInfo = JSON.parse($('html').find('script:contains("ScavengeScreen")').html().match(/\{.*\:\{.*\:.*\}\}/g)[0]);
        duration_factor = scavengeInfo[1].duration_factor;
        duration_exponent = scavengeInfo[1].duration_exponent;
        duration_initial_seconds = scavengeInfo[1].duration_initial_seconds;
    } else {
        duration_factor = window.ScavengeScreen.village.options[1].base.duration_factor;
        duration_exponent = window.ScavengeScreen.village.options[1].base.duration_exponent;
        duration_initial_seconds = window.ScavengeScreen.village.options[1].base.duration_initial_seconds;
    }

    createInterface();
    startWorker();

    $.ajax({ url: window.location.href.split("scavenge")[0] + "units", success: successfunc });
}

// Avvia il worker per i calcoli
function startWorker() {
    const workerCode = `
        // Worker code here...
    `;

    const blob = new Blob([workerCode], { type: "text/javascript" });
    worker = new Worker(window.URL.createObjectURL(blob));
    worker.onmessage = ({ data: output }) => {
        console.log('Message received from worker', output);
        optimization_callBack(output.result, ...output.otherStuff);
    };
}

// Funzione principale
run_all();
