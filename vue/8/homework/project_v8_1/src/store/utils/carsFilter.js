/**
 * Фільтрує масив автомобілів за активними фільтрами.
 *
 * @param {Array} cars — Масив автомобілів.
 * @param {Object} activeFilters — Об'єкт з активними фільтрами.
 * @returns {Array} Відфільтрований масив автомобілів.
 */
export function filterCars(cars, activeFilters) {
	return cars.filter((car) => isCarMatchingFilters(car, activeFilters))
}

/**
 * Перевіряє, чи задовольняє автомобіль усім фільтрам.
 *
 * @param {Object} car — Об'єкт автомобіля.
 * @param {Object} activeFilters — Об'єкт з активними фільтрами.
 * @returns {Boolean} true, якщо автомобіль проходить усі фільтри.
 */
function isCarMatchingFilters(car, activeFilters) {
	return Object.entries(activeFilters).every(([key, filterValue]) => filterCarByKey(car, key, filterValue))
}

/**
 * Фільтрує автомобіль за конкретним ключем.
 *
 * @param {Object} car — Об'єкт автомобіля.
 * @param {String} key — Ключ фільтрації (наприклад, 'year', 'bodyType').
 * @param {*} filterValue — Значення фільтра.
 * @returns {Boolean} true, якщо автомобіль задовольняє фільтру за цим ключем.
 */
function filterCarByKey(car, key, filterValue) {
	if (filterValue === null || (Array.isArray(filterValue) && filterValue.length === 0)) {
		return true
	}

	if (key === 'year' && typeof filterValue === 'object') {
		return filterByYear(car.year, filterValue)
	}

	if (Array.isArray(filterValue)) {
		return filterByArray(car[key], filterValue)
	}

	return car[key] === filterValue
}

/**
 * Фільтрує автомобіль за роком.
 *
 * @param {Number} carYear — Рік автомобіля.
 * @param {Object} filterRange — Діапазон фільтрації { from, to }.
 * @returns {Boolean} true, якщо автомобіль задовольняє діапазону.
 */
function filterByYear(carYear, { from, to }) {
	return (from === null || carYear >= from) && (to === null || carYear <= to)
}

/**
 * Фільтрує автомобіль за полем-масивом.
 *
 * Перевіряє, чи міститься значення автомобіля в масиві обраних фільтрів.
 *
 * @param {*} carValue — Значення поля автомобіля.
 * @param {Array} filterArray — Масив обраних значень фільтра.
 * @returns {Boolean} true, якщо значення знайдено в масиві.
 */
function filterByArray(carValue, filterArray) {
	return filterArray.includes(carValue)
}
