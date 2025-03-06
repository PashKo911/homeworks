import { createStore } from 'vuex'
import { productsList, suppliersList, galleryList } from '@/constants/data'

const store = createStore({
	state() {
		return {
			productsList,
			suppliersList,
			galleryList,
		}
	},
	getters: {
		productsList: ({ productsList }) => productsList,
		suppliersList: ({ suppliersList }) => suppliersList,
		galleryList: ({ galleryList }) => galleryList,
	},
})

export default store
