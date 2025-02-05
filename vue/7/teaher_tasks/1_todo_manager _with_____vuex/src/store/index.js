import { createStore } from 'vuex'

export default createStore({
	state: {
		todoListData: [],
	},
	getters: {
		todoList: (state) => state.todoListData,
	},
	mutations: {
		createTask(state, taskDataObj) {
			state.todoListData.push(taskDataObj)
		},
		completeTask(state, taskId) {
			state.todoListData.find((task) => task.id === taskId).isDone = true
		},
		deleteTask(state, taskId) {
			state.todoListData = state.todoListData.filter((task) => task.id !== taskId)
		},
	},
	actions: {
		addTask({ commit }, taskData) {
			commit('createTask', {
				id: new Date().getTime(),
				isDone: false,
				...taskData,
			})
		},
		doneTask({ commit }, taskId) {
			commit('completeTask', taskId)
		},
		deleteTask({ commit }, taskId) {
			commit('deleteTask', taskId)
		},
	},
})
