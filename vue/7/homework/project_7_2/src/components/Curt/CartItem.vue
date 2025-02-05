<template>
	<div class="wrapper">
		<div class="left">
			<h3 class="title">{{ cartProduct.name }}</h3>
			<h3 class="amount">{{ cartProduct.amount }} шт.</h3>
			<h3 class="price">{{ currentPrice.toFixed(1) }} {{ currentSymbol }}</h3>
		</div>
		<button class="button" @click="doneDeleteFromCart(cartProduct.id)">Відмовитись</button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'CartItem',
	props: {
		cartProduct: {
			type: Object,
			required: true,
		},
	},
	methods: {
		...mapActions(['doneDeleteFromCart']),
	},
	computed: {
		...mapGetters(['currentSymbol']),
		currentPrice() {
			return this.cartProduct.price * this.cartProduct.amount
		},
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	gap: 0.9375rem;
	align-items: center;
	@include adaptiveValue('column-gap', 40, 15);
}
.left {
	flex-grow: 1;
	display: grid;
	grid-template-columns: 1.7fr 0.7fr 0.5fr;
}
.title {
}
.price {
	text-align: right;
}
.button {
	padding: 0.3125rem 1.25rem;
	border-radius: 0.25rem;
	background-color: var(--color-red-400);
	border: 0.0625rem solid var(--color-red-600);
	color: var(--color-white);
	transition: background-color 0.2s;

	@media (any-hover: hover) {
		&:hover {
			background-color: var(--color-red-500);
		}
	}
}
</style>
