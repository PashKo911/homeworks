import { createStore } from 'vuex'
import task1 from './modules/task1'
import task2 from './modules/task2'

const store = createStore({
	modules: {
		task1,
		task2,
	},
})

export default store
