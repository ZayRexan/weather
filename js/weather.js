import {
	search,
	searchInput,
	weatherIco,
	citiesList,
	citiesItems,
	nowTemp,
	nowCity,
	detailsCity,
	detailsTemp,
	detailsFeels,
	detailsWeater,
	detailsSunrise,
	detailsSunset,
} from './view.js';
import { addFavorite } from './favorite.js';

export let cityName = 'barnaul';
export const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
export const apiKey = 'b52ea047ab48af1ff3f83a30af2b68e0';
export let url;

let weatherTemp;
let weatherDescr;
let weatherCode;
let weatherFeels;
let timeSunrise;
let weatherSunrise;
let timeSunset;
let weatherSunset;

export function defaultRender() {
	url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

	fetch(url)
		.then((response) => response.json())
		.then((info) => {
			cityName = info.name;
			nowCity.textContent = cityName;
			detailsCity.textContent = cityName;

			weatherTemp = info.main.temp;
			weatherTemp = Math.round(weatherTemp);
			nowTemp.textContent = weatherTemp;
			detailsTemp.textContent = weatherTemp;

			weatherFeels = info.main.feels_like;
			weatherFeels = Math.round(weatherFeels);
			detailsFeels.textContent = weatherFeels;

			weatherDescr = info.weather[0].main;
			detailsWeater.textContent = weatherDescr;

			weatherCode = info.weather[0].icon;
			weatherIco.alt = weatherDescr;
			weatherIco.src = `http://openweathermap.org/img/wn/${weatherCode}@2x.png`;

			timeSunrise = new Date(info.sys.sunrise * 1000);
			weatherSunrise = `${timeSunrise.getHours()}:${timeSunrise.getMinutes()}`;
			detailsSunrise.textContent = weatherSunrise;

			timeSunset = new Date(info.sys.sunset * 1000);
			weatherSunset = `${timeSunset.getHours()}:${timeSunset.getMinutes()}`;
			detailsSunset.textContent = weatherSunset;
		});
}

defaultRender();

search.addEventListener('submit', (event) => {
	event.preventDefault();
	if (searchInput.value !== '') {
		cityName = searchInput.value;
	}
	defaultRender();
});

citiesList.addEventListener('click', (event) => {
	if (event.target.className == 'weather__location btn-reset') {
		cityName = event.target.textContent;
	}
	// console.log(event.target.className);
	defaultRender();
});

const favoriteBtn = document.querySelector('.now__favorite');

favoriteBtn.addEventListener('click', () => {
	addFavorite();
});
