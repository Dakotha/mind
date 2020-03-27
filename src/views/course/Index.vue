<template>
  <div class="bg-gray-100 min-h-screen">
    <NavBar>
      <p class="text-xl font-bold text-gray-600 uppercase">Jak pozbyć się wewnętrznych ograniczeń</p>
    </NavBar>


    <div class="container mx-auto mt-10">
      <LessonSingle v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
    </div>

  </div>
</template>

<script>
import NavBar from './components/NavBar'
import LessonSingle from './components/LessonSingle'

import axios from 'axios'

export default {
  components: { NavBar, LessonSingle },
  data() {
    return {
      lessons: null,
      isVisible: true
    }
  },
  created() {
    axios.get('http://localhost:3000/lessons')
      .then(response => {
        this.lessons = response.data
      })
      .catch(error => {
        console.log('Error: ', error)
      })
  }
}
</script>

<style>

</style>