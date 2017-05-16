// pages/News/News/news.js
var app = getApp();
Page({
  data: {
    topTabBarData: [
      {
        title: '会展热点',
        didSelected: true
      },
      {
        title: '会展攻略',
        didSelected: false
      }
    ],
    needshowInfo: false,
    isGetCodeEnable: true,
    timeleft: 60,
    currentTapIsHotel: true,
    loadingHidden: true,
    inputPhoneNumber: '',
    newsData: [
      // {
      //   // 轮播图
      //   isTopImages: true,
      //   isTopNews: false,
      //   isImagesNews: false,
      //   isNormalNews: false,
      //   isBigImagesNews: false,
      //   isVideo: false,
      //   contents: [
      //     {
      //       imageURL: '../../../images/scheduleTest@2x.png',
      //       itemId: '1'
      //     },
      //     {
      //       imageURL: '../../../images/scheduleTest@2x.png',
      //       itemId: '2'
      //     },
      //     {
      //       imageURL: '../../../images/scheduleTest@2x.png',
      //       itemId: '3'
      //     }
      //   ],
      // },
      // // 置顶新闻
      // {
      //   isTopImages: false,
      //   isTopNews: true,
      //   isImagesNews: false,
      //   isNormalNews: false,
      //   isBigImagesNews: false,
      //   isVideo: false,
      //   imageURL: '../../../images/scheduleTest@2x.png',
      //   itemId: '5',
      //   title: '2017年春季糖酒会将于2017年3月23-25日在会展中心举行',
      //   bottomTitle: '会展资讯',
      // },

      // // 图集
      // {
      //   isTopImages: false,
      //   isTopNews: false,
      //   isImagesNews: true,
      //   isNormalNews: false,
      //   isBigImagesNews: false,
      //   isVideo: false,
      //   imageURL1: '../../../images/scheduleTest@2x.png',
      //   imageURL2: '../../../images/scheduleTest@2x.png',
      //   imageURL3: '../../../images/scheduleTest@2x.png',
      //   itemId: '6',
      //   title: '2017年春季糖酒会有哪些产品',
      //   bottomTitle: '图集',
      // },

      // // 常规单图新闻
      // {
      //   isTopImages: false,
      //   isTopNews: false,
      //   isImagesNews: false,
      //   isNormalNews: true,
      //   isBigImagesNews: false,
      //   isVideo: false,
      //   imageURL: '../../../images/scheduleTest@2x.png',
      //   itemId: '7',
      //   title: '2017年春季糖酒会有哪些产品',
      //   bottomTitle: '会展资讯',
      // },

      // // 大图新闻
      // {
      //   isTopImages: false,
      //   isTopNews: false,
      //   isImagesNews: false,
      //   isNormalNews: false,
      //   isBigImagesNews: true,
      //   isVideo: false,
      //   imageURL: '../../../images/scheduleTest@2x.png',
      //   itemId: '8',
      //   title: '2017年春季糖酒会有哪些产品',
      //   bottomTitle: '会展资讯',
      // },

      // // 视频新闻
      // {
      //   isTopImages: false,
      //   isTopNews: false,
      //   isImagesNews: false,
      //   isNormalNews: false,
      //   isBigImagesNews: false,
      //   isVideo: true,
      //   imageURL: '../../../images/videoNews@2x.png',
      //   itemId: '8',
      //   time: '01:37',
      //   title: '2017年春季糖酒会有哪些产品',
      // }
    ],

    feed: [
      {
        title: '白酒',
        src1: "../../../images/feed-unchoosed.png",
        src2: '../../../images/feed-choosed.png',
        isChecked: false
      },
      {
        title: '啤酒',
        src1: "../../../images/feed-unchoosed.png",
        src2: '../../../images/feed-choosed.png',
        isChecked: false
      },
      {
        title: '葡萄酒',
        src1: "../../../images/feed-unchoosed.png",
        src2: '../../../images/feed-choosed.png',
        isChecked: false
      },
      {
        title: '黄酒',
        src1: "../../../images/feed-unchoosed.png",
        src2: '../../../images/feed-choosed.png',
        isChecked: false
      },
      {
        title: '预调酒',
        src1: "../../../images/feed-unchoosed.png",
        src2: '../../../images/feed-choosed.png',
        isChecked: false
      },
      {
        title: '食品饮料',
        src1: "../../../images/feed-unchoosed.png",
        src2: '../../../images/feed-choosed.png',
        isChecked: false
      },
      {
        title: '调味品',
        src1: "../../../images/feed-unchoosed.png",
        src2: '../../../images/feed-choosed.png',
        isChecked: false
      },
      {
        title: '机械包装',
        src1: "../../../images/feed-unchoosed.png",
        src2: '../../../images/feed-choosed.png',
        isChecked: false
      },
      {
        title: '其它',
        src1: "../../../images/feed-unchoosed.png",
        src2: '../../../images/feed-choosed.png',
        isChecked: false
      },
      // if unchoosed
    ],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    count_down(that);
    loadData(that)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    var that = this;
    if (app.globalData.didFillinInfo) {
      that.setData({
        needshowInfo: false
      })
    }
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

  // 顶部按钮响应事件
  topBarItemClicked: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    var obj = {};
    var key = "";
    var condition = false;
    var url = '';
    if (index == 0) {
      that.setData({
        currentTapIsHotel: true
      });
    } else {
      that.setData({
        currentTapIsHotel: false
      });
    }

    currentPage = 1;
    didReachEnd = false;

    for (var i = 0; i < that.data.topTabBarData.length; ++i) {
      key = 'topTabBarData[' + i + '].didSelected';
      if (i == index) {
        condition = true;
      } else {
        condition = false;
      }
      obj[key] = condition;
      that.setData(obj);
    }

    loadData(that)
  },

  topImageClicked: function (event) {
    var that = this;
    var itemId = event.currentTarget.dataset.itemId;
    console.log("itemId = " + itemId);
    wx.navigateTo({
      url: '../Details/singleImageDetail/detail?itemId=' + itemId + '&banner=' + 'banner',
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

  // 置顶资讯点击
  topNewsClicked: function (event) {
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: '../Details/singleImageDetail/detail?itemId=' + itemId,
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

  // 一般资讯点击事件
  normalNewsClicked: function (event) {
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: '../Details/singleImageDetail/detail?itemId=' + itemId,
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

  // 多图资讯点击事件
  mutipleNewsClicked: function (event) {
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: '../Details/mutipleImagesDetail/detail?itemId=' + itemId,
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

  // 多图资讯点击事件
  mutipleNewsClicked: function (event) {
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: '../Details/mutipleImagesDetail/detail?itemId=' + itemId,
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

  // 视频资讯点击事件
  videoNewsClicked: function (event) {
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: '../Details/videoDetail/detail?itemId=' + itemId,
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

  // 大图资讯点击事件
  bigNewsClicked: function (event) {
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: '../Details/bigImageDetail/detail?itemId=' + itemId,
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

  // scrollView时间响应函数
  upper: function (event) {
    console.log('upper')
  },

  lower: function (event) {
    var that = this;
    console.log('lower')
    loadMoreData(that);
  },

  scroll: function (event) {

  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    var userId = wx.getStorageSync('userId');
    userId = app.globalData.userId;
    var contentStr = '';
    var that = this;

    for (var i = 0; i < e.detail.value.checkBoxGroup.length; i++) {
      contentStr = contentStr + e.detail.value.checkBoxGroup[i] + ',';
    }
    contentStr = contentStr.substring(0, contentStr.length - 1)

    // console.log(e.detail.value.userName)
    // console.log(e.detail.value.userPhoneNumber)
    // console.log(e.detail.value.province)
    // console.log(e.detail.value.city)
    // console.log(contentStr)
    // console.log(e.detail.value.serviceCode)
    if (!e.detail.value.serviceCode) {
      that.setData({
        serviceCode: e.detail.value.serviceCode
      })
    }
    var name = e.detail.value.userName;
    var c_number = parseInt(e.detail.value.serviceCode)
    that.showLoading();
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Userapi/userInfoSave?uid=' + userId,
      data: {
        name: name,
        tel: e.detail.value.userPhoneNumber,
        province: e.detail.value.province,
        city: e.detail.value.city,
        want_know: contentStr,
        customer_number: c_number,
        smgcode: e.detail.value.vertifyCode
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { "Content-Type": "application/x-www-form-urlencoded" }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        that.hideLoading()
        if (res.statusCode == 200) {
          app.globalData.didFillinInfo = true;
          wx.setStorage({
            key: 'didFillinInfo',
            data: true,
            success: function (res) {
              // success
              that.hideLoading();
              wx.showModal({
                title: '提交成功',
                content: '',
                showCancel: false,
                success: function (res) {
                  if (res.confirm) {
                  }
                }
              })
              wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
                success: function(res){
                  // success
                },
                fail: function() {
                  // fail
                },
                complete: function() {
                  // complete
                }
              })
            },
            fail: function () {
              // fail
              that.hideLoading();
               wx.showModal({
            title: '提交失败',
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
          //error
          that.hideLoading();
          wx.showModal({
            title: '提交失败',
            content: '',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
              }
            }
          })

        }
      },
      fail: function () {
        // fail
        //error
          wx.showModal({
            title: '提交失败',
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


  commit: function (event) {
    var that = this;
    app.globalData.didFillinInfo = true;
    that.setData({
      needshowInfo: false
    })
  },

  bindKeyInput: function (e) {
    var that = this;
    that.setData({
      inputPhoneNumber: e.detail.value
    })
  },

  // 获取验证码
  getCode: function (event) {
    var that = this;
    send_code_countdown(that);
    that.setData({
      isGetCodeEnable: false
    })
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Userapi/sendMsg',
      data: {
        tel: that.data.inputPhoneNumber
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { "Content-Type": "application/x-www-form-urlencoded" }, // 设置请求的 header
      success: function (res) {
        // success 发送验证码成功
      },
      fail: function () {
        // fail
        wx.showModal({
          title: '验证码发送失败，请重试',
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
  }
})

var currentPage = 1
var didReachEnd = false

var count = 60;
function send_code_countdown(that) {
  if (count == 0) {
    count = 60;
    that.setData({
      isGetCodeEnable: true
    })
    return;
  } else {
    count--;
    that.setData({
      timeleft: count
    })
  }

  setTimeout(function () { send_code_countdown(that) }, 1000)
}

var total_micro_second = 65 * 1000;
var start_time = 65 * 1000;
var timer;
function count_down(that) {
  var h = date_format(total_micro_second);
  // ////console.log(h);
  // if (that.data.currentIndex == 1) {
  //   console.log(h);
  // }
  var minite = h.substring(0, 2);
  var seconds = h.substring(3, 5);
  // 渲染倒计时时钟
  if (parseInt((start_time - total_micro_second) / 1000) == 10) {
    if (that.data.needshowInfo) {
      return;
    }
    if (!that.data.needshowInfo && !app.globalData.didFillinInfo)
      that.setData({
        needshowInfo: true
      })
    console.log('10s');
    clearTimeout(timer);
  }

  timer = setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    count_down(that);
  }
    , 10)
}

// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;
  // 毫秒位，保留2位
  // ////console.log(h);
  // console.log("min = " + min);
  // console.log("sec = " + sec);
  return min + ":" + sec;
}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}

function loadData(that) {
  if (that.data.currentTapIsHotel) {
    that.showLoading()
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Newsapi/showNews',
      data: {
        type: 1,
        page: currentPage
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        if (res.data.length > 0) {
          that.setData({
            newsData: res.data
          })
        }
        that.hideLoading();
      },
      fail: function () {
        // fail
        that.hideLoading();
        wx.showModal({
          title: '数据加载失败，请重试',
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
    that.showLoading()
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Newsapi/showNews',
      data: {
        type: 2,
        page: currentPage
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        if (res.data.length > 0) {
          that.setData({
            newsData: res.data
          })
        }
        that.hideLoading()
      },
      fail: function () {
        // fail
        that.hideLoading()
        wx.showModal({
          title: '数据加载失败，请重试',
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
  }
}

function loadMoreData(that) {
  if (that.data.currentTapIsHotel) {
    if (!didReachEnd) {
      currentPage += 1;
      that.showLoading()
      wx.request({
        url: 'https://min.jiushang.cn/index.php/index/Newsapi/showNews',
        data: {
          type: 1,
          page: currentPage
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
            var totalData = that.data.newsData
            that.setData({
              newsData: totalData.concat(res.data)
            })
          }
          that.hideLoading()
        },
        fail: function () {
          // fail
          that.hideLoading()
          wx.showModal({
            title: '数据加载失败，请重试',
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
  } else {
    if (!didReachEnd) {
      currentPage += 1;
      that.showLoading()
      wx.request({
        url: 'https://min.jiushang.cn/index.php/index/Newsapi/showNews',
        data: {
          type: 2,
          page: currentPage
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
            var totalData = that.data.newsData
            that.setData({
              newsData: totalData.concat(res.data)
            })
          }
          that.hideLoading()
        },
        fail: function () {
          // fail
          that.hideLoading()
          wx.showModal({
            title: '数据加载失败，请重试',
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
  }
}