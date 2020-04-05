<template>
  <nav class="sticky top-0 w-full h-16 shadow-sm bg-white">
    <div class="container mx-auto flex w-full h-full justify-between items-center">
      <router-link :to="{ name: 'FrontPage' }">
        <img src="@/assets/img/mind-kreator-pink-logo.svg" class="w-40" alt="Mind Kreator">
      </router-link>

      <div class="mainMenu">
        <router-link :to="{ name: 'FrontPage' }">FrontPage</router-link>
        <router-link :to="{ name: 'CourseIndex' }">CourseIndex</router-link>
        <router-link :to="{ name: 'CourseDashboard' }">CourseDashboard</router-link>
        <router-link :to="{ name: 'CourseSingleLesson' }">CourseLesson</router-link>
      </div>

      <div v-if="$store.state.username !== null" class="flex items-center text-gray-500">
        <div class="mr-5 text-base">{{ $store.state.username }}</div>
        <router-link :to="{ name: 'Logout' }" class="px-3 py-1 text-xs uppercase border border-gray-400 rounded bg-gray-200">Wyloguj mnie</router-link>
      </div>
      
      <router-link v-else :to="{ name: 'Login' }" class="px-3 py-1 text-xs uppercase border border-gray-300 rounded bg-gray-100">Zaloguj mnie</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false
    }
  }
}
</script>

<style lang="scss">
.mainMenu {
  & a {
    @apply inline-block h-full align-middle text-xs font-semibold text-gray-500 uppercase;

    &.router-link-active {
      @apply text-accentColor;
    }

    &:not(:last-child) {
      @apply mr-10;
    }
  }
}
</style>