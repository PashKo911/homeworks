export default {
	namespaced: true,
	state: () => ({
		filter: {
			brands: [],
			seller: null,
		},
	}),
	getters: {
		filter: ({ filter }) => filter,
		brandsObjList: (state, getters, rootState, rootGetters) => {
			const productsList = rootGetters['products/productsList']
			const brandsList = productsList.map((prod) => prod.brand)
			const uniqueBrands = [...new Set(brandsList)]
			const brandsObjectsList = uniqueBrands.map((brand) => ({
				title: brand,
				value: brand,
			}))
			return brandsObjectsList
		},
		sellersObjList: (state, getters, rootSate, rootGetters) => {
			const sellersList = rootGetters['sellers/sellersList']
			const sellersObjList = sellersList.map((seller) => ({
				value: seller.id,
				title: seller.name,
			}))
			return sellersObjList
		},
		isProductSatisfiedFilter:
			({ filter }) =>
			(product) =>
				(!filter.seller || product.sellerId == filter.seller) &&
				(!filter.brands.length || filter.brands.includes(product.brand)),

		getFilteredProducts: (state, getters, rootSate, rootGetters) => {
			const productsList = rootGetters['products/productsList']
			return productsList.filter((product) => getters.isProductSatisfiedFilter(product))
		},
	},
	mutations: {
		setFilter(state, filterData) {
			state.filter = {
				...state.filter,
				...filterData,
			}
		},
	},
	actions: {
		setFilter({ commit }, filterData) {
			commit('setFilter', filterData)
		},
	},
}
