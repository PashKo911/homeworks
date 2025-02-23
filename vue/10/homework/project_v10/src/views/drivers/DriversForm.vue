<template>
	<div class="container">
		<div class="wrapper">
			<label class="label">
				Enter Name:
				<input type="text" class="input" v-model.trim="driverData.name" />
			</label>
			<label class="label">
				Enter Experience:
				<input type="number" class="input" v-model="driverData.experience" />
			</label>
			<button-comp :disabled="isSubmitButtonDisabled" @on-click="onClick">
				{{ buttonTitle }}
			</button-comp>
		</div>
	</div>
</template>

<script>
import ButtonComp from '@/components/ui/ButtonComp.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'DriversForm',
	components: { ButtonComp },
	data() {
		return {
			driverData: {
				name: null,
				experience: null,
			},
		}
	},
	methods: {
		...mapActions('drivers', ['editItem', 'addItem']),
		onClick() {
			if (this.currentId) this.editItem({ data: this.driverData, currentProp: 'drivers' })
			else this.addItem({ data: this.driverData, currentProp: 'drivers' })

			this.$router.push({ name: 'drivers' })
		},
	},
	computed: {
		...mapGetters('drivers', ['getDriverById']),
		currentId() {
			return this.$route.params.driversId ? Number(this.$route.params.driversId) : null
		},
		buttonTitle() {
			return this.currentId ? 'Edit' : 'Add'
		},
		isSubmitButtonDisabled() {
			return !(this.driverData.name && this.driverData.experience)
		},
	},
	created() {
		if (this.currentId) {
			this.driverData = { ...this.getDriverById(this.currentId) }
		}
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.wrapper {
	display: grid;
	gap: toRem(30);
	max-width: toRem(600);
	border-radius: toRem(10);
	box-shadow: 0 0 toRem(9) rgba(0, 0, 0, 0.15);
	@include adaptiveValue('padding', 30, 15);
}
.label {
	font-weight: 500;
	font-size: toRem(20);
}
.input {
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	padding: toRem(3) toRem(10);
	margin-top: toRem(5);
}
</style>
