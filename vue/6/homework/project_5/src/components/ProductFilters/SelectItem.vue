<template>
	<label class="label">
		<input class="input" type="checkbox" v-model="selectedValue" />
		<div class="custom">
			<Check class="icon" />
		</div>
		{{ filter.name }}
	</label>
</template>

<script>
import Check from '../icons/Check.vue'
export default {
	name: 'SelectItem',
	components: {
		Check,
	},
	props: {
		modelValue: {
			type: Object,
			required: true,
		},
		filter: {
			type: Object,
			required: true,
		},
	},
	computed: {
		selectedValue: {
			get() {
				return this.modelValue.includes(this.filter.id)
			},
			set(value) {
				let newValue = [...this.modelValue]
				if (value) {
					newValue.push(this.filter.id)
				} else {
					newValue = newValue.filter((id) => id !== this.filter.id)
				}
				this.$emit('update:modelValue', newValue)
			},
		},
	},
}
</script>

<style scoped>
@reference "tailwindcss";

.label {
	@apply flex items-center gap-2 cursor-pointer w-max capitalize;
}
.input {
	@apply opacity-0 absolute pointer-events-none hidden;
}
.custom {
	@apply w-4.5 h-4.5 border rounded-[.125rem] flex items-center justify-center   transition-all;
}
.input:checked + .custom {
	@apply bg-green-500 border-transparent;
}
.input:checked + .custom .icon {
	@apply opacity-100;
}
.icon {
	@apply text-white opacity-0 transition-opacity duration-200;
}
</style>
