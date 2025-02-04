<template>
	<div class="wrapper">
		<path-input label-title="Enter address:" v-model.check="currentPath" />
	</div>
</template>

<script>
import PathInput from './PathInput.vue'
export default {
	name: 'LayoutComponent',
	components: { PathInput },
	data() {
		return {
			currentPath: '',
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
