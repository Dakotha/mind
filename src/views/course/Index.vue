<template>
  <div class="bg-gray-200 min-h-screen">
    <NavBar>Jak pozbyć się wewnętrznych ograniczeń</NavBar>

    <div class="flex mt-10 px-10">
      
      <div :class="{ hidden: !isVisible }" class="sticky top-0 w-4/12">
        <div class="flex justify-between">
          <h3 class="mb-3 font-semibold">Panel kursu</h3>
          <!-- <font-awesome-icon @click="isVisible = false" icon="times" class="text-xl text-gray-400 cursor-pointer"></font-awesome-icon> -->
        </div>
        
        <div class="text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt alias inventore illum doloremque eligendi et, reprehenderit a fugit provident culpa!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, debitis!</p>
        </div>
      </div>

      <div class="ml-20 w-8/12">
        <LessonSingle v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
      </div>

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