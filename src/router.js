import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './components/ProductList.vue'
import PaymentProduct from './components/PaymentProduct.vue'
import AddProduct from './components/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/pay',
    name: 'pay',
    component: PaymentProduct
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: AddProduct
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
