<template>
	<label class="label">
		<span>{{ labelTitle }}</span>
		<div class="container">
			<input
				class="input"
				:class="{ [invalidValueClass]: isValueCheckingModifierActive }"
				type="text"
				v-model.trim.lazy="currentValue" />
			<span> {{ domainAddress }} </span>
		</div>
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
		domainAddress: {
			type: String,
			default: '@inv.mn.edu',
		},
	},
	methods: {
		validateAddress(address) {
			const regex = /^[a-zA-Z0-9._%+-]+$/
			return regex.test(address)
		},
	},

	computed: {
		currentValue: {
			get() {
				return this.modelValue.split(this.domainAddress)[0]
			},
			set(newVal) {
				const fullAddress = `${newVal}${this.domainAddress}`
				this.$emit('update:modelValue', fullAddress)
			},
		},
		invalidValueClass() {
			return this.validateAddress(this.currentValue) ? '' : 'red'
		},
		isValueCheckingModifierActive() {
			return this.modelModifiers.check && this.modelValue
		},
	},
}
</script>

<style scoped>
@reference "tailwindcss";

.label {
	@apply grid gap-1.5 max-w-2xs;
}
.container {
	@apply flex gap-1.5 items-center;
}
.input {
	@apply border-b h-[1.875rem] pl-2.5;
}

.red {
	@apply bg-red-500;
}
</style>
