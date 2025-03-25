import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
import router from './router'
import ToastService from 'primevue/toastservice'

import App from './App.vue'

import './assets/styles/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
	theme: 'none',
	ripple: true,
})

app.use(ToastService)

app.mount('#app')
