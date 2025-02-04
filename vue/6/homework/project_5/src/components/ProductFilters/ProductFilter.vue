<template>
	<div class="grid gap-[.9375rem] p-2.5 border-2" :class="checkModifierClass">
		<h2 class="text-[1.5rem] text-blue-400">{{ title }}</h2>
		<select-item v-for="filter in filtersList" :key="filter.id" :filter="filter" v-model="selectedFilters" />
	</div>
</template>

<script>
import SelectItem from './SelectItem.vue'
export default {
	name: 'ProductFilter',
	components: { SelectItem },
	props: {
		title: {
			type: String,
			default: 'Title',
		},
		filtersList: {
			type: Array,
			default: () => [],
		},
		modelValue: {
			type: Array,
			required: true,
		},
		modelModifiers: {
			default: () => ({}),
		},
	},
	computed: {
		selectedFilters: {
			get() {
				return this.modelValue
			},
			set(newValue) {
				this.$emit('update:modelValue', newValue)
			},
		},
		checkModifierClass() {
			return this.modelModifiers.check && !this.selectedFilters.length
				? 'border-green-600'
				: 'border-gray-300'
		},
	},
}
</script>
