import { createStore } from 'vuex'
import { employees } from '../constants/usersData'
export default createStore({
    state: {
        usersList: [],
    },
    getters: {
        getUsersList: (state) => state.usersList,
        getUserById: (state) => (userId) => state.usersList.find((user) => user.id == userId),
    },
    mutations: {
        setUsersData(state, usersData) {
            state.usersList = usersData
        },
        updateUser(state, userData) {
            const userIndex = state.usersList.findIndex((user) => user.id === userData.id)
            state.usersList[userIndex] = { ...userData }
        },
        createUser(state, userData) {
            state.usersList.push(userData)
        },
        deleteUser(state, userId) {
            state.usersList = state.usersList.filter((user) => user.id != userId)
        },
    },
    actions: {
        loadUsersData({ commit }) {
            commit('setUsersData', employees)
        },
        updateUser({ commit }, userData) {
            commit('updateUser', userData)
        },
        createUser({ commit }, userData) {
            commit('createUser', {
                id: new Date().getTime(),
                ...userData,
            })
        },
        deleteUser({ commit }, userId) {
            commit('deleteUser', userId)
        },
    },
})
