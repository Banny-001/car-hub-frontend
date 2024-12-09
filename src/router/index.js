import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'login',
      component: ()=>import ('@/views/Auth/login.vue')
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('@/views/Auth/register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/products.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/account.vue'),
    },
  ],
})

export default router
