// pages/Mine/info/info.js

var app = getApp()
Page({
  data: {
    needshowInfo: false,
    isGetCodeEnable: true,
    timeleft: 60,
    filledName: '',
    filledPhone: '',
    filledProvince: '',
    filledCity: '',
    filledServiceCode: '',
    filledWantToKnow: '',
    serviceCode: 0,
    smsCode: 0,
    inputPhoneNumber: '',
    loadingHidden: true,
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
    if (app.globalData.didFillinInfo) {
      loadFilledData(that)
    }
    wx.setNavigationBarTitle({
      title: '我的信息'
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    var that = this;
    if (app.globalData.didFillinInfo) {
      that.setData({
        needshowInfo: true
      })
    }
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
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
      }
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

  commit: function (event) {
    var that = this;
    app.globalData.didFillinInfo = true;
    that.setData({
      needshowInfo: true
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

function loadFilledData(that) {
  var uid = wx.getStorageSync('userId');
  uid = app.globalData.userId;
  wx.request({
    url: 'https://min.jiushang.cn/index.php/index/Userapi/userInfo',
    data: {
      uid: uid
    },
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function (res) {
      // success

      that.setData({
        filledName: res.data.name,
        filledPhone: res.data.tel,
        filledProvince: res.data.province,
        filledCity: res.data.city,
        filledServiceCode: res.data.customer_number,
        filledWantToKnow: res.data.want_know,
      })


    },
    fail: function () {
      // fail
    },
    complete: function () {
      // complete
    }
  })
}