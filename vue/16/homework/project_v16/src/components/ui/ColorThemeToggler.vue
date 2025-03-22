<template>
	<div class="relative">
		<Button
			v-styleclass="{
				selector: '@next',
				enterFromClass: 'hidden',
				enterActiveClass: 'animate-scalein',
				leaveToClass: 'hidden',
				leaveActiveClass: 'animate-fadeout',
				hideOnOutsideClick: true,
			}"
			icon="pi pi-palette"
			rounded
			variant="outlined"
			aria-label="Themes Palette" />
		<div class="absolute top-[54px] right-0 origin-top z-50 hidden w-64">
			<AppConfig />
		</div>
	</div>
</template>

<script>
import AppConfig from '@/components/partials/AppConfig.vue'

export default {
	name: 'ColorThemeToggler',
	components: {
		AppConfig,
	},
}
</script>

<style lang="scss" scoped></style>
