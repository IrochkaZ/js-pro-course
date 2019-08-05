const main = document.querySelector('main');
const button = document.getElementById('button');
const input = document.getElementById('weather_Search');
const output = document.getElementById('output');
const img = document.createElement('img');
const buttonClear = document.getElementsByClassName("clear_button")[0];
const buttonMyWeather = document.getElementsByClassName("my_weather")[0];

function get(val) {
    fetch(`http://api.apixu.com/v1/current.json?key=c79c30965ca349f89b3181040193007&q=${val}`)
        .then(response => response.json())
        .then((data) => {
            if (!main.querySelector('.table_weather')) {
                createTable(main);
                createRow(data.location.name, data.location.country, data.current.temp_c, data.current.condition.icon, data.location.region);
            } else {
                const region = data.location.region.replace(' ', '_').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase();
                console.log(region);
                if (main.querySelector(`.${region}`)) {
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
    const table = document.createElement('div');
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
    tableHead.append(headCondition);

    arguments[0].append(table);
}

function createRow() {
    const tRow = document.createElement('div');
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

    tRow.classList.add(arguments[4].replace(' ', '_').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase());

    document.querySelector('.table_weather').append(tRow);
}

function updateRow() {
    const toUpdate = main.querySelector(`.${arguments[0].replace(' ', '_').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase()}`);
    toUpdate.querySelector('.temp_c').innerText = arguments[1];
    toUpdate.querySelector('.condition >img').src = `http://${arguments[2]}`;
}

function clearDataTable(event) {
    document.querySelector('.table_weather').remove();
}

button.addEventListener('click', () => {
    get(input.value);
});
buttonMyWeather.addEventListener('click', getLocation);
buttonClear.addEventListener('click', clearDataTable);
