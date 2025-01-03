<template>
  <header class="absolute z-50 lg:bottom-0 lg:left-0 w-full py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">

      <nav class="hidden md:flex space-x-24 text-white relative">
        <NuxtLink v-for="(item, key) in menu" :key="key" :to="localePath(key)" :class="[
          'hover:text-blue-600 duration-500 relative pb-4',
          activeKey === key ? 'text-blue-600 font-semibold' : 'text-[#C4C7CE]'
        ]" @mouseover="setActiveKey(key)" @mouseleave="clearActiveKey">
          {{ $t(`menu.${key}`) }}
          <span class="absolute bottom-0 left-0 w-[250px] h-[2px]"
            :class="activeKey === key ? 'bg-blue-600' : 'bg-[#324668]'"></span>
        </NuxtLink>
      </nav>
      <!-- Hamburger Menu Icon (Mobile) -->
      <div class="md:hidden mr-auto mt-10">
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
      </div>
      <div class="md:hidden mx-auto">
        <div class="absolute -top-14 right-24">
          <lottie-player class="mx-auto  justify-center" src="/wind-power-vs-solar0.json" background="transparent"
          speed="1" style="width: 244px; height: 244px;" loop autoplay></lottie-player>
      
        </div>
      </div>
      <div class="md:hidden ml-auto mt-10">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden border-t p-4 space-y-4 backdrop-blur-xl font-semibold">
      <NuxtLink v-for="(item, key) in menu" :key="key" :to="localePath(key)"
        class="block text-blue-600 hover:text-gray-100 duration-500">
        {{ $t(`menu.${key}`) }}
      </NuxtLink>
      <div class="flex space-x-4">
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" @click.prevent="changeLocale(locale.code)"
          class="text-sm font-semibold hover:text-blue-800 text-white duration-500">
          {{ locale.code.toUpperCase() }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Menü tanımı
const menu = {
  home: '/',
  about: '/about',
  services: '/services',
  news: '/news',
  contact: '/contact',
}

// Menüdeki rota için fonksiyon
const localePath = (key) => menu[key]

// Hamburger menü durumu
const isMenuOpen = ref(false)

// Hamburger menüyü aç/kapat
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Aktif menü öğesi
const activeKey = ref('home')

// Aktif menüyü ayarla
const setActiveKey = (key) => {
  activeKey.value = key
}

// Aktifliği temizle
const clearActiveKey = () => {
  activeKey.value = null
}

// Sayfa yüklendiğinde 'home' menü öğesini aktif yap
onMounted(() => {
  activeKey.value = 'home'
})

</script>