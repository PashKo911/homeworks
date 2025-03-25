<template>
	<app-header />
	<main>
		<slot />
	</main>
	<app-footer />
</template>

<script setup>
import AppHeader from '@/components/partials/header/HeaderComp.vue'
import AppFooter from '@/components/partials/AppFooter.vue'
</script>
