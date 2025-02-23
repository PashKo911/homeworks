import { createStore } from 'vuex'
import drivers from './modules/drivers'
import filters from './modules/filters'
import buses from './modules/buses'
import assignments from './modules/assignments'

const store = createStore({
	modules: {
		drivers,
		filters,
		buses,
		assignments,
	},
})

export default store
