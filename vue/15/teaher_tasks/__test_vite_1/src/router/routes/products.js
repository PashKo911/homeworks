import ProductsView from '../../views/products/ProductsView.vue'
import EditProduct from '../../views/products/EditProduct.vue'
import DetailProduct from '../../views/products/DetailProduct.vue'

const routes = [
  {
    path: '/products',
    name: 'products-list',
    redirect: '/products/list',
    children: [
      {
        path: 'list',
        name: 'product-list',
        component: ProductsView,
      },
      {
        path: 'edit/:id?',
        name: 'product-edit',
        component: EditProduct,
        props: true,
      },
      {
        path: ':id',
        name: 'product-detail',
        component: DetailProduct,
        props: true,
      },
    ],
  },
]

export default routes
