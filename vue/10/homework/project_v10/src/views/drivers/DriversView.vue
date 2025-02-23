<template>
	<div class="container">
		<div class="top">
			<h2 class="title">Our drivers:</h2>
			<filter-section />
		</div>
		<table-comp
			class="list"
			v-if="filteredDriversList.length"
			:data="filteredDriversList"
			:columns="driversColumns"
			@on-edit="onEdit"
			@on-delete="onDelete" />

		<h2 class="title empty" v-else>Drivers List Is Empty</h2>
		<button-comp @on-click="onClick"> Add Driver </button-comp>
	</div>
</template>

<script>
import FilterSection from '@/components/FilterSection.vue'
import { mapActions, mapGetters } from 'vuex'
import ButtonComp from '@/components/ui/ButtonComp.vue'
import TableComp from '@/components/tables/TableComp.vue'

const driversColumns = [
	{ key: 'name', label: 'Name' },
	{ key: 'experience', label: 'Experience' },
]

export default {
	name: 'DriversView',
	components: { FilterSection, TableComp, ButtonComp },
	data() {
		return {
			driversColumns,
		}
	},
	methods: {
		...mapActions('drivers', ['deleteItem']),
		onDelete(id) {
			this.deleteItem({ id, currentProp: 'drivers' })
		},
		onClick() {
			this.$router.push({
				name: 'driversForm',
			})
		},
		onEdit(id) {
			this.$router.push({
				name: 'driversForm',
				params: {
					driversId: id || null,
				},
			})
		},
	},
	computed: {
		...mapGetters('filters', ['filteredDriversList']),
	},
}
</script>

<style lang="scss" scoped>
.container {
}
.top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: toRem(30);
	flex-wrap: wrap;
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}
.title {
	font-weight: 600;
	@include adaptiveValue('font-size', 24, 22);
}
.empty {
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}

.list {
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}
</style>
