<template>
	<div class="wrapper">
		<product-item v-for="product in productsList" :key="product.id" :product="product" @submit="onBuy" />
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
		productsList: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		onBuy(productId) {
			this.$emit('submit', productId)
		},
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>
