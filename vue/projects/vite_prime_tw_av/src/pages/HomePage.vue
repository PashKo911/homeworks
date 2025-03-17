<template>
	<main-layout>
		<div class="container wrapper">
			<h2 class="title">Home Page</h2>
		</div>
	</main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'

export default {
	name: 'HomePage',
	components: {
		MainLayout,
	},
}
</script>

<style lang="scss" scoped>
.container {
	padding-top: 5.625rem;
	padding-bottom: 1.875rem;
}
</style>
