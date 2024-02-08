import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginAuth from "../views/auth/LoginAuth.vue"
import Signup from "../views/auth/Signup.vue"
import CreateBooklist from "../views/booklist/CreateBooklist.vue"
import BooklistDetails from "../views/booklist/BooklistDetails.vue"


//route guards to make sure user is logged import 

import { projectAuth } from '@/firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
      next({ name: 'LoginAuth'})
  } else {
    next()
  }
}

const routes =  [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth
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
      component: CreateBooklist,
      beforeEnter: requireAuth
    },
    {
      path: '/booklist/:id',
      name: 'booklistdetails',
      component: BooklistDetails,
      beforeEnter: requireAuth,
      props: true
    }
    
    
  ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
