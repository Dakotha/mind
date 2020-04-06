<template>
  
</template>

<script>
export default {
  created() {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    
    this.$store.state.username = null
    this.$store.state.token = null

    this.$router.replace({ name: 'FrontPage' })
  }
}
</script>
