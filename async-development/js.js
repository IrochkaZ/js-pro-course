var button = document.getElementById('button');
button.addEventListener('click',get);
var input = document.getElementById('weather_Search');
var output = document.getElementById('output');
var img = document.createElement('img');
const par = document.createElement('p');
par.classList.add('description');

function get(){
    fetch('http://api.apixu.com/v1/current.json?key=c79c30965ca349f89b3181040193007&q=' + document.getElementById('weather_Search').value)
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


