import { createRouter, createWebHistory } from 'vue-router'
import PagesLayout from '../../src/layout/PagesLayout.vue'
import Homepage from '../views/Homepage.vue'
import ProductList from '../views/ProductList.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Checkout from '../views/payment-process/Checkout.vue'
import PaymentSteps from '../views/payment-process/PaymentSteps.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
      meta: { 
        layout: PagesLayout,
        // pageName: 'Home',
      }
    },
    {
      path: '/product',
      name: 'product',
      component: ProductList,
      meta: { 
        layout: PagesLayout,
        // pageName: 'Home',
      }
    },
    {
      path: '/single_product',
      name: 'SingleProduct',
      component: SingleProduct,
      meta: { 
        layout: PagesLayout,
        // pageName: 'Home',
      }
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      meta: { 
        layout: PagesLayout,
        // pageName: 'Home',
      }
    },
    {
      path: '/payment_steps',
      name: 'PaymentSteps',
      component: PaymentSteps,
      meta: { 
        layout: PagesLayout,
        // pageName: 'Home',
      }
    },
    
  ]
})

export default router
