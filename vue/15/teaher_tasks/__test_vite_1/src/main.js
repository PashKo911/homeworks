import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import MainLayout from './layouts/MainLayout.vue'
import ProductsLayout from './layouts/ProductsLayout.vue'

import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('MainLayout', MainLayout)
app.component('ProductsLayout', ProductsLayout)

app.mount('#app')
