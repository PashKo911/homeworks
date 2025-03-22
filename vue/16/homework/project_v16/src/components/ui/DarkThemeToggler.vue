<template>
	<button
		type="button"
		class="w-10 h-10 flex items-center justify-center focus-visible:outline-none enabled:hover:bg-primary-500/15 rounded-full transition-all text-surface-900 dark:text-surface-0 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-950 z-10 border border-primary-200 dark:border-primary-700"
		aria-label="Toggle dark mode"
		@click="toggleDarkMode">
		<i :class="['pi text-base', { 'pi-moon': isDarkMode, 'pi-sun': !isDarkMode }]" class="text-primary" />
	</button>
</template>

<script setup>
import { useLayout } from '@/hooks/useLayout'

const { isDarkMode, toggleDarkMode } = useLayout()
</script>
