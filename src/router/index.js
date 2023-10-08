import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/Home.vue"
import LoginAuth from "../views/auth/LoginAuth.vue"


const routes =  [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'LoginAuth',
      component: LoginAuth
    },
    
  ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
