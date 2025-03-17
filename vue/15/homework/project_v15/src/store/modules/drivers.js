import getModuleSettingsObject from '../helpers/GetModuleSettingsObject'

const driversModule = getModuleSettingsObject('drivers')

const additionalGetters = {
	freeDriversList: (state, getters, rootState, rootGetters) => {
		const activeAssignments = rootGetters['assignments/getItemsList']
		const busyDriverIds = new Set(activeAssignments.map((assignment) => assignment.driverId))

		return state.drivers.filter((driver) => !busyDriverIds.has(driver.id))
	},
}

const drivers = {
	...driversModule,
	getters: {
		...driversModule.getters,
		...additionalGetters,
	},
}

export default drivers
