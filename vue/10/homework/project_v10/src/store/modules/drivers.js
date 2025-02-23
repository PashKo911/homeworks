import { drivers } from '@/constants/data.js'
import * as commonMutations from '../helpers/commonMutations'
import * as commonActions from '../helpers/commonActions'

export default {
	namespaced: true,
	state: () => ({
		drivers,
	}),
	getters: {
		driversList: ({ drivers }) => drivers,
		experiencesList: ({ drivers }) =>
			drivers.map((driver) => ({
				label: driver.experience,
				id: driver.id,
			})),
		freeDriversList: (state, getters, rootState, rootGetters) => {
			const activeAssignments = rootGetters['assignments/assignmentsList']
			const busyDriverIds = new Set(activeAssignments.map((assignment) => assignment.driverId))

			return state.drivers.filter((driver) => !busyDriverIds.has(driver.id))
		},

		getDriverById:
			({ drivers }) =>
			(driverId) => {
				return drivers.find((driver) => driver.id === driverId)
			},
	},
	mutations: {
		...commonMutations,
	},
	actions: {
		...commonActions,
	},
}
