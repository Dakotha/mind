<template>
  <div class="flex justify-center items-center w-full h-screen bg-gray-100">
    <div class="flex justify-center items-center w-6/12 bg-white shadow-lg">

      <router-link :to="{ name: 'FrontPage' }" class="w-5/12 px-10">
        <img src="@/assets/img/mind-kreator-vertical-pink-logo.svg" alt="Mind Kreator">
      </router-link>

      <form @submit.prevent="onSubmit" class="flex flex-col px-16 py-20 w-7/12 border-l">
        <div class="flex flex-col mb-10">
          <label class="mb-2 text-sm font-semibold text-gray-600" for="email">Adres email</label>
          <input v-model="student.email" class="p-2 border" type="email" id="email">
        </div>
        
        <div class="flex flex-col mb-10">
          <label class="mb-2 text-sm font-semibold text-gray-600" for="password">Hasło</label>
          <input v-model="student.password" class="p-2 border" type="password" id="password">
        </div>
        
        <button class="flex justify-center items-center mt-5 px-3 py-3 bg-pink-400 rounded text-white shadow-lg" type="submit">
          <div v-if="loading" class="loader ease-linear rounded-full h-5 w-5 bg-pink-100"></div>  
          <div v-if="!loading">Zaloguj mnie</div>
        </button>

        <div v-if="error" class="mt-10 px-3 py-2 bg-pink-600 text-sm text-white shadow-lg rounded">
          {{ error }}
        </div>

        <div class="mt-10 text-sm text-gray-600">
          Nie masz jeszcze konta?
          <router-link :to="{ name: 'Register' }" class="text-accentColor">Zarejestruj się.</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      student: {
        email: null,
        password: null
      },
      error: null,
      loading: false
    }
  },
  methods: {
    onSubmit() {
      this.loading = true

      axios.post('auth/local', {
        identifier: this.student.email,
        password: this.student.password
      })
      .then(response => {

        this.$store.state.username = response.data.user.username
        this.$store.state.token = response.data.jwt
        
        localStorage.setItem('username', response.data.user.username)
        localStorage.setItem('token', response.data.jwt)

        this.loading = false

        this.$router.replace({ name: 'CourseDashboard' })
      })
      .catch(error => {
        this.loading = false
        this.error = 'Błąd logowania. Spróbuj ponownie.'
      })
    }
  }
}
</script>
