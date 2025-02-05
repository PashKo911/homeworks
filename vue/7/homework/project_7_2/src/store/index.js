import { createStore } from 'vuex'
import { productsListData, exchangeRateObjData } from '@/constants/data'

const store = createStore({
	state() {
		return {
			productsListData,
			cartListData: [],
			selectedCurrencyData: 'uan',
			exchangeRateObjData,
		}
	},

	getters: {
		selectedCurrency: ({ selectedCurrencyData }) => selectedCurrencyData,
		exchangeRateObj: ({ exchangeRateObjData }) => exchangeRateObjData,
		currentSymbol({ selectedCurrencyData, exchangeRateObjData }) {
			return exchangeRateObjData[selectedCurrencyData].symbol
		},

		productsList({ productsListData, selectedCurrencyData, exchangeRateObjData }) {
			return productsListData.map((product) => ({
				...product,
				price: product.price / exchangeRateObjData[selectedCurrencyData].rate,
			}))
		},

		cartList({ cartListData, selectedCurrencyData, exchangeRateObjData }) {
			return cartListData.map((product) => ({
				...product,
				price: product.price / exchangeRateObjData[selectedCurrencyData].rate,
			}))
		},
	},

	mutations: {
		changeCurrency(state, newVal) {
			state.selectedCurrencyData = newVal
		},
		addToCart(state, id) {
			const curtProduct = state.cartListData.find((product) => product.id === id)
			if (curtProduct) {
				curtProduct.amount += 1
				return
			}

			const product = state.productsListData.find((product) => product.id === id)
			if (!product) return

			state.cartListData.push({
				...product,
				amount: 1,
			})
		},
		deleteFromCart(state, id) {
			state.cartListData = state.cartListData.filter((product) => product.id !== id)
		},
	},

	actions: {
		doneCurrency({ commit }, newVal) {
			commit('changeCurrency', newVal)
		},
		doneAddToCart({ commit }, id) {
			commit('addToCart', id)
		},
		doneDeleteFromCart({ commit }, id) {
			commit('deleteFromCart', id)
		},
	},
})

export default store
