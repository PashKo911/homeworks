<template>
	<div class="body">
		<h2 class="title">Кошик</h2>
		<div class="list">
			<cart-item v-for="item in cartList" :key="item.id" :cartProduct="item" />
			<div class="total">
				<div class="left">
					<h3 class="total-title">Разом до сплати</h3>
					<span class="price">{{ totalPrice.toFixed(1) }} {{ currentSymbol }}</span>
				</div>
				<button class="button">Оплатити</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem.vue'
export default {
	components: { CartItem },
	name: 'Cart',
	computed: {
		...mapGetters(['cartList', 'currentSymbol']),
		totalPrice() {
			return this.cartList.reduce((acc, product) => acc + product.price * product.amount, 0)
		},
	},
}
</script>

<style lang="scss" scoped>
.list {
	border: 0.125rem solid var(--color-green-500);
	border-radius: 0.625rem;
	display: grid;
	max-width: 50rem;
	margin: 0 auto;
	gap: 0.625rem;
	@include adaptiveValue('padding', 40, 15);
}

.title {
	font-weight: 600;
	line-height: 1.1;
	text-align: center;
	@include adaptiveValue('font-size', 30, 22);
	&:not(:last-child) {
		@include adaptiveValue('margin-bottom', 40, 20);
	}
}

.total {
	display: flex;
	@include adaptiveValue('column-gap', 40, 15);
}
.total-title {
	font-size: 20;
	font-weight: 600;
}
.left {
	flex-grow: 1;
	display: grid;
	grid-template-columns: 1.7fr 0.7fr;
}
.price {
	text-align: right;
	font-size: 20;
	font-weight: 600;
}
.button {
	padding: 0.3125rem 1.25rem;
	border-radius: 0.25rem;
	background-color: var(--color-green-400);
	border: 0.0625rem solid var(--color-green-600);
	color: var(--color-white);
	transition: background-color 0.2s;
	min-width: 8.7688rem;

	@media (any-hover: hover) {
		&:hover {
			background-color: var(--color-green-500);
		}
	}
}
</style>
