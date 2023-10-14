import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginAuth from "../views/auth/LoginAuth.vue"


const routes =  [
    {
      path: '/',
      name: 'home',
      component: Home
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
