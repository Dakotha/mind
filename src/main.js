import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import firebaseConfig from './firebase.config'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

import '@/assets/styles/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.
    firebase.database().ref('students/' + user.uid).once('value')
      .then(snapshot => {
        store.state.user = snapshot.val()
      })
      .catch(error => {
        console.log('Error: ', error)
      })

  } else {
    // User is signed out.
    store.state.user = null
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
