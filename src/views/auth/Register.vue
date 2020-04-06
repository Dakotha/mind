<template>
  <div class="flex justify-center items-center w-full h-screen bg-gray-100">
    <div class="flex justify-center items-center w-6/12 bg-white shadow-lg">

      <!-- Left side start here -->
      <div class="flex flex-col justify-between items-center w-5/12 px-10">
        <router-link :to="{ name: 'FrontPage' }">
          <img src="@/assets/img/mind-kreator-vertical-pink-logo.svg" alt="Mind Kreator">
        </router-link>

        <div class="flex flex-col items-center mb-10">
          <div>Koszt dostępu do programu</div>
          <div>59</div>
        </div>
      </div>
      <!-- Left side end here -->


      <!-- Right side start here -->
      <form @submit.prevent="onSubmit" class="flex flex-col px-16 py-20 w-7/12 border-l">
      
        <div class="flex flex-col mb-5">
          <label class="mb-2 text-sm font-semibold text-gray-600" for="firstName">Imię</label>
          <input v-model="student.firstName" class="p-2 border" type="text" id="firstName">
        </div>
        
        <div class="flex flex-col mb-5">
          <label class="mb-2 text-sm font-semibold text-gray-600" for="lastName">Nazwisko</label>
          <input v-model="student.lastName" class="p-2 border" type="text" id="lastName">
        </div>
      
        <div class="flex flex-col mb-5">
          <label class="mb-2 text-sm font-semibold text-gray-600" for="email">Adres email</label>
          <input v-model="student.email" class="p-2 border" type="email" id="email">
        </div>
        
        <div class="flex flex-col mb-5">
          <label class="mb-2 text-sm font-semibold text-gray-600" for="password">Hasło</label>
          <input v-model="student.password" class="p-2 border" type="password" id="password">
        </div>

        <button class="flex justify-center items-center mt-5 px-3 py-3 bg-pink-400 rounded text-white shadow-lg" type="submit">
          <div v-if="loading" class="loader ease-linear rounded-full h-5 w-5 bg-pink-100"></div>  
          <div v-if="!loading">Kupuję i płacę</div>
        </button>

        <div v-if="error" class="mt-10 px-3 py-2 bg-pink-600 text-sm text-white shadow-lg rounded">
          {{ error }}
        </div>

        <div class="mt-10 text-sm text-gray-600">
          Masz już konto?
          <router-link :to="{ name: 'Login' }" class="text-accentColor">Zaloguj się.</router-link>
        </div>

      </form>
      <!-- Right side end here -->

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CourseDashboardVue from '../course/views/CourseDashboard.vue'

export default {
  data() {
    return {
      student: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
      },
      error: null,
      loading: false
    }
  },
  methods: {
    onSubmit() {
      this.loading = true

      axios.post('auth/local/register', {
        username: this.student.firstName + ' ' + this.student.lastName,
        email: this.student.email,
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
        this.error = error
      })
    }
  }
}
</script>

<style>
.loader {
  border-top-color: #db3495;
  -webkit-animation: spinner 1s linear infinite;
  animation: spinner 1s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: .5;
  }
  /* 100% { transform: scale(0) } */
}

@keyframes spinner {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: .5;
  }
  /* 100% { transform: scale(0) } */
}

/* @-webkit-keyframes spinner {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} */
</style>