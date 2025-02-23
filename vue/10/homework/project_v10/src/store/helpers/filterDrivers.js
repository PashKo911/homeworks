export const filterDrivers = (filter, drivers) => {
	const filterNameLower = filter.name && filter.name.toLowerCase()
	const { from, to } = filter.experience

	return drivers.filter((driver) => {
		if (filterNameLower) {
			const driverNameLower = driver.name.toLowerCase()
			if (!driverNameLower.includes(filterNameLower)) {
				return false
			}
		}
		if (from !== null && driver.experience < from) return false
		if (to !== null && driver.experience > to) return false

		return true
	})
}
