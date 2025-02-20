import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactsView from '@/views/ContactsView.vue'
import PaymentView from '@/views/PaymentView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductsList from '@/views/ProductsList.vue'
import EditProduct from '@/views/EditProduct.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/shop',
		name: 'shop',
		component: ShopView,
	},
	{
		path: '/shop/:categoryId',
		name: 'products',
		component: ProductsList,
	},
	{
		path: '/edit_product/:productId?',
		name: 'editProduct',
		component: EditProduct,
	},

	{
		path: '/payment',
		name: 'payment',
		component: PaymentView,
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: ContactsView,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
