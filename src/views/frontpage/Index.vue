<template>
  <div class="text-gray-800">

    <NavBar/>
    
    <!-- Header start here -->
    <div id="header" class="flex mt-10 container mx-auto">
      <div class="flex flex-col justify-center items-start w-1/2">

        <div class="px-2 py-1 text-sm font-semibold bg-accentColor shadow-lg text-white">
          10 - tygodniowy <span class="uppercase">Program Online</span>
        </div>

        <!-- A: {{ $store.state.user }} -->

        <h1 class="my-3 font-bold text-4xl uppercase leading-tight">Jak pozbyć się wewnętrznych ograniczeń</h1>
        <h2 class="font-semibold text-lg text-gray-500">Niemożliwe <span class="text-gray-700">jest możliwe!</span></h2>
        
        <ul class="header-list mt-10">
          <h3 class="mb-5 font-semibold">Chcesz by Twoje życie wyglądało tak jak sobie tego życzysz?</h3>
          
          <li><font-awesome-icon icon="check" class="header-icon" />Naucz się jak zaprogramować swoje życie na sukces</li>
          <li><font-awesome-icon icon="check" class="header-icon" />Zmień sytuacje stresowe w pozytywne doświadczenia</li>
          <li><font-awesome-icon icon="check" class="header-icon" />Wyznacz właściwe cele i wykorzystaj swój czas by je osiągnąć</li>
          <li><font-awesome-icon icon="check" class="header-icon" />Nauczymy Cię jak szybko i skutecznie podbudować wiarę w siebie</li>
          <li><font-awesome-icon icon="check" class="header-icon" />Żyj z entuzjazmem i stań się zwycięzcą</li>
        </ul>

        <router-link :to="{ name: 'Register' }" class="btn-pink">Zamów kurs</router-link>
      </div>

      <div class="w-1/2 shadow-lg border-8 border-white">
        <img src="@/assets/img/jak-pozbyc-sie-wewnetrznych-ograniczen.png" alt="Jak pozbyć się wewnętrzbych ograniczeń">
      </div>
    </div>
    <!-- Header end here -->


    <!-- Description start here -->
    <div id="description" class="w-full mt-20 bg-accentColor shadow-lg">
      <div class="container mx-auto flex text-center">
        <div class="description-box bg-accentColor-lighter">
          <font-awesome-icon icon="chart-line" class="description-icon" />
          <h2 class="description-title">Czy chcesz dokonać wszystkiego, co dotychczas wydawało Ci się niemożliwe?</h2>
          <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quia, aliquam tempora, doloribus adipisci tenetur blanditiis at debitis voluptatibus fuga dolorum? Distinctio fugiat quis, tempore laudantium quia autem nesciunt nemo.</p> -->
        </div>

        <div class="description-box bg-accentColor">
          <font-awesome-icon icon="compass" class="description-icon" />
          <h2 class="description-title">Czy chcesz odtąd świadomie kierować swoim życiem, by odnieść sukces?</h2>
          <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quia, aliquam tempora, doloribus adipisci tenetur blanditiis at debitis voluptatibus fuga dolorum? Distinctio fugiat quis, tempore laudantium quia autem nesciunt nemo.</p> -->
        </div>

        <div class="description-box bg-accentColor-lighter">
          <font-awesome-icon icon="child" class="description-icon" />
          <h2 class="description-title">Czy chcesz by Twoje życie wyglądało tak jak sobie tego życzysz?</h2>
          <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quia, aliquam tempora, doloribus adipisci tenetur blanditiis at debitis voluptatibus fuga dolorum? Distinctio fugiat quis, tempore laudantium quia autem nesciunt nemo.</p> -->
        </div>
      </div>
    </div>
    <!-- Description end here -->


    <!-- Course Lessons List start here -->
    <div class="flex w-full mt-20">
      <div class="px-20 w-4/12">
        <h3 class="my-10 pb-3 text-6xl text-gray-400 border-b font-extrabold leading-none">Zawartość kursu</h3>
        <p>
          <!-- Program składa się z {{ lessons.length }} wykładów. Każdy należy czytać swoim indywidualnym tempem. Kurs nie jest przewidziany na z góry wyznaczony okres. Jednak bardzo ważne jest, aby <b>nie spieszyć</b> się i każdy wykład przeczytać uważnie. Następnie <b>przemyśleć</b> zawarte w nim tezy, wskazówki i informacje. Innymi słowy każdy wykład należy przeczytać i <b>"przerobić" aktywnie</b>. Bierne czytanie jest ogromną stratą czasu i potencjału tego programu. -->
        </p>
        <p>
          Wykład 2 <b>Wystarczy zacząć... i dlaczego większość ludzi tego nie robi</b> ma specjalne znaczenie. Gdybym miał wybrać tylko jedną zasadę którą kierowałbym się w życiu, byłaby to prosta zasada: <b>Rób coś, cokolwiek i zacznij TERAZ</b>. Nie ma nic gorszego od pozostawania w miejscu. Nawet popełnianie błędów jest <b>lepsze</b> od nicnierobienia.<br/>Kolejnym okropnym i głupim nawykiem jest <b>robienie wciąż tego samego i liczenie na inne rezultaty</b>. Dlatego tak ważne jest aby: <b class="inline-block mt-2 uppercase">Robić coś, cokolwiek i zacząć robić to TERAZ!</b>
        </p>
        <p>Z listy po prawej stronie wybierz <b>darmową lekcję</b> oznczoną ikoną otwartej kłódki i koniecznie ją sprawdź.</p>
      </div>

      <div class="w-8/12 px-32">
        <div v-for="lesson in lessons" :key="lesson.id">
          <!-- TabBar open start here -->
          <router-link :to="{ name: 'CourseLesson', params: { lesson: lesson }}" v-if="lesson.open" class="flex justify-between items-center my-3 p-5 w-10/12 border-l-4 border-pink-400 bg-white shadow-md rounded-lg">
            <div class="flex justify-between items-center w-full text-sm">
              <div class="flex w-full">
                <span>Wykład</span><span v-html="lesson.lessonNumber" class="mx-1"></span><span class="mr-3">:</span>
                <h2 v-html="lesson.title" class="text-gray-700 text-base font-semibold"></h2>
              </div>
              <font-awesome-icon icon="lock-open" class="text-accentColor"></font-awesome-icon>
            </div>
          </router-link>
          <!-- TabBar open end here -->

          <!-- TabBar start here -->
          <div v-else class="flex justify-between items-center my-3 p-5 w-10/12 border-l-4 border-pink-400 bg-white shadow-md rounded-lg">
            <div class="flex justify-between items-center w-full text-sm">
              <div class="flex w-full">
                <span>Wykład</span><span v-html="lesson.lessonNumber" class="mx-1"></span><span class="mr-3">:</span>
                <h2 v-html="lesson.title" class="text-gray-700 text-base font-semibold"></h2>
              </div>
            </div>
          </div>
          <!-- TabBar end here -->
        </div>
      </div>
    </div>
    <!-- Course Lessons List end here -->


    <!-- Price start here -->
    <div class="flex flex-col justify-center items-center py-40 w-full mt-20 bg-white shadow-lg text-white">
      <div class="text-6xl text-gray-400 font-extrabold uppercase">Koszt dostępu do programu</div>

      <div class="flex items-center">
        <div class="mr-5 text-4xl text-gray-300 font-extrabold line-through">199<span class="pl-1 font-bold">zł</span></div>
        <div class="text-6xl text-gray-600 font-extrabold">59<span class="pl-1 text-6xl font-bold text-gray-300">zł</span></div>
      </div>
      
      <router-link to="/" class="btn-pink">
        <span class="px-5">Kup teraz w promocyjnej cenie</span>
      </router-link>
    </div>
    <!-- Price end here -->



    <!-- tmp helper -->
    <div class="h-64"></div>

  </div>
</template>

<script>
import NavBar from './components/NavBar'
import axios from 'axios'

export default {
  components: { NavBar },
  data() {
    return {
      lessons: null
    }
  },
  created() {
    // axios.get('http://localhost:3000/lessons')
    //   .then(response => {
    //     this.lessons = response.data
    //   })
    //   .catch(error => {
    //     console.log('Error: ', error)
    //   })
  }
}
</script>

<style scoped>
/* Partials */
p {
  @apply mb-5;
}

b {
  @apply text-gray-700;
}

.btn-pink {
  @apply mt-10 px-5 py-3 bg-accentColor text-sm font-semibold text-white uppercase tracking-wider shadow-lg rounded-lg;
}
/* End of Partials */


/* Header */
.header-icon {
  @apply mr-3 text-accentColor;
}

.header-list li {
  @apply mb-3;
}
/* End of Header */


/* Description */
.description-box {
  @apply w-1/3 px-10 py-20 flex flex-col justify-center items-center text-white;
}

.description-icon {
  @apply mb-10 text-6xl;
}

.description-title {
  @apply mb-10 text-lg tracking-wider font-semibold;
}
/* End of Description */
</style>