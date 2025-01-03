<!-- pages/services.vue -->
<template>
  <div class="bg min-h-screen bg-[#0A1832] relative overflow-hidden ">
    <!-- Paralel Kenar Menü -->
    <div
      class="hidden lg:block bg-[#1E71DA] absolute top-0 right-[890px] w-60 h-[300px] transform skew-x-[-20deg] z-10">
      <!-- Lottie Player Arka Plan -->
      <div class="absolute overflow-hidden inset-0 -z-10">
        <lottie-player class="w-full h-full skew-x-[20deg] scale-[5] pt-16 pr-10 transform opacity-70" src="world.json"
          background="transparent" speed="1" style="width: 100%; height: 100%;" loop autoplay></lottie-player>
      </div>
      <div class=" bg-opacity-25 text-white p-4 cursor-pointer relative">
        <div class="transform skew-x-[20deg]">Other</div>
      </div>
      <!-- Value Added Service Dropdown -->
      <div class=" text-white p-4 mt-1  bg-opacity-25 cursor-pointer relative">
        <div class="transform skew-x-[20deg]  flex justify-between items-center">
          Value Added Service
          <svg class="w-4 h-4 transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <!-- Dropdown Items -->
        <div class="mt-2 space-y-2 transform skew-x-[20deg]">
          <div class="flex items-center space-x-2 text-sm">
            <span>&nbsp;&nbsp;&nbsp;PDI Pre-Delivery Inspection</span>
          </div>
          <div class="flex items-center space-x-2 text-sm">

            <span>&nbsp;Ferry Shipping</span>
          </div>
          <div class="flex items-center text-sm">

            <span>Distribution</span>
          </div>
        </div>
      </div>

      <!-- Project Cargos -->
      <div class=" text-white p-4 mt-1 cursor-pointer">
        <div class="transform skew-x-[20deg] flex items-center justify-between">
          Project Cargos
          <svg class="w-4 h-4 transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>


    <!-- Ana İçerik -->
    <div
      class="container mx-auto px-4 lg:pt-32 pt-0 pb-20 flex flex-col md:flex-row items-center gap-12 lg:mt-44 mt-10">
      <!-- Video Bölümü -->
      <div class="w-full md:w-1/2 relative">
        <img src="/assets/images/servicesVideo.png" alt="RoRo Ship" class="w-full  shadow-xl" />

      </div>
      <button
        class="absolute lg:mt-20  lg:top-1/2 top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-4">
        <svg class="w-12 h-12  text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
      <!-- Metin Bölümü -->
      <div class="w-full md:w-1/2 text-white ml-6">
        <h1 class="text-4xl font-light mb-6">{{ $t('services.title') }}
          <span class="font-bold">{{ $t('services.titleSpan') }}</span>
        </h1>

        <p class="text-gray-300 leading-relaxed">
          {{ $t('services.description') }}
        </p>
      </div>
    </div>

    <!-- Arka Plan Efekti -->
    <div class="absolute inset-0 bg-[url('/assets/images/services.png')] opacity-10 pointer-events-none"></div>
  </div>
</template>

<script setup>
// İhtiyaç duyulabilecek reactive state'ler için
import { ref } from 'vue'

const isValueAddedOpen = ref(true)
</script>

<style scoped>
/* Özel stil gereksinimleri için */
.bg {
  background-image: url('/assets/images/services.png');
  background-size: cover;
  background-position: center;

}

.bg::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  /* Geçiş yüksekliği */
  background: linear-gradient(to bottom, rgba(36, 53, 84, 0) 0%, rgb(24, 37, 60) 100%);
  pointer-events: none;
  /* Tıklanabilirliği engeller */
}
</style>

<script>
export default {
  name: 'LottieAnimation'
}
</script>