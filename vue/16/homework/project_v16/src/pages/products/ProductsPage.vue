<template>
	<main-layout :loading="isLoading" :hasError="hasError">
		<div class="fixed left-[.9375rem] top-[5rem] z-10 flex items-center gap-4">
			<Button :label="$t('actionTitles.toolsButton')" icon="pi pi-cog" @click="setPermissionsManually" />
			<Button
				v-if="userPermissions.write"
				:label="$t('actionTitles.newProductButton')"
				icon="pi pi-plus"
				@click="isFormVisible = true" />
		</div>
		<div class="container fullscreen pt-[8.125rem] pb-8">
			<div class="flex items-start">
				<products-filter v-model="selectedFilters" :sellers="getSellersList" :brands="getBrandsList" />
				<div
					class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-gray-200 dark:border-surface-700">
					<products-card
						v-for="p in getItemsList"
						:key="p.id"
						:productData="p"
						@on-edit="onEdit"
						@on-delete="onDelete" />
				</div>
			</div>
			<product-form
				v-model:visible="isFormVisible"
				:sellers="getSellersList"
				:brands="getBrandsList"
				:productData="selectedProduct"
				@on-form-submit="onFormSubmit" />
		</div>
	</main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'
import ProductsCard from './ProductsCard.vue'
import ProductsFilter from './ProductsFilter.vue'
import ProductForm from './ProductForm.vue'
import { where } from 'firebase/firestore/lite'

import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'ProductsPage',
	components: {
		MainLayout,
		ProductsCard,
		ProductsFilter,
		ProductForm,
	},
	data() {
		return {
			isFormVisible: false,
			selectedProduct: null,
			selectedFilters: {
				selectedSellers: [],
				selectedBrands: [],
			},
		}
	},
	methods: {
		...mapActions('products', ['loadList', 'loadFilteredData', 'addItem', 'updateItem', 'deleteItem']),
		...mapActions('sellers', {
			loadSellersList: 'loadList',
		}),
		...mapActions('brands', {
			loadBrandsList: 'loadList',
		}),
		...mapActions('users', ['setPermissionsManually']),
		loadData() {
			const { selectedBrands, selectedSellers } = this.selectedFilters
			const filters = []

			if (selectedSellers.length) {
				filters.push(where('seller', 'in', selectedSellers))
			}
			if (selectedBrands.length) {
				filters.push(where('brand', 'in', selectedBrands))
			}

			if (filters.length > 0) {
				this.loadFilteredData({ filters })
			} else {
				this.loadList()
			}
		},
		onEdit(id) {
			this.selectedProduct = this.getItemsList.find((p) => p.id === id)
			this.isFormVisible = true
		},
		async onFormSubmit({ values, id }) {
			try {
				if (id) {
					await this.updateItem({ itemId: id, data: values })
				} else {
					await this.addItem(values)
				}
				await this.loadList()
				this.$toast.add({ severity: 'success', summary: 'Success', life: 3000 })
			} catch (error) {
				this.$toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 })
			} finally {
				this.isFormVisible = false
			}
		},
		async onDelete(id) {
			try {
				await this.deleteItem(id)
				this.$toast.add({ severity: 'success', summary: 'Success', life: 3000 })
			} catch (error) {
				this.$toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 })
			}
		},
	},
	computed: {
		...mapGetters('products', ['getItemsList', 'isLoading', 'hasError']),
		...mapGetters('sellers', {
			getSellersList: 'getItemsList',
		}),
		...mapGetters('brands', {
			getBrandsList: 'getItemsList',
		}),
		...mapGetters('users', ['userPermissions']),
	},
	watch: {
		selectedFilters: {
			handler(newValue) {
				this.$router.push({ query: { ...newValue } })
			},
			deep: true,
		},
		'$route.query': {
			handler() {
				this.loadData()
			},
			immediate: true,
		},
	},
	created() {
		this.loadList()
		this.loadSellersList()
		this.loadBrandsList()
	},
}
</script>
