import { createStore } from 'vuex'
import getModuleSettingsObject from './helpers/GetModuleSettingsObject'
import assignments from './modules/assignments'
import drivers from './modules/drivers'
import buses from './modules/buses'

const store = createStore({
	modules: {
		buses,
		drivers,
		assignments,
	},
})

export default store
