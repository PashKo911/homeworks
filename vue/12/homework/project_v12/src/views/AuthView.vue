<template>
	<div class="container wrapper">
		<form class="form content">
			<h1 class="title">Login Form</h1>
			<div class="inputs">
				<label class="label">
					User Name:
					<input type="text" class="input" v-model.lazy.trim="userData.firstName" />
				</label>
				<label class="label">
					Password:
					<input type="password" class="input" v-model.lazy.trim="userData.password" />
				</label>
			</div>
			<base-button @on-click="onClick"> Submit </base-button>
		</form>
	</div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import { mapActions } from 'vuex'
export default {
	name: 'AuthView',
	components: {
		BaseButton,
	},
	data() {
		return {
			userData: {},
		}
	},
	methods: {
		...mapActions('auth', ['login']),
		onClick() {
			if (this.$route.query.redirect) {
				this.$router.push({ path: this.$route.query.redirect })
			} else
				this.$router.push({
					name: 'home',
				})

			this.login(this.userData)
		},
	},
}
</script>

BaseButton
<style lang="scss" scoped>
.container {
}
.form {
	display: grid;
	gap: toRem(30);
	place-items: center;
	@include adaptiveValue('width', 600, 290, 0, 600, 320);
}
.title {
	font-weight: 600;
	@include adaptiveValue('font-size', 24, 20, 0, 600, 320);
}
.inputs {
	display: grid;
	gap: toRem(30);
	width: 100%;
}
.label {
	display: grid;
	gap: toRem(5);
	font-weight: 500;
}
.input {
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	padding: toRem(3) toRem(15);
}
</style>
