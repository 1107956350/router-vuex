
const dmallList = require('./public/mock/dmall.json')
module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app) {

      // 轮播图接口
      app.get('/canrousel', (req, res) => {
        res.json({
          errCode: 000,
          list: dmallList
        }) 
      })
      
      // 购物车列表接口
      app.get('/cartList', (req, res) => {
        res.json([
          {
            id: 0,
            title: '小米电视',
            price: 100,
            count: 0
          },
          {
            id: 1,
            title: 'apple电视',
            price: 100,
            count: 0
          },
          {
            id: 2,
            title: 'huawei电视',
            price: 100,
            count: 0
          },
          {
            id: 3,
            title: 'huasuo电视',
            price: 100,
            count: 0
          },
          {
            id: 4,
            title: 'sony电视',
            price: 100,
            count: 0
          },
          {
            id: 5,
            title: '小米电视',
            price: 100,
            count: 0
          }
        ])
      })
    }
  }
}