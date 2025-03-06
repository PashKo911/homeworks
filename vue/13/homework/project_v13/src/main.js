import './assets/styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

import MainLayout from './components/layouts/MainLayout.vue'
import LayoutWithGallery from './components/layouts/LayoutWithGallery.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('MainLayout', MainLayout)
app.component('LayoutWithGallery', LayoutWithGallery)

app.mount('#app')
