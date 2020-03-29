<template>
  <div class="flex justify-center items-center w-full h-screen bg-gray-100">
    <div class="flex justify-center items-center w-6/12 bg-white shadow-lg">

      <div class="w-5/12 border-r">
        <img src="@/assets/img/mind-kreator-logo-vertical.png" alt="Mind Kreator">
      </div>

      <form @submit.prevent="onSubmit" class="flex flex-col px-16 py-20 w-7/12">
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
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

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

      firebase.auth().signInWithEmailAndPassword(this.student.email, this.student.password)
        .then(response => {
          this.$router.replace({ name: 'CourseDashboard' })
        })
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<style>

</style>