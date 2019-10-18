<template>
  <div class="home">
    <SwiperComponent :canrouselData="canrouselData"/>
    <CartListComponent :cartData="cartData" />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import SwiperComponent from '../components/Swiper'
import CartListComponent from '../components/Cartlist'

export default {
  name: 'home',
  data() {
    return {
      canrouselData: [],
      cartData: []
    }
  },
  components: {
    SwiperComponent,
    CartListComponent
  },
  created() {
    this.getCanrousel()
  },
  methods: {
    getCanrousel() {
      this.$http.get('/canrousel').then(res => {
        this.canrouselData = res.data.list.pageModules[0].dataList
        // console.log(res.data.list.pageModules[0].dataList)
      })
      this.$http.get('/cartList').then(res => {
        this.cartData = res.data
      })
    }
  },
}
</script>
