<template>
  <div class="hero bg-[#192944] bg-opacity-95">
    <video src="/assets/video/video.mp4" typeof="video/mp4" class="hero__video" autoplay muted loop preload="auto">
    </video>
    <div class="hero__logo items-center ml-48 hidden lg:block absolute top-12">
      <div class="flex-col">
        <div class="flex items-center space-x-8">
          <!-- search -->
          <svg xmlns="http://www.w3.org/2000/svg" width="23.06" height="23.06" viewBox="0 0 23.06 23.06">
            <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3.5 -3.5)">
              <path id="Path_119" data-name="Path 119" d="M24.3,14.4a9.9,9.9,0,1,1-9.9-9.9,9.9,9.9,0,0,1,9.9,9.9Z"
                fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              <path id="Path_120" data-name="Path 120" d="M28.727,28.727l-3.752-3.752"
                transform="translate(-3.581 -3.581)" fill="none" stroke="#fff" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" />
            </g>
          </svg>
          <!-- language -->
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="68.778" height="25.022" viewBox="0 0 68.778 25.022" @click="isOpen = !isOpen">
              <g id="Group_5711" data-name="Group 5711" transform="translate(-26.649)" opacity="0.441">
                <path id="network"
                  d="M36.357,18.664a12.511,12.511,0,1,0,3.664,8.847A12.429,12.429,0,0,0,36.357,18.664Zm.474,3.3a20.2,20.2,0,0,0-7.336.407,18.556,18.556,0,0,1,2.869-4.561A10.926,10.926,0,0,1,36.832,21.963Zm-6.082-4.809a20.2,20.2,0,0,0-3.287,5.825,20.253,20.253,0,0,0-4.9,2.551A18.583,18.583,0,0,1,20.2,19.5a10.84,10.84,0,0,1,10.553-2.35Zm-3.9,7.854a20.247,20.247,0,0,0-.591,4.857s0,.007,0,.01a18.528,18.528,0,0,1-2.761-2.969A18.585,18.585,0,0,1,26.846,25.009ZM18.839,21a20.082,20.082,0,0,0,2.4,5.554,20.2,20.2,0,0,0-3.98,4.521A10.836,10.836,0,0,1,18.839,21ZM18.1,32.9a18.539,18.539,0,0,1,4.089-4.974,20.455,20.455,0,0,0,4.192,4.163,20.328,20.328,0,0,0,1.739,6.252c-.2.011-.4.017-.607.017A10.857,10.857,0,0,1,18.1,32.9Zm10.143.414a20.061,20.061,0,0,0,6.39,2.373,10.826,10.826,0,0,1-4.786,2.417A18.63,18.63,0,0,1,28.242,33.317Zm7.782.912a18.551,18.551,0,0,1-8.06-3.043q-.047-.658-.048-1.32a18.567,18.567,0,0,1,.855-5.573,18.556,18.556,0,0,1,8.929-.511,10.838,10.838,0,0,1-1.676,10.448Z"
                  transform="translate(40.42 -15)" fill="#fff" />
                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                  d="M1.654,4.8l3.632-3.63A.686.686,0,0,0,4.315.2L.2,4.313a.685.685,0,0,0-.02.946L4.312,9.4a.686.686,0,1,0,.972-.969Z"
                  transform="translate(85.327 15.255) rotate(-90)" fill="#fff" stroke="#fff" stroke-width="1" />
                <text id="EN" transform="translate(26.649 19.011)" fill="#fff" font-size="18"
                  font-family="Pangram-Bold, Pangram" font-weight="700">
                  <tspan x="0" y="0">{{ selected }}</tspan>
                </text>
              </g>
            </svg>
            <div v-if="isOpen" class="absolute bg-white shadow-md rounded cursor-pointer text-black">
              <ul>
                <li v-for="lang in languages" :key="lang" @click="selectLanguage(lang)" class="cursor-pointer px-4 py-2 hover:bg-gray-200">
                  <a :href="`/${lang.toLowerCase()}`">{{ lang }}</a>
                </li>
              </ul>
            </div>
          
        </div>
        <lottie-player class="hero__logo justify-left" src="/wind-power-vs-solar0.json" background="transparent"
          speed="1" style="width: 244px; height: 244px;" loop autoplay></lottie-player>
      </div>

    </div>
    
    <div class="hero__content">
      <h1 class="hero__title">{{ $t('hero.title') }}</h1>
      <h2 class="hero__subtitle leading-6 ">{{ $t('hero.subtitle') }}</h2>
      <p class="hero__description font-extralight lg:mr-0 mr-12 ">{{ $t('hero.description') }}</p>
      <img src="/assets/images/right-arrow.png" class="lg:h-8 lg:w-8 lg:mt-4 h-4 w-4 mt-2" alt="">
      <img class="block lg:hidden h-[400px] absolute right-0 object-cover" src="~/assets/images/ship-mobile.png" alt="UGR Ship">
      <img class=" block lg:hidden absolute h-[800px] w-[350px] -z-10" src="/assets/images/under-ship.png" alt="Ship light">
      
    </div>
    <img class="hero__shipunder hidden lg:block" src="/assets/images/under-ship.png" alt="Ship light">
    <img class="hero__image hidden lg:block" src="~/assets/images/ship.png" alt="UGR Ship"
      style="position: relative; top: 250px;">
  </div>
  <About />
  <Services />
  <Statics />
  <Product />
  <Footer />

</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()
const isOpen = ref(false)
const languages = ['EN', 'TR']

// Mevcut dil, URL'ye göre belirlenir
const selected = computed(() => {
  const pathLang = router.currentRoute.value.path.split('/')[1].toUpperCase()
  return languages.includes(pathLang) ? pathLang : 'EN' // Varsayılan EN
})

const selectLanguage = (lang) => {
  isOpen.value = false
  router.push(`/${lang.toLowerCase()}`)
}
</script>

<script>
import Services from '~/components/Services.vue';
export default {
  name: 'LottieAnimation'
}
</script>
