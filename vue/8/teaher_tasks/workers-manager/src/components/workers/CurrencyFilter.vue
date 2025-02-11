<template>
	<div>
		<label>
			Поточна валюта
			<select v-model="currentCurrency">
				<option v-for="c in currencyList" :key="c.id" :value="c.id">
					{{ c.title }}
				</option>
			</select>
		</label>
	</div>
</template>

<script>
import { currencyList } from '../../constants/settings'
export default {
	name: 'CurrencyFilter',
	props: {
		modelValue: {
			type: String,
			default: null,
		},
	},
	computed: {
		currencyList() {
			return currencyList
		},
		currentCurrency: {
			get() {
				return this.modelValue
			},
			set(val) {
				this.$emit('update:modelValue', val)
			},
		},
	},
}
</script>

<style lang="scss" scoped></style>
