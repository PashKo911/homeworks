<template>
	<main-layout :hasError="hasError">
		<div class="container wrapper pt-[5.625rem] pb-[1.875rem]">
			<div class="border border-surface-200 shadow-lg dark:border-surface-700">
				<ContextMenu ref="cm" :model="menuModel" />
				<DataTable
					v-model:contextMenuSelection="selectedItem"
					:value="populatedAssignmentsList"
					:loading="isLoading"
					@rowContextmenu="onRowContextMenu"
					:pt="{
						table: { style: 'min-width: 31.25rem' },
						column: {
							bodycell: ({ state }) => ({
								style: state['d_editing'] && 'padding-top: .6875rem; padding-bottom: .6875rem',
							}),
						},
					}"
					stripedRows
					showGridlines
					removableSort
					contextMenu
					dataKey="id">
					<template #header>
						<h1 class="title text-center mb-4">Assignments</h1>
						<div class="flex justify-end">
							<Button label="New" icon="pi pi-plus" @click="formDialog = true" class="shrink-0" />
						</div>
						<small class="absolute right-2 top-0 text-red-500">
							Видалення за допомогою правої кнопки миші
						</small>
					</template>
					<Column field="driverName" header="Driver's Name" style="width: 20%" sortable>
						<template #editor="{ data, field }">
							<InputNumber v-model="data[field]" :max="40" :min="1" fluid />
						</template>
					</Column>
					<Column field="busNumber" header="Bus Number" style="width: 20%" sortable>
						<template #editor="{ data, field }">
							<InputText v-model.trim="data[field]" required fluid />
						</template>
					</Column>
				</DataTable>
			</div>
			<assignment-form v-model:visible="formDialog" />
			<delete-dialog v-model:visible="deleteFormDialog" @on-delete="onDelete" />
		</div>
	</main-layout>
</template>

<script>
import * as yup from 'yup'
import { mapActions, mapGetters } from 'vuex'
import busSchema from '@/validation/schemas/busSchema.js'

import MainLayout from '@/components/layouts/MainLayout.vue'
import AssignmentForm from './AssignmentForm.vue'
import DeleteDialog from '@/components/ui/DeleteDialog.vue'

export default {
	name: 'AssignmentPage',
	components: {
		MainLayout,
		AssignmentForm,
		DeleteDialog,
	},
	data() {
		return {
			selectedItem: null,
			formDialog: false,
			deleteFormDialog: false,
			menuModel: [
				{
					label: 'Delete',
					icon: 'pi pi-fw pi-times',
					command: () => (this.deleteFormDialog = true),
				},
			],
		}
	},
	methods: {
		...mapActions('buses', {
			loadBuses: 'loadList',
		}),
		...mapActions('drivers', {
			loadDrivers: 'loadList',
		}),
		...mapActions('assignments', {
			loadAssignments: 'loadList',
			addAssignment: 'addItem',
			deleteAssignment: 'deleteItem',
		}),
		onRowContextMenu(event) {
			this.$refs.cm.show(event.originalEvent)
		},
		async onDelete() {
			try {
				await this.deleteAssignment(this.selectedItem.id)
				this.$toast.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Assignment deleted',
					life: 3000,
				})
			} catch (error) {
				this.$toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
			} finally {
				this.selectedItem = null
				this.deleteFormDialog = false
			}
		},
	},
	computed: {
		...mapGetters('assignments', ['getItemsList', 'populatedAssignmentsList', 'isLoading', 'hasError']),
	},
	created() {
		this.loadDrivers()
		this.loadBuses()
		this.loadAssignments()
	},
}
</script>
