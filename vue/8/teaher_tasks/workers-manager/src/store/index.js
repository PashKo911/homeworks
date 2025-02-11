import { createStore } from 'vuex'
import { workers } from '../constants/workersData'
import { currencyList } from '../constants/settings'
import { getFilteredList } from './helpers/filters'

// Create a new store instance.
const store = createStore({
	state() {
		return {
			searchName: null,
			workersList: [],
			currency: null,
			loading: false,
			error: null,
		}
	},
	getters: {
		searchName: (state) => state.searchName,
		currency: ({ currency }) => currency,
		workersList: ({ workersList }) => workersList,
		currencyObj: ({ currency }) => currencyList.find((c) => c.id === currency),
		filteredBySearchNameWorkersList: (state) => getFilteredList(state),
		isLoading: ({ loading }) => loading,
		loadingError: ({ error }) => error,
	},
	mutations: {
		changeName(state, newVal) {
			state.searchName = newVal
		},
		setWorkersList(state, val) {
			state.workersList = val
		},
		setValue(state, { prop, val }) {
			state[prop] = val
		},
	},
	actions: {
		setStorePropValue({ commit }, { prop, val }) {
			commit('setValue', { prop, val })
		},
		changeName({ commit }, newVal) {
			commit('changeName', newVal)
		},
		loadWorkersData({ commit }) {
			//---- імітація завантаження з  бази даних
			commit('setValue', { prop: 'loading', val: true })
			commit('setValue', { prop: 'error', val: null })

			setTimeout(() => {
				try {
					//-- тут відбувається запит у базу даних
					commit('setWorkersList', workers)
				} catch (err) {
					commit('setValue', { prop: 'error', val: err })
				} finally {
					commit('setValue', { prop: 'loading', val: false })
				}
			}, 1000)
		},
	},
})

export default store
