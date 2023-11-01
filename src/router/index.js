import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginAuth from "../views/auth/LoginAuth.vue"
import Signup from "../views/auth/Signup.vue"
import CreateBooklist from "../views/booklist/CreateBooklist.vue"


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
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/booklist/create',
      name: 'createbooklist',
      component: CreateBooklist
    },
    
    
  ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
