import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex数据持久化，借用本地存储 
// 1. 通过vuex的实例去 监听到（subscribe）用户每次提交的时候 进行本地存储
// 2. 进入vuex的是时候，去取本地存储的数据 

const store = new Vuex.Store({
  state: { // 数据仓库
    cartList: JSON.parse(localStorage.getItem('goodsCart')) || [],
    totalPrice: 0
  },
  mutations: { // 提交同步代码的地方
    // 第一个参数是 访问数据仓库中的值 第二个参数就是组件传递过来的值
    increment(state, item) {
     let goods = state.cartList.find(val => val.id === item.id)
     if (goods) {
       goods.count +=1
     } else {
      state.cartList.push({
        count: 1,
        title: item.title,
        price: item.price,
        id: item.id
      })
     }
    },
    addItem(state, index) {
      state.cartList[index].count ++
    },
    removeItem(state, index) {
      if (state.cartList[index].count <= 1) {
        if (window.confirm('你确定要删除吗')) {
          state.cartList.splice(index, 1)
        }
        return
      }
      state.cartList[index].count --
    }
  },
  getters: { // 相当于计算属性
    // 计算总价函数
    getTotalPrice(state) {
      state.totalPrice = 0;
      state.cartList.forEach(item => {
        state.totalPrice += item.count * item.price
      })
      return state.totalPrice
    }
  },
  actions: { // 提交异步代码的地方
  },

  // modules: {
  // }
})

// vuex数据持久化，借用本地存储 
// 1.通过vuex的实例去 监听到（subscribe）用户每次提交的时候 进行本地存储
// 2. 进入vuex的是时候，去取本地存储的数据 

store.subscribe((mutations, state) => {
  localStorage.setItem('goodsCart', JSON.stringify(state.cartList))
})


export default store

