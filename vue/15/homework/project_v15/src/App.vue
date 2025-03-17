<template>
	<router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useLayout } from '@/hooks/useLayout'

const { updateColors, primary, surface, isDarkMode } = useLayout()

onMounted(() => {
	if (primary.value) updateColors('primary', primary.value)
	if (surface.value) updateColors('surface', surface.value)

	if (isDarkMode.value) {
		document.documentElement.classList.add('p-dark')
	}
})
</script>
