<template>
  <div class="min-h-screen bg-[#18253C] relative overflow-hidden ">
      <div class="flex lg:flex-row flex-col w-full ml-4 lg:ml-32">
        <div class="flex flex-col lg:w-1/6 mr-20 items-left ">
          <h1 class="underline text-md lg:text-xl text-white">{{ $t('statics.link') }}</h1>
          <img src="/assets/images/right-arrow.png"
            class="h-4 w-4 lg:h-6 lg:w-6 mt-4 transform rotate-[315deg] self-start ml-0" alt="">
        </div>
        <div class="flex flex-col-reverse lg:w-3/6 mr-20">
          <h1 class="underline text-md lg:text-xl text-blue-500">{{ $t('statics.linkTo') }}</h1>
          <br>
          <h1 class="text-white text-xl lg:text-4xl font-semibold">{{ $t('statics.title') }}</h1>
        </div>
      </div>
      <!-- Sağ Üst Bölge -->
      <div class="hover-area  bottom-left"
        @mouseover="showImage('image1', 'bottom-left', '+3 most', '21', translatedTitle, translatedBadge)">
      </div>

      <!-- Sol Alt Bölge -->
      <div class="hover-area top-right"
        @mouseover="showImage('image3', 'top-right', '+2.000', '5', translatedTitle, translatedBadge)">
      </div>
      <!-- Orta Bölge -->

      <div class="hover-area center"
        @mouseover="showImage('image2', 'center', '+100.000', '10', translatedTitle, translatedBadge)">
      </div>
      <!-- Görsel ve Mavi Yuvarlak -->
       <div class="block lg:hidden">
          <StaticPic/>
       </div>
       <div class="hidden lg:block">  >
        <div :class="['image-container']">
        <img :src="image" alt="Hovered Image" />
        <div class="badge" :class="badgePosition" v-show="badgeVisible">
          <h1 class="font-semibold text-center">{{ badgeNumber }}</h1>
          <p class="text-sm text-center">{{ badgeDetail }}</p>
        </div>
        <div class="text-white flex flex-row items-center mb-20">
          <h1 class="lg:text-[150px] text-[50px] font-semibold">{{ info }}</h1>
          <h1 class="lg:text-6xl text-[30px] font-light mt-4 lg:mt-16">{{ infoDetail }}</h1>
        </div>
      </div>
       </div>
      
  </div>
</template>

<script>
export default {

  data() {
    return {
      imageVisible: true,
      badgeVisible: true,
      image: '/100.000.png',
      badgePosition: '',
      badgeNumber: "",
      info: "",
      infoDetail: "",
      badgeDetail: "",
    };
  },

  methods: {
    showImage(image, badgePosition, badgeNumber, info, infoDetail, badgeDetail) {
      this.imageVisible = true;
      this.badgeVisible = false; // Rozeti önce gizle
      setTimeout(() => {
        if (image === 'image1') {
          this.image = '/3.png';
        } else if (image === 'image2') {
          this.image = '/100.000.png';
        } else {
          this.image = '/2000.png'; // Üçüncü seçenek veya varsayılan
        }
        this.badgePosition = badgePosition;
        this.badgeNumber = badgeNumber;
        this.badgeVisible = true; // Rozeti yeniden göster
        this.info = info;
        this.infoDetail = infoDetail;
        this.badgeDetail = badgeDetail;
      }, 200); // Hafif bir gecikme ekleniyor
    },
    resetImage() {
      // Görselleri sıfırla
      this.imageVisible = false;
      this.badgeVisible = false;
      this.info = "";
      this.infoDetail = "";
    },
  },
  computed: {
    translatedTitle() {
      if (this.badgePosition === 'bottom-left') {
        return this.$t('statics.infoDetail');
      }
      else if (this.badgePosition === 'top-right') {
        return this.$t('statics.infoDetail_2');

      }
      else if (this.badgePosition === 'center') {
        return this.$t('statics.infoDetail_3');
      } else return "";
    },
    translatedBadge() {
      if (this.badgePosition === 'bottom-left') {
        return this.$t('statics.badgeDetail');
      }
      else if (this.badgePosition === 'top-right') {
        return this.$t('statics.badgeDetail_2');

      }
      else if (this.badgePosition === 'center') {
        return this.$t('statics.badgeDetail_3');
      } else return "";
    }
  },
};

</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: auto;
}

.hover-area {
  position: absolute;
  width: 500px;
  height: 500px;
  z-index: 5;
}

.top-right {
  top: 0;
  right: 0;
}

.bottom-left {
  bottom: 0;
  left: 0;
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.image-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 100px;
}

.image-container img {
  width: 900px;
  height: auto;
  margin-top: 100px;
}

.badge {
  position: absolute;
  background-color: #407DED;
  color: white;
  border-radius: 50%;
  width: 10dvi;
  height: 10dvi;
  justify-content: center;
  opacity: 0;
  transform: scale(0);
  transition: transform 0.3s ease, opacity 0.3s ease;
  align-content: center;
}

.badge.center,
.badge.bottom-left,
.badge.top-right {
  animation: growIn 0.4s ease-out forwards;
}

.badge.hidden {
  animation: shrinkOut 0.4s ease-in forwards;
}

.badge.center {
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  font-size: 2dvi;
  z-index: 10;
}

.badge.bottom-left {
  bottom: 300px;
  left: 10px;
  transform: scale(0.9);
  font-size: 2dvi;
}

.badge.top-right {
  top: 100px;
  right: 10px;
  font-size: 3dvi;
  transform: scale(0.9);
}

@keyframes growIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hover-area {
    width: 250px;
    height: 250px;
  }

  .image-container img {
    display: block;
    width: 500px;
    height: 50dvi;
    margin-top: 50px;
  }

  .badge {
    width: 20dvi;
    height: 20dvi;
    font-size: 1dvi;
  }

  .badge.center {
    font-size: 1.5dvi;
  }

  .badge.bottom-left {
    bottom: 150px;
    font-size: 1.5dvi;
  }

  .badge.top-right {
    top: 50px;
    font-size: 2dvi;
  }
}
</style>
