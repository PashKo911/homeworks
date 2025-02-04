<template>
	<div class="container">
		<label class="label">
			Enter Your Name:
			<input class="input" :class="userNameClass" type="text" v-model.trim="userNameValue" />
		</label>
		<label class="label">
			Enter Your Age:
			<input
				:class="{ [userAgeClass]: userAgeClass }"
				class="input"
				type="number"
				step="1"
				v-model.number.lazy="userAgeValue" />
		</label>
	</div>
</template>

<script>
export default {
	name: 'PersonalDataForm',
	props: {
		userName: {
			type: String,
			default: 'User',
		},
		userNameModifiers: {
			default: () => ({}),
		},
		userAge: {
			type: Number,
			default: 1,
		},
		userAgeModifier: {
			default: () => ({}),
		},
	},
	computed: {
		userNameValue: {
			get() {
				return this.userName
			},
			set(newVal) {
				this.$emit('update:userName', newVal)
			},
		},
		userAgeValue: {
			get() {
				return this.userAge
			},
			set(newVal) {
				this.$emit('update:userAge', newVal)
			},
		},
		userNameClass() {
			return this.userNameModifiers.check && !this.userNameValue ? 'red' : ''
		},
		userAgeClass() {
			if (!this.userAgeModifier || !this.userAgeValue) {
				return null
			}
			if (this.userAgeValue < 18 && this.userAgeValue > 1) return 'red'
			else if (this.userAgeValue > 18) return 'green'
		},
	},
}
</script>

<style scoped>
@reference "tailwindcss";
.container {
	@apply grid gap-7 justify-center;
}

.label {
	@apply grid gap-1.5;
}

.input {
	@apply border rounded pl-1.5 h-7;
}
.green {
	@apply bg-green-500;
}
.red {
	@apply bg-red-500;
}
</style>
