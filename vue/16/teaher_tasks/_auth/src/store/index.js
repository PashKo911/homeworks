import { createStore } from 'vuex'
import todoItems from './modules/todoItems'
import auth from './modules/auth'
import users from './modules/users'

export default createStore({
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        users,
        todoItems,
    },
})
