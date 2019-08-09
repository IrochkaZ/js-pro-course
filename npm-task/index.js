var $ = require('jquery');


const main = $('main');
const button = $('#button');
const input = $('#weather_Search');
const output = $('#output');
const buttonClear = $('.clear_button');
const buttonMyWeather = $('.my_weather');

function toClassCheck(someData){
  return someData.replace(' ', '_').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase();
}

function clearDataTable() {
  $('.table_weather').remove();
}

function get(val) {
  if(val!=''){
    fetch(`http://api.apixu.com/v1/current.json?key=c79c30965ca349f89b3181040193007&q=${val}`)
        .then(response => response.json())
        .then((data) => {
              
              const region = toClassCheck(data.location.region);
                console.log(region);
                if(!$('.table_weather')){
                  console.log('table already created');
                  createTable();
                }else{
                  if (!$('.'+region)) {
                    console.log('update');
                      updateRow(data.location.region, data.current.temp_c, data.current.condition.icon);
                  } else {
                    console.log('create');
                      createRow(data.location.name, data.location.country, data.current.temp_c, data.current.condition.icon, data.location.region);
                  }
                }
        })
        .catch((error) => {
            console.error(error);
        })
  }
}


const getLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => get(`${coords.latitude}, ${coords.longitude}`));
}

function createTable() {
  console.log('table create function');
    const table = `
    <div class='table_weather'>
      <div class='tableHead'>
        <div class='city'>City</div>
        <div class='country'>Coutry</div>
        <div class='temp_c'>t, °C</div>
        <div class='condition'>Condition</div>
      </div>
    </div>`;

    main.append(table);
}

function createRow() {
    const tRow = `
    <div class='tRow ${arguments[4]}'>
      <div class='city'>${arguments[0]}</div>
      <div class='country'>${arguments[1]}</div>
      <div class='temp_c'>${arguments[2]}</div>
      <div class='condition'>${arguments[3]}</div>
    </div>
    `;
    $('.table_weather').append(tRow);
}

function updateRow() {
    const toUpdate = $('.'+toClassCheck(arguments[0]));
    $('.temp_c').text(arguments[1]);
    $('.condition >img').attr("src","http://${arguments[2]}");
}




//example addevent listner replace to jquery standarts
$("#button").click(()=>{
  get(input.val());
});

buttonMyWeather.click(()=>{
  getLocation();
});


buttonClear.click(()=>{
  clearDataTable();
})
