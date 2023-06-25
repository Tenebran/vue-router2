import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueCreditCardValidation from 'vue-credit-card-validation'
import router from './router'

const app = createApp(App).use(router).use(VueCreditCardValidation)
app.mount('#app')
