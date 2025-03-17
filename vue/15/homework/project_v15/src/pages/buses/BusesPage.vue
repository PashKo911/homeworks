<template>
	<main-layout :hasError="hasError">
		<div class="container wrapper pt-[5.625rem] pb-[1.875rem]">
			<div class="border border-surface-200 shadow-lg dark:border-surface-700">
				<ContextMenu ref="cm" :model="menuModel" />
				<DataTable
					v-model:editingRows="editingRows"
					v-model:contextMenuSelection="selectedItem"
					:value="getItemsList"
					:loading="isLoading"
					@row-edit-save="onRowEditSave"
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
					editMode="row"
					dataKey="id">
					<template #header>
						<h1 class="title text-center mb-4">Our Buses</h1>
						<div class="flex justify-end">
							<Button label="New" icon="pi pi-plus" @click="formDialog = true" class="shrink-0" />
						</div>
						<small class="absolute right-2 top-0 text-red-500">
							Видалення за допомогою правої кнопки миші
						</small>
					</template>
					<Column field="number" header="Number" style="width: 20%" sortable>
						<template #editor="{ data, field }">
							<InputText v-model.trim="data[field]" required fluid />
						</template>
					</Column>
					<Column field="seats" header="Seats" style="width: 20%" sortable>
						<template #editor="{ data, field }">
							<InputNumber v-model="data[field]" :max="40" :min="1" fluid />
						</template>
					</Column>

					<Column
						:rowEditor="true"
						header="Actions"
						style="width: 10%; min-width: 8rem"
						bodyStyle="text-align:center"></Column>
				</DataTable>
			</div>
			<buses-form v-model:visible="formDialog" />
			<delete-dialog v-model:visible="deleteFormDialog" @on-delete="onDelete" />
		</div>
	</main-layout>
</template>

<script>
import * as yup from 'yup'
import { mapActions, mapGetters } from 'vuex'
import busSchema from '@/validation/schemas/busSchema.js'

import MainLayout from '@/components/layouts/MainLayout.vue'
import BusesForm from './BusesForm.vue'
import DeleteDialog from '@/components/ui/DeleteDialog.vue'

export default {
	name: 'BusesPage',
	components: {
		MainLayout,
		BusesForm,
		DeleteDialog,
	},
	data() {
		return {
			editingRows: [],
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
		...mapActions('buses', ['loadList', 'updateItem', 'deleteItem', 'loadFilteredData']),
		...mapActions('assignments', {
			loadAssignments: 'loadList',
			deleteDependentAssignment: 'deleteDependentAssignment',
		}),
		async onRowEditSave({ newData }) {
			try {
				await busSchema.validate(newData, { abortEarly: false })
				await this.updateItem({ itemId: newData.id, data: newData })
				this.$toast.add({ severity: 'success', summary: 'Successful', detail: 'Bus updated', life: 3000 })
			} catch (error) {
				if (error instanceof yup.ValidationError) {
					error.inner.forEach((validationError) => {
						this.$toast.add({
							severity: 'error',
							summary: 'Rejected',
							detail: validationError.message,
							life: 3000,
						})
					})
				} else {
					this.$toast.add({ severity: 'error', summary: 'Rejected', summary: error.message, life: 3000 })
				}
			}
		},
		onRowContextMenu(event) {
			this.$refs.cm.show(event.originalEvent)
		},
		async onDelete() {
			try {
				await this.deleteDependentAssignment(this.selectedItem.id)
				await this.deleteItem(this.selectedItem.id)
				this.$toast.add({ severity: 'success', summary: 'Successful', detail: 'Bus deleted', life: 3000 })
			} catch (error) {
				this.$toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
			} finally {
				this.selectedItem = null
				this.deleteFormDialog = false
			}
		},
	},
	computed: {
		...mapGetters('buses', ['getItemsList', 'isLoading', 'hasError']),
	},
	created() {
		this.loadList()
	},
}
</script>
