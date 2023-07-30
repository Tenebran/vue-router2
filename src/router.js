import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './components/ProductList.vue'
import PaymentProduct from './components/PaymentProduct.vue'
import AddProduct from './components/AddProduct.vue'
import PageNotFound from './components/PageNotFound.vue'
import PaymentComplete from './components/PaymentComplete.vue'

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
  },
  {
    path: '/paymentComplete',
    name: 'paymentComplete',
    component: PaymentComplete
  },
  {
    path: '/404',
    name: 'PageNotExist',
    component: PageNotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    name: 'PageNotFound',
    component: AddProduct
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
