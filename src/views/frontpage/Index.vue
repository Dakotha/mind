<template>
  <div class="text-gray-700">
    <NavBar/>
    
    <!-- Header start here -->
    <div class="flex mt-10 container mx-auto">
      <div class="flex flex-col justify-center items-start w-1/2">

        <div class="px-2 py-1 text-sm font-semibold bg-pink-400 shadow-lg text-white">
          10 - tygodniowy <span class="uppercase">Program Online</span>
        </div>

        <h1 class="my-3 font-bold text-4xl uppercase leading-tight">Jak pozbyć się wewnętrznych ograniczeń</h1>
        <h2 class="font-semibold text-lg text-gray-500">Niemożliwe <span class="text-gray-600">jest możliwe!</span></h2>
        
        <ul class="mt-10">
          <h3 class="mb-5 font-semibold">Chcesz by Twoje życie wyglądało tak jak sobie tego życzysz?</h3>
          
          <li><font-awesome-icon icon="check" class="mr-3 text-pink-600" />Naucz się jak zaprogramować swoje życie na sukces</li>
          <li><font-awesome-icon icon="check" class="mr-3 text-pink-600" />Zmień sytuacje stresowe w pozytywne doświadczenia</li>
          <li><font-awesome-icon icon="check" class="mr-3 text-pink-600" />Wyznacz właściwe cele i wykorzystaj swój czas by je osiągnąć</li>
          <li><font-awesome-icon icon="check" class="mr-3 text-pink-600" />Nauczymy Cię jak szybko i skutecznie podbudować wiarę w siebie</li>
          <li><font-awesome-icon icon="check" class="mr-3 text-pink-600" />Żyj z entuzjazmem i stań się zwycięzcą</li>
        </ul>

        <router-link to="/" class="mt-10 px-5 py-3 bg-pink-400 text-sm font-semibold text-white uppercase tracking-wider shadow-lg rounded-lg">Zamów kurs</router-link>
      </div>

      <div class="w-1/2 shadow-lg border-8 border-white">
        <img src="@/assets/img/jak-pozbyc-sie-wewnetrznych-ograniczen.png" alt="Jak pozbyć się wewnętrzbych ograniczeń">
      </div>
    </div>
    <!-- Header end here -->


    <!-- Description start here -->
    <div id="description" class="w-full bg-pink-400 shadow-lg">
      <div class="container mt-20 mx-auto flex text-center">
        <div class="w-1/3 p-20 bg-pink-300 flex flex-col justify-center items-center text-white">
          <font-awesome-icon icon="chalkboard" class="mb-10 text-4xl" />
          <h2 class="mb-10 text-xl font-semibold">Chcesz by Twoje życie wyglądało tak jak sobie tego życzysz?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quia, aliquam tempora, doloribus adipisci tenetur blanditiis at debitis voluptatibus fuga dolorum? Distinctio fugiat quis, tempore laudantium quia autem nesciunt nemo.</p>
        </div>

        <div class="w-1/3 p-20 bg-pink-400 flex flex-col justify-center items-center text-white">
          <font-awesome-icon icon="chalkboard" class="mb-10 text-4xl" />
          <h2 class="mb-10 text-xl font-semibold">Chcesz by Twoje życie wyglądało tak jak sobie tego życzysz?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quia, aliquam tempora, doloribus adipisci tenetur blanditiis at debitis voluptatibus fuga dolorum? Distinctio fugiat quis, tempore laudantium quia autem nesciunt nemo.</p>
        </div>

        <div class="w-1/3 p-20 bg-pink-300 flex flex-col justify-center items-center text-white">
          <font-awesome-icon icon="chalkboard" class="mb-10 text-4xl" />
          <h2 class="mb-10 text-xl font-semibold">Chcesz by Twoje życie wyglądało tak jak sobie tego życzysz?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quia, aliquam tempora, doloribus adipisci tenetur blanditiis at debitis voluptatibus fuga dolorum? Distinctio fugiat quis, tempore laudantium quia autem nesciunt nemo.</p>
        </div>
      </div>
    </div>
    <!-- Description end here -->


    <div class="h-64"></div>

  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: { NavBar }
}
</script>

<style>
/* @import './styles/frontpage.css'; */
ul li {
  margin-bottom: 5px;
}
</style>