// URL per il singolo villaggio
const URLReq = `game.php?t=${game_data.player.id}&screen=place&mode=scavenge`;

// Array per memorizzare le informazioni sulla raccolta
let scavengeInfo = [];
let categoryNames;
let html = "";

// Aggiungi le classi CSS
const cssClassesSophie = `
  <style>
    .sophRowA {
      background-color: #32353b;
      color: white;
      padding: 5px;
    }
    .sophRowB {
      background-color: #36393f;
      color: white;
      padding: 5px;
    }
    .sophHeader {
      background-color: #202225;
      font-weight: bold;
      color: white;
      padding: 5px;
    }
  </style>
`;
$(".content-border").eq(0).prepend(cssClassesSophie);
$("#mobileHeader").eq(0).prepend(cssClassesSophie);

// Funzione per ottenere i dati del villaggio
$.get(URLReq, function (data) {
  // Estrai i nomi delle categorie
  categoryNames = JSON.parse("[" + $(data).find('script:contains("ScavengeScreen")')[0].innerHTML.match(/\{.*\:\{.*\:.*\}\}/g) + "]")[0];

  // Estrai i dati del villaggio
  const villageData = JSON.parse($(data).find('script:contains("ScavengeScreen")').html().match(/\{.*\:\{.*\:.*\}\}/g)[0]);

  // Memorizza le informazioni sulla raccolta
  scavengeInfo.push(villageData);

  // Costruisci la tabella HTML
  html = `
    <div>
      <table class='sophHeader'>
        <tr class='sophHeader'>
          <td class='sophHeader' colspan='5'>
            <h1><center>Scavenging overview for ${villageData.village_name}</center></h1>
          </td>
        </tr>
        <tr class='sophHeader'>
          <td class='sophHeader'>Category</td>
          <td class='sophHeader'>Status</td>
        </tr>
  `;

  // Aggiungi le righe per ogni categoria di raccolta
  $.each(villageData.options, function (categoryId, categoryData) {
    const rowClass = (categoryId % 2 === 0) ? 'sophRowA' : 'sophRowB';
    let status = "";

    if (categoryData.scavenging_squad) {
      const endTime = parseInt(categoryData.scavenging_squad.return_time) * 1000;
      status = `<span class="timer" data-endtime="${parseInt(endTime / 1000)}"></span>`;
    } else if (categoryData.is_locked) {
      status = "LOCKED";
    } else {
      status = "No run";
    }

    html += `
      <tr class="${rowClass}">
        <td class="sophHeader">${categoryNames[categoryId].name}</td>
        <td class="${rowClass}">${status}</td>
      </tr>
    `;
  });

  html += "</table></div>";

  // Aggiungi la tabella alla pagina
  $("#contentContainer").eq(0).prepend(html);
  $("#mobileContent").eq(0).prepend(html);

  // Avvia i timer
  Timing.tickHandlers.timers.init();
}).fail(function (error) {
  console.error("Errore durante il caricamento dei dati del villaggio:", error);
});
