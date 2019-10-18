<template>
  <div class="cart-list">
    <ul class="cart-box">
      <li v-for="(item, index) in cartData" :key="index">
        {{item.title}} 
        {{item.price}} <br>
        <span @click="cartAddEvent(item)"> + </span>
        <hr style="margin-top:5px;">
      </li>
    </ul> 
  </div>
</template>
<script>
export default {
  props: {
    cartData: Array
  },
  methods: {
    cartAddEvent(item) {
      // 提交给vuex
      this.$store.commit('increment', item)
    }
  },
}
</script>
<style lang="scss">
  .cart-list {
    width: 100%;
    .cart-box {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 45%;
        margin: 5px;
        text-align: center;
        span {
          display: inline-block;
          width: 35px;
          height: 35px;
          border-radius: 4px;
          background: #ccc;
          text-align: center;
          line-height: 35px; 
        }
      }
    }
  }
</style>