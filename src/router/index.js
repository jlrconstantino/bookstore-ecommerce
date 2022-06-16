import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartPage from '../components/CartPage.vue'
import HomePage from '../components/HomePage.vue'
import ProductPage from '../components/ProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cart', 
    name: 'cart', 
    component: CartPage
  },
  {
    path: '/homepage', 
    name: 'homepage', 
    component: HomePage
  },
  {
    path: '/product', 
    name: 'product', 
    component: ProductPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
