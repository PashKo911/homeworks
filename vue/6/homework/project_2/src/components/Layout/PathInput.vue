<template>
	<label class="label">
		<span>{{ labelTitle }}</span>
		<input
			class="input"
			:class="{ [invalidValueClass]: isValueCheckingModifierActive }"
			type="text"
			v-model.trim.lazy="currentValue" />
	</label>
</template>

<script>
export default {
	name: 'PathInput',
	props: {
		modelValue: {
			type: String,
			default: '',
		},
		labelTitle: {
			type: String,
			default: 'Enter Value',
		},
		modelModifiers: {
			default: () => ({}),
		},
		fileExtension: {
			type: String,
			default: '.js',
		},
	},
	data() {
		return {
			errorMessage: '',
		}
	},
	computed: {
		currentValue: {
			get() {
				return this.modelValue
			},
			set(newVal) {
				this.$emit('update:modelValue', newVal)
			},
		},
		invalidValueClass() {
			return this.currentValue.endsWith(this.fileExtension) ? '' : 'red'
		},
		isValueCheckingModifierActive() {
			return this.modelModifiers.checkPath && this.modelValue
		},
	},
}
</script>

<style scoped>
@reference "tailwindcss";

.label {
	@apply grid gap-1.5 max-w-2xs;
}
.input {
	@apply border rounded-md h-[1.875rem] pl-2.5;
}

.red {
	@apply bg-red-500;
}
</style>
