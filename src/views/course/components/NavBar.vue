<template>
  <nav class="sticky top-0 w-full px-10 flex justify-between items-center h-16 shadow bg-white z-30">
    <router-link :to="{ name: 'CourseDashboard' }">
      <img src="@/assets/img/mind-kreator-pink-logo.svg" class="w-40" alt="Mind Kreator">
    </router-link>

    <div class="text-2xl font-bold uppercase tracking-wide text-gray-800">Jak pozbyć się wewnętrznych ograniczeń</div>
    
    <div class="flex items-center">
      <div v-if="$store.state.username !== null" >{{ $store.state.username }}</div>
      <router-link :to="{ name: 'Logout' }" class="ml-5 px-3 py-1 text-xs uppercase border border-gray-400 rounded bg-gray-200">Wyloguj mnie</router-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>

</style>