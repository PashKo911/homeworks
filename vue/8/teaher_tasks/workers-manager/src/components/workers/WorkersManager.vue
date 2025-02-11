<template>
	<div>
		<loading-comp v-if="isLoading" />
		<error-comp v-else-if="loadingError" />

		<div v-else>
			<name-filter />
			<name-filter-simple v-model="filterNameValue" />
			<currency-filter v-model="currencyValue" />
			<workers-list :workers-list="filteredBySearchNameWorkersList" />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingComp from '@/components/general/LoadingComp.vue'
import ErrorComp from '@/components/general/ErrorComp.vue'
import NameFilter from './NameFilter.vue'
import NameFilterSimple from './NameFilterSimple.vue'
import WorkersList from './WorkersList.vue'
import CurrencyFilter from './CurrencyFilter.vue'
export default {
	name: 'WorkersManager',
	components: {
		LoadingComp,
		ErrorComp,
		WorkersList,
		NameFilter,
		NameFilterSimple,
		CurrencyFilter,
	},
	computed: {
		...mapGetters(['isLoading', 'loadingError', 'searchName', 'currency', 'filteredBySearchNameWorkersList']),
		filterNameValue: {
			get() {
				return this.searchName
			},
			set(val) {
				this.changeName(val)
			},
		},
		currencyValue: {
			get() {
				return this.currency
			},
			set(val) {
				this.setStorePropValue({ prop: 'currency', val })
			},
		},
	},
	methods: {
		...mapActions(['loadWorkersData', 'changeName', 'setStorePropValue']),
	},

	mounted() {
		this.loadWorkersData()
	},
}
</script>

<style lang="scss" scoped></style>
