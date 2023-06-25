import { createRouter, createWebHashHistory } from 'vue-router'
import ProductList from './components/ProductList.vue'
import PaymentRouter from './components/PaymentRouter.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { part: '/product', component: ProductList, alias: '/' },
    { part: '/pay', component: PaymentRouter }
  ]
})
