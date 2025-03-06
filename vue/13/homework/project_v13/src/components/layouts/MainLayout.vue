<template>
	<header-nav />
	<main>
		<slot />
	</main>
	<footer-comp>
		<template #footer-left>
			<slot name="footer-left" />
		</template>
		<template #footer>
			<slot name="footer" />
		</template>
	</footer-comp>
</template>

<script>
import HeaderNav from '@/components/partials/HeaderNav.vue'
import FooterComp from '../partials/FooterComp.vue'
export default {
	components: { HeaderNav, FooterComp },
	name: 'MainLayout',
}
</script>

<style lang="scss" scoped></style>
