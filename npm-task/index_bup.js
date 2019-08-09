var $ = require('jquery');

//to jquery standarts

//var txt2 = $("<p></p>").text("Text.");
//const main = document.querySelector('main');
const main = $('main');
//const button = document.getElementById('button');
const button = $('#button');
//const input = document.getElementById('weather_Search');
const input = $('#weather_Search');
//const output = document.getElementById('output');
const output = $('#output');
//const buttonClear = document.getElementsByClassName("clear_button")[0];
const buttonClear = $('.clear_button');
//const buttonMyWeather = document.getElementsByClassName("my_weather")[0];
const buttonMyWeather = $('.my_weather');


function toClassCheck(someData){
  return someData.replace(' ', '_').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase();
}

function get(val) {
  if(val!=''){
    fetch(`http://api.apixu.com/v1/current.json?key=c79c30965ca349f89b3181040193007&q=${val}`)
        .then(response => response.json())
        .then((data) => {
            if (!$('.table_weather')) {
                createTable(main);
                createRow(data.location.name, data.location.country, data.current.temp_c, data.current.condition.icon, data.location.region);
            } else {
                const region = toClassCheck(data.location.region);
                console.log(region);
                if ($(`.${region}`)) {
                    updateRow(data.location.region, data.current.temp_c, data.current.condition.icon);
                } else {
                    createRow(data.location.name, data.location.country, data.current.temp_c, data.current.condition.icon, data.location.region);
                }
            }
        })
        .catch((error) => {
            console.error(error);
        })
  }
}

// const getLocation = () => {
//     fetch('https://geoip-db.com/json/geoip.php')
//         .then(response => response.json())
//         .then((data) => {
//             get(data.city)
//         })
//         .catch((error) => {
//             console.error(error);
//         })
// }

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => get(`${coords.latitude}, ${coords.longitude}`));
}

function createTable() {
    /*const table = document.createElement('div');
    table.classList.add('table_weather');

    const tableHead = document.createElement('div');
    tableHead.classList.add('tableHead');
    table.append(tableHead);

    const headCity = document.createElement('div');
    headCity.classList.add('city');
    headCity.innerText = 'City';
    tableHead.append(headCity); 

    const headCountry = document.createElement('div');
    headCountry.classList.add('country');
    headCountry.innerText = 'Country';
    tableHead.append(headCountry);

    const headTempC = document.createElement('div');
    headTempC.classList.add('temp_c');
    headTempC.innerText = 't, °C';
    tableHead.append(headTempC); 

    const headCondition = document.createElement('div');
    headCondition.classList.add('condition');
    headCondition.innerText = 'Condition';
    tableHead.append(headCondition); */

    const table = `
    <div class='table_weather'>
      <div class='tableHead'>
        <div class='city'>City</div>
        <div class='country'>Coutry</div>
        <div class='temp_c'>t, °C</div>
        <div class='condition'>Condition</div>
      </div>
    </div>`;

    arguments[0].append(table);
}

function createRow() {

    const tRow = `
    <div class='tRow'>
      <div class='city'>${arguments[0]}</div>
      <div class='country'>${arguments[1]}</div>
      <div class='temp_c'>${arguments[2]}</div>
      <div class='condition'>${arguments[3]}</div>
    </div>
    `
    tRow.addClass(toClassCheck(arguments[4]));

    /*const tRow = document.createElement('div');
    tRow.classList.add('tRow');

    const rowCity = document.createElement('div');
    rowCity.classList.add('city');
    rowCity.innerText = arguments[0];
    tRow.append(rowCity);

    const rowCountry = document.createElement('div');
    rowCountry.classList.add('country');
    rowCountry.innerText = arguments[1];
    tRow.append(rowCountry);

    const rowTempC = document.createElement('div');
    rowTempC.classList.add('temp_c');
    rowTempC.innerText = arguments[2];
    tRow.append(rowTempC);

    const rowCondition = document.createElement('div');
    rowCondition.classList.add('condition');

    const condImg = document.createElement('img');
    condImg.src = `http://${arguments[3]}`
    rowCondition.append(condImg);

  tRow.append(rowCondition);

    tRow.classList.add(toClassCheck(arguments[4]));
    */

    // document.querySelector('.table_weather').append(tRow);
    $("p").append("tRow");
}

function updateRow() {
    // const toUpdate = main.querySelector(`.${toClassCheck(arguments[0])}`);
    const toUpdate = $('.'+toClassCheck(arguments[0]));
    // toUpdate.querySelector('.temp_c').innerText = arguments[1];
    $(toUpdate+' .temp_c').text(arguments[1]);
    // toUpdate.querySelector('.condition >img').src = `http://${arguments[2]}`;
    $(toUpdate+'.condition >img').attr("src","http://${arguments[2]}");
}

function clearDataTable(event) {
    // document.querySelector('.table_weather').remove();
    $('.table_weather').remove();
}


//example addevent listner replace to jquery standarts
$("#button").click(()=>{
  get(input.val());
});



//buttonMyWeather.addEventListener('click', getLocation);

buttonMyWeather.click(()=>{
  getLocation();
});


buttonClear.click(()=>{
  clearDataTable();
})
