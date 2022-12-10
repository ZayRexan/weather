import { locations } from './view.js';

export function createItem(cityName) {

	let locationItem = document.createElement('li');
	locationItem.className = 'weather__item';

	let locationButton = document.createElement('button');
	locationButton.className = 'weather__location btn-reset';
	locationButton.innerText = cityName;
	locationItem.append(locationButton);

	locations.prepend(locationItem);
}