import { createStore } from 'vuex'

export default createStore({
    state: {
        count: 100,
        userName: 'Ivan',
    },
    getters: {
        count: ({ count }) => count,
        decimalCountVal({ count }) {
            return count / 10
        },
        anyDivVal: (state) => (divider) => state.count / divider,
    },
    mutations: {
        change(state, val) {
            state.count += val
        },
    },
    actions: {
        changeCounter({ commit }, val) {
            commit('change', val)
        },
    },
    modules: {},
})
