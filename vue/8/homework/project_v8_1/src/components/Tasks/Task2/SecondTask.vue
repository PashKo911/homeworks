<template>
	<div class="container">
		<filter-comp class="aside" :filterData="filterData" v-model="localActiveFilters" />
		<products-list class="content" :productsList="enrichedCars" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductsList from '../Task2/ProductsList/ProductsList.vue'
import FilterComp from './FilterComp/FilterComp.vue'

export default {
	name: 'SecondTask',
	components: {
		FilterComp,
		ProductsList,
	},
	methods: {
		...mapActions('task2', ['setActiveFilter']),
	},
	computed: {
		...mapGetters('task2', ['filterData', 'activeFilters', 'enrichedCars']),
		localActiveFilters: {
			get() {
				return this.activeFilters
			},
			set(newFilters) {
				Object.keys(newFilters).forEach((key) => {
					if (newFilters[key] !== this.activeFilters[key]) {
						this.setActiveFilter({ key, value: newFilters[key] })
					}
				})
			},
		},
	},
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/common/settings' as *;
.container {
	display: flex;
	align-items: flex-start;
	gap: toRem(30);

	@media (max-width: $mobile) {
		flex-direction: column;
	}
}

.aside {
	flex-shrink: 0;
	top: toRem(90);

	@media (min-width: $mobile) {
		position: sticky;
	}
}
.content {
	flex-grow: 1;
}
</style>
