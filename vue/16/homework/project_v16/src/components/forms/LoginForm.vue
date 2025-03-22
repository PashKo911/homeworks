<template>
	<Dialog v-model:visible="isFormVisible" modal :header="$t('loginForm.title')" :style="{ width: '25rem' }">
		<div class="flex gap-2.5 items-center font-semibold mb-8">
			<i class="pi pi-google"></i>
			<span>
				{{ $t('loginForm.subtitle') }}
			</span>
		</div>
		<div class="flex justify-end gap-2">
			<Button
				type="button"
				:label="$t('loginForm.closeButton')"
				severity="secondary"
				@click="isFormVisible = false"></Button>
			<Button type="button" :label="$t('loginForm.title')" @click="$emit('onLogin')"></Button>
		</div>
	</Dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'LoginForm',
	props: {
		visible: {
			type: Boolean,
			default: false,
			required: true,
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

<style lang="scss" scoped></style>
