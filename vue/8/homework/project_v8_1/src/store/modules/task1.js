import { productsData } from '@/constants/task1Data.js'

const task1 = {
	namespaced: true,
	state() {
		return {
			productsData,
			selectedCategory: null,
		}
	},

	getters: {
		productsData: ({ productsData }) => productsData,
		categoriesList: ({ productsData }) =>
			productsData.map(({ id, name, imgSrc }) => ({
				id,
				name,
				imgSrc,
			})),
		selectedCategory: ({ selectedCategory }) => selectedCategory,
		currentProductsList({ productsData, selectedCategory }) {
			if (selectedCategory) {
				return productsData.find((product) => product.id === selectedCategory).products
			} else return productsData.reduce((acc, data) => acc.concat(data.products), [])
		},
	},

	mutations: {
		setSelectedCategory(state, id) {
			state.selectedCategory = id
		},
	},

	actions: {
		setSelectedCategory({ commit }, id) {
			commit('setSelectedCategory', id)
		},
	},
}

export default task1
