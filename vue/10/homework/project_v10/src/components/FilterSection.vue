<template>
	<div class="filters">
		<search-filter v-model="currentFilter.name" />
		<range-filter :items="experiencesList" v-model="currentFilter.experience" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RangeFilter from './filters/RangeFilter.vue'
import SearchFilter from './filters/SearchFilter.vue'

export default {
	name: 'FilterSection',
	components: {
		RangeFilter,
		SearchFilter,
	},
	methods: {
		...mapActions('filters', ['setFilter']),
	},
	computed: {
		...mapGetters('drivers', ['driversList', 'experiencesList']),
		...mapGetters('filters', ['filter']),
		currentFilter: {
			get() {
				return this.filter
			},
			set(newVal) {
				this.setFilter(newVal)
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.filters {
	display: flex;
	flex-wrap: wrap;
	gap: toRem(30);
}
</style>
