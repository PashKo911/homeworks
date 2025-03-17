<template>
	<Dialog v-model:visible="isDialogVisible" :style="{ width: '450px' }" header="Confirm" :modal="true">
		<div class="flex items-center gap-4">
			<i class="pi pi-exclamation-triangle !text-3xl" />
			<span> Are you sure you want to delete item? </span>
		</div>
		<template #footer>
			<Button label="No" icon="pi pi-times" text @click="isDialogVisible = false" />
			<Button label="Yes" icon="pi pi-check" @click="onDelete" />
		</template>
	</Dialog>
</template>

<script>
export default {
	name: 'DeleteDialog',
	props: {
		visible: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	methods: {
		onDelete() {
			this.$emit('onDelete')
		},
	},
	computed: {
		isDialogVisible: {
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
