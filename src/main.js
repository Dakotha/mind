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

    console.log(user.uid)

    firebase.database().ref('students/' + user.uid).once('value')
      .then(snapshot => {

        console.log(snapshot.val())
        store.state.user = snapshot.val()
      })

    // var displayName = user.displayName;
    // var eeemail = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    store.state.user = null

    // ...
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
