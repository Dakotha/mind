<template>
  <div class="flex justify-center items-center w-full h-screen bg-gray-100">
    <div class="flex justify-center items-center w-6/12 bg-white shadow-lg">

      <div class="w-5/12 border-r">
        <img src="@/assets/img/mind-kreator-logo-vertical.png" alt="Mind Kreator">
      </div>

      <form @submit.prevent="onSubmit" class="flex flex-col px-16 py-20 w-7/12">
        <div class="flex flex-col mb-10">
          <label class="mb-2 text-sm font-semibold text-gray-600" for="email">Adres email</label>
          <input class="p-2 border" type="email" id="email">
        </div>
        
        <div class="flex flex-col mb-10">
          <label class="mb-2 text-sm font-semibold text-gray-600" for="password">Hasło</label>
          <input class="p-2 border" type="password" id="password">
        </div>
        
        <button class="px-3 py-3 bg-pink-400 rounded text-white shadow-lg" type="submit">Zaloguj mnie</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.$router.replace({ name: 'CourseIndex' })
    }
  }
}
</script>

<style>

</style>