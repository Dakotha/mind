<template>
  <div class="bg-gray-100 min-h-screen">
    <NavBar/>

    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: { NavBar },
}
</script>

<style>
.slide-leave-active {
  transition: opacity .2s ease;
  opacity: 0;
  animation: slide-out .2s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in .2s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
