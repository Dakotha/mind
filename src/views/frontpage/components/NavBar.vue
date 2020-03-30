<template>
  <nav class="sticky top-0 w-full h-16 shadow-sm bg-white">
    <div class="container mx-auto flex w-full h-full justify-between items-center">
      <router-link :to="{ name: 'FrontPage' }">
        <!-- <div>Mind Kreator</div> -->
        <img src="@/assets/img/mind-kreator-logo.jpg" class="w-40" alt="Mind Kreator">
      </router-link>

      <div class="mainMenu">
        <router-link :to="{ name: 'FrontPage' }">Tutaj zacznij</router-link>
        <router-link :to="{ name: 'CourseIndex' }">Opis kursu</router-link>
        <router-link :to="{ name: 'CourseDashboard' }">Forma kursu</router-link>
        <router-link :to="{ name: 'CourseLesson' }">Zamów kurs</router-link>
        <router-link :to="{ name: 'AdminIndex' }">Admin</router-link>
      </div>

      <div v-if="$store.state.user !== null" class="flex items-center text-gray-500">
        <div class="mr-3 text-base">Witaj {{ $store.state.user.firstName }}</div>
        <router-link :to="{ name: 'CourseDashboard' }" class="mr-3">
          <font-awesome-icon icon="tachometer-alt"/>
        </router-link>

        <router-link :to="{ name: 'Logout' }">
          <font-awesome-icon icon="sign-out-alt"/>
        </router-link>
      </div>
      
      <router-link v-else :to="{ name: 'Login' }" class="mr-3">
        Logowanie
        <font-awesome-icon icon="sign-in-alt"/>
      </router-link>
      
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      isMenuVisible: false
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      localStorage.removeItem('user')
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