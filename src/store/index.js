import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : null,
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    lessons: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
