import Vue from 'vue'
import VueRouter from 'vue-router'

import FrontPage from '@/views/frontpage/Index.vue'
import CourseIndex from '@/views/course/Index.vue'
import CourseDashboard from '@/views/course/views/CourseDashboard.vue'
import CourseLesson from '@/views/course/views/CourseLesson.vue'

import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

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
    ]
  },
  {
    path: '/logowanie',
    name: 'Login',
    component: Login
  },
  {
    path: '/rejestracja',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
