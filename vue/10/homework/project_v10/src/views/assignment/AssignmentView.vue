<template>
	<div class="container">
		<div class="top">
			<h2 class="title">Assignments:</h2>
			<table-comp
				:data="populatedAssignmentsList"
				:columns="assignmentColumns"
				:editable="false"
				@on-delete="onDelete" />
		</div>

		<assignment-form :buses-list="freeBusesList" :drivers-list="freeDriversList" @on-submit="onSubmit" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TableComp from '@/components/tables/TableComp.vue'
import AssignmentForm from './AssignmentForm.vue'

const assignmentColumns = [
	{ key: 'driverName', label: "Driver's Name" },
	{ key: 'busNumber', label: 'Buses Number' },
]

export default {
	name: 'AssignmentView',
	components: {
		TableComp,
		AssignmentForm,
	},
	data() {
		return {
			assignmentColumns,
		}
	},
	methods: {
		...mapActions('assignments', ['deleteItem', 'addItem']),
		onDelete(id) {
			this.deleteItem({ id, currentProp: 'assignments' })
		},
		onSubmit(newVal) {
			this.addItem({ data: newVal, currentProp: 'assignments' })
		},
	},
	computed: {
		...mapGetters('assignments', ['populatedAssignmentsList']),
		...mapGetters('buses', ['freeBusesList']),
		...mapGetters('drivers', ['freeDriversList']),
	},
}
</script>

<style lang="scss" scoped>
.container {
	min-height: calc(100svh - toRem(230));
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: toRem(30);
}
.title {
	font-weight: 600;
	@include adaptiveValue('font-size', 24, 22);
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}
</style>
