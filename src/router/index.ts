import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import AppAbout from '@/views/AppAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: '!opacity-100',
  routes: [
    {
      name: 'home',
      path: '/',
      component: AppHome
    },
    {
      name: 'about',
      path: '/about',
      component: AppAbout
    }
  ]
})

export default router
