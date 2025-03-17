<template>
	<Dialog
		v-model:visible="isFormVisible"
		:style="{ maxWidth: '28.125rem', width: '100%', marginLeft: '.9375rem', marginRight: '.9375rem' }"
		header="New Bus"
		:modal="true">
		<Form
			id="addNewBusForm"
			v-slot="$form"
			:resolver="resolver"
			:validateOnSubmit="true"
			@submit="onFormSubmit">
			<div class="grid gap-5">
				<div>
					<label class="block font-bold mb-3">Number</label>
					<InputText id="number" name="number" autofocus fluid />
					<small v-if="$form.number?.invalid" class="text-red-500">
						{{ $form.number.error.message }}
					</small>
				</div>
				<div>
					<label class="block font-bold mb-3">Seats</label>
					<InputNumber id="seats" name="seats" :max="40" :min="1" autofocus fluid />
					<small v-if="$form.Seats?.invalid" class="text-red-500">
						{{ $form.Seats.error.message }}
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
import { mapActions } from 'vuex'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import busSchema from '@/validation/schemas/busSchema.js'

export default {
	name: 'BusForm',
	props: {
		visible: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	data() {
		return {
			resolver: yupResolver(busSchema),
		}
	},
	methods: {
		...mapActions('buses', ['addItem']),
		async onFormSubmit({ valid, values }) {
			if (valid) {
				try {
					await this.addItem(values)
					this.$toast.add({ severity: 'success', summary: 'Successful', summary: 'Bus added', life: 3000 })
				} catch (error) {
					console.log(error)
					this.$toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
				} finally {
					this.isFormVisible = false
				}
			}
		},
	},
	computed: {
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
