import { createStore } from 'vuex'
import products from './modules/products'
import sellers from './modules/sellers'
import filters from './modules/filters'
// Create a new store instance.
const store = createStore({
  modules: {
    products,
    sellers,
    filters,
  },
})

export default store
