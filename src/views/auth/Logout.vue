<template>
  
</template>

<script>
import firebase from 'firebase'

export default {
  created() {
    firebase.auth().signOut()
    localStorage.removeItem('isLogged')
    this.$router.replace({ name: 'FrontPage' })
  }
}
</script>
