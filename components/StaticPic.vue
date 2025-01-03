<template>
    <div class="relative mt-10 w-full h-screen overflow-hidden">
      <!-- Scrollable Container -->
      <div class="h-[200vh]">
        <!-- Image Wrapper -->
        <div
          ref="imageContainer"
          class="sticky top-0 h-screen"
          :style="{ transform: `translateX(${imageOffset}px)` }"
        >
          <img
            src="/100.000.png"
            alt="Scroll Image"
            class="h-full w-auto object-cover"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageOffset: 0,
        maxOffset: 0,
      };
    },
    mounted() {
      const image = this.$refs.imageContainer.querySelector("img");
  
      // Resmin ekran dışına taşan genişliğini hesapla
      this.maxOffset = image.offsetWidth - window.innerWidth;
  
      // Scroll olayını dinle
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
  
        // Resmin yatay hareketini hesapla
        if (scrollY <= windowHeight) {
          this.imageOffset = -(this.maxOffset * (scrollY / windowHeight));
        } else {
          this.imageOffset = -this.maxOffset; // Resim tamamen görünür kaldığında sabitlenir
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Resmin ekran dışına taşmasını düzgün şekilde yönet */
  img {
    object-fit: cover;
  }
  </style>
  