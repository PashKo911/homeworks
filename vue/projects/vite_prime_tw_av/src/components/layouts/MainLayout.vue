<template>
	<app-header />
	<main>
		<slot />
	</main>
	<app-footer />
</template>

<script>
import AppHeader from '@/components/partials/AppHeader.vue'
import AppFooter from '@/components/partials/AppFooter.vue'
export default {
	name: 'MainLayout',
	components: {
		AppHeader,
		AppFooter,
	},
}
</script>

<style lang="scss" scoped></style>
