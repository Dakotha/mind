<template>
  <nav class="sticky top-0 w-full px-10 flex justify-between items-center h-16 shadow bg-white z-30">
    <router-link :to="{ name: 'FrontPage' }">
      <!-- <div>Mind Kreator</div> -->
      <img src="@/assets/img/mind-kreator-logo.jpg" class="w-40" alt="Mind Kreator">
    </router-link>

    <slot></slot>
    
    <router-link v-if="$store.state.user !== null" :to="{ name: 'Logout' }">{{ $store.state.user.email }} | <span>Wyloguj</span></router-link>
    <router-link v-else :to="{ name: 'Login' }">Logowanie</router-link>
  </nav>
</template>

<script>
export default {}
</script>

<style>

</style>