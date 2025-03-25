<template>
	<div
		v-styleclass="{
			selector: '@next',
			toggleClass: 'c-left-visible',
		}"
		class="fixed top-[9.375rem] shrink-0 md:hidden z-30">
		<Button icon="pi pi-sliders-v" size="large" />
	</div>
	<aside
		class="fixed md:sticky w-[15rem] h-full md:h-auto top-[4.125rem] md:top-[8.125rem] translate-x-[calc(-100%-.9375rem)] md:translate-x-0 bg-white dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 md:border-r-0 md:border-t md:border-l md:border-b md:shrink-0 basis-[170px] transition-transform duration-300 p-4 md:p-4 z-50">
		<div
			v-styleclass="{
				selector: '@parent',
				toggleClass: 'c-left-visible',
			}"
			class="absolute right-0 top-0 md:hidden">
			<Button icon="pi pi-times" text variant="outlined" size="large" />
		</div>
		<h2 class="title mb-4">
			{{ $t('productsFilter.sellersTitle') }}
		</h2>
		<ul class="grid gap-2">
			<li v-for="seller in sellers" :key="seller.id" class="flex items-center gap-2">
				<Checkbox v-model="selectedSellers" :inputId="seller.id" name="sellers" :value="seller.id" />
				<label :for="seller.id" class="cursor-pointer capitalize"> {{ seller.name }} </label>
			</li>
		</ul>
		<h2 class="title mt-4 mb-4">
			{{ $t('productsFilter.brandTitle') }}
		</h2>
		<ul class="grid gap-2">
			<li v-for="brand in brands" :key="brand.id" class="flex items-center gap-2">
				<Checkbox v-model="selectedBrands" :inputId="brand.id" name="brands" :value="brand.id" />
				<label :for="brand.id" class="cursor-pointer capitalize"> {{ brand.name }} </label>
			</li>
		</ul>
	</aside>
</template>

<script>
export default {
	name: 'ProductsFilter',
	props: {
		sellers: {
			type: Array,
			default: () => [],
		},
		brands: {
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
