<template>
	<header
		:class="{ 'menu-open': isMenuOpen }"
		class="bg-surface-0/20 dark:bg-surface-900/30 backdrop-blur-sm fixed top-0 left-0 w-full z-50 border-y-[1px] border-surface-200 dark:border-surface-700 backdrop-blur">
		<div class="container flex items-center justify-between gap-4 py-2">
			<logo aria-label="Site's logotype" class="shrink-0 z-10" />
			<nav
				:class="showMenuClasses"
				class="max-md:fixed max-md:w-full max-md:top-0 max-md:h-screen max-md:overflow-auto max-md:px-4 max-md:pt-[6.625rem] max-md:pb-8 max-md:transition-all max-md:duration-200 max-md:bg-surface-0 max-md:dark:bg-surface-900">
				<ul class="flex items-center gap-8 max-md:flex-col">
					<li v-for="r in routes" :key="r.path">
						<router-link
							class="text-2xl md:text-lg font-medium hover:text-primary transition-colors duration-300 capitalize"
							active-class="text-primary"
							:to="{ name: r.name }">
							{{ r.name }}
						</router-link>
					</li>
				</ul>
			</nav>
			<div class="flex items-center gap-2">
				<header-dark-theme-toggler />
				<header-color-theme-toggler />
				<button
					type="button"
					:class="menuPseudoClasses"
					class="block md:hidden flex-shrink-0 relative w-[2.75rem] h-[2.75rem] z-[5] [@media(any-hover:none)]:cursor-default before:content-[''] after:content-[''] before:absolute after:absolute before:right-[0.44rem] after:right-[0.44rem] before:w-[1.875rem] after:w-[1.875rem] before:h-[0.125rem] after:h-[0.125rem] before:bg-primary after:bg-primary before:rounded-[0.1875rem] after:rounded-[0.1875rem] before:transition-all after:transition-all duration-200"
					aria-label=" open / close menu"
					@click="isMenuOpen = !isMenuOpen">
					<span
						:class="isMenuOpen ? 'opacity-0' : ''"
						class="absolute right-[0.44rem] w-[1.875rem] h-[0.125rem] translate-y-[-0.0625rem] bg-primary rounded-[0.1875rem] transition-all duration-200"></span>
				</button>
			</div>
		</div>
	</header>
</template>

<script setup>
import router from '@/router'
import { onBeforeRouteLeave } from 'vue-router'
import HeaderDarkThemeToggler from './HeaderDarkThemeToggler.vue'
import HeaderColorThemeTogglerVue from './HeaderColorThemeToggler.vue'

import { ref, computed } from 'vue'

const routes = router.getRoutes()

onBeforeRouteLeave((to, from, next) => {
	if (isMenuOpen.value) isMenuOpen.value = false
	next()
})

const isMenuOpen = ref(false)
const showMenuClasses = computed(() => (isMenuOpen.value ? 'max-md:right-0' : 'max-md:right-[-100%]'))
const menuPseudoClasses = computed(() =>
	isMenuOpen.value
		? 'before:rotate-45 before:top-[calc(50%-0.0625rem)] after:rotate-[-45deg] after:bottom-[calc(50%-0.0625rem)]'
		: 'before:top-[0.625rem] after:bottom-[0.625rem]'
)
</script>
