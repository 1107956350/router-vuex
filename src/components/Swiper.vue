<template>
   <swiper :options="swiperOption">
     <swiper-slide v-for="(item, index) in canrouselData" :key="index">
      <img :src="item.imageUrl" alt="">
     </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper> 
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    canrouselData: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 150px;
    // border-bottom: 1px solid black;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>