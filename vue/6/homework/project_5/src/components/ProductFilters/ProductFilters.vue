<template>
	<div class="grid content-start gap-[2.5rem]">
		<product-filter title="Продавець" :filtersList="sellersList" v-model.check="selectedSellers" />
		<product-filter title="Бренд" :filtersList="brandsList" v-model.check="selectedBrands" />
	</div>
</template>

<script>
import ProductFilter from './ProductFilter.vue'

export default {
	name: 'ProductFilters',
	components: { ProductFilter },
	props: {
		sellersList: {
			type: Array,
			default: () => [],
		},
		brandsList: {
			type: Array,
			default: () => [],
		},
		modelValue: {
			type: Object,
			required: true,
		},
	},
	computed: {
		selectedSellers: {
			get() {
				return this.modelValue.selectedSellers || []
			},
			set(newValue) {
				this.$emit('update:modelValue', { ...this.modelValue, selectedSellers: newValue })
			},
		},
		selectedBrands: {
			get() {
				return this.modelValue.selectedBrands || []
			},
			set(newValue) {
				this.$emit('update:modelValue', { ...this.modelValue, selectedBrands: newValue })
			},
		},
	},
}
</script>
