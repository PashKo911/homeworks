/**
 * Створює словник з масиву об'єктів, використовуючи поле `id` як ключ.
 *
 * @param {Array} array - Масив об'єктів, кожен з яких має властивість `id`.
 * @returns {Object} Словник, де ключ – id, а значення – об'єкт.
 */
export function createLookupMap(array) {
	return array.reduce((map, item) => {
		map[item.id] = item
		return map
	}, {})
}

/**
 * Збагачує список автомобілів, підставляючи значення замість id у полях transportType, bodyType, brand та model.
 *
 * @param {Array} cars - Масив автомобілів.
 * @param {Object} filterData - Об'єкт з фільтрами, що містить transportTypes, bodyTypes, brands.
 * @returns {Array} Масив автомобілів, де поля transportType, bodyType, brand та model містять значення, а не id.
 */
export function enrichCarsData(cars, filterData) {
	const transportTypesMap = createLookupMap(filterData.transportTypes)
	const bodyTypesMap = createLookupMap(filterData.bodyTypes)
	const brandsMap = createLookupMap(filterData.brands)

	return cars.map((car) => {
		const transportTypeObj = transportTypesMap[car.transportType]
		const bodyTypeObj = bodyTypesMap[car.bodyType]
		const brandObj = brandsMap[car.brand]
		let modelObj = null

		if (brandObj && Array.isArray(brandObj.models)) {
			modelObj = brandObj.models.find((model) => model.id === car.model)
		}

		const { transportType, bodyType, brand, model, ...rest } = car

		return {
			...rest,
			transportType: transportTypeObj ? transportTypeObj.name : null,
			bodyType: bodyTypeObj ? bodyTypeObj.name : null,
			brand: brandObj ? brandObj.name : null,
			model: modelObj ? modelObj.name : null,
		}
	})
}
