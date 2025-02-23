<template>
	<div class="container">
		<div class="top">
			<h2 class="title">Our Buses:</h2>
		</div>
		<table-comp
			class="list"
			v-if="buses.length"
			:data="buses"
			:columns="busColumns"
			@on-edit="onEdit"
			@on-delete="onDelete" />
		<h2 class="title empty" v-else>Buses List Is Empty</h2>
		<button-comp @on-click="onClick"> Add Bus </button-comp>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ButtonComp from '@/components/ui/ButtonComp.vue'
import TableComp from '@/components/tables/TableComp.vue'

const busColumns = [
	{ key: 'number', label: 'Registration Number' },
	{ key: 'seats', label: 'Seats' },
]

export default {
	name: 'BusesView',
	components: { TableComp, ButtonComp },
	data() {
		return {
			busColumns,
		}
	},
	methods: {
		...mapActions('buses', ['deleteItem']),
		onDelete(id) {
			this.deleteItem({ id, currentProp: 'buses' })
		},
		onClick() {
			this.$router.push({
				name: 'busForm',
			})
		},
		onEdit(id) {
			this.$router.push({
				name: 'busForm',
				params: {
					busId: id || null,
				},
			})
		},
	},
	computed: {
		...mapGetters('buses', ['buses']),
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
