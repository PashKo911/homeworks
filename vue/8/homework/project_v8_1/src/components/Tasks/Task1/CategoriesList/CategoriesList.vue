<template>
	<div class="items">
		<categories-input
			v-for="category in categoriesList"
			:key="category.id"
			:categoryData="category"
			v-model="currentCategory" />
	</div>
</template>

<script>
import CategoriesInput from './CategoriesInput.vue'

export default {
	components: { CategoriesInput },
	name: 'CategoriesList',
	props: {
		categoriesList: {
			type: Array,
			default: [],
		},
		modelValue: {
			type: [String, Number],
			default: null,
		},
	},
	computed: {
		currentCategory: {
			get() {
				return this.modelValue
			},
			set(id) {
				this.$emit('update:modelValue', id)
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.items {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
	align-items: stretch;
	gap: 1.875rem;
}
</style>
