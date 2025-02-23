<template>
	<div class="container">
		<div class="wrapper">
			<label class="label">
				Bus Number:
				<input type="text" class="input" v-model.trim="busData.number" />
			</label>
			<label class="label">
				Seats Number:
				<input type="number" class="input" v-model="busData.seats" />
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
	name: 'BusesForm',
	components: { ButtonComp },
	data() {
		return {
			busData: {},
		}
	},
	methods: {
		...mapActions('buses', ['editItem', 'addItem']),
		onClick() {
			if (this.currentId) this.editItem({ data: this.busData, currentProp: 'buses' })
			else this.addItem({ data: this.busData, currentProp: 'buses' })

			this.$router.push({ name: 'buses' })
		},
	},
	computed: {
		...mapGetters('buses', ['getBusById']),
		currentId() {
			return this.$route.params.busId ? Number(this.$route.params.busId) : null
		},
		buttonTitle() {
			return this.currentId ? 'Edit' : 'Add'
		},
		isSubmitButtonDisabled() {
			return !(this.busData.number && this.busData.seats)
		},
	},
	created() {
		if (this.currentId) {
			this.busData = this.getBusById(this.currentId)
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
