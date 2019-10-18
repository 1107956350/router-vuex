import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '配送到家',
      isFooter: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: '购物车',
      isFooter: true
    }
  },
  {
    path: '/vip',
    name: 'vip',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Vip.vue'),
    meta: {
      title: '会员',
      isFooter: true
    }
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Classify.vue'),
    meta: {
      title: '分类',
      isFooter: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Mine.vue'),
    meta: {
      title: '我的',
      isFooter: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "cart" */ '../views/404.vue'),
    meta: {
      isFooter: false
    }
  }
]

console.log(process.env.BASE_URL, 'process.env.BASE_URL')
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
