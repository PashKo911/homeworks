import { assignments } from '@/constants/data'
import * as commonMutations from '../helpers/commonMutations'
import * as commonActions from '../helpers/commonActions'

export default {
	namespaced: true,
	state: () => ({
		assignments,
	}),
	getters: {
		assignmentsList: ({ assignments }) => assignments,
		populatedAssignmentsList: (state, getters, rootState, rootGetters) => {
			const busesMap = Object.fromEntries(rootGetters['buses/buses'].map((bus) => [bus.id, bus]))
			const driversMap = Object.fromEntries(
				rootGetters['drivers/driversList'].map((driver) => [driver.id, driver])
			)

			return state.assignments.map((assignment) => {
				const bus = busesMap[assignment.busId] || {}
				const driver = driversMap[assignment.driverId] || {}

				return {
					id: assignment.id,
					busNumber: bus.number || 'undefined',
					driverName: driver.name || 'undefined',
				}
			})
		},
	},
	mutations: {
		...commonMutations,
	},
	actions: {
		...commonActions,
	},
}
