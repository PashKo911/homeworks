<template>
	<header-nav />
	<main>
		<RouterView />
	</main>
	<footer-comp />
</template>

<script>
import HeaderNav from '@/components/Partials/HeaderNav.vue'
import FooterComp from '../Partials/FooterComp.vue'
export default {
	components: { HeaderNav, FooterComp },
	name: 'LayoutComp',
}
</script>

<style lang="scss" scoped></style>
