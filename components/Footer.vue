<!-- components/Footer.vue -->
<template>
  <footer class="w-full bg-white py-8 border-t">
    <div class="container mx-auto px-4">
      <!-- Logo ve Navigasyon -->
      <div class="flex justify-between items-center lg:pb-8">
        <!-- Logo -->  
        <lottie-player class="hidden lg:block" src="/wind-power-vs-solar1.json" background="transparent" speed="1"
          style="width: 244px; height: 244px;" loop autoplay></lottie-player>
             
        <div class=" lg:hidden flex justify-center w-full">
          <lottie-player src="/wind-power-vs-solar1.json" background="transparent" speed="1"
          style="width: 244px; height: 244px;" loop autoplay></lottie-player>
        </div>
        <!-- Navigation Links -->
        <nav class="hidden md:flex w-4/6 space-x-32 ">
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.home') }}</a>
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.about') }}</a>
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.services') }}</a>
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.news') }}</a>
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.contactUs') }}</a>
        </nav>
      </div>

      <!-- Contact Section -->
      <div class="mb-8 flex lg:flex-row flex-col">
        
      <div class="lg:w-1/5 w-full lg:ml-0 ml-12">
        <div class="flex items-center justify-start">
          <span class="mr-2 pb-4 text-2xl text-gray-700 font-semibold">&#8627;</span>
          <h2 class="text-2xl text-[#444444] font-semibold pb-2">{{ $t('footer.contact') }}</h2>
        </div>
        <p class="text-gray-600 lg:text-xs text-sm pb-1 ">{{ $t('footer.contactDesc') }}</p>
        <p class="text-gray-600 lg:text-xs text-sm">{{ $t('footer.contactDesc2') }}</p>
        
      </div>
      <div class=" w-full ">
        <!-- Contact Form -->
        <div class="flex gap-4 mt-4">
          <!-- Phone Icon Button -->
          <button class="bg-blue-500 p-4 ">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </button>
          <h1 class="text-gray-600 text-2xl mt-3">&</h1>
          <!-- Email Input and Send Button -->
          <div class="flex-1 flex gap-2">
            <div class="flex-1 flex items-center border pl-2 lg:px-4 focus-within:ring-2 focus-within:ring-blue-500">
              <input 
              type="email" 
              placeholder="E-mail address" 
              class="flex-1 focus:outline-none"
              >
              <button class="bg-blue-500 text-white px-5 lg:px-10 py-3  my-1 text-sm font-semibold hover:bg-blue-600">
              {{$t('footer.send')}}
              </button>
            </div>
          </div>
        </div>
        <nav class="block lg:hidden space-x-16 text-xs">
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.home') }}</a>
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.about') }}</a>
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.services') }}</a>
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.news') }}</a>
          <a href="#" class="text-[#A7A7A7] duration-700  hover:text-gray-900">{{ $t('footer.contactUs') }}</a>
        </nav>
      </div>

      </div>
        
        
      
    </div>
  </footer>
  <!-- Footer Bottom -->
  <div class="flex flex-col md:flex-row justify-between items-center pt-4 border-t bg-[#F8F8F8] w-full pb-4">
        <div class="container flex flex-col md:flex-row justify-between items-center mx-auto">
          <div class="text-gray-600 text-sm pb-4 md:pb-0 ">
          © {{ currentYear }} UGR. {{ $t('footer.rights') }}
        </div>

        <!-- Social Media Links -->
        <div class="flex space-x-4 pb-4 md:pb-0">
          <a href="#" class="text-gray-600 hover:text-[#0077b5]">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-600">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-600">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <!-- Footer Links -->
        <div class="flex space-x-6 text-sm ">
          <a href="#" class="text-gray-600 hover:text-gray-900">{{ $t('footer.cookies') }}</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">{{ $t('footer.privacy') }}</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">{{ $t('footer.terms') }}</a>
        </div>
        </div>
    <!-- Copyright -->
        
      </div>
</template>
<script>
export default {
  name: 'LottieAnimation'
}
</script>
<script setup>
const currentYear = new Date().getFullYear()

</script>
