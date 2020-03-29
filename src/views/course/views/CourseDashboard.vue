<template>
  <div class="container mx-auto pt-10">

    <!-- TabBar start here -->
    <div @click="showLesson(lesson)" v-for="lesson in this.$store.state.lessons" :key="lesson.id" class="flex justify-between items-center my-3 px-5 w-full h-16 border-l-4 border-pink-400 bg-white shadow-md rounded-lg cursor-pointer">
      
      <div class="flex">
        <font-awesome-icon icon="file-alt" class="mr-3 text-2xl text-gray-400" />
        <span v-html="lesson.id" class="mr-3 text-gray-700"></span>
        <h2 v-html="lesson.title" class="text-gray-700"></h2>
      </div>

      <font-awesome-icon 
        :icon="lesson.status ? 'check-circle' : 'circle'" 
        :class="lesson.status ? 'text-pink-400' : 'text-gray-200'" 
        class="text-2xl"
      ></font-awesome-icon>

    </div>
    <!-- TabBar end here -->

  </div>
</template>

<script>
import axios from 'axios'
import store from 'vuex'

export default {
  data() {
    return {}
  },
  created() {
    if (this.$store.state.lessons == null) {
      axios.get('http://localhost:3000/lessons')
        .then(response => {
          this.$store.state.lessons = response.data
        })
        .catch(error => {
          console.log('Error: ', error)
        })
    }
  },
  methods: {
    showLesson(lesson) {
      this.$router.push({ name: 'CourseLesson', params: { lesson: lesson }})
    }
  }
}
</script>
