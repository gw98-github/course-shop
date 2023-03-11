import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/MainView/AboutView.vue'
import HomeView from '../views/MainView/HomeView.vue'
import PromotionsView from '../views/MainView/PromotionsView.vue'
import ContactView from '../views/MainView/ContactView.vue'

export const menuRoutes = [
  {
    path: '/',
    name: 'Strona główna',
    component: HomeView
  },
  {
    path: '/promotions',
    name: 'Promocje',
    component: PromotionsView
  },
  {
    path: '/about',
    name: 'O nas',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...menuRoutes]
})

export default router
