import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			productsList: [],
			categoriesList: [],
		}
	},

	getters: {
		categoriesList: ({ categoriesList }) => categoriesList,

		currentCategory:
			({ categoriesList }) =>
			(categoryId) =>
				categoriesList.find((category) => category.id == categoryId),

		productsList: ({ productsList }) => productsList,

		filteredProductsList:
			({ productsList }) =>
			(categoryId) =>
				productsList.filter((product) => product.categoryId == categoryId),

		getProductById:
			({ productsList }) =>
			(productId) =>
				productsList.find((product) => product.id == productId),
	},

	mutations: {
		setCategoriesList(state, categoriesData) {
			state.categoriesList = categoriesData
		},
		setProductsList(state, productsData) {
			state.productsList = productsData
		},
		editProduct(state, productData) {
			const productIndex = state.productsList.findIndex((product) => product.id === productData.id)
			state.productsList[productIndex] = { ...productData }
		},
		addProduct(state, productData) {
			state.productsList.push({
				id: new Date().getTime(),
				...productData,
			})
		},
		deleteProduct(state, productId) {
			state.productsList = state.productsList.filter((product) => product.id !== productId)
		},
	},

	actions: {
		setCategoriesList({ commit }, categoriesData) {
			commit('setCategoriesList', categoriesData)
		},
		setProductsList({ commit }, productsData) {
			commit('setProductsList', productsData)
		},
		editProduct({ commit }, productData) {
			commit('editProduct', productData)
		},
		addProduct({ commit }, productData) {
			commit('addProduct', productData)
		},
		deleteProduct({ commit }, productId) {
			commit('deleteProduct', productId)
		},
	},
})

export default store
