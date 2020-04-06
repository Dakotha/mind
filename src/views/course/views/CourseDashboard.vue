<template>
  <div class="container mx-auto w-6/12 pt-10">

    <!-- TabBar start here -->
    <router-link :to="{ name: 'CourseSingleLesson', params: { lesson: lesson }}" v-for="(lesson, index) in this.$store.state.lessons" :key="lesson.id" class="flex justify-between items-center my-3 px-5 w-full h-16 border-l-4 border-pink-400 bg-white shadow-md rounded-lg">
      
      <div class="flex">
        <font-awesome-icon icon="file-alt" class="mr-3 text-2xl text-gray-500" />
        <span v-html="index + 1" class="mr-3 text-gray-700"></span>
        <h2 v-html="lesson.title" class="text-gray-700"></h2>
      </div>

    </router-link>
    <!-- TabBar end here -->

  </div>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    if (this.$store.state.lessons == null) {
      axios.get('lessons', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
        .then(response => {
          this.$store.state.lessons = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
