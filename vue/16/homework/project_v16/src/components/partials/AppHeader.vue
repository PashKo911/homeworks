<template>
	<header
		:class="{ 'menu-open': isMenuOpen }"
		class="bg-surface-0 dark:bg-surface-900 fixed top-0 left-0 w-full z-50 border-y-[1px] border-surface-200 dark:border-surface-700">
		<div class="container flex items-center justify-between gap-4 py-2">
			<logo aria-label="Site's logotype" class="shrink-0 z-10" />
			<nav
				:class="showMenuClasses"
				class="max-md:fixed max-md:w-full max-md:top-0 max-md:h-screen max-md:overflow-auto max-md:px-4 max-md:pt-[6.625rem] max-md:pb-8 max-md:transition-all max-md:duration-200 max-md:bg-surface-0 max-md:dark:bg-surface-900 max-md:flex max-md:flex-col max-md:gap-8 max-md:items-center">
				<ul class="flex items-center gap-8 max-md:flex-col">
					<li v-for="r in routes" :key="r.path" class="item">
						<router-link
							v-if="r.meta?.localeName"
							class="text-2xl md:text-lg font-medium hover:text-primary transition-colors duration-300"
							:to="{ name: r.name }"
							active-class="text-primary"
							@click="isMenuOpen = false">
							{{ $t(r.meta.localeName) }}
						</router-link>
					</li>
				</ul>
				<div class="flex items-center gap-2 flex md:hidden">
					<dark-theme-toggler />
					<color-theme-toggler />
				</div>
			</nav>
			<div class="flex items-center md:gap-10 gap-4">
				<div class="flex items-center gap-2 hidden md:flex">
					<dark-theme-toggler />
					<color-theme-toggler />
				</div>
				<div class="flex items-center gap-2">
					<Select
						v-model="selectedLanguage"
						@update:modelValue="changeLanguage"
						:options="languages"
						optionLabel="name"
						size="small"
						class="custom-select w-[4.5625rem]">
						<template #value="slotProps">
							<div v-if="slotProps.value" class="flex items-center">
								<img
									:alt="slotProps.value.label"
									src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
									:class="`mr-2 flag flag-${slotProps.value.code}`"
									style="width: 18px" />
								<div class="uppercase">{{ slotProps.value.name }}</div>
							</div>
							<span v-else>
								{{ slotProps.placeholder }}
							</span>
						</template>
						<template #option="slotProps">
							<div class="flex items-center">
								<img
									:alt="slotProps.option.label"
									src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
									:class="`mr-2 flag flag-${slotProps.option.code}`"
									style="width: 18px" />
								<div class="uppercase">{{ slotProps.option.name }}</div>
							</div>
						</template>
					</Select>
					<avatar-comp v-if="user" @on-logout="onLogout" />
					<Button
						v-else
						icon="pi pi-user"
						rounded
						variant="outlined"
						aria-label="User"
						@click="isLoginFormVisible = true" />
				</div>
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
	<login-form v-model:visible="isLoginFormVisible" @on-login="onLogin" />
</template>

<script setup>
import router from '@/router'
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useLanguageSync } from '@/hooks/useLanguageSync'
import { useToast } from 'primevue/usetoast'

import AppConfig from './AppConfig.vue'

const { locale } = useI18n()
const toast = useToast()

const store = useStore()
const user = computed(() => store.getters['auth/getUser'])

const loginWithGoogle = () => {
	return store.dispatch('auth/loginWithGoogle')
}
const logout = () => {
	return store.dispatch('auth/logout')
}
const isLoginFormVisible = ref(false)

const onLogin = async () => {
	try {
		await loginWithGoogle()
	} catch (error) {
		toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
	} finally {
		isLoginFormVisible.value = false
	}
}

const onLogout = async () => {
	try {
		await logout()
	} catch (error) {
		toast.add({ severity: 'error', summary: 'Rejected', detail: error.message, life: 3000 })
	}
}

const routes = router.getRoutes()

const languages = ref([
	{ name: 'UA', code: 'ua' },
	{ name: 'UK', code: 'uk' },
])

const storedLang = localStorage.getItem('lastLanguage')
locale.value = storedLang || languages.value[0].code
const selectedLanguage = ref(languages.value.find((l) => l.code === locale.value))

useLanguageSync(locale)

const changeLanguage = (lang) => {
	locale.value = lang.code
}

watch(locale, (newLocale) => {
	localStorage.setItem('lastLanguage', newLocale)
})

const isMenuOpen = ref(false)
const showMenuClasses = computed(() => (isMenuOpen.value ? 'max-md:right-0' : 'max-md:right-[-100%]'))
const menuPseudoClasses = computed(() =>
	isMenuOpen.value
		? 'before:rotate-45 before:top-[calc(50%-0.0625rem)] after:rotate-[-45deg] after:bottom-[calc(50%-0.0625rem)]'
		: 'before:top-[0.625rem] after:bottom-[0.625rem]'
)
</script>
