<template>
  <nav class="sticky top-0 w-full px-10 flex justify-between items-center h-16 shadow bg-white z-30">
    <router-link :to="{ name: 'FrontPage' }">
      <!-- <div>Mind Kreator</div> -->
      <img src="@/assets/img/mind-kreator-logo.jpg" class="w-40" alt="Mind Kreator">
    </router-link>

    <slot></slot>
    
    <router-link :to="{ name: 'FrontPage' }">Wyloguj</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>