<template>
	<div class="wrapper">
		<div class="select-wrp" :class="{ active: rangeValue.from }">
			<close-icon class="icon" @click="onClear('from')" />
			<select class="select" v-model="rangeValue.from">
				<option value="null">From</option>
				<option v-for="item in sortedAscItems" :key="item.id" :value="item.label">
					{{ item.label }}
				</option>
			</select>
		</div>
		<div class="select-wrp" :class="{ active: rangeValue.to }">
			<close-icon class="icon" @click="onClear" />
			<select class="select" v-model="rangeValue.to">
				<option value="null">To</option>
				<option v-for="item in sortedDescItems" :key="item.id" :value="item.label">
					{{ item.label }}
				</option>
			</select>
		</div>
	</div>
</template>

<script>
import CloseIcon from '../icons/CloseIcon.vue'
export default {
	name: 'RangeInput',
	components: {
		CloseIcon,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
		modelValue: {
			type: Object,
			default: () => ({
				from: null,
				to: null,
			}),
		},
	},
	methods: {
		onClear(field) {
			if (field === 'from') this.rangeValue.from = null
			else this.rangeValue.to = null
		},
	},
	computed: {
		sortedAscItems() {
			return [...this.items].sort((a, b) => a.label - b.label)
		},
		sortedDescItems() {
			return [...this.items].sort((a, b) => b.label - a.label)
		},
		rangeValue: {
			get() {
				return this.modelValue
			},
			set(newVal) {
				console.log(newVal)
				this.$emit('update:modelValue', { ...this.modelValue, ...newVal })
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	align-items: center;
	gap: toRem(15);
}
.select {
	padding: toRem(2) toRem(10) toRem(2) 0;
	font-family: inherit;
	font-size: inherit;
	border-radius: toRem(4);
	outline: none;
}
.select-wrp {
	position: relative;
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	padding-left: toRem(20);
	overflow: hidden;
}
.icon {
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	left: -100%;
	cursor: pointer;
	transition: left 0.2s;

	.active & {
		left: 0%;
	}
}
</style>
