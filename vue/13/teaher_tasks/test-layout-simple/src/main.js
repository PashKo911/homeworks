import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import MainLayout from './layouts/MainLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

const app = createApp(App)

app.use(router)

app.component('MainLayout', MainLayout)
app.component('AuthLayout', AuthLayout)

app.mount('#app')
