// pages/show/show.js
var app = getApp();

Page({
  data: {

    // 控制蒙版显隐
    mask_condition: false,
    //控制显示填写信息
    needshowInfo: false,
    isGetCodeEnable: true,
    timeleft: 60,
    loadingHidden: true,
    // 列表数据
    list_data: [
      {
        title: '贵州茅台集团有限公司',
        url: '../../images/show1.png',
        tip: '五粮液酒店',
        floor: '一层-24号',
        contacts: '陈经理',
        tel: '1545676235',
        tag: [{ val: '白酒1' }, { val: '红酒1' }, { val: '黑酒1' }],
      },
      {
        title: '贵州茅台集团有限公司',
        url: '../../images/show1.png',
        tip: '五粮液酒店',
        floor: '一层-24号',
        contacts: '陈经理',
        tel: '1545676235',
        tag: [{ val: '白酒1' }, { val: '红酒1' }, { val: '黑酒1' }],
      },
      {
        title: '贵州茅台集团有限公司',
        url: '../../images/show1.png',
        tip: '五粮液酒店',
        floor: '一层-24号',
        contacts: '陈经理',
        tel: '1545676235',
        tag: [{ val: '白酒1' }, { val: '红酒1' }, { val: '黑酒1' }],
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
    //  楼层数

    floor: [
      {
        detail: '1层',
        didSelected: false,
        id:1
      },
      {
        detail: '2层',
        didSelected: false,
        id:2
      },
      {
        detail: '3层',
        didSelected: false,
        id:3
      },
      {
        detail: '4层',
        didSelected: false,
        id:4
      },
      {
        detail: '5层',
        didSelected: false,
        id:5
      },
      {
        detail: '6层',
        didSelected: false,
        id:6
      },
      {
        detail: '7层',
        didSelected: false,
        id:7
      },
      {
        detail: '8层',
        didSelected: false,
        id:8
      },
      {
        detail: '9层',
        didSelected: false,
        id:9
      },
      {
        detail: '10层',
        didSelected: false,
        id:10
      }
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

    floorExhibitionData: [
      {
        id: '',
        company: '',
        typeStr: '',
        hotel: '',
        contact: '',
        tel: '',
        exhibition_code: '',
        floor: '',
        imageUrl: '',
        tag: [
          {
            title: ''
          },
          {
            title: ''
          },
          {
            title: ''
          },
        ],
      }
    ],

    inputPhoneNumber: '',
    itemId: '',
    // 酒店信息
    name: '',
    introduce: '',
    logo: '',
    address: '',
    lat: '',
    lng: '',
    boothnum: '',
    distance: '',
    hotelType:'',
  },

  // 点击楼层
  change: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    var key = '';
    var condition = true;
    var obj = {};

    for (var i = 0; i < that.data.floor.length; ++i) {
      key = 'floor[' + i + '].didSelected';
      if (i == index) {
        condition = true;
        currentFloor = that.data.floor[i].id;
      } else {
        condition = false;
      }
      obj[key] = condition;
      that.setData(obj);
    }

    that.loadFloorData();

  },

  locationClicked: function (event) {
    var that = this;
    wx.openLocation({
      latitude: parseFloat(that.data.lat), // 纬度，范围为-90~90，负数表示南纬
      longitude: parseFloat(that.data.lng), // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例
      name: that.data.name, // 位置名
      address: that.data.address, // 地址的详细说明
      success: function (res) {
        // success
        console.log("success...")
      },
      fail: function () {
        // fail
        console.log("fail...")
      },
      complete: function () {
        // complete
      }
    })
  },

  // 点击搜索栏
  searchBarClicked: function (event) {
    wx.navigateTo({
      url: '../search/search',
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

  onLoad: function (options) {
    var that = this;
    count_down(that);
    var itemId = options.itemId;
    that.setData({
      itemId: itemId
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
        needshowInfo: false
      })
    }
    that.loadData()
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
    that.loadMoreData();
  },

  scroll: function (event) {

  },

  loadMoreData: function (event) {
    var that = this;
    if (!didReachEnd) {
      currentPage += 1;
      that.showLoading()
      wx.request({
        url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/exhibitionHotelBoothList',
        data: {
          id: that.data.itemId,
          floor: currentFloor,
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
            var totalData = that.data.floorExhibitionData
            that.setData({
              floorExhibitionData: totalData.concat(res.data)
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
          that.hideLoading();
        }
      })
    } else {
      console.log('reach end...')
      that.hideLoading();
    }
  },

  loadFloorData: function () {
    var that = this;
    currentPage = 1;
    didReachEnd = false;
    that.showLoading()
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/exhibitionHotelBoothList',
      data: {
        id: that.data.itemId,
        floor: currentFloor,
        page: currentPage
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        // if (res.data.length > 0) {
          that.setData({
            floorExhibitionData: res.data
          })

        // }
        that.hideLoading()
      },
      fail: function () {
        // fail
        that.hideLoading()
        wx.showModal({
          title: '加载酒店信息失败，请重试',
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
        that.hideLoading()
      }
    })

  },

  loadData: function () {
    var that = this;
    that.showLoading()
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/exhibitionHotelInfo',
      data: {
        lat: app.globalData.latitude,
        lng: app.globalData.longitude,
        id: that.data.itemId
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        that.setData({
          name: res.data.name,
          introduce: res.data.introduce,
          logo: res.data.logo,
          address: res.data.address,
          lat: res.data.lat,
          lng: res.data.lng,
          boothnum: res.data.boothnum,
          distance: res.data.distance,
          hotelType:res.data.type

        })
        wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/getFloor',
      data: {
        cate:that.data.hotelType
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        // if(res.data.length > 0) {
          that.setData({
            floor:res.data
          })
        // }
      },
      fail: function() {
        // fail
        console.log("errrrrrrrrr")
      },
      complete: function() {
        // complete
      }
    })

      },
      fail: function () {
        // fail
        that.hideLoading()
        wx.showModal({
          title: '加载酒店信息失败，请重试',
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
        // that.hideLoading()
      }
    })

    currentPage = 1;
    didReachEnd = false;
    currentFloor = 1;

    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/exhibitionHotelBoothList',
      data: {
        id: that.data.itemId,
        floor: 1,
        page: 1
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        // if (res.data.length > 0) {
          that.setData({
            floorExhibitionData: res.data
          })
        // }
      },
      fail: function () {
        // fail
        that.hideLoading()
        wx.showModal({
          title: '加载展位信息失败，请重试',
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
        that.hideLoading()
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
    that.showLoading();
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Userapi/userInfoSave?uid=' + userId,
      data: {
        name: name,
        tel: e.detail.value.userPhoneNumber,
        province: e.detail.value.province,
        city: e.detail.value.city,
        want_know: contentStr,
        customer_number: that.data.serviceCode,
        smgcode: e.detail.value.vertifyCode
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { "Content-Type": "application/x-www-form-urlencoded" }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
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
            fail: function () {
              // fail
              that.hideLoading();
              wx.showModal({
                title: '提交失败，请重试',
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
          that.hideLoading();
          wx.showModal({
            title: '提交失败，请重试',
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
        that.hideLoading();
        wx.showModal({
          title: '提交失败，请重试',
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
})

var count = 60;
var currentPage = 1;
var currentFloor = 1;
var didReachEnd = false;

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
  if (parseInt((start_time - total_micro_second) / 1000) == 4) {
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