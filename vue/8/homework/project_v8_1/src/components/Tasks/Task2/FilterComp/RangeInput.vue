<template>
	<div class="body">
		<h2 class="title">Рік</h2>
		<div class="wrapper">
			<label class="label">
				<input
					class="input"
					type="number"
					v-model.number.lazy="currentValue.from"
					placeholder="Від"
					:min="minMaxRange.from"
					:max="minMaxRange.to" />
			</label>
			<label class="label">
				<input
					class="input"
					type="number"
					v-model.number.lazy="currentValue.to"
					placeholder="До"
					:min="minMaxRange.from"
					:max="minMaxRange.to" />
			</label>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RangeInput',
	props: {
		minMaxRange: {
			type: Object,
			default: () => ({
				from: 1900,
				to: new Date().getFullYear(),
			}),
		},
		modelValue: {
			type: Object,
			default: () => ({ from: null, to: null }),
		},
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
	},
}
</script>

<style lang="scss" scoped>
.body {
}
.input {
	border: toRem(1) solid #000;
	padding: toRem(3) toRem(10);
	border-radius: toRem(4);

	&::placeholder {
		color: #000;
	}
}
.wrapper {
	display: flex;
	align-items: center;
	gap: toRem(15);
}
.label {
}
</style>
