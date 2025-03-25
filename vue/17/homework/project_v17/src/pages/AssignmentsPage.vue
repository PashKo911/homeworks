<template>
	<main-layout>
		<div class="relative p-3 bg-white dark:bg-surface-900 rounded-2xl shadow-md dark:shadow-none">
			<DataTable
				:value="populatedAssignmentsList"
				:loading="isLoading"
				removableSort
				tableStyle="min-width: 300px">
				<template #header>
					<div class="flex items-center justify-between gap-4 flex-wrap">
						<h2 class="title">Assignments</h2>
						<Form
							v-slot="$form"
							:resolver="resolver"
							@submit="onFormSubmit"
							:validateOnSubmit="true"
							:validateOnValueUpdate="false"
							class="flex gap-4">
							<div class="flex flex-col gap-1 relative">
								<Select
									name="friendId"
									:options="friendsList"
									showClear
									optionLabel="name"
									optionValue="id"
									placeholder="Select a Friend"
									class="w-50" />
								<small
									v-if="$form.friendId?.invalid"
									class="absolute -translate-y-full left-0.5 text-sm text-red-500">
									{{ $form.friendId.error.message }}
								</small>
							</div>
							<div class="flex flex-col gap-1 relative">
								<Select
									name="giftId"
									:options="giftsList"
									showClear
									optionLabel="name"
									optionValue="id"
									placeholder="Select a Gift"
									class="w-46" />
								<small
									v-if="$form.giftId?.invalid"
									class="absolute -translate-y-full left-0.5 text-sm text-red-500">
									{{ $form.giftId.error.message }}
								</small>
							</div>
							<Button type="submit" label="Submit" />
						</Form>
					</div>
				</template>
				<Column field="friendName" sortable header="Friend Name"></Column>
				<Column field="giftName" sortable header="Gift Name"></Column>
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
	</main-layout>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import * as yup from 'yup'
import { yupResolver } from '@primevue/forms/resolvers/yup'

import { useFriendsStore } from '@/stores/useFriendsStore'
import { useGiftsStore } from '@/stores/useGiftsStore'
import { useAssignmentsStore } from '@/stores/useAssignmentStore.js'
import { useToast } from 'primevue/usetoast'

import MainLayout from '@/components/layouts/MainLayout.vue'

const toast = useToast()
const assignmentsStore = useAssignmentsStore()

const friendsStore = useFriendsStore()
const giftsStore = useGiftsStore()

const { loadList: loadAssignments, computePopulation, addItem, deleteItem } = assignmentsStore

const { populatedAssignmentsList, getItemsList, isLoading, getItemsTest } = storeToRefs(assignmentsStore)
const { getItemsList: friendsList, isLoading: isFriendsLoading } = storeToRefs(friendsStore)
const { getItemsList: giftsList, isLoading: isGiftsLoading } = storeToRefs(giftsStore)

onMounted(async () => {
	await Promise.all([friendsStore.loadList(), giftsStore.loadList(), loadAssignments()])
	console.log(getItemsTest.value)
})

const schema = yup.object({
	friendId: yup.string().required('Required'),
	giftId: yup.string().required('Required'),
})

const resolver = ref(yupResolver(schema))

const onFormSubmit = async ({ valid, values, reset }) => {
	if (valid) {
		try {
			await addItem(values)
			computePopulation()
			toast.add({ severity: 'success', summary: 'Success', detail: 'Assignment Added', life: 3000 })
		} catch (error) {
			toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
		} finally {
			reset()
		}
	}
}

const onDelete = async (id) => {
	try {
		await deleteItem(id)
		computePopulation()
		toast.add({ severity: 'success', summary: 'Success', detail: 'Item Deleted', life: 3000 })
	} catch (error) {
		toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
	}
}
</script>
