<template>
	<app-header />
	<main>
		<Toast />
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
	props: {
		hasError: {
			type: Object,
			default: {},
		},
	},
	watch: {
		hasError(error) {
			this.$toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
		},
	},
}
</script>

<style lang="scss" scoped></style>
