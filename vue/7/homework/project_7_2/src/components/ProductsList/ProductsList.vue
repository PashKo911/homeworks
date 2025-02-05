<template>
	<div class="list">
		<product-item v-for="product in productsList" :key="product.id" :product="product" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem.vue'

export default {
	name: 'ProductsList',
	components: {
		ProductItem,
	},
	computed: {
		...mapGetters(['productsList']),
	},
}
</script>

<style lang="scss" scoped>
.list {
	border: 0.125rem solid var(--color-blue-500);
	border-radius: 0.625rem;
	display: grid;
	max-width: 50rem;
	margin: 0 auto;
	gap: 0.625rem;
	@include adaptiveValue('padding', 40, 15);
}
</style>
