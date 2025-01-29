<template>
	<div class="container">
		<h1 class="title-main">Задача 3: Вивести товари. Додати внизу кошик з товарами</h1>
		<products-list :productsList="productsList" @submit="onBuy" />
		<hr />
		<user-cart
			v-if="cartList.length"
			:cartList="cartList"
			@change-amount="onChangeAmount"
			@delete="onDelete" />
	</div>
</template>

<script>
import ProductsList from '../ProductsList/ProductsList.vue'
import UserCart from '../Cart/UserCart.vue'

export default {
	name: 'LayoutComponent',
	components: {
		ProductsList,
		UserCart,
	},
	props: {
		productsList: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			cartList: [
				{
					id: 2,
					title: 'Ноутбук ASUS TUF Gaming A15 FA506NFR-HN081 (90NR0JU7-M00530) Graphite Black',
					imgSrc: 'https://content.rozetka.com.ua/goods/images/original/323437245.jpg',
					discount: 6500,
					oldPrice: 38999,
					price: 32499,
					amount: 1,
					link: 'https://rozetka.com.ua/ua/asus-90nr0hb4-m00520/p372852162/?xnpe_tifc=xDsLhIx84FHDOfhN4Ies4ypZhfEWVjQsVuU_O.YD4.bpxFo74jXpOk4s4FUNhFYdxIxJbDzl&utm_source=dm&utm_campaign=goodspromo&utm_medium=email&xnpe_cmp=.eJwTUqgR-LfxDuexFM741z-nNP-se3gzVHky5yuvrCgec94j99YYXr8519PY56ZjVAOjvn5SfkqlfkliUk6qfkmRfkmKfnJqXklqEYoQjB1tGIvMRZGyQJPKQGZHG8WiG1JckJinn5jFE8WsUujpeSZtqsOhgwBf3Ujz.nfb4MGEULEEl-g',
				},
			],
		}
	},
	methods: {
		onBuy(productId) {
			const cartProduct = this.cartList.find((product) => product.id === productId)
			if (cartProduct) {
				cartProduct.amount += 1
			} else {
				const product = this.productsList.find((product) => product.id === productId)
				this.cartList.push({
					amount: 1,
					...product,
				})
			}
		},
		//! Ось тут мені не подобається що ці методи тут, таким чином корзина не універсальна,
		//! а якщо це робити в корзині то доведеться мутувати пропси
		onChangeAmount({ amount, id }) {
			const cartProduct = this.cartList.find((product) => product.id === id)
			cartProduct.amount = amount
		},
		onDelete(id) {
			console.log(id)
			this.cartList = this.cartList.filter((product) => product.id !== id)
		},
	},
}
</script>

<style lang="scss" scoped>
hr {
	width: 100%;
	height: 0.125rem;
	display: block;
	background-color: #00a046;
	&:not(:last-child) {
		margin-bottom: 3.75rem;
	}
}
</style>
