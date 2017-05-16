// pages/list/list.js
var app = getApp();
Page({
  data: {
    list_data: [
      {
        title: '贵州茅台集团有限公司',
        url: '../../images/show1.png',
        tip: '五粮液酒店',
        floor: '一层-24号',
        contacts: '陈经理',
        tel: '1545676235',
        tag: [{ val: '白酒1' }, { val: '红酒1' }, { val: '黑酒1' }]
      },
      {
        title: '宜宾五粮液酒店',
        url: '../../images/show1.png',
        tip: '五粮液酒店2',
        floor: '二层-24号',
        contacts: '章经理',
        tel: '1545676235',
        tag: [{ val: '白酒2' }, { val: '红酒2' }, { val: '黑酒2' }]
      }
    ],
    loadingHidden: true,
    keyword:'',
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var uid = wx.getStorageSync('userId');
    uid = app.globalData.userId;
    var keyword = options.title;
    that.showLoading();
    that.setData({
      keyword:keyword
    })
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Boothapi/searchBooth',
      data: {
        uid: uid,
        keyword: keyword
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        that.hideLoading();
        console.log(res)
        that.setData({
          list_data: res.data
        })
      },
      fail: function () {
        // fail
        that.hideLoading();
        wx.showModal({
          title: '网络错误',
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

  // scrollView时间响应函数
  upper: function (event) {
    console.log('upper')
  },

  lower: function (event) {
    var that = this;
    console.log('lower')
    var uid = wx.getStorageSync('userId');
    var keyword = that.data.keyword;
    if (!didReachEnd) {
    that.showLoading();
      currentPage += 1;
      that.showLoading()
      wx.request({
        url: 'https://min.jiushang.cn/index.php/index/Boothapi/searchBooth',
        data: {
          uid: uid,
          keyword: keyword,
          page:currentPage
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);
          if (res.data.length < 20) {
            didReachEnd = true;
          } else {
            didReachEnd = false;
          }

          if (res.data.length > 0) {
            var totalData = that.data.list_data
            that.setData({
              list_data: totalData.concat(res.data)
            })
          }
          that.hideLoading()
        },
        fail: function () {
          // fail
          that.hideLoading()
          wx.showModal({
            title: '加载失败，请重试',
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
    } else {
      console.log('reach end...')

    }

  },

  scroll: function (event) {

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

var currentPage = 1
var didReachEnd = false