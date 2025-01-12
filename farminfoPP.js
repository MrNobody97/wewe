// made by Costache Madalin (lllll llll)
// discord: costache madalin#8472


var countApiKey = "farmInfoPP";
var countNameSpace="madalinoTribalWarsScripts"


var translations={
    en_DK:{
            "wood purchased":"wood purchased",
            "clay purchased":"clay purchased",
            "iron purchased":"iron purchased",
            "wood sold":"wood sold",
            "clay sold":"clay sold",
            "iron sold":"iron sold",
            "construction time reduction":"construction time reduction",
            "instant completion":"instant completion"
        },
    en_US:{
            "wood purchased":"wood purchased",
            "clay purchased":"clay purchased",
            "iron purchased":"iron purchased",
            "wood sold":"wood sold",
            "clay sold":"clay sold",
            "iron sold":"iron sold",
            "construction time reduction":"construction time reduction",
            "instant completion":"instant completion"
        },
    it_IT:{
            "wood purchased":"Legno comprato",
            "clay purchased":"Argilla comprata",
            "iron purchased":"Prietra Comprata",
            "wood sold":"Legno venduto",
            "clay sold":"Argilla vneduta",
            "iron sold":"Pietra Venduta",
            "construction time reduction":"Riduci il tempo di costruzione",
            "instant completion":"Finisci subito la costruzione"
    },
    pt_BR:{
        "wood purchased":"madeira comprada",
        "clay purchased":"argila comprada",
        "iron purchased":"ferro comprado",
        "wood sold":"madeira vendida",
        "clay sold":"argila vendida",
        "iron sold":"ferro vendido",
        "construction time reduction":"reduÃ§Ã£o do tempo de construÃ§Ã£o",
        "instant completion":"conclusÃ£o instantÃ¢nea"
    },
    pt_PT:{
        "wood purchased":"madeira comprada",
        "clay purchased":"argila comprada",
        "iron purchased":"ferro comprado",
        "wood sold":"madeira vendida",
        "clay sold":"argila vendida",
        "iron sold":"ferro vendido",
        "construction time reduction":"reduÃ§Ã£o do tempo de construÃ§Ã£o",
        "instant completion":"conclusÃ£o instantÃ¢nea"
    },
    el_GR:{
        "wood purchased":"Î‘Î³Î¿ÏÎ±ÏƒÎ¼ÎµÎ½Î¿ ÎžÏ…Î»Î¿",
        "clay purchased":"Î‘Î³Î¿ÏÎ±ÏƒÎ¼ÎµÎ½Î¿Ï‚ Î Î·Î»Î¿Ï‚",
        "iron purchased":"Î‘Î³Î¿ÏÎ±ÏƒÎ¼ÎµÎ½Î¿ Î£Î¹Î´ÎµÏÎ¿",
        "wood sold":"ÎžÏ…Î»Î¿ Ï€Î¿Ï…Î»Î·Î¸Î·ÎºÎµ",
        "clay sold":"Î Î·Î»Î¿Ï‚ Ï€Î¿Ï…Î»Î·Î¸Î·ÎºÎµ",
        "iron sold":"Î£Î¹Î´ÎµÏÎ¿ Ï€Î¿Ï…Î»Î·Î¸Î·ÎºÎµ",
        "construction time reduction":"ÎœÎµÎ¹Ï‰ÏƒÎ· Î§ÏÎ¿Î½Î¿Ï… ÎºÎ±Ï„Î±ÏƒÎºÎµÏ…Î·Ï‚",
        "instant completion":"Î‘Î¼ÎµÏƒÎ· ÎŸÎ»Î¿ÎºÎ»Î·ÏÏ‰ÏƒÎ·"
    },
    es_ES:{
        "wood purchased":"madera comprada",
        "clay purchased":"barro comprado",
        "iron purchased":"hierro comprado",
        "wood sold":"madera vendida",
        "clay sold":"barro vendido",
        "iron sold":"hierro vendido",
        "construction time reduction":"reducciÃ³n del tiempo de construcciÃ³n",
        "instant completion": "FinalizaciÃ³n instantÃ¡nea"
    },
    de_DE:{
        "wood purchased":"Holz gekauft",
        "clay purchased":"Lehm gekauft",
        "iron purchased":"Eisen gekauft",
        "wood sold":"Holz verkauft",
        "clay sold":"Lehm verkauft",
        "iron sold":"Eisen verkauft",
        "construction time reduction":"BauzeitverkÃ¼rzung",
        "instant completion":"sofortiger Abschluss"
        }
    
}


tt("wood purchased")//test translation


var headerWood="#001a33"
var headerWoodEven="#002e5a"
var headerStone="#3b3b00"
var headerStoneEven="#626200"
var headerIron="#1e003b"
var headerIronEven="#3c0076"

var defaultTheme= '[["theme1",["#E0E0E0","#000000","#C5979D","#2B193D","#2C365E","#484D6D","#4B8F8C","80"]],["currentTheme","theme1"],["theme2",["#E0E0E0","#000000","#F76F8E","#113537","#37505C","#445552","#294D4A","80"]],["theme3",["#E0E0E0","#000000","#ACFCD9","#190933","#665687","#7C77B9","#623B5A","80"]],["theme4",["#E0E0E0","#000000","#181F1C","#60712F","#274029","#315C2B","#214F4B","80"]],["theme5",["#E0E0E0","#000000","#9AD1D4","#007EA7","#003249","#1F5673","#1C448E","80"]],["theme6",["#E0E0E0","#000000","#EA8C55","#81171B","#540804","#710627","#9E1946","80"]],["theme7",["#E0E0E0","#000000","#754043","#37423D","#171614","#3A2618","#523A34","80"]],["theme8",["#E0E0E0","#000000","#9E0031","#8E0045","#44001A","#600047","#770058","80"]],["theme9",["#E0E0E0","#000000","#C1BDB3","#5F5B6B","#323031","#3D3B3C","#575366","80"]],["theme10",["#E0E0E0","#000000","#E6BCCD","#29274C","#012A36","#14453D","#7E52A0","80"]]]'
var localStorageThemeName = "farmInfoPPTheme"
if(localStorage.getItem(localStorageThemeName)!=undefined){
    let mapTheme = new Map(JSON.parse(localStorage.getItem(localStorageThemeName)))
    Array.from(mapTheme.keys()).forEach((key)=>{
        if(key!="currentTheme"){
            let listColors=mapTheme.get(key);
            if(listColors.length == 7){
                listColors.push(80);
                mapTheme.set(key,listColors)
            }
        }
    })
    localStorage.setItem(localStorageThemeName, JSON.stringify(Array.from(mapTheme.entries())))
}

var textColor="#ffffff"
var backgroundInput="#000000"

var borderColor = "#C5979D";//#026440
var backgroundContainer="#2B193D"
var backgroundHeader="#2C365E"
var backgroundMainTable="#484D6D"
var backgroundInnerTable="#4B8F8C"

var widthInterface=80;//percentage
var headerColorDarken=-50 //percentage( how much the header should be darker) if it's with -(darker) + (lighter)
var headerColorAlternateTable=-30;
var headerColorAlternateHover=30;

var backgroundAlternateTableEven=backgroundContainer;
var backgroundAlternateTableOdd=getColorDarker(backgroundContainer,headerColorAlternateTable);




async function main(){
    initializationTheme()
    await $.getScript("https://dl.dropboxusercontent.com/s/i5c0so9hwsizogm/styleCSSGlobal.js?dl=0");
    createMainInterface()
    changeTheme()
    hitCountApi()
}
main()

function getColorDarker(hexInput, percent) {
    let hex = hexInput;

    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, "");

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, "$1$1");
    }

    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    const calculatedPercent = (100 + percent) / 100;

    r = Math.round(Math.min(255, Math.max(0, r * calculatedPercent)));
    g = Math.round(Math.min(255, Math.max(0, g * calculatedPercent)));
    b = Math.round(Math.min(255, Math.max(0, b * calculatedPercent)));

    return `#${("00"+r.toString(16)).slice(-2).toUpperCase()}${("00"+g.toString(16)).slice(-2).toUpperCase()}${("00"+b.toString(16)).slice(-2).toUpperCase()}`
}



function createMainInterface(){
    console.log("create interface")
    html_info = `
    <div id="div_container" class="scriptContainer" >
        <div class="scriptHeader">
            <div style=" margin-top:10px;"><h2>Farm info PP</h2></div>
            <div style="position:absolute;top:10px;right: 10px;"><a href="#" onclick="$('#div_container').remove()"><img src="https://img.icons8.com/emoji/24/000000/cross-mark-button-emoji.png"/></a></div>
            <div style="position:absolute;top:8px;right: 35px;" id="div_minimize"><a href="#"><img src="https://img.icons8.com/plasticine/28/000000/minimize-window.png"/></a></div>
            <div style="position:absolute;top:10px;right: 60px;" id="div_theme"><a href="#" onclick="$('#theme_settings').toggle()"><img src="https://img.icons8.com/material-sharp/24/fa314a/change-theme.png"/></a></div>
        </div>
        <div id="theme_settings"></div>
        <div id="div_body">
                <table id="table_upload"  class="scriptTable">
                    <tr></tr>
                    <tr>
                        <td>nr world</td>
                        <td><input type="number" id="nr_world"  placeholder="120" value="0"></td>
                    </tr> 
                    <tr>
                        <td>nr pages</td>
                        <td><input type="number" id="nr_pages"  placeholder="120" value="0"></td>
                    </tr> 
                </table>
            <center>
                <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="start()" style="margin:10px" value="start">
            </center>
            <center><div id="table_view" style="height:600px;width:100%;overflow:auto" hidden></div></center>
        </div>
        
    </div>
    `;
    ////////////////////////////////////////add and remove window from page///////////////////////////////////////////
    $("#div_container").remove()
    $("#contentContainer").eq(0).prepend(html_info);
    $("#mobileContent").eq(0).prepend(html_info);

    //for mobile browser




    $("#div_container").css("position","fixed");
    $("#div_container").draggable();
    

    $("#div_minimize").on("click",()=>{
        let currentWidthPercentage=Math.ceil($('#div_container').width() / $('body').width() * 100);
        if(currentWidthPercentage >=widthInterface ){
            $('#div_container').css({'width' : '10%'});
            $('#div_body').hide();
        }
        else{
            $('#div_container').css({'width' : `${widthInterface}%`});
            $('#div_body').show();
        }
    })



    //initialization settings
    if(localStorage.getItem(game_data.world+"settings_pp_log")!=null ){
        //initialize input numbers
        let list_input=JSON.parse(localStorage.getItem(game_data.world+"settings_pp_log"))
        $('#div_container input[type=number]').each(function (index,elem) {
            this.value=list_input[index]
        });
    }


    //save settings
    $("#div_container input[type=number]").on("click input change",()=>{
        console.log("save settings")
        let list_input=[]

        //save inputs
        $('#div_container input[type=number]').each(function () {
            // var checked = this.checked
            var value=this.value
            // console.log(value)
            list_input.push(value)
        });
    
      
        let data=JSON.stringify(list_input)
        let data_localStorage=localStorage.getItem(game_data.world+"settings_pp_log")
        console.log(data)
        console.log(data_localStorage)
        if(data!=data_localStorage){
            localStorage.setItem(game_data.world+"settings_pp_log",data)
        }
    })

    
}


function changeTheme(){
    let html= `
    <h3 style="color:${textColor};padding-left:10px;padding-top:5px">after theme is selected run the script again<h3>
    <table class="scriptTable" >
        
        <tr>
            <td>
                <select  id="select_theme">
                    <option value="theme1">theme1</option>
                    <option value="theme2">theme2</option>
                    <option value="theme3">theme3</option>
                    <option value="theme4">theme4</option>
                    <option value="theme5">theme5</option>
                    <option value="theme6">theme6</option>
                    <option value="theme7">theme7</option>
                    <option value="theme8">theme8</option>
                    <option value="theme9">theme9</option>
                    <option value="theme10">theme10</option>
                </select>
            </td>
            <td>value</td>
            <td >color hex</td>
        </tr>
        <tr>
            <td>textColor</td>
            <td style="background-color:${textColor}" class="td_background"></td>
            <td><input type="text" class="scriptInput input_theme" value="${textColor}"></td>
        </tr>
        <tr>
            <td>backgroundInput</td>
            <td style="background-color:${backgroundInput}" class="td_background"></td>
            <td><input type="text" class="scriptInput input_theme" value="${backgroundInput}"></td>
        </tr>
        <tr>
            <td>borderColor</td>
            <td style="background-color:${borderColor}" class="td_background"></td>
            <td><input type="text" class="scriptInput input_theme" value="${borderColor}"></td>
        </tr>
        <tr>
            <td>backgroundContainer</td>
            <td style="background-color:${backgroundContainer}" class="td_background"></td>
            <td><input type="text" class="scriptInput input_theme" value="${backgroundContainer}"></td>
        </tr>
        <tr>
            <td>backgroundHeader</td>
            <td style="background-color:${backgroundHeader}" class="td_background"></td>
            <td><input type="text" class="scriptInput input_theme" value="${backgroundHeader}"></td>
        </tr>
        <tr>
            <td>backgroundMainTable</td>
            <td style="background-color:${backgroundMainTable}" class="td_background"></td>
            <td><input type="text" class="scriptInput input_theme" value="${backgroundMainTable}"></td>
        </tr>
        <tr>
            <td>backgroundInnerTable</td>
            <td style="background-color:${backgroundInnerTable}" class="td_background"></td>
            <td><input type="text" class="scriptInput input_theme" value="${backgroundInnerTable}"></td>
        </tr>
        <tr>
            <td>widthInterface</td>
            <td><input type="range" min="25" max="100" class="slider input_theme" id="input_slider_width" value="${widthInterface}"></td>
            <td id="td_width">${widthInterface}%</td>
        </tr>
        <tr >
            <td><input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_save_theme" value="Save"></td>
            <td><input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_reset_theme" value="Default themes"></td>
            <td></td>
        </tr>

    </table>
    `
    $("#theme_settings").append(html)
    $("#theme_settings").hide()

    let selectedTheme = ""
    let colours =[]
    let mapTheme = new Map()

    $("#select_theme").on("change",()=>{
        if(localStorage.getItem(localStorageThemeName) != undefined){
            selectedTheme = $('#select_theme').find(":selected").text();
            colours = Array.from($(".input_theme")).map(elem=>elem.value.toUpperCase().trim())
            mapTheme = new Map(JSON.parse(localStorage.getItem(localStorageThemeName)))
            console.log(selectedTheme)
            console.log(mapTheme)
            colours = mapTheme.get(selectedTheme)
            console.log(colours)
            Array.from($(".input_theme")).forEach((elem,index)=>{
                elem.value = colours[index]
            })
            Array.from($(".td_background")).forEach((elem,index)=>{
                elem.style.background = colours[index]
            })

            mapTheme.set("currentTheme",selectedTheme)
            localStorage.setItem(localStorageThemeName, JSON.stringify(Array.from(mapTheme.entries())))
        }
    })

    $("#btn_save_theme").on("click",()=>{
        colours = Array.from($(".input_theme")).map(elem=>elem.value.toUpperCase().trim())
        selectedTheme = $('#select_theme').find(":selected").text();

        for(let i=0;i<colours.length-1;i++){
            if(colours[i].match(/#[0-9 A-F]{6}/) == null ){
                UI.ErrorMessage("wrong colour: "+colours[i])  
                throw new Error("wrong colour")
            }
        }

        if(localStorage.getItem(localStorageThemeName) != undefined)
            mapTheme = new Map(JSON.parse(localStorage.getItem(localStorageThemeName)))


        mapTheme.set(selectedTheme,colours)
        mapTheme.set("currentTheme",selectedTheme)

        localStorage.setItem(localStorageThemeName, JSON.stringify(Array.from(mapTheme.entries())))
        console.log("saved colours for: "+selectedTheme)
        UI.SuccessMessage(`saved colours for: ${selectedTheme} \n run the script again`,1000)


    })

    $("#btn_reset_theme").on("click",()=>{
        localStorage.setItem(localStorageThemeName, defaultTheme)
        UI.SuccessMessage("run the script again",1000)

    })
    $("#input_slider_width").on("input",()=>{
        $("#td_width").text($("#input_slider_width").val()+"%")
    })


    if(localStorage.getItem(localStorageThemeName) != undefined){
        mapTheme = new Map(JSON.parse(localStorage.getItem(localStorageThemeName)))
        let currentTheme=mapTheme.get("currentTheme")
        document.querySelector('#select_theme').value=currentTheme
    }

    
}

function initializationTheme(){
    if(localStorage.getItem(localStorageThemeName) != undefined){
        let mapTheme = new Map(JSON.parse(localStorage.getItem(localStorageThemeName)))
        let currentTheme=mapTheme.get("currentTheme")
        let colours=mapTheme.get(currentTheme)

        textColor=colours[0]
        backgroundInput=colours[1]

        borderColor = colours[2]
        backgroundContainer=colours[3]
        backgroundHeader=colours[4]
        backgroundMainTable=colours[5]
        backgroundInnerTable=colours[6]
        widthInterface=colours[7]

        backgroundAlternateTableEven=backgroundContainer;
        backgroundAlternateTableOdd=getColorDarker(backgroundContainer,headerColorAlternateTable);       
        console.log("textColor: "+textColor)
        console.log("backgroundContainer: "+backgroundContainer)
        
    }
    else{
        localStorage.setItem(localStorageThemeName, defaultTheme)

        let mapTheme = new Map(JSON.parse(localStorage.getItem(localStorageThemeName)))
        let currentTheme=mapTheme.get("currentTheme")
        let colours=mapTheme.get(currentTheme)

        textColor=colours[0]
        backgroundInput=colours[1]

        borderColor = colours[2]
        backgroundContainer=colours[3]
        backgroundHeader=colours[4]
        backgroundMainTable=colours[5]
        backgroundInnerTable=colours[6]
        widthInterface=colours[7]

        backgroundAlternateTableEven=backgroundContainer;
        backgroundAlternateTableOdd=getColorDarker(backgroundContainer,headerColorAlternateTable);  
    }

}



async function start(){
    let nr_world=parseInt(document.getElementById("nr_world").value)
    let nr_pages=parseInt(document.getElementById("nr_pages").value)
    if(Number.isNaN(nr_world)==true ||  Number.isNaN(nr_pages)==true){
        UI.ErrorMessage("set nr world and nr pages")
        throw new Error("set nr world and nr pages")
    }

    let map_log = await getDataPremium(nr_world,nr_pages)


    let html_result=`
    <center>
    <table id="table_stats" class="scriptTable3Tr">
    <tr>
        <td style="width:3%">date</td>
        <td >action</td>
        <td colspan="3"><img src="https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/wood.png"/></td>
        <td colspan="3"><img src="https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/stone.png"/></td>
        <td colspan="3"><img src="https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/iron.png"/></td>
        <td style="width:3%"><img src="https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/main.png"/></td>
        <td style="width:3%">others</td>
        <td>action</td>
        <td>total res</td>
        <td style="width:4%">pp</td>
        <td style="width:4%">avg</td>
        <td colspan="2">total pp</td>

      
    </tr>`

    createMainInterface()
    changeTheme()
    $("#table_view").html(html_result)
    $("#table_view").show()

    Array.from(map_log.keys()).forEach((key,index) =>{
        let obj=map_log.get(key)
        // console.log(obj)

        let greenColor="#038152"
        let redColor="#9a0000"

        let header_wood=(obj.woodBuy - obj.woodSell >= 0) ? greenColor : redColor
        let header_stone=(obj.stoneBuy - obj.stoneSell >= 0) ? greenColor : redColor
        let header_iron=(obj.ironBuy - obj.ironSell >= 0) ? greenColor : redColor

        let header_wood_pp=(obj.nrWoodBuy + obj.nrWoodSell >= 0) ? greenColor : redColor
        let header_stone_pp=(obj.nrStoneBuy + obj.nrStoneSell >= 0) ? greenColor : redColor
        let header_iron_pp=(obj.nrIronBuy + obj.nrIronSell >= 0) ? greenColor : redColor

        let header_res_total=(( (obj.woodBuy+obj.stoneBuy+obj.ironBuy) - (obj.woodSell+obj.stoneSell+obj.ironSell) ) >= 0) ? greenColor : redColor
        let header_pp=( (obj.nrWoodBuy+obj.nrStoneBuy+obj.nrIronBuy) + (obj.nrWoodSell+obj.nrStoneSell+obj.nrIronSell) >= 0) ? greenColor : redColor
        let header_pp_total=( (obj.nrWoodBuy+obj.nrStoneBuy+obj.nrIronBuy + obj.nrWoodSell+obj.nrStoneSell+obj.nrIronSell +obj.nrConstruction+obj.nrOthers) >= 0) ? greenColor : redColor



        html_result+=`
        <tr>
            <td rowspan="3">${key}</td>
            <td>buy</td>
            <td><span class="icon header wood"></span>${formatNumber(obj.woodBuy)}</td>
            <td><span class="icon header premium"></span>${formatNumber(obj.nrWoodBuy)}</td>
            <td>â‡„${formatNumber(divideNr(obj.woodBuy,obj.nrWoodBuy))}</td>

            <td><span class="icon header stone"></span>${formatNumber(obj.stoneBuy)}</td>
            <td><span class="icon header premium"></span>${formatNumber(obj.nrStoneBuy)}</td>
            <td>â‡„${formatNumber(divideNr(obj.stoneBuy,obj.nrStoneBuy))}</td>

            <td><span class="icon header iron"></span>${formatNumber(obj.ironBuy)}</td>
            <td><span class="icon header premium"></span>${formatNumber(obj.nrIronBuy)}</td>
            <td>â‡„${formatNumber(divideNr(obj.ironBuy,obj.nrIronBuy))}</td>

            <td rowspan="3">${formatNumber(obj.nrConstruction)}</td>
            <td rowspan="3">${formatNumber(obj.nrOthers)}</td>

            <td>buy</td>
            <td ><span class="icon header ressources"</span>>${formatNumber(obj.woodBuy+obj.stoneBuy+obj.ironBuy)}</td>
            <td ><span class="icon header premium"></span>${formatNumber(obj.nrWoodBuy+obj.nrStoneBuy+obj.nrIronBuy)}</td>
            <td >â‡„${formatNumber( divideNr( (obj.woodBuy+obj.stoneBuy+obj.ironBuy) , (obj.nrWoodBuy+obj.nrStoneBuy+obj.nrIronBuy)))}</td>
            
            <td rowspan="3"><span class="icon header premium"></span>${formatNumber( obj.new_pp_points)}</td>

            <td style="background-color:${header_pp_total}" rowspan="3">
                <span class="icon header premium"></span>
                ${formatNumber( (obj.nrWoodBuy+obj.nrStoneBuy+obj.nrIronBuy) + (obj.nrWoodSell+obj.nrStoneSell+obj.nrIronSell) +(+obj.nrConstruction+obj.nrOthers))} 
            </td>
        </tr>


        <tr>
            <td>sell</td>
            <td><span class="icon header wood"></span>${formatNumber(obj.woodSell)}</td>
            <td><span class="icon header premium"></span>${formatNumber(obj.nrWoodSell)}</td>
            <td>â‡„${formatNumber(divideNr(obj.woodSell,obj.nrWoodSell))}</td>
 

            <td><span class="icon header stone"></span>${formatNumber(obj.stoneSell)}</td>
            <td><span class="icon header premium"></span>${formatNumber(obj.nrStoneSell)}</td>
            <td>â‡„${formatNumber(divideNr(obj.stoneSell,obj.nrStoneSell))}</td>

            <td><span class="icon header iron"></span>${formatNumber(obj.ironSell)}</td>
            <td><span class="icon header premium"></span>${formatNumber(obj.nrIronSell)}</td>
            <td>â‡„${formatNumber(divideNr(obj.ironSell,obj.nrIronSell))}</td>

            <td>sell</td>
            <td><span class="icon header ressources"></span>${formatNumber(obj.woodSell+obj.stoneSell+obj.ironSell)}</td>
            <td><span class="icon header premium"></span>${formatNumber(obj.nrWoodSell+obj.nrStoneSell+obj.nrIronSell )}</td>
            <td>â‡„${formatNumber( divideNr( (obj.woodSell+obj.stoneSell+obj.ironSell) , (obj.nrWoodSell+obj.nrStoneSell+obj.nrIronSell)))}</td>


        </tr>`



        html_result+=
        `<tr>
            <td>balance</td>

            <td style="background-color:${header_wood}" >
                <span class="icon header wood"></span>
                ${formatNumber(obj.woodBuy-obj.woodSell)}
            </td>
            <td style="background-color:${header_wood_pp}" >
                <span class="icon header premium"></span>
                ${formatNumber(obj.nrWoodBuy+obj.nrWoodSell)}
            </td>
            <td></td>

            <td style="background-color:${header_stone}" >
                <span class="icon header stone"></span>
                ${formatNumber(obj.stoneBuy-obj.stoneSell)}
            </td>
            <td style="background-color:${header_stone_pp}" >
                <span class="icon header premium"></span>
                ${formatNumber(obj.nrStoneBuy+obj.nrStoneSell)}
            </td>
            <td></td>

            <td style="background-color:${header_iron}" >
                <span class="icon header iron"></span>
                ${formatNumber(obj.ironBuy-obj.ironSell)}
            </td>
            <td style="background-color:${header_iron_pp}" >
                <span class="icon header premium"></span>
                ${formatNumber(obj.nrIronBuy+obj.nrIronSell)}
            </td>
            <td></td>
            <td>balance</td>

            <td style="background-color:${header_res_total}" >
                <span class="icon header ressources"></span>
                ${formatNumber( (obj.woodBuy+obj.stoneBuy+obj.ironBuy) - (obj.woodSell+obj.stoneSell+obj.ironSell))}
            </td>
            <td style="background-color:${header_pp}" >
                <span class="icon header premium"></span>
                ${formatNumber( (obj.nrWoodBuy+obj.nrStoneBuy+obj.nrIronBuy) + (obj.nrWoodSell+obj.nrStoneSell+obj.nrIronSell) )}
            </td>
            <td></td>


  

        </tr>`





        

    })
    html_result+='</table>'

    $("#table_view").html(html_result)


}


function getDataPremium(nrWorld,nrPages){

    return new Promise((resolve,reject)=>{
        let link_combined_production=game_data.link_base_pure+"premium&mode=log"
        let datePage = httpGet(link_combined_production)
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(datePage, 'text/html');
        //get pages for all incoming
        let list_pages=[]
    
        if(htmlDoc.getElementsByClassName("vis_item")[0].getElementsByTagName("select").length>0){
            Array.from(htmlDoc.getElementsByClassName("vis_item")[0].getElementsByTagName("select")[0]).forEach(function(item){
                list_pages.push(item.value)
            })
            list_pages.pop();
        }
        else if(htmlDoc.getElementsByClassName("paged-nav-item").length>0){//all pages from the current folder
            let nr=0;
            Array.from(htmlDoc.getElementsByClassName("paged-nav-item")).forEach(function(item){
                let current=item.href;
                current=current.split("page=")[0]+"page="+nr
                nr++;
                list_pages.push(current);
            })
        }
        else{
            list_pages.push(link_combined_production);
        }
        list_pages=list_pages.slice(0,nrPages)
        list_pages=list_pages.reverse()
        console.log(list_pages)
    
        let map_log=new Map() 
        function ajaxRequest (urls) {
            let current_url
            if(urls.length>0){
                current_url=urls.pop()
            }
            else{
                current_url="stop"
            }
            console.log(current_url)
            let start_ajax=new Date().getTime()
            if (urls.length >= 0 && current_url!="stop") {
                $.ajax({
                    url: current_url,
                    method: 'get',
                    success: (data) => {
                        // document.body.innerHTML=data
                        // document.body.innerHTML=data
                        const parser = new DOMParser();
                        const htmlDoc = parser.parseFromString(data, 'text/html');
                        
                        if(htmlDoc.getElementsByClassName("vis")[1]==undefined){
                            resolve(map_log)
                            throw new Error("done")
                        }

                        var table=htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("tr")
                        console.log(table)
                        for(let i=1;i<table.length;i++){
                            let date=table[i].children[0].innerText.split(",")[0]
                            let world=parseInt(table[i].children[1].innerText.trim().split(" ")[1])
                            let change=parseInt(table[i].children[3].innerText)
                            let new_pp_points=parseInt(table[i].children[4].innerText)
                            let more_info=table[i].children[5].innerText.toLowerCase()
                            
                            console.log(nrWorld ,world)
                            if(nrWorld == world){
                                let nrOthers=0,nrWoodBuy=0,nrStoneBuy=0,nrIronBuy=0,nrWoodSell=0,nrStoneSell=0,nrIronSell=0,nrConstruction=0
                                let woodBuy=0,stoneBuy=0,ironBuy=0,woodSell=0,stoneSell=0,ironSell=0,construction=0
    
                                if(more_info.includes(tt("wood purchased")) == true){
                                    woodBuy=parseInt(more_info.match(/\d+/)[0])
                                    nrWoodBuy=change
                                }
                                else if(more_info.includes(tt("clay purchased"))){
                                    stoneBuy=parseInt(more_info.match(/\d+/)[0])
                                    nrStoneBuy=change
                                }
                                else if(more_info.includes(tt("iron purchased"))){
                                    ironBuy=parseInt(more_info.match(/\d+/)[0])
                                    nrIronBuy=change
                                }
                                else if(more_info.includes(tt(tt("wood sold")))){
                                    woodSell=parseInt(more_info.match(/\d+/)[0])
                                    nrWoodSell=change
                                }
                                else if(more_info.includes(tt("clay sold"))){
                                    stoneSell=parseInt(more_info.match(/\d+/)[0])
                                    nrStoneSell=change
                                }
                                else if(more_info.includes(tt("iron sold"))){
                                    ironSell=parseInt(more_info.match(/\d+/)[0])
                                    nrIronSell=change
                                }
                                else if(more_info.includes(tt("construction time reduction")) == true || more_info.includes(tt("instant completion")) == true){
                                    nrConstruction=change
                                }
                                else{
                                    nrOthers=change
                                }


                                if(map_log.has(date)){
                                    let obj_update=map_log.get(date)
                                    obj_update.woodBuy+=woodBuy
                                    obj_update.nrWoodBuy+=nrWoodBuy
    
                                    obj_update.stoneBuy+=stoneBuy
                                    obj_update.nrStoneBuy+=nrStoneBuy
    
                                    obj_update.ironBuy+=ironBuy
                                    obj_update.nrIronBuy+=nrIronBuy
    
                                    obj_update.woodSell+=woodSell
                                    obj_update.nrWoodSell+=nrWoodSell
    
                                    obj_update.stoneSell+=stoneSell
                                    obj_update.nrStoneSell+=nrStoneSell
    
                                    obj_update.ironSell+=ironSell
                                    obj_update.nrIronSell+=nrIronSell
    
                                    obj_update.nrConstruction+=nrConstruction
                                    obj_update.nrOthers+=nrOthers
    
                                    map_log.set(date,obj_update)
    
    
                                }else{
                                    map_log.set(date,{
                                        woodBuy:woodBuy,
                                        nrWoodBuy:nrWoodBuy,
    
                                        stoneBuy:stoneBuy,
                                        nrStoneBuy:nrStoneBuy,
    
                                        ironBuy:ironBuy,
                                        nrIronBuy:nrIronBuy,
    
                                        woodSell:woodSell,
                                        nrWoodSell:nrWoodSell,
    
                                        stoneSell:stoneSell,
                                        nrStoneSell:nrStoneSell,
    
                                        ironSell:ironSell,
                                        nrIronSell:nrIronSell,
    
                                        nrConstruction:nrConstruction,
                                        nrOthers:nrOthers,

                                        new_pp_points:new_pp_points

                                        
                                    })
                                }
                            }
                  

                        }



                        let stop_ajax=new Date().getTime();
                        let diff=stop_ajax-start_ajax
                        console.log("wait: "+diff)
                        window.setTimeout(function(){
                            ajaxRequest (list_pages)
                            UI.SuccessMessage("get log page: "+urls.length)
                        },200-diff)
                    },
                    error: (err)=>{
                        reject(err)
                    }
                })
               
            }
            else
            {
                UI.SuccessMessage("done")
                console.log(map_log)
                resolve(map_log)
    
                
            }
        }
        ajaxRequest(list_pages);
    
    })
}
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function formatNumber(number){
    return new Intl.NumberFormat().format(number)
}

function divideNr(nr1,nr2){
    return (nr2 == 0 )?0: (Math.abs(nr1/nr2)).toFixed(1)
}

function tt(string) {
	var gameLocale = game_data.locale;

	if (translations[gameLocale] != undefined) {
		return translations[gameLocale][string];
	} else {
        let error=`No translation found for <b>${gameLocale}</b>`
        UI.ErrorMessage(error,4000);
        throw Error(error)
	}
}

function hitCountApi(){
    $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}/up`, response=>{
        console.log(`This script has been run: ${response.count} times`);
    });
    if(game_data.device !="desktop"){
        $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}_phone/up`, response=>{
            console.log(`This script has been run on mobile: ${response.count} times`);
        });
    }
 
    $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}_id2${game_data.player.id}/up`, response=>{
        if(response.count == 1){
            $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}_scriptUsers/up`, response=>{});
        }

    });

    try {
        $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}_scriptUsers`, response=>{
            console.log(`Total number of users: ${response.count}`);
        }); 
      
    } catch (error) {}

}
