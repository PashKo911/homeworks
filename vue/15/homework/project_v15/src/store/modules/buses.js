import getModuleSettingsObject from '../helpers/GetModuleSettingsObject'

const busesModule = getModuleSettingsObject('buses')

const additionalGetters = {
	freeBusesList: (state, getters, rootState, rootGetters) => {
		const activeAssignments = rootGetters['assignments/getItemsList']
		const busyBusesIds = new Set(activeAssignments.map((assignment) => assignment.busId))

		return state.buses.filter((bus) => !busyBusesIds.has(bus.id))
	},
}

const drivers = {
	...busesModule,
	getters: {
		...busesModule.getters,
		...additionalGetters,
	},
}

export default drivers
