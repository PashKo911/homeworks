import { carsData, filterData } from '@/constants/task2Data'
import { filterCars } from '../utils/carsFilter'
import { enrichCarsData } from '../utils/enrichCarsData'

const task2 = {
	namespaced: true,
	state() {
		return {
			filterData,
			carsData,
			activeFilters: {
				transportType: null,
				bodyType: [],
				brand: null,
				model: null,
				year: { from: null, to: null },
			},
		}
	},

	getters: {
		filterData: (state) => state.filterData,
		carsData: (state) => state.carsData,
		activeFilters: (state) => state.activeFilters,

		filteredCars({ carsData, activeFilters }) {
			return filterCars(carsData, activeFilters)
		},
		enrichedCars(state, getters) {
			return enrichCarsData(getters.filteredCars, state.filterData)
		},
	},

	mutations: {
		setActiveFilter(state, { key, value }) {
			state.activeFilters[key] = value
		},
	},

	actions: {
		setActiveFilter({ commit }, { key, value }) {
			commit('setActiveFilter', { key, value })
		},
	},
}

export default task2
