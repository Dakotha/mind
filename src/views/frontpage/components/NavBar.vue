<template>
  <nav class="sticky top-0 w-full h-16 shadow-sm bg-white">
    <div class="container mx-auto flex w-full h-full justify-between items-center">
      <router-link :to="{ name: 'FrontPage' }">
        <!-- <div>Mind Kreator</div> -->
        <img src="@/assets/img/mind-kreator-logo.jpg" class="w-40" alt="Mind Kreator">
      </router-link>

      <div class="mainMenu">
        <router-link to="#start">Tutaj zacznij</router-link>
        <router-link to="#description">Opis kursu</router-link>
        <router-link to="#services">Forma kursu</router-link>
        <router-link to="#order">Zamów kurs</router-link>
      </div>
      
      <div v-if="$store.state.user !== null">{{ $store.state.user.email }} | <span @click="logout" class="cursor-pointer">Wyloguj</span></div>
      <router-link v-if="$store.state.user ==  null" :to="{ name: 'Login' }">Logowanie</router-link>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    logout() {
      firebase.auth().signOut()
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