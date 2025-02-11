<template>
	<div class="wrapper">
		<h2>Знайдено пропозицій: {{ productsList.length }}</h2>
		<product-card v-for="product in productsList" :key="product.id" :product="product" />
	</div>
</template>

<script>
import ProductCard from '../../Task2/ProductsList/ProductCard.vue'

export default {
	name: 'ProductsList',
	components: { ProductCard },
	props: {
		productsList: {
			type: Array,
			default: [],
		},
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	display: grid;
	width: 100%;
}
</style>
