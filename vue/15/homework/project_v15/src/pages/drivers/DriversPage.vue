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
						<h1 class="title text-center mb-4">Our drivers</h1>
						<small class="absolute right-2 top-0 text-red-500">
							Видалення за допомогою правої кнопки миші
						</small>
						<div class="flex items-center justify-between gap-2 flex-wrap-reverse">
							<div class="flex items-center gap-4">
								<IconField class="shrink">
									<InputIcon>
										<i class="pi pi-search" />
									</InputIcon>
									<InputText @input="handleSearchInput" class="w-full" placeholder="Search" />
								</IconField>
								<div class="flex items-center gap-4">
									<div class="w-[70px]">
										<InputNumber
											@input="handleRangeInput('from', $event)"
											id="from"
											name="from"
											:max="40"
											:min="1"
											placeholder="From"
											fluid />
									</div>
									<div class="w-[70px]">
										<InputNumber
											@input="handleRangeInput('to', $event)"
											id="to"
											name="to"
											:max="40"
											:min="1"
											placeholder="To"
											fluid />
									</div>
								</div>
							</div>
							<Button label="New" icon="pi pi-plus" class="shrink-0" @click="formDialog = true" />
						</div>
					</template>
					<Column field="name" header="Name" style="width: 20%" sortable>
						<template #editor="{ data, field }">
							<InputText v-model.trim="data[field]" required fluid />
						</template>
					</Column>
					<Column field="experience" header="Experience" style="width: 20%" sortable>
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
			<drivers-form v-model:visible="formDialog" />
			<delete-dialog v-model:visible="deleteFormDialog" @on-delete="onDelete" />
		</div>
	</main-layout>
</template>

<script>
import * as yup from 'yup'
import { mapActions, mapGetters } from 'vuex'
import debounce from '@/utils/debounce.js'
import driverSchema from '@/validation/schemas/driverSchema.js'

import MainLayout from '@/components/layouts/MainLayout.vue'
import DriversForm from './DriversForm.vue'
import DeleteDialog from '@/components/ui/DeleteDialog.vue'

export default {
	name: 'DriversPage',
	components: {
		MainLayout,
		DriversForm,
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
			queryOptData: {
				name: null,
				range: {
					from: null,
					to: null,
				},
			},
		}
	},
	mounted() {
		this.loadList()
	},
	methods: {
		...mapActions('drivers', ['loadList', 'updateItem', 'deleteItem', 'loadFilteredData']),
		...mapActions('assignments', {
			loadAssignments: 'loadList',
			deleteDependentAssignment: 'deleteDependentAssignment',
		}),
		async onRowEditSave({ newData }) {
			try {
				await driverSchema.validate(newData, { abortEarly: false })
				await this.updateItem({ itemId: newData.id, data: newData })
				this.$toast.add({ severity: 'success', summary: 'Successful', detail: 'Driver updated', life: 3000 })
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
				this.$toast.add({ severity: 'success', summary: 'Successful', detail: 'Driver deleted', life: 3000 })
			} catch (error) {
				this.$toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
			} finally {
				this.selectedItem = null
				this.deleteFormDialog = false
			}
		},
		handleSearchInput: debounce(function (event) {
			this.queryOptData.name = event.target.value.trim()
		}),
		handleRangeInput: debounce(function (field, event) {
			this.queryOptData.range[field] = event.value
		}),
		loadData() {
			const filtersOptions = []
			const { from, to } = this.queryOptData.range

			if (this.queryOptData.name) {
				filtersOptions.push({
					fieldTitle: 'name',
					compareOperator: '==',
					valueToCompare: this.queryOptData.name,
				})
			}

			if (from) {
				filtersOptions.push({
					fieldTitle: 'experience',
					compareOperator: '>=',
					valueToCompare: from,
				})
			}
			if (to) {
				filtersOptions.push({
					fieldTitle: 'experience',
					compareOperator: '<=',
					valueToCompare: to,
				})
			}

			if (filtersOptions.length > 0) {
				this.loadFilteredData({ filtersOptions })
			} else {
				this.loadList()
			}
		},
	},
	computed: {
		...mapGetters('drivers', ['getItemsList', 'isLoading', 'hasError']),
	},
	watch: {
		queryOptData: {
			handler() {
				this.loadData()
			},
			deep: true,
		},
	},
	created() {
		this.loadAssignments()
	},
}
</script>
