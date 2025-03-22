import { createStore } from 'vuex'
import products from './modules/products'
import auth from './modules/auth'
import users from './modules/users'
import getModuleSettingsObject from './helpers/GetModuleSettingsObject'

const store = createStore({
	modules: {
		products,
		auth,
		users,
		products: getModuleSettingsObject('products'),
		sellers: getModuleSettingsObject('sellers'),
		brands: getModuleSettingsObject('brands'),
	},
})

export default store
