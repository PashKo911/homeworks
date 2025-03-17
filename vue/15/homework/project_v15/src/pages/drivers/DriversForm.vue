<template>
	<Dialog
		v-model:visible="isFormVisible"
		:style="{ maxWidth: '28.125rem', width: '100%', marginLeft: '.9375rem', marginRight: '.9375rem' }"
		header="New Driver"
		:modal="true">
		<Form id="addNewForm" v-slot="$form" :resolver="resolver" :validateOnSubmit="true" @submit="onFormSubmit">
			<div class="grid gap-5">
				<div>
					<label class="block font-bold mb-3">Name</label>
					<InputText id="name" name="name" autofocus fluid />
					<small v-if="$form.name?.invalid" class="text-red-500">
						{{ $form.name.error.message }}
					</small>
				</div>
				<div>
					<label class="block font-bold mb-3">Experience</label>
					<InputNumber id="experience" name="experience" :max="40" :min="1" autofocus fluid />
					<small v-if="$form.experience?.invalid" class="text-red-500">
						{{ $form.experience.error.message }}
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
import driverSchema from '@/validation/schemas/driverSchema.js'

export default {
	name: 'DriversForm',
	props: {
		visible: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	data() {
		return {
			resolver: yupResolver(driverSchema),
		}
	},
	methods: {
		...mapActions('drivers', ['addItem']),
		async onFormSubmit({ valid, values }) {
			if (valid) {
				try {
					await this.addItem(values)
					this.$toast.add({ severity: 'success', summary: 'Successful', summary: 'Driver added', life: 3000 })
				} catch (error) {
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
