const main = document.querySelector(`main`);
const button = document.getElementById(`search_button`);
const input = document.getElementById(`weather_Search`);
const output = document.getElementById(`output`);
const img = document.createElement(`img`);
const buttonClear = document.getElementById(`clear_button`);
const buttonMyWeather = document.getElementById(`my_weather`);

function regionFormat(region){
    return region.replace(' ', '_').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase()
}

function get(val) {
    fetch(`http://api.apixu.com/v1/current.json?key=c79c30965ca349f89b3181040193007&q=${val}`)
        .then(response => response.json())
        .then((data) => {
            if (!main.querySelector(`.table_weather`)) {
                createTable();
                createRow(data.location.name, data.location.country, data.current.temp_c, data.current.condition.icon, data.location.region);
            } else {
                const region = regionFormat(data.location.region);
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

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => get(`${coords.latitude}, ${coords.longitude}`));
}

function createTable() {
    const table = document.createElement(`div`);
    table.classList.add(`table_weather`);

    const tableHead = document.createElement(`div`);
    tableHead.classList.add(`tableHead`);
    table.append(tableHead);

    const headCity = document.createElement(`div`);
    headCity.classList.add(`city`);
    headCity.innerText = `City`;
    tableHead.append(headCity);

    const headCountry = document.createElement(`div`);
    headCountry.classList.add(`country`);
    headCountry.innerText = `Country`;
    tableHead.append(headCountry);

    const headTempC = document.createElement(`div`);
    headTempC.classList.add(`temp_c`);
    headTempC.innerText = `t, °C`;
    tableHead.append(headTempC);

    const headCondition = document.createElement(`div`);
    headCondition.classList.add(`condition`);
    headCondition.innerText = `Condition`;
    tableHead.append(headCondition);

    main.append(table);
}

function createRow(inpCity, inpCountry, inpTmp, iconSrc, regionID) {
    const tRow = document.createElement(`div`);
    tRow.classList.add(`tRow`);

    const rowCity = document.createElement(`div`);
    rowCity.classList.add(`city`);
    rowCity.innerText = inpCity;
    tRow.append(rowCity);

    const rowCountry = document.createElement(`div`);
    rowCountry.classList.add(`country`);
    rowCountry.innerText = inpCountry;
    tRow.append(rowCountry);

    const rowTempC = document.createElement(`div`);
    rowTempC.classList.add(`temp_c`);
    rowTempC.innerText = inpTmp;
    tRow.append(rowTempC);

    const rowCondition = document.createElement(`div`);
    rowCondition.classList.add(`condition`);

    const condImg = document.createElement(`img`);
    condImg.src = `http://${iconSrc}`
    rowCondition.append(condImg);

    tRow.append(rowCondition);

    tRow.classList.add(regionFormat(regionID));

    document.querySelector(`.table_weather`).append(tRow);
}

function updateRow(regionID, inpTmp, iconSrc) {
    const toUpdate = main.querySelector(`.${regionFormat(regionID)}`);
    toUpdate.querySelector(`.temp_c`).innerText = inpTmp;
    toUpdate.querySelector(`.condition >img`).src = `http://${iconSrc}`;
}

function clearDataTable(event) {
    document.querySelector(`.table_weather`).remove();
}

button.addEventListener(`click`, (event) => {
    event.preventDefault();
    get(input.value);
});

buttonMyWeather.addEventListener(`click`, getLocation);

buttonClear.addEventListener(`click`, clearDataTable);
