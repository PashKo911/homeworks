import { filterDrivers } from '../helpers/filterDrivers'

export default {
	namespaced: true,
	state: () => ({
		filter: {
			name: null,
			experience: {
				from: null,
				to: null,
			},
		},
	}),
	getters: {
		filter: ({ filter }) => filter,

		filteredDriversList: (state, getters, rootState, rootGetters) => {
			const drivers = rootGetters['drivers/driversList']

			return filterDrivers(state.filter, drivers)
		},
	},
	mutations: {
		setFilter(state, filterData) {
			console.log(filterData)
			state.filter = {
				...state.filter,
				...filterData,
			}
		},
	},
	actions: {
		setFilter({ commit }, filterData) {
			commit('setFilter', filterData)
		},
	},
}
