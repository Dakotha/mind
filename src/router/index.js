import Vue from 'vue'
import VueRouter from 'vue-router'

import FrontPage from '@/views/frontpage/Index.vue'
import CourseIndex from '@/views/course/Index.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
