import { onMounted, onUnmounted } from 'vue'
import router from '@/router'

export function useLanguageSync(locale) {
	const storageHandler = () => {
		const newLang = localStorage.getItem('lastLanguage')

		if (newLang && newLang !== locale.value) {
			locale.value = newLang
			router.go()
		}
	}

	onMounted(() => {
		window.addEventListener('storage', storageHandler)
	})

	onUnmounted(() => {
		window.removeEventListener('storage', storageHandler)
	})
}
