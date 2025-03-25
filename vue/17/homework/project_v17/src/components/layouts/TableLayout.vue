<template>
	<div class="relative p-3 bg-white dark:bg-surface-900 rounded-2xl shadow-md dark:shadow-none">
		<DataTable :value="getItemsList" :loading="isLoading" removableSort tableStyle="min-width: 300px">
			<template #header>
				<div class="flex items-center justify-between gap-4 flex-wrap">
					<h2 class="title">{{ collectionTitle }}</h2>
					<Form
						v-slot="$form"
						:resolver="resolver"
						@submit="onFormSubmit"
						:validateOnSubmit="true"
						:validateOnValueUpdate="false"
						class="flex gap-4">
						<div class="flex flex-col gap-1 relative">
							<InputText name="name" type="text" placeholder="New Item" class="w-[8.75rem]" />
							<small
								v-if="$form.name?.invalid"
								class="absolute -translate-y-full left-0.5 text-sm text-red-500">
								{{ $form.name.error.message }}
							</small>
						</div>
						<Button type="submit" label="Submit" />
					</Form>
				</div>
			</template>
			<Column field="name" sortable header="Name"></Column>
			<Column header="Actions">
				<template #body="{ data }">
					<Button
						icon="pi pi-trash"
						severity="danger"
						variant="text"
						raised
						rounded
						aria-label="Cancel"
						@click="onDelete(data.id)" />
				</template>
			</Column>
		</DataTable>
	</div>
</template>

<script setup>
import { defineProps, computed, onMounted, ref } from 'vue'
import { useCrudStore } from '@/stores/useCrudStore.js'
import { storeToRefs } from 'pinia'
import * as yup from 'yup'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import { useToast } from 'primevue/usetoast'

const props = defineProps({
	collectionName: {
		type: String,
		required: true,
	},
	collectionTitle: {
		type: String,
		default: 'Items List',
	},
})

const toast = useToast()
const crudStore = useCrudStore(props.collectionName)()

const { isLoading, getItemsList } = storeToRefs(crudStore)

onMounted(() => {
	crudStore.loadList()
})

const schema = yup.object({
	name: yup.string().required('Required').min(3, 'Min 3 chars').max(40),
})

const resolver = ref(yupResolver(schema))

const onFormSubmit = async ({ valid, values, reset }) => {
	if (valid) {
		try {
			await crudStore.addItem(values)
			toast.add({ severity: 'success', summary: 'Success', detail: 'Item Added', life: 3000 })
		} catch (error) {
			toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
		} finally {
			reset()
		}
	}
}

const onDelete = async (id) => {
	try {
		await crudStore.deleteItem(id)
		toast.add({ severity: 'success', summary: 'Success', detail: 'Item Deleted', life: 3000 })
	} catch (error) {
		toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
	}
}
</script>
