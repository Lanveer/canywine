// pages/search/search.js
var app = getApp();
Page({
  data: {

    history: [
      {
        history: ''
      },
    ],
    recommend: [
      {
        name: '',
        id: '',
      },
    ],
    search_hide: true,
    delete_show: false,
    input_show: false,
    inputValue: '',
    showSearchView: true,
    inputValue: '',
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
  },

  input: function (event) {
    var that = this;
    that.setData({
      search_hide: false, input_show: true, delete_show: true,
    })
  },

  back: function (event) {
    var that = this;
    that.setData({
      search_hide: true, input_show: false, delete_show: false,
    })
  },

  bindKeyFocus: function (event) {
    var that = this;
    that.setData({
      showSearchView: true
    })
  },

  bindKeyInput: function (event) {
    var that = this;
    that.setData({
      inputValue: e.detail.value
    })
  },

  //点击搜索
  readyToSearch: function (event) {
    var that = this;
    that.setData({
      search_hide: true, input_show: false, delete_show: false,
      showSearchView: false
    })

    var uid = wx.getStorageSync('userId')
    uid = app.globalData.userId;

    that.showLoading();
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Boothapi/searchBooth',
      data: {
        keyword: that.data.inputValue,
        uid: uid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res)
        that.setData({
          list_data: res.data
        })
        that.hideLoading()
      },
      fail: function () {
        // fail
        console.log('failed search')
        that.hideLoading()
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

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var uid = wx.getStorageSync('userId')
    uid = app.globalData.userId;
    that.showLoading();
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Boothapi/showTipword',
      data: {
        uid: uid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        that.setData({
          history: res.data.history,
          recommend: res.data.recommend
        })
        that.hideLoading();
      },
      fail: function () {
        // fail
        console.log('failed');
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
        console.log('hahah');
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

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  //点击历史搜索
  historyClicked: function (event) {
    var keyword = event.currentTarget.dataset.keyword;
    var that = this;
    that.setData({
      showSearchView: false
    })
    var uid = wx.getStorageSync('userId')
    uid = app.globalData.userId;

    that.showLoading();
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Boothapi/searchBooth',
      data: {
        keyword: that.data.keyword,
        uid: uid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res)
        that.setData({
          list_data: res.data
        })
        that.hideLoading()
      },
      fail: function () {
        // fail
        console.log('failed search')
        that.hideLoading()
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

  //点击推荐
  recommendClicked: function (event) {
    var itemId = event.currentTarget.dataset.itemId;
    that.setData({
      showSearchView: false
    })
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

  // 上拉加载更多
  // scrollView时间响应函数
  upper: function (event) {
    console.log('upper')
  },

  lower: function (event) {
    var that = this;
    console.log('lower')
    that.showLoading()
    var uid = wx.getStorageSync('userId');
    uid = app.globalData.userId;
    if (!didReachEnd) {
      currentPage += 1;
      wx.request({
        url: 'https://min.jiushang.cn/index.php/index/Boothapi/searchBooth',
        data: {
          keyword: that.data.inputValue,
          uid: uid,
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
          that.hideLoading();
        }
      })
    } else {
      console.log('reach end...')
      that.hideLoading();
    }


  },

  scroll: function (event) {

  },
})

var currentPage = 1
var didReachEnd = false

function search(that, keyword) {
  var uid = wx.getStorageSync('userId')
  uid = app.globalData.userId;
    that.showLoading();
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Boothapi/searchBooth',
      data: {
        keyword: that.data.keyword,
        uid: uid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res)
        that.setData({
          list_data: res.data
        })
        that.hideLoading()
      },
      fail: function () {
        // fail
        console.log('failed search')
        that.hideLoading()
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
        that.hideLoading();
      }
    })
}