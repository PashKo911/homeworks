import { createStore } from 'vuex'
import getModuleSettingsObject from './helpers/GetModuleSettingsObject'
export default createStore({
  namespaced: true,
  modules: {
    products: getModuleSettingsObject('products'),
  },
})
