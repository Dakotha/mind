import Vue from 'vue'
import VueRouter from 'vue-router'

import FrontPage from '@/views/frontpage/Index.vue'
import CourseIndex from '@/views/course/Index.vue'

import Login from '@/views/auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage
  },
  {
    path: '/kurs',
    name: 'CourseIndex',
    component: CourseIndex
  },
  {
    path: '/logowanie',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
