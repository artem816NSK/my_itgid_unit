
const param = {
    'url': 'https://api.openweathermap.org/data/2.5/',
    'appid': 'c8032082b518e187edfde3b4330a7aa6',
};




//получение погоды
function getWeather() {
    const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&lang=ru&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);

}

function showWeather(data){
    console.log(data);
    let name = document.querySelectorAll('.name');
    name[1].innerHTML = data.name;

    let temp = document.querySelectorAll('.temp');
    temp[1].innerHTML = Math.floor(data.main.temp)+ '&deg;C';

    let weatherDescription = document.querySelector('.weather-description');
    weatherDescription.innerHTML = data.weather[0].description;

    let img = document.querySelector('.weather-img');
    img.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"</img>`;

    let wind = document.querySelectorAll('.wind');
    wind[1].innerHTML = 'Скорость - ' +data.wind.speed + 'м/c';
    wind[2].innerHTML = 'Направление - ' + data.wind.deg +'&deg;';

    let humidity = document.querySelector('.humidity');
    let pressure = document.querySelector('.pressure');
    humidity.innerHTML = 'Влажность - ' + data.main.humidity +'%';
    pressure.innerHTML = 'Атмосферное давление - ' + data.main.pressure +' hPa';
}


getWeather();
document.querySelector('#city').onchange = getWeather;