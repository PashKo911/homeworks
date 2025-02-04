<template>
	<div class="wrapper">
		<age-input v-model.check.setColor="userAge" />
	</div>
</template>

<script>
import AgeInput from './AgeInput.vue'

export default {
	name: 'LayoutComponent',
	components: {
		AgeInput,
	},
	data() {
		return {
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
