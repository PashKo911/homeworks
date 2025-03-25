<template>
	<app-header />
	<main>
		<Toast />
		<div class="container fullscreen pt-[7.5rem] pb-8">
			<slot />
		</div>
	</main>
	<app-footer />
</template>

<script setup>
import AppHeader from '@/components/partials/header/HeaderComp.vue'
import AppFooter from '@/components/partials/AppFooter.vue'
</script>
