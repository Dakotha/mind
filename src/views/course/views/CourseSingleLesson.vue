<template>
  <div class="container mx-auto mt-10 pb-40 w-6/12">
    
    <h1 v-html="lesson.title" class="mb-10 pb-10 text-2xl font-bold border-b"></h1>
    <div v-html="compileMarkDownContent" class="content leading-relaxed"></div>

    <!-- Bottom panel start here -->
    <div class="fixed bottom-0 left-0 flex justify-center items-center bg-pink-400 w-full">
      <router-link :to="{ name: 'CourseDashboard' }" class="my-8 px-8 py-4 text-pink-400 font-semibold uppercase align-middle bg-white border rounded-full">
        <font-awesome-icon icon="check-circle" class="mr-2 pb-1 text-2xl align-middle"></font-awesome-icon>
        Zamknij lekcję
      </router-link>
    </div>
    <!-- Bottom panel end here -->

  </div>
</template>

<script>
import axios from 'axios'
import showdown from 'showdown'

export default {
  data() {
    return {
      lesson: this.$route.params.lesson
    }
  },
  computed: {
    compileMarkDownContent() {
      return new showdown.Converter().makeHtml(this.lesson.content)
    }
  }
}
</script>

<style lang="scss">
.content {
  & h2 {
    margin: 1rem 0;
    font-size: 1.4rem;
    font-weight: bold;
    // @apply text-gray-700;
  }

  p {
    margin: 1rem 0 !important;
  }
}
</style>