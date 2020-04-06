import Vue from 'vue'
import VueRouter from 'vue-router'

import FrontPage from '@/views/frontpage/Index.vue'

import CourseIndex from '@/views/course/Index.vue'
import CourseDashboard from '@/views/course/views/CourseDashboard.vue'
import CourseSingleLesson from '@/views/course/views/CourseSingleLesson.vue'

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
      { path: 'wyklad', name: 'CourseSingleLesson', component: CourseSingleLesson }
    ],
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) next()
      else next({ name: 'Login' })
    }
  },


  {
    path: '/logowanie',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) next({ name: 'FrontPage' })
      else next()
    }
  },
  {
    path: '/rejestracja',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) next({ name: 'FrontPage' })
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
