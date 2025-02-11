<template>
	<div class="container">
		<categories-list class="categories" :categoriesList="categoriesList" v-model="currentCategory" />
		<products-list v-if="currentProductsList.length" :productsList="currentProductsList" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CategoriesList from './CategoriesList/CategoriesList.vue'
import ProductsList from './ProductsList/ProductsList.vue'

export default {
	components: { CategoriesList, ProductsList },
	name: 'FirstTask',
	methods: {
		...mapActions('task1', ['setSelectedCategory']),
	},
	computed: {
		...mapGetters('task1', ['selectedCategory', 'currentProductsList', 'categoriesList']),

		currentCategory: {
			get() {
				return this.selectedCategory
			},
			set(id) {
				this.setSelectedCategory(id)
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.categories {
	padding-top: 3.125rem;

	&:not(:last-child) {
		@include adaptiveValue('margin-bottom', 120, 60);
	}
}
</style>
