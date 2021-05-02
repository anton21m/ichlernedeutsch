import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Books from '@/components/Books.vue'
import Words from '@/components/Words.vue'

import Profile from '@/components/Profile.vue'
import Signin from '@/components/Signin.vue'
import Signup from '@/components/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  },
  {
    path: "/words",
    name: "Words",
    component: Words
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/signup",
    name: "Sign up",
    component: Signup
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
