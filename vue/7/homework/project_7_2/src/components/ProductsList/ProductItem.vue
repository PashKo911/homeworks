<template>
	<div class="wrapper">
		<div class="left">
			<h3 class="title">{{ product.name }}</h3>
			<h3 class="price">{{ product.price.toFixed(1) }} {{ currentSymbol }}</h3>
		</div>
		<button class="button" @click="doneAddToCart(product.id)">Купити</button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'ProductItem',
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	methods: {
		...mapActions(['doneAddToCart']),
		onAddProduct(id) {
			this.doneAddToCart(id)
		},
	},
	computed: {
		...mapGetters(['currentSymbol']),
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
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.title {
}
.price {
}
.button {
	padding: 0.3125rem 1.25rem;
	border-radius: 0.25rem;
	background-color: var(--color-blue-600);
	color: var(--color-white);
	transition: background-color 0.2s;

	@media (any-hover: hover) {
		&:hover {
			background-color: var(--color-blue-700);
		}
	}
}
</style>
