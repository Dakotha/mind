<template>
  <div class="container mx-auto mt-10 pb-40 w-6/12">
    <div v-html="lesson.title" class="mb-10 pb-10 text-xl border-b"></div>
    <div v-html="lesson.content" class="leading-relaxed"></div>

    <div class="fixed bottom-0 left-0 bg-pink-400 w-full">
      <div class="container mx-auto flex justify-center items-center h-full text-white">

        <router-link 
          :to="{ name: 'CourseDashboard' }"
          class="absolute left-0 ml-10 px-3 py-1"
        >
          <font-awesome-icon icon="arrow-circle-left" class="mr-2 pb-1 text-2xl align-middle"></font-awesome-icon>
          Zamknij lekcję
        </router-link>


        <button
          @click="statusOn"
          class="my-8 px-8 py-4 text-pink-400 font-semibold uppercase align-middle bg-white border rounded-full"
        >
          <font-awesome-icon icon="check-circle" class="mr-2 pb-1 text-2xl align-middle"></font-awesome-icon>
          Przeczytane
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from 'vuex'

export default {
  data() {
    return {
      lesson: this.$route.params.lesson
    }
  },
  methods: {
    statusOn() {
      axios.patch('http://localhost:3000/lessons/' + this.lesson.id, { status: 1 })
        .then(response => {
          // console.log('Res: ', this.$store.state.lessons[this.lesson.id - 1])
          this.$store.state.lessons[this.lesson.id - 1].status = 1
          this.$router.replace({ name: 'CourseDashboard' })
        })
        .catch(error => {
          console.log('Error: ', error)
        })
    }
  }
}
</script>

<style>
p {
  @apply mb-5;
}
</style>