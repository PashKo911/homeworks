export default {
	namespaced: true,
	state: () => ({
		user: localStorage.user ? JSON.parse(localStorage.user) : null,
	}),
	getters: {
		user: ({ user }) => user,
		isAuthenticated: ({ user }) => (user ? true : false),
	},
	mutations: {
		login(state, userData) {
			state.user = userData
		},
		logout(state) {
			state.user = null
		},
	},
	actions: {
		login({ commit }, userData) {
			commit('login', userData)
			localStorage.setItem('user', JSON.stringify(userData))
		},
		logout({ commit }) {
			commit('logout')
			localStorage.removeItem('user')
		},
	},
}
