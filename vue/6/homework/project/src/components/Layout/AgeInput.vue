<template>
	<div v-if="errorMessage" class="error">
		{{ errorMessage }}
	</div>
	<label class="label">
		<span>{{ labelTitle }}</span>
		<input
			class="input"
			:class="{ [rangeClass]: modelModifiers.setColor }"
			type="number"
			v-model.number.lazy="currentValue" />
	</label>
</template>

<script>
export default {
	name: 'AgeInput',
	props: {
		modelValue: {
			type: Number,
			default: 1,
		},
		labelTitle: {
			type: String,
			default: 'Enter Value',
		},
		modelModifiers: {
			default: () => ({}),
		},
		maxValue: {
			type: Number,
			default: 150,
		},
		minValue: {
			type: Number,
			default: 1,
		},
		rangesList: {
			type: Object,
			default: () => ({ green: 0, yellow: 10, orange: 21 }),
		},
	},
	data() {
		return {
			errorMessage: null,
		}
	},
	methods: {
		validateInput(value) {
			if (value < this.minValue || value > this.maxValue) {
				this.errorMessage = `Allowed values (Min: ${this.minValue}, Max: ${this.maxValue}) `
			} else {
				this.errorMessage = ''
			}
		},
		getRangeClass() {
			if (!this.modelModifiers.setColor || !this.currentValue) return ''

			const sortedRanges = Object.entries(this.rangesList).sort((a, b) => b[1] - a[1])

			for (const [range, limit] of sortedRanges) {
				if (this.currentValue >= limit) return range
			}
			return ''
		},
	},
	computed: {
		currentValue: {
			get() {
				return this.modelValue
			},
			set(newValue) {
				if (this.modelModifiers.check) {
					this.validateInput(newValue)
				}
				this.$emit('update:modelValue', newValue)
			},
		},
		rangeClass() {
			return this.getRangeClass()
		},
	},
}
</script>

<style scoped>
@reference "tailwindcss";

.error {
	@apply py-1 px-2 border border-red-600 bg-red-300 rounded-sm w-max absolute top-0 left-0 text-sm;
}
.label {
	@apply grid gap-1.5 max-w-2xs;
}
.input {
	@apply border rounded-md h-[1.875rem] pl-2.5;
}
.green {
	@apply bg-green-500;
}
.yellow {
	@apply bg-yellow-300;
}
.orange {
	@apply bg-orange-500;
}
</style>
