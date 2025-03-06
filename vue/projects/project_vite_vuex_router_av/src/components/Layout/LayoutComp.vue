<template>
	<header-nav />
	<main>
		<router-view />
	</main>
	<footer-comp />
</template>

<script>
import HeaderNav from '@/components/partials/HeaderNav.vue'
import FooterComp from '../partials/FooterComp.vue'
export default {
	components: { HeaderNav, FooterComp },
	name: 'LayoutComp',
}
</script>

<style lang="scss" scoped></style>
