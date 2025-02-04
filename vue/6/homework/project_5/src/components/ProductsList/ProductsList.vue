<template>
	<div class="wrapper border-l border-t border-gray-400">
		<product-card v-for="product in productsList" :key="product.id" :productData="product" />
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
	name: 'ProductsList',
	components: {
		ProductCard,
	},
	props: {
		productsList: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<style scoped>
@reference "tailwindcss";

.wrapper {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(13.75rem, 1fr));
}
</style>
