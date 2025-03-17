import getModuleSettingsObject from '../helpers/GetModuleSettingsObject'

const assignmentsModule = getModuleSettingsObject('assignments')

const additionalGetters = {
	populatedAssignmentsList: (state, getters, rootState, rootGetters) => {
		const busesMap = Object.fromEntries(rootGetters['buses/getItemsList'].map((bus) => [bus.id, bus]))
		const driversMap = Object.fromEntries(
			rootGetters['drivers/getItemsList'].map((driver) => [driver.id, driver])
		)

		return state.assignments.map((assignment) => {
			const bus = busesMap[assignment.busId] || {}
			const driver = driversMap[assignment.driverId] || {}

			return {
				id: assignment.id,
				busNumber: bus.number || null,
				driverName: driver.name || null,
			}
		})
	},
}

const assignments = {
	...assignmentsModule,
	getters: {
		...assignmentsModule.getters,
		...additionalGetters,
	},
	actions: {
		...assignmentsModule.actions,
		deleteDependentAssignment({ state, dispatch }, dependentId) {
			const assignment = state.assignments.find((a) => a.driverId === dependentId || a.busId === dependentId)

			if (!assignment) {
				return
			}

			dispatch('deleteItem', assignment.id)
			dispatch('loadList')
		},
	},
}

export default assignments
