<template>
  <div class="w-full z-50">

    <!-- TabBar start here -->
    <div @click="isHidden = false" class="flex justify-between items-center my-3 px-5 w-full h-16 border-l-4 border-pink-400 bg-white shadow-md rounded-lg cursor-pointer">
      <div class="flex">
        <font-awesome-icon icon="file-alt" class="mr-3 text-2xl text-gray-400" />
        <h2 v-html="lesson.title" class="text-gray-700"></h2>
        <div v-html="lesson.id"></div>
      </div>

      <font-awesome-icon :icon=icon :class=iconColor class="text-2xl"></font-awesome-icon>
    </div>
    <!-- TabBar end here -->


    <!-- Modal start here -->
    <div :class="{ hidden: isHidden }" class="fixed top-0 left-0 p-10 w-full min-h-screen bg-gray-200">  
      <div class="container mx-auto">
        <div @click="isHidden = true" class="mb-10">Zamknij lekcję</div>
        
        <div v-html="lesson.content"></div>
      </div>
    </div>
    <!-- Modal end here -->

  </div>
</template>

<script>
export default {
  props: ['lesson'],
  data() {
    return {
      isHidden: true
    }
  },
  computed: {
    icon() {
      return this.lesson.status ? 'check-circle' : 'circle'
    },
    iconColor() {
      return this.lesson.status ? 'text-pink-400' : 'text-gray-200'
    }
  }
}
</script>

<style>

</style>