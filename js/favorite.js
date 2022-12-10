import { createItem } from './elem.js';
import { cities } from './cities.js';
import { locations } from './view.js';
import { defaultRender } from './weather.js';
import { cityName } from './weather.js';

export function addFavorite() {
	defaultRender();
	if (cities.indexOf(cityName) == -1) {
		cities.push(cityName);
	} else {
		cities.forEach((item, index) => {
			if (item == cityName) {
				cities.splice(index, 1);
			}
		});
	}

	locations.innerHTML = '';
	cities.forEach((item) => {
		createItem(item);
	});
}
