<!-- components/HoverCard.vue -->
<template>
    <div class="card-container">
      <div class="hover-card" :style="{ backgroundImage: `url(${image})` }">
        <!-- Normal Görünüm -->
        <div class="card-content">
          <span class="title">{{ title }}</span>
          <span class="arrow">→</span>
        </div>
        
        <!-- Hover Durumunda Genişleyecek Arka Plan -->
        <div class="hover-background"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .card-container {
    width: 300px;
    height: 200px;
    position: relative;
    perspective: 1000px;
  }
  
  .hover-card {
    position: relative;
    width: 100%;
    height: 100%;
    transform: skew(-20deg);
    overflow: hidden;
    background-color: #2B3247;
    transition: all 0.5s ease;
  }
  
  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 2rem;
    color: white;
    transform: skew(20deg);
    z-index: 2;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1rem;
  }
  
  .arrow {
    font-size: 1.5rem;
  }
  
  .hover-background {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform: skew(20deg);
    transition: all 0.5s ease;
    z-index: 1;
  }
  
  /* Hover Efektleri */
  .hover-card:hover {
    background-position: right center;
  }
  
  .hover-card:hover .hover-background {
    left: 0;
    transform: skew(20deg) translateX(0);
  }
  
  .hover-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: all 0.5s ease;
    z-index: 1;
  }
  
  .hover-card:hover::before {
    left: 0;
  }
  </style>