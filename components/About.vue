<!-- pages/index.vue -->
<template>
  <div class="h-[900px] bg-white">
    <!-- Header Section -->
    <div class="relative">
      <div class="absolute top-0 right-[36px] lg:right-[188px]">
        <div
          class="flex h-[90px] w-[350px] lg:h-[200px] lg:w-[500px]  items-center justify-center px-4 py-2 bg-gradient-to-t from-sky-600 to-[#2477DF] text-white font-md tracking-tight transition-colors">
          <div class="absolute bottom-10 text-lg">
            <div class="flex items-center">
              <img class="mr-2 mb-1" src="/assets/images/info.svg" />
              <span>&nbsp;{{ $t('about.team') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class=" container px-8 lg:px-4 py-16 ">
      <!-- Hero Section -->
      <div class="text-left mx-auto max-w-4xl lg:mr-44 lg:mt-44 mt-28">
        <h1 class="text-[#202C40] text-lg lg:text-4xl  font-semibold leading-tight lg:mb-12 mb-6">
          {{ $t('about.title') }}
        </h1>
        <div class="lg:ml-64 ml-0">
          <p class="text-gray-500 text-sm font-md mb-1">{{ $t('about.description') }}</p>
          <p class="text-gray-500 text-sm font-md">{{ $t('about.description2') }}</p>
        </div>
      </div>
    </div>


      <div class="grid grid-cols-3 lg:gap-20 mt-16 h-72 pl-4 lg:pl-0 w-full overflow-hidden">
        <!-- FVL Service -->
        <div
          class="fvl relative ml-0 lg:pl-0 pl-16 lg:ml-[505px] w-[140px] lg:w-60 hover:w-[400px] duration-700 bg-[#3F495C] text-white p-8 transform skew-x-[40deg] hover:bg-[#34495e] transition-all cursor-pointer">
          <div class="transform skew-x-[-40deg]">
            <div class="flex items-center">
              <h2 class="text-3xl ml-4 font-bold">FVL</h2>
              <img src="/assets/images/right-arrow.png"
                class="h-3 w-3 lg:h-6 lg:w-6 mt-4 ml-2 absolute -top-3 lg:-top-2 right-12 lg:right-24 group-hover:right-0 transition-all"
                alt="">
            </div>
          </div>
          <img src="/assets/images/ship3.png"
            class="hidden lg:block absolute transform skew-x-[-40deg] bottom-2 -left-10 w-[600px] h-[200px] opacity-0 transition-opacity duration-300 hover:opacity-100 overflow-visible"
            alt="">
        </div>

        <!-- RO-RO Service -->
        <div
          class="roro relative bg-[#18253C] ml-0 lg:ml-[325px] w-[250px] lg:w-60 hover:w-[400px] duration-700 text-white p-8 transform skew-x-[40deg] hover:bg-[#283593] cursor-pointer transition-all">
          <div class="transform skew-x-[-40deg]">
            <div class="flex items-center">
              <h2 class="text-3xl  font-bold">RO-RO</h2>
              <img src="/assets/images/right-arrow.png"
                class="hidden lg:block h-6 w-6 mt-4 ml-2 absolute -top-3  right-12 lg:right-14 group-hover:right-0 transition-all"
                alt="">
            </div>
          </div>
          <img src="/assets/images/ship2.png"
            class="hidden lg:block absolute transform skew-x-[-40deg] bottom-12 right-0 w-[400px] h-[150px] opacity-0 transition-opacity duration-300 hover:opacity-100 overflow-visible"
            alt="">
        </div>

        <!-- New Service -->
        <div
          class="dropdown block bg-[#2578E1] lg:hidden relative w-[140px] lg:w-60 hover:w-[400px] duration-700 text-white p-8 transform skew-x-[40deg] hover:bg-[#34495e] cursor-pointer transition-all">
          <div class="transform skew-x-[-40deg]">
            <div class="flex items-center">
              <h2 class="text-3xl font-bold">Other</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
<style>
.roro {
  position: relative;
  transform: skew(40deg);
  /* Div'in 40 derece skew etkisi */
  overflow: hidden;
  /* Pseudo-element'in taşmasını önler */
}

.roro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-image 0.3s ease;
  /* Resim geçişi için */
  transform: skew(-40deg);
  /* Arka planın düz durmasını sağlar */
  z-index: -1;
  /* Arka planda kalmasını sağlar */
}

.roro:hover::before {
  background-image: url('/assets/images/about-hover.jpg');
  /* Hover için resim */
  position: absolute;
  top: 0;
  left: -150px;
  width: 500%;
  /* Resmin genişliği */
  opacity: 0.6;
  transition: all 0.6s ease;
}

.fvl {
  position: relative;
  transform: skew(40deg);
  /* Div'in 40 derece skew etkisi */
  overflow: hidden;
  /* Pseudo-element'in taşmasını önler */
}

.fvl::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-image 0.3s ease;
  /* Resim geçişi için */
  transform: skew(-40deg);
  /* Arka planın düz durmasını sağlar */
  z-index: -1;
  /* Arka planda kalmasını sağlar */
}

.fvl:hover::before {
  background-image: url('/assets/images/about-hover.jpg');
  /* Hover için resim */
  position: absolute;
  top: 0;
  left: -150px;
  width: 500%;
  /* Resmin genişliği */
  opacity: 0.6;
  transition: all 0.6s ease;
}
.dropdown {
  position: relative;
  transform: skew(40deg);
  /* Div'in 40 derece skew etkisi */
  background-image: url('/assets/images/dropdown.png');
  background-size: cover;
  background-position: center;

}


</style>
<script setup>
// No additional script needed for this basic implementation
</script>

<style>
/* Add any custom styles here if needed */
</style>