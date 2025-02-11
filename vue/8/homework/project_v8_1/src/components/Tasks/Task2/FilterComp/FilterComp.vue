<template>
	<aside class="wrapper">
		<regular-select :items="filterData.transportTypes" v-model="activeFilters.transportType" />
		<check-boxes-filter title="Тип кузова" :items="filterData.bodyTypes" v-model="activeFilters.bodyType" />
		<search-select :items="filterData.brands" v-model="activeFilters.brand" />
		<search-select title="Модель" :items="currentModels" v-model="activeFilters.model" />
		<range-input :minMaxRange="filterData.years" v-model="activeFilters.year" />
	</aside>
</template>

<script>
import CheckBoxesFilter from './CheckBoxesFilter.vue'
import RangeInput from './RangeInput.vue'
import RegularSelect from './RegularSelect.vue'
import SearchSelect from './SearchSelect.vue'

export default {
	name: 'FilterComp',
	components: { RegularSelect, SearchSelect, CheckBoxesFilter, RangeInput },
	props: {
		filterData: {
			type: Object,
			required: true,
		},
		modelValue: {
			type: Object,
			default: () => ({}),
		},
	},
	computed: {
		activeFilters: {
			get() {
				return this.modelValue
			},
			set(newVal) {
				this.$emit('update:modelValue', newVal)
			},
		},
		currentModels() {
			return this.filterData.brands.find((brand) => brand.id === this.activeFilters.brand)?.models
		},
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	display: grid;
	gap: toRem(10);
	max-width: toRem(300);
}
</style>
