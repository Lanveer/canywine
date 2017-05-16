// pages/Mine/msg/msg.js
var app = getApp();
Page({
  data: {
    msgs: [
      {
        name: '',
        id: '',
      },
      {
        name: '',
        id: '',
      },
      {
        name: '',
        id: '',
      },
    ]

  },


  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '资讯历史'
    })
  },
  onReady: function () {
    // 页面渲染完成


  },
  onShow: function () {
    // 页面显示
    var that = this;
    that.loadData();
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  // 查看详情
  cellClicked:function (event) {
    console.log('clicked...')
    var that = this;
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: '../../News/Details/mutipleImagesDetail/detail?itemId=' + itemId,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },   

  loadData: function () {
    var that = this;
    var uid = wx.getStorageSync('userId');
    uid = app.globalData.userId;
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Userapi/informationHistory',
      data: {
        uid: uid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        if (res.data.length > 0) {
          that.setData({
            msgs: res.data
          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

})