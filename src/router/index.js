import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import FrontPage from '@/views/frontpage/Index.vue'
import CourseIndex from '@/views/course/Index.vue'
import CourseDashboard from '@/views/course/views/CourseDashboard.vue'
import CourseLesson from '@/views/course/views/CourseLesson.vue'

import AdminIndex from '@/views/admin/Index.vue'

import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Logout from '@/views/auth/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage
  },
  {
    path: '/',
    name: 'CourseIndex',
    component: CourseIndex,
    children: [
      { path: 'kokpit', name: 'CourseDashboard', component: CourseDashboard },
      { path: 'wyklad', name: 'CourseLesson', component: CourseLesson }
    ],
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('isLogged')) next()
      else next({ name: 'Login' })
    }
  },
  {
    path: '/admin',
    name: 'AdminIndex',
    component: AdminIndex,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('isLogged') && store.state.user.role == 1) next()
      else next({ name: 'Login' })
    }
  },
  {
    path: '/logowanie',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('isLogged')) next({ name: 'FrontPage' })
      else next()
    }
  },
  {
    path: '/rejestracja',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('isLogged')) next({ name: 'FrontPage' })
      else next()
    }
  },
  {
    path: '/wyjscie',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
