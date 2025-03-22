<template>
	<Toast />
	<page-loader :loading="loading" />
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
	props: {
		loading: {
			type: Boolean,
			default: false,
		},
		hasError: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		hasError(error) {
			this.$toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
		},
	},
}
</script>
