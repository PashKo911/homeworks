<template>
	<div class="wrapper">
		<personal-data-form v-model:userName.check="userName" v-model:userAge.check="userAge" />
	</div>
</template>

<script>
import PersonalDataForm from './PersonalDataForm.vue'

export default {
	name: 'LayoutComponent',
	components: { PersonalDataForm },
	data() {
		return {
			userName: null,
			userAge: null,
		}
	},
}
</script>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply rounded-2xl relative shadow-[0_0_15px_rgba(0,0,0,0.1),0_0_30px_rgba(0,0,0,0.1)];
}
</style>
<style lang="scss" scoped>
.wrapper {
	@include adaptiveValue('padding', 40, 15);
}
</style>
