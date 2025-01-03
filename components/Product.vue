<template>
    <div class="bg">
        <div class="container mx-auto px-4 py-12 flex lg:flex-row flex-col gap-4 lg:gap-20 ">
            <div class="flex flex-col text-left h-full lg:w-2/6 leading-tight">
                <h1 class="lg:text-7xl text-5xl font-bold text-left">Green Vessel</h1>
                <h1 class="lg:text-6xl text-3xl text-left font-md ">7000CEU PCTC</h1>

            </div>
            <div class="flex flex-col  text-left  h-full lg:w-2/6">
                <h1 class="lg:text-lg text-sm font-semibold text-left">{{ $t('product.title') }}</h1>
                <p class="lg:text-sm text-xs font-md">{{ $t('product.desc') }}</p>
            </div>
            <div class="flex flex-col lg:w-2/6 justify-end items-end z-50">
                <div class="table mx-auto lg:mx-0 relative lg:h-[600px] lg:w-[300px] w-[400px] h-[300px]"> 
                    <h1 class="font-semibold text-lg lg:text-3xl lg:w-32 text-white text-left ml-7 mt-4 lg:mt-8 lg:mb-14 mb-4">{{
                        $t('product.table')}}</h1>
                    <img class="absolute -top-4 -right-4 mt-4 mr-4  h-32 w-auto" src="/assets/images/green/settings.png"
                        alt="">
                    <img class="lg:w-[250px] w-[150px] ml-8 lg:mx-auto z-10" src="/assets/images/green/list.png" alt="">
                </div>
            </div>
            <img class="hidden lg:block absolute top-[600px] right-0 w-4/6 h-[700px] z-50" src="/assets/images/leaf.png" alt="">
            
            <img class="lg:hidden block absolute left-0 top-[700px] z-50" src="/assets/images/leaf-mobile.png" alt="">
        </div>
    </div>
    <div class="bg1 w-full min-h-screen bg-navy-900 flex flex-col p-12">
    <div class="max-w-7xl mx-auto z-50">
        <div class="flex flex-row items-start w-full">
          <h1 class="block absolute right-16 top-4 lg:hidden w-3/6 text-left text-3xl font-bold text-white">
            {{ $t('product.solutionTitle') }}
            </h1>  
          <h1 class="lg:block hidden w-2/5 text-left text-7xl  font-bold text-white mb-8">
            {{ $t('product.solutionTitle') }}
            </h1>
            <div class="lg:w-2/4 mx-auto lg:ml-24 lg:mt-0 mt-52">
            <p class="text-sm text-left font-light text-white max-w-2xl mb-4">
                {{ $t('product.solutionDesc') }}
            </p>
            <p class="text-sm text-left font-light lg:w-4/6 text-white max-w-2xl mb-4">
                {{ $t('product.solutionDescContinued') }}
            </p>
            </div>
        </div>
        
        <p class="text-xl text-left text-white lg:mt-32 lg:mr-0 mr-20 font-semibold">
            {{ $t('product.altTitle') }}
        </p>
    </div>
    <div class="bg-navy-900 py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 lg:gap-24 gap-14">
        <!-- Strategic Partnerships -->
        <div class="flex items-start space-x-6">
          <div class="w-24 h-24 flex-shrink-0 rounded-full border-2 border-blue-300 flex items-center justify-center">
            <img src="~/assets/images/handshake.png" alt="Strategic Partnerships" class="w-16 h-12" />
          </div>
          <div>
            <h3 class="lg:text-xl text-lg font-semibold text-white mb-3">{{ $t('delivery.title1') }}</h3>
            <p class="text-gray-300 text-sm font-light leading-relaxed">{{ $t('delivery.desc1') }}</p>
          </div>
        </div>

        <!-- Tailor-Made Solutions -->
        <div class="flex items-start space-x-6">
          <div class="w-24 h-24 flex-shrink-0 rounded-full border-2 border-blue-300 flex items-center justify-center">
            <img src="~/assets/images/puzzle.png" alt="Tailor-Made Solutions" class="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 class="lg:text-xl text-lg font-semibold text-white mb-3">{{ $t('delivery.title2') }}</h3>
            <p class="text-gray-300 text-sm font-light leading-relaxed">{{ $t('delivery.desc2') }}</p>
          </div>
        </div>

        <!-- Accelerated Growth -->
        <div class="flex items-start space-x-6">
          <div class="w-24 h-24 flex-shrink-0 rounded-full border-2 border-blue-300 flex items-center justify-center">
            <img src="~/assets/images/gears.png" alt="Accelerated Growth" class="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 class="lg:text-xl text-lg font-semibold text-white mb-3">{{ $t('delivery.title3') }}</h3>
            <p class="text-gray-300 text-sm font-light leading-relaxed">{{ $t('delivery.desc3') }}</p>
          </div>
        </div>

        <!-- Environmental Responsibility -->
        <div class="flex items-start space-x-6">
          <div class="w-24 h-24 flex-shrink-0 rounded-full border-2 border-blue-300 flex items-center justify-center">
            <img src="~/assets/images/earth.png" alt="Environmental Responsibility" class="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 class="lg:text-xl text-lg font-semibold text-white mb-3">{{ $t('delivery.title4') }}</h3>
            <p class="text-gray-300 text-sm font-light leading-relaxed">
              
              {{ $t('delivery.desc4') }}</p>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</template>
<style>
.bg {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/assets/images/product.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 768px) {
  .bg {
  background-image: url('/assets/images/product-mobile.png');
  }
}

.bg::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    /* Geçiş yüksekliği */
    background: linear-gradient(to bottom, rgba(36, 53, 84, 0) 0%, rgba(36, 53, 85, 1) 100%);
    pointer-events: none;
    /* Tıklanabilirliği engeller */
}

.bg1 {
    position: relative;
    width: 100%;
    height: auto;
    background-color: #243555;
}

.table {
    background-image: url('/assets/images/green/table.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background: linear-gradient(to bottom,rgb(35, 120, 227) 80%, rgba(35, 121, 227, 0)  100%);
    

}
@media (max-width: 100px) {
  .table {
  background-image: url('/assets/images/green/table.png');
  background-size: contain;
  }
}
</style>