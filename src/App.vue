<template>
  <div id="app">
    <header class="header" v-if="$route.meta.isFooter">
      {{ $route.meta.title }}
    </header>

    <div class="main">
       <router-view/>
    </div>

    <footer class="footer" v-if="$route.meta.isFooter">
      <FooterBar />
    </footer>
  </div>
</template>
<script>
import FooterBar from './components/Footerbar'

export default {
  components: {
    FooterBar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 45px;
    background: #eee;
  }
  .main {
    width: 100%;
    flex:1;
    overflow: auto;
  }
  .footer {
    width: 100%;
  }
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
