const button = document.getElementById('button');
const input = document.getElementById('weather_Search');
const output = document.getElementById('output');
const img = document.createElement('img');
const par = document.createElement('p');
par.classList.add('description');

function get(){
    fetch(`http://api.apixu.com/v1/current.json?key=c79c30965ca349f89b3181040193007&q=${input.value}`)
    .then(response=>response.json())
    .then((data) => {
        par.innerHTML =`${data.location.country}, ${data.location.name}: ${data.current.temp_c} °C, ${data.current.condition.text}`;
        img.src=`http:${data.current.condition.icon}`;
        output.append(img);
        output.append(par);
    })
    .catch((error) => {
        console.error(error);
    })
}
button.addEventListener('click',get);

