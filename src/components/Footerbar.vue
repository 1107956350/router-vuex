<template>
  <div class="app-footer">
    <router-link to="/">配送到家</router-link>
    <router-link to="/classify">分类</router-link>
    <router-link to="/vip">会员</router-link>
    <router-link to="/cart">购物车</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
</template>
<style lang="scss">
  .app-footer {
    width: 100%;
    height: 45px;
    display: flex;
    a {
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      &.router-link-exact-active {
        color: #fff;
        background: red;
      }
    }
  }
</style>