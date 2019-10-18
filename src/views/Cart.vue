<template>
  <div class="cart">
    <h1>cart</h1>

    <ul class="cart-box">
      <li v-for="(item, index) in getCartData" :key="index">
        {{item.title}} 
        {{item.price}} <br>
        <span @click="removeItem(item, index)"> - </span>
        <span> {{item.count * item.price}} </span>
        <span @click="addItem(item, index)"> + </span>
        <hr style="margin-top:5px;">
      </li>
    </ul> 

    {{getTotalPrice}}
  </div>
</template>
<script>
export default {
  computed: {
    getCartData() { // 取vuex中state中的值
      return this.$store.state.cartList
    },
    getTotalPrice() { // 取vuex中总价的函数
      return this.$store.getters.getTotalPrice
    }
  },
  methods: {
    removeItem(item, index) {
      this.$store.commit('removeItem', index)
    },
    addItem(item, index) {
       this.$store.commit('addItem', index)
    }
  },
}
</script>
<style lang="scss">
   .cart {
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
          margin: 5px;
        }
      }
    }
  }
</style>
