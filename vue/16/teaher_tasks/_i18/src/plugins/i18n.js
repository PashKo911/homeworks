import { createI18n } from 'vue-i18n'
import localesEN from '@/locales/en.json'
import localesUA from '@/locales/ua.json'

const i18n = createI18n({
  locale: 'ua',
  fallbackLocale: 'ua',
  messages: {
    en: localesEN,
    ua: localesUA,
  },
})

export default i18n
