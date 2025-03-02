import { createStore } from 'vuex'
import auth from './modules/auth'
import teachers from './modules/teachers'
import lessons from './modules/lessons'

const store = createStore({
	modules: {
		auth,
		teachers,
		lessons,
	},
})

export default store
