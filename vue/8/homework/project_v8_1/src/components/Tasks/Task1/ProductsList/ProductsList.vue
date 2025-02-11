<template>
	<div class="body">
		<h2 class="title">Ноутбуки:</h2>
		<div class="items">
			<product-card v-for="product in productsList" :key="product.id" :productData="product" />
		</div>
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
			default: [],
		},
	},
}
</script>

<style lang="scss" scoped>
.body {
}
.title {
	font-weight: 500;
	@include adaptiveValue('font-size', 32, 24);
	&:not(:last-child) {
		margin-bottom: toRem(20);
	}
}
.items {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
}
</style>
