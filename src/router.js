import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './components/ProductList.vue'
import PaymentRouter from './components/PaymentRouter.vue'

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/pay',
    name: 'pay',
    component: PaymentRouter
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
