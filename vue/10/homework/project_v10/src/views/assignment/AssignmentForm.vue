<template>
	<div class="wrapper">
		<h2 class="title">New Assignment:</h2>
		<select class="select" v-model="selectedDriver">
			<option value="null" class="option">Choose driver</option>
			<option class="option" v-for="driver in driversList" :key="driver.id" :value="driver.id">
				{{ driver.name }}
			</option>
		</select>
		<select class="select" v-model="selectedBus">
			<option value="null" class="option">Choose Bus</option>
			<option class="option" v-for="bus in busesList" :key="bus.id" :value="bus.id">
				{{ bus.number }}
			</option>
		</select>

		<button-comp :disabled="isSubmitButtonDisabled" @on-click="onSubmit"> Add </button-comp>
	</div>
</template>

<script>
import ButtonComp from '@/components/ui/ButtonComp.vue'

export default {
	name: 'AssignmentForm',
	components: {
		ButtonComp,
	},
	props: {
		busesList: {
			type: Array,
			required: true,
		},
		driversList: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			selectedDriver: null,
			selectedBus: null,
		}
	},
	methods: {
		onSubmit() {
			this.$emit('onSubmit', {
				driverId: this.selectedDriver,
				busId: this.selectedBus,
			})
			this.selectedBus = null
			this.selectedDriver = null
		},
	},
	computed: {
		isSubmitButtonDisabled() {
			return !this.selectedBus || !this.selectedDriver
		},
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	display: grid;
	gap: toRem(30);
	max-width: toRem(600);
	border-radius: toRem(10);
	box-shadow: 0 0 toRem(9) rgba(0, 0, 0, 0.15);
	@include adaptiveValue('padding', 30, 15);
}
.option {
	font-weight: 500;
	font-size: toRem(20);
}
.title {
	font-weight: 500;
	@include adaptiveValue('font-size', 22, 18);
}
.select {
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	padding: toRem(3) toRem(10);
	margin-top: toRem(5);
	font-family: inherit;
	font-size: inherit;
}
</style>
