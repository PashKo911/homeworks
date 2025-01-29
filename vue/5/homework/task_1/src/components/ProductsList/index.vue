<template>
	<div class="wrapper">
		<product-item v-for="product in productsData" :key="product.id" :product="product" />
	</div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
	name: 'ProductsList',
	components: {
		ProductItem,
	},
	props: {
		productsData: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="css" scoped>
.wrapper {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	padding: clamp(0.938rem, 0.677rem + 1.3vw, 1.875rem);
	border: 0.0625rem solid gray;
	border-radius: 0.9375rem;
}
</style>
