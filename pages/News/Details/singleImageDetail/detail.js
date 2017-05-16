// pages/News/Details/singleImageDetail/detail.js
var app = getApp();
Page({
  data: {
    title: '',
    editor: '',
    time: '',
    image1: '',
    image2: '',
    image3: '',
    content1: '',
    content2: '',
    content3: '',
    is_Top: true,
    loadingHidden: true
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var uid = wx.getStorageSync('userId')
    uid = app.globalData.userId;
    var newsId = options.itemId;
    var banner = options.banner;
    that.showLoading()
    var url = 'https://min.jiushang.cn/index.php/index/Newsapi/newsInfo'
    if(banner == 'banner'){
      url = 'https://min.jiushang.cn/index.php/index/Newsapi/bannerInfo'
    }
    wx.request({
      url: url,
      data: {
        itemId: newsId,
        uid:uid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success

        that.setData({
          title: res.data.title,
          editor: res.data.editor,
          time: res.data.time,
          image1: res.data.image1,
          image2: res.data.image2,
          image3: res.data.image3,
          content1: res.data.content1,
          content2: res.data.content2,
          content3: res.data.content3,
          is_Top: res.data.is_Top
        })
        console.log(that.data.contentData)
        that.hideLoading()
      },
      fail: function () {
        // fail
        that.hideLoading()
        wx.showModal({
                  title: '网络错误，请重试',
                  content: '',
                  showCancel: false,
                  success: function (res) {
                    if (res.confirm) {
                    }
                  }
                })
      },
      complete: function () {
        // complete
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  showLoading: function () {
    var that = this;
    that.setData({
      loadingHidden: false
    })
  },

  hideLoading: function () {
    var that = this;
    that.setData({
      loadingHidden: true
    })
  },
})