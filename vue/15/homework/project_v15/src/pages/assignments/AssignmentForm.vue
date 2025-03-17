<template>
	<Dialog
		v-model:visible="isFormVisible"
		:style="{ maxWidth: '28.125rem', width: '100%', marginLeft: '.9375rem', marginRight: '.9375rem' }"
		header="New Assignment"
		:modal="true">
		<Form
			id="addNewAssignment"
			v-slot="$form"
			:resolver="resolver"
			:validateOnSubmit="true"
			@submit="onFormSubmit">
			<div class="grid gap-5">
				<div>
					<Select
						name="driverId"
						:options="freeDriversList"
						optionLabel="name"
						optionValue="id"
						placeholder="Select a Driver"
						showClear
						class="w-full" />

					<small v-if="$form.driverId?.invalid" class="text-red-500">
						{{ $form.driverId.errors[0] }}
					</small>
				</div>
				<div>
					<Select
						name="busId"
						:options="freeBusesList"
						optionLabel="number"
						optionValue="id"
						placeholder="Select a Bus"
						showClear
						class="w-full" />

					<small v-if="$form.busId?.invalid" class="text-red-500">
						{{ $form.busId.errors[0] }}
					</small>
				</div>

				<div class="flex items-center justify-end gap-4">
					<Button label="Cancel" icon="pi pi-times" text @click="isFormVisible = false" />
					<Button id="addNewForm" label="Save" icon="pi pi-check" type="submit" />
				</div>
			</div>
		</Form>
	</Dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import assignmentSchema from '@/validation/schemas/assignmentSchema.js'

export default {
	name: 'AssignmentsForm',
	props: {
		visible: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	data() {
		return {
			resolver: yupResolver(assignmentSchema),
		}
	},
	methods: {
		...mapActions('assignments', ['addItem']),
		async onFormSubmit({ valid, values }) {
			if (valid) {
				try {
					await this.addItem(values)
					this.$toast.add({
						severity: 'success',
						summary: 'Successful',
						summary: 'Assignment added',
						life: 3000,
					})
				} catch (error) {
					this.$toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
				} finally {
					this.isFormVisible = false
				}
			}
		},
	},
	computed: {
		...mapGetters('buses', ['freeBusesList']),
		...mapGetters('drivers', ['freeDriversList']),
		isFormVisible: {
			get() {
				return this.visible
			},
			set(newVal) {
				this.$emit('update:visible', newVal)
			},
		},
	},
}
</script>
