<template>
	<div class="container">
		<h2 class="title">
			{{ currentCategoryLocal.name }}
		</h2>
		<div class="items">
			<product-card
				v-for="product in filteredProductsListLocal"
				:key="product.id"
				:productData="product"
				@onDelete="deleteProduct" />
		</div>
		<div class="buttons">
			<router-link class="button" :to="{ name: 'home' }"> На головну </router-link>
			<router-link class="button" :to="{ name: 'editProduct' }"> Додати новий товар </router-link>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { products } from '@/constants/data.js'
import ProductCard from '@/components/ProductCard/ProductCard.vue'

export default {
	components: { ProductCard },
	name: 'ProductsList',
	methods: {
		...mapActions(['setProductsList', 'deleteProduct']),
	},
	computed: {
		...mapGetters(['currentCategory', 'filteredProductsList']),
		categoryId() {
			return this.$route.params.categoryId
		},
		currentCategoryLocal() {
			return this.currentCategory(this.categoryId)
		},
		filteredProductsListLocal() {
			return this.filteredProductsList(this.categoryId)
		},
	},
	created() {
		this.setProductsList(products)
	},
}
</script>

<style lang="scss" scoped>
.container {
}
.title {
	font-weight: 600;
	@include adaptiveValue('font-size', 24, 18);
	&:not(:last-child) {
		margin-bottom: toRem(40);
	}
}
.items {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(toRem(270), 1fr));
	gap: toRem(20);

	&:not(:last-child) {
		margin-bottom: toRem(40);
	}
}

.buttons {
	display: flex;
	align-items: center;
	gap: toRem(30);
}
</style>
