<template>
	<Dialog v-model:visible="isFormVisible" modal :header="formTitle" :style="{ width: '25rem' }">
		<Form
			v-slot="$form"
			:resolver="resolver"
			:initialValues="productData"
			:validateOnSubmit="true"
			@submit="onFormSubmit"
			class="flex flex-col gap-4 w-full">
			<div class="flex flex-col gap-1">
				<InputText name="title" type="text" :placeholder="$t('productForm.titleInput')" fluid />
				<small v-if="$form.title?.invalid" class="text-red-500">{{ $form.title.errors[0] }}</small>
			</div>
			<div class="flex flex-col gap-1">
				<InputText name="imgSrc" type="text" :placeholder="$t('productForm.imageInput')" fluid />
				<small v-if="$form.imgSrc?.invalid" class="text-red-500">{{ $form.imgSrc.errors[0] }}</small>
			</div>
			<div class="flex flex-col gap-1">
				<InputNumber name="price" :placeholder="$t('productForm.priceInput')" fluid />
				<small v-if="$form.price?.invalid" class="text-red-500">{{ $form.price.errors[0] }}</small>
			</div>
			<div>
				<Select
					name="seller"
					:options="sellers"
					optionValue="id"
					optionLabel="name"
					:placeholder="$t('productForm.sellerInput')"
					class="w-full" />
				<small v-if="$form.seller?.invalid" class="text-red-500">{{ $form.seller.errors[0] }}</small>
			</div>
			<div>
				<Select
					name="brand"
					:options="brands"
					optionLabel="name"
					optionValue="id"
					:placeholder="$t('productForm.brandInput')"
					class="w-full" />
				<small v-if="$form.brand?.invalid" class="text-red-500">{{ $form.brand.errors[0] }}</small>
			</div>
			<div class="flex justify-end gap-2">
				<Button
					type="button"
					:label="$t('productForm.closeButton')"
					severity="secondary"
					@click="isFormVisible = false"></Button>
				<Button type="submit" :label="formTitle"></Button>
			</div>
		</Form>
	</Dialog>
</template>

<script>
import * as yup from 'yup'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import { Form } from '@primevue/forms'

const schema = yup.object().shape({
	title: yup.string().required().min(3).max(500),
	imgSrc: yup.string().required().url(),
	price: yup.number().required().positive().integer().min(10),
	seller: yup.string().required(),
	brand: yup.string().required(),
})

export default {
	name: 'ProductForm',
	components: {
		Form,
	},
	props: {
		visible: {
			type: Boolean,
			default: false,
			required: true,
		},
		productData: {
			type: Object,
			default: () => null,
		},
		sellers: {
			type: Array,
			default: () => [],
		},
		brands: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			formData: {},
			resolver: yupResolver(schema),
		}
	},
	methods: {
		async onFormSubmit({ valid, values }) {
			if (valid) {
				this.$emit('on-form-submit', { id: this.productData?.id, values })
			}
		},
	},
	computed: {
		formTitle() {
			return this.productData ? this.$t('productForm.editTitle') : this.$t('productForm.addTitle')
		},
		isFormVisible: {
			get() {
				return this.visible
			},
			set(newValue) {
				this.$emit('update:visible', newValue)
			},
		},
	},
}
</script>
