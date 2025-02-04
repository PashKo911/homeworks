<template>
	<div>
		<h2 class="text-[2rem] mb-[3.875rem]">Ноутбуки</h2>
		<div class="flex gap-2.5">
			<product-filters
				class="basis-[200px] shrink-0"
				:sellers-list="sellersList"
				:brands-list="brandsList"
				v-model="selectedFilters" />
			<products-list :products-list="filteredProductsList" />
		</div>
	</div>
</template>

<script>
import ProductFilters from '../ProductFilters/ProductFilters.vue'
import { productsList, sellersList, brandsList } from '@/constants/data.js'
import ProductsList from '../ProductsList/ProductsList.vue'

export default {
	components: { ProductFilters, ProductsList },
	name: 'LayoutComponent',
	data() {
		return {
			productsList,
			sellersList,
			brandsList,
			selectedFilters: {
				selectedSellers: [],
				selectedBrands: [],
			},
		}
	},
	computed: {
		filteredProductsList() {
			const { selectedSellers, selectedBrands } = this.selectedFilters

			if (!selectedSellers.length && !selectedBrands.length) {
				return this.productsList
			}

			return this.productsList.filter((product) => {
				const matchesSeller = !selectedSellers.length || selectedSellers.includes(product.seller)
				const matchesBrand = !selectedBrands.length || selectedBrands.includes(product.brand)
				return matchesSeller && matchesBrand
			})
		},
	},
}
</script>
