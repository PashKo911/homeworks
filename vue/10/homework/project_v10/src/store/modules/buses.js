import { buses } from '@/constants/data.js'
import * as commonMutations from '../helpers/commonMutations'
import * as commonActions from '../helpers/commonActions'

export default {
	namespaced: true,
	state: () => ({
		buses,
	}),
	getters: {
		buses: ({ buses }) => buses,
		getBusById:
			({ buses }) =>
			(busId) =>
				buses.find((bus) => bus.id === busId),
		freeBusesList: (state, getters, rootState, rootGetters) => {
			const activeAssignments = rootGetters['assignments/assignmentsList']
			const busyBusesIds = new Set(activeAssignments.map((assignment) => assignment.busId))

			return state.buses.filter((bus) => !busyBusesIds.has(bus.id))
		},
	},
	mutations: {
		...commonMutations,
	},
	actions: {
		...commonActions,
	},
}
