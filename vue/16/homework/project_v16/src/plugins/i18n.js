import { createI18n } from 'vue-i18n'
import localesUk from '@/locales/uk.json'
import localesUa from '@/locales/ua.json'

const i18n = createI18n({
	locale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'ua',
	fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'ua',
	messages: {
		uk: localesUk,
		ua: localesUa,
	},
})

export default i18n
