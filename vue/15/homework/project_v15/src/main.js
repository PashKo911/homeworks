import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import router from './router'
import store from './store'
import ToastService from 'primevue/toastservice'

import App from './App.vue'

import './assets/styles/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue, {
	theme: 'none',
})
app.use(ToastService)

app.mount('#app')
