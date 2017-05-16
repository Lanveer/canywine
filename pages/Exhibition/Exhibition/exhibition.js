// pages/Exhibition/Exhibition/exhibition.js

var app = getApp();
var util = require('../../../utils/util.js')

Page({
  data: {
    loadingHidden: true,
    usercode: '',
    userNick: '',
    userHeader: '',
    userLat: '',
    userLng: '',
    userFillIn:false,
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
    headerData: [
      {
        title: '热门',
        imageURL: '../../../images/hot@2x.png',
        itemId: '1'
      },
      {
        title: '白酒',
        imageURL: '../../../images/white@2x.png',
        itemId: '2'
      },
      {
        title: '红酒',
        imageURL: '../../../images/wine@2x.png',
        itemId: '3'
      },
      {
        title: '洋酒',
        imageURL: '../../../images/whisky@2x.png',
        itemId: '4'
      },
      {
        title: '啤酒',
        imageURL: '../../../images/beer@2x.png',
        itemId: '5'
      },
      {
        title: '黄酒',
        imageURL: '../../../images/rice@2x.png',
        itemId: '6'
      },
      {
        title: '预调酒',
        imageURL: '../../../images/rio@2x.png',
        itemId: '7'
      },
      {
        title: '饮料',
        imageURL: '../../../images/drink@2x.png',
        itemId: '8'
      },
      {
        title: '食品',
        imageURL: '../../../images/food@2x.png',
        itemId: '9'
      },
      {
        title: '全部',
        imageURL: '../../../images/all@2x.png',
        itemId: '10'
      }
    ],

    middleTabBarData: [
      {
        title: '酒店',
        didSelected: true
      },
      {
        title: '展馆',
        didSelected: false
      }
    ],
    currentTapIsHotel: true,
    currentTap: 0,
    maxTap: 2,
    needshowInfo: false,
    isGetCodeEnable: true,
    timeleft: 60,

    hotelData: [
      // {
      //   isSinglePic: true,              //标识是否是单图的
      //   backImageURL: '../../../images/jinjiang.png',           //背景图片URL
      //   imageURL: '../../../images/jinjiang.png',                //酒店图片URL
      //   introduce: '锦江宾馆是西南地区第一家五星级酒店，位于市中心锦江地铁口，交通极其便利。随着贵宾楼与锦苑楼在会期的开放使用，加上传统的南楼、东楼、北楼、西楼布展区域，可谓布展企业最多，人气最旺的酒类标杆酒店。传统布展区域1-2楼为展厅区域，2-8楼为房间，9楼为包房展厅，贵宾楼1-3楼为展厅区域，其中3楼规划有红酒专区，6-18为房间区域',  //酒店介绍
      //   distance: '2333',               //酒店距当前定位的距离
      //   title: '锦江宾馆',          //酒店名称
      //   location: '成都人民南路二段80号',     //酒店地址
      //   latitude: 30.648210,			//纬度
      //   longitude: 104.068600,			//经度
      //   id:''
      // },
      // {
      //   isSinglePic: false,             //标识是否是单图的
      //   backImageURL: '../../../images/infoImage@2x.png',           //背景图URL
      //   contents: [                     //因为不是单图的，所以会有几个酒店内容
      //     {
      //       imageURL: '../../../images/infoImage@2x.png',
      //       title: '索菲亚特大酒店',
      //       location: '成都市滨江中路15号',
      //       latitude: 30.647470,			//纬度
      //       longitude: 104.068600,			//经度
      //       id:''
      //     },
      //   ],
      // }
    ],

    exceptionData: [
      // {
      //   isSinglePic: true,              //标识是否是单图的
      //   backImageURL: '../../../images/infoImage@2x.png',           //背景图片URL
      //   imageURL: '../../../images/infoImage@2x.png',                //酒店图片URL
      //   introduce: '世纪城国际展览中心....',  //酒店介绍
      //   distance: '2333',               //酒店距当前定位的距离
      //   title: '世纪城国际展览中心',          //酒店名称
      //   location: '武侯区世纪城路198号',     //酒店地址
      //   latitude: 30.55456,			//纬度
      //   longitude: 104.075140,			//经度
      //   id:''
      // }
    ],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var str = that.data.testData;
    count_down(that);

    //app.getUserInfo();
    console.log(app.globalData.userInfo)
    wx.login({
      success: function (res) {
        // success
        that.setData({
          usercode: res.code
        })
        app.globalData.loginCode = res.code;
        wx.getUserInfo({
          success: function (res) {
            // success
            that.setData({
              userNick: res.userInfo.nickName,
              userHeader: res.userInfo.avatarUrl
            })
            that.showLoading();
            wx.request({
              url: 'https://min.jiushang.cn/index.php/index/Indexapi/saveUserInfo',
              data: {
                code:that.data.usercode,
                nick_name:that.data.userNick,
                header:that.data.userHeader,
                // code: '011RRcVn0a13nq1b1LVn04w5Vn0RRcVn',
                // nick_name: 'RunningMan', header: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM4BUjGGv5Pfw7ibYrID1Qkr4u4tgfyFgDicnKgqmvsiaoqkA/132'
              },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // header: {}, // 设置请求的 header
              success: function (res) {
                // success
                console.log(res)
                console.log('post success');
                app.globalData.userId = res.data.id;
                app.globalData.header = res.data.header;
                app.globalData.nick_name = res.data.nick_name;

                wx.setStorageSync('userId', res.data.id)
                wx.setStorageSync('userHeader', res.data.header)
                wx.setStorageSync('userNick', res.data.nick_name)
                wx.setStorageSync('didFillinInfo', res.data.fill_in == "0" ? false : true)
                app.globalData.didFillinInfo = res.data.fill_in == "0" ? false : true;
                that.hideLoading()
              },
              fail: function () {
                // fail
                that.hideLoading();
                wx.showModal({
                  title: '信息保存错误',
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

            app.globalData.userInfo = res.userInfo;
            wx.getLocation({
              type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
              success: function (res) {
                // success
                that.setData({
                  userLat: res.latitude,
                  userLng: res.longitude
                })
                app.globalData.latitude = res.latitude;
                app.globalData.longitude = res.longitude;
                that.showLoading()
                wx.request({
                  url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/showHotel',
                  data: {
                    type: '1',
                    lat: that.data.userLat,
                    lng: that.data.userLng
                  },
                  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                  // header: {}, // 设置请求的 header
                  success: function (res) {
                    // success
                    that.setData({
                      hotelData: res.data
                    })
                    var tempData = res.data;
                    for (var i = 0; i < tempData.length; ++i) {
                      if(that.data.hotelData[i].isSinglePic){
                      var str = that.data.hotelData[i].introduce;
                      var key = 'hotelData[' + i + '].introduce';
                      var obj = {};
                      if (str.length > 87) {
                        str = str.substr(0, 87) + "...";
                      }
                      obj[key] = str;
                      that.setData(obj);
                    }
                    console.log(that.data.hotelData);
                    that.hideLoading()
                    }
                  },
                  fail: function () {
                    // fail
                    console.log('failed')
                    that.hideLoading()
                    wx.showModal({
                      title: '酒店数据错误',
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
                    console.log('complete')
                  }
                })
              },
              fail: function () {
                // fail
                that.hideLoading()
                // wx.showModal({
                //   title: '定位错误',
                //   content: '',
                //   showCancel: false,
                //   success: function (res) {
                //     if (res.confirm) {
                //     }
                //   }
                // })
              },
              complete: function () {
                // complete
                console.log('kkkkk')
                console.log(that.data.usercode)
                console.log(that.data.userNick)
                console.log(that.data.userHeader)
                console.log(that.data.userLat)
                console.log(that.data.userLng)
                console.log('kkkkk')
                that.hideLoading()

              }
            })
          },
          fail: function () {
            // fail
            that.hideLoading()
            wx.showModal({
              title: '用户信息读取错误',
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
      }
    })

    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Indexapi/menuList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        // console.log(res);
        if (res.data.length > 0) {
          that.setData({
            headerData: res.data
          })
        }
        that.hideLoading();
      },
      fail: function () {
        // fail
        that.hideLoading()
        wx.showModal({
          title: '分类信息错误',
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
    app.show_window()
  },
  onShow: function () {
    // 页面显示
    //存储用户经纬度
    var that = this;
    var count = that.data.hotelData.length;
    // 处理字数过多
    

    if (app.globalData.didFillinInfo) {
      that.setData({
        needshowInfo: false
      })
    }
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        // success
        console.log("res.latitude = " + res.latitude);
        console.log("res.longitude = " + res.longitude);
        // app.globalData.latitude = ret[1];
        // app.globalData.longitude = ret[0];
        app.globalData.latitude = res.latitude;
        app.globalData.longitude = res.longitude;
        that.setData({
          userLat:res.latitude,
          userLng:res.longitude
        })
      },
      fail: function () {
        // fail
        wx.showModal({
          title: '提示',
          content: '请允许程序获取定位，否则不能正确显示距离',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      },
      complete: function () {
        // complete
      }
    })

    wx.getLocation({
              type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
              success: function (res) {
                // success
                that.setData({
                  userLat: res.latitude,
                  userLng: res.longitude
                })
                app.globalData.latitude = res.latitude;
                app.globalData.longitude = res.longitude;
                that.showLoading()
                wx.request({
                  url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/showHotel',
                  data: {
                    type: '1',
                    lat: that.data.userLat,
                    lng: that.data.userLng
                  },
                  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                  // header: {}, // 设置请求的 header
                  success: function (res) {
                    // success
                    that.setData({
                      hotelData: res.data
                    })
                    var tempData = res.data;
                    for (var i = 0; i < tempData.length; ++i) {
                      if(that.data.hotelData[i].isSinglePic){
                      var str = that.data.hotelData[i].introduce;
                      var key = 'hotelData[' + i + '].introduce';
                      var obj = {};
                      if (str.length > 87) {
                        str = str.substr(0, 87) + "...";
                      }
                      obj[key] = str;
                      that.setData(obj);
                    }
                    console.log(that.data.hotelData);
                    that.hideLoading()
                    }
                  },
                  fail: function () {
                    // fail
                    console.log('failed')
                    that.hideLoading()
                    wx.showModal({
                      title: '酒店数据错误',
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
                    console.log('complete')
                  }
                })
              },
              fail: function () {
                // fail
                that.hideLoading()
                // wx.showModal({
                //   title: '定位错误',
                //   content: '',
                //   showCancel: false,
                //   success: function (res) {
                //     if (res.confirm) {
                //     }
                //   }
                // })
              },
              complete: function () {
                // complete
                console.log('kkkkk')
                console.log(that.data.usercode)
                console.log(that.data.userNick)
                console.log(that.data.userHeader)
                console.log(that.data.userLat)
                console.log(that.data.userLng)
                console.log('kkkkk')
                that.hideLoading()

              }
            })

    // wx.login({
    //   success: function (res) {
    //     // success
    //     that.setData({
    //       usercode: res.code
    //     })
    //     app.globalData.loginCode = res.code;
    //     wx.getUserInfo({
    //       success: function (res) {
    //         // success
    //         that.setData({
    //           userNick: res.userInfo.nickName,
    //           userHeader: res.userInfo.avatarUrl
    //         })
    //         that.showLoading();
    //         wx.request({
    //           url: 'https://min.jiushang.cn/index.php/index/Indexapi/saveUserInfo',
    //           data: {
    //             code:that.data.usercode,
    //             nick_name:that.data.userNick,
    //             header:that.userHeader,
    //             // code: '011RRcVn0a13nq1b1LVn04w5Vn0RRcVn',
    //             // nick_name: 'RunningMan', header: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM4BUjGGv5Pfw7ibYrID1Qkr4u4tgfyFgDicnKgqmvsiaoqkA/132'
    //           },
    //           method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //           // header: {}, // 设置请求的 header
    //           success: function (res) {
    //             // success
    //             console.log(res)
    //             console.log('post success');
    //             wx.setStorageSync('userId', res.data.id)
    //             wx.setStorageSync('userHeader', res.data.header)
    //             wx.setStorageSync('userNick', res.data.nick_name)
    //              app.globalData.userId = res.data.id;
    //             app.globalData.header = res.data.header;
    //             app.globalData.nick_name = res.data.nick_name;
    //             wx.setStorageSync('didFillinInfo', res.data.fill_in == "0" ? false : true)
    //             app.globalData.didFillinInfo = res.data.fill_in == "0" ? false : true;
    //             that.hideLoading()
    //           },
    //           fail: function () {
    //             // fail
    //             that.hideLoading();
    //             wx.showModal({
    //               title: '信息保存错误',
    //               content: '',
    //               showCancel: false,
    //               success: function (res) {
    //                 if (res.confirm) {
    //                 }
    //               }
    //             })
    //           },
    //           complete: function () {
    //             // complete
    //           }
    //         })

    //         app.globalData.userInfo = res.userInfo;
    //         wx.getLocation({
    //           type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    //           success: function (res) {
    //             // success
    //             that.setData({
    //               userLat: res.latitude,
    //               userLng: res.longitude
    //             })
    //             app.globalData.latitude = res.latitude;
    //             app.globalData.longitude = res.longitude;
    //             that.showLoading()
    //             wx.request({
    //               url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/showHotel',
    //               data: {
    //                 type: '1',
    //                 lat: that.data.userLat,
    //                 lng: that.data.userLng
    //               },
    //               method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //               // header: {}, // 设置请求的 header
    //               success: function (res) {
    //                 // success
    //                 that.setData({
    //                   hotelData: res.data
    //                 })
    //                 var tempData = res.data;
    //                 for (var i = 0; i < tempData.length; ++i) {
    //                   if(that.data.hotelData[i].isSinglePic){
    //                   var str = that.data.hotelData[i].introduce;
    //                   var key = 'hotelData[' + i + '].introduce';
    //                   var obj = {};
    //                   if (str.length > 87) {
    //                     str = str.substr(0, 87) + "...";
    //                   }
    //                   obj[key] = str;
    //                   that.setData(obj);
    //                 }
    //                 console.log(that.data.hotelData);
    //                 count = that.data.hotelData.length;
    //                 that.setData({
    //   maxTap: count
    // })
    //                 that.hideLoading()
    //                 }
    //               },
    //               fail: function () {
    //                 // fail
    //                 console.log('failed')
    //                 that.hideLoading()
    //                 wx.showModal({
    //                   title: '酒店数据错误',
    //                   content: '',
    //                   showCancel: false,
    //                   success: function (res) {
    //                     if (res.confirm) {
    //                     }
    //                   }
    //                 })
    //               },
    //               complete: function () {
    //                 // complete
    //                 console.log('complete')
    //               }
    //             })
    //           },
    //           fail: function () {
    //             // fail
    //             that.hideLoading()
    //             // wx.showModal({
    //             //   title: '定位错误',
    //             //   content: '',
    //             //   showCancel: false,
    //             //   success: function (res) {
    //             //     if (res.confirm) {
    //             //     }
    //             //   }
    //             // })
    //           },
    //           complete: function () {
    //             // complete
    //             console.log('kkkkk')
    //             console.log(that.data.usercode)
    //             console.log(that.data.userNick)
    //             console.log(that.data.userHeader)
    //             console.log(that.data.userLat)
    //             console.log(that.data.userLng)
    //             console.log('kkkkk')
    //             that.hideLoading()

    //           }
    //         })
    //       },
    //       fail: function () {
    //         // fail
    //         that.hideLoading()
    //         wx.showModal({
    //           title: '用户信息读取错误',
    //           content: '',
    //           showCancel: false,
    //           success: function (res) {
    //             if (res.confirm) {
    //             }
    //           }
    //         })
    //       },
    //       complete: function () {
    //         // complete
    //       }
    //     })
    //   },
    //   fail: function () {
    //     // fail
    //     that.hideLoading()
    //     wx.showModal({
    //       title: '网络错误',
    //       content: '',
    //       showCancel: false,
    //       success: function (res) {
    //         if (res.confirm) {
    //         }
    //       }
    //     })
    //   },
    //   complete: function () {
    //     // complete
    //   }
    // })

    for (var i = 0; i < that.data.hotelData.length; ++i) {
      if(that.data.hotelData[i].isSinglePic){
      var str = that.data.hotelData[i].introduce;
      var key = 'hotelData[' + i + '].introduce';
      var obj = {};
      if (str.length > 87) {
        str = str.substr(0, 87) + "...";
      }
      obj[key] = str;
      that.setData(obj);
    }
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

  // 点击酒店 - 展馆 切换
  middleBarItemClicked: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    var obj = {};
    var key = "";
    var condition = false;
    var url = '';
    console.log("index == " + index);
    if (index == 0) {
      that.setData({
        currentTapIsHotel: true
      });
    } else {
      that.setData({
        currentTapIsHotel: false
      });
    }

    for (var i = 0; i < that.data.middleTabBarData.length; ++i) {
      key = 'middleTabBarData[' + i + '].didSelected';
      if (i == index) {
        condition = true;
      } else {
        condition = false;
      }
      obj[key] = condition;
      that.setData(obj);
    }

    var typeStr = '1';
    // return;

    if (index == 0) {
      that.showLoading()
      typeStr = '1';
      wx.request({
        url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/showHotel',
        data: {
          type: typeStr,
          lat: that.data.userLat,
          lng: that.data.userLng
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          that.setData({
            hotelData: res.data
          })
          var tempData = res.data;
          for (var i = 0; i < tempData.length; ++i) {
            if(that.data.hotelData[i].isSinglePic){
            var str = that.data.hotelData[i].introduce;
            var key = 'hotelData[' + i + '].introduce';
            var obj = {};
            if (str.length > 87) {
              str = str.substr(0, 87) + "...";
            }
            obj[key] = str;
            that.setData(obj);
          }
          }
          console.log(that.data.hotelData);
          that.hideLoading()
        },
        fail: function () {
          // fail
          console.log('failed')
          that.hideLoading()
          wx.showModal({
            title: '酒店数据错误',
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
          console.log('complete')
          that.hideLoading()
        }
      })
    } else {
      typeStr = '2';
      that.showLoading()
      //that.hideLoading()
      //test
      //return;
      wx.request({
        url: 'https://min.jiushang.cn/index.php/index/Exhibitionhotelapi/showHotel',
        data: {
          type: typeStr,
          lat: that.data.userLat,
          lng: that.data.userLng
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          that.setData({
            exceptionData: res.data
          })
          var tempData = res.data;
          for (var i = 0; i < tempData.length; ++i) {
            var str = that.data.exceptionData[i].introduce;
            var key = 'exceptionData[' + i + '].introduce';
            var obj = {};
            if (str.length > 87) {
              str = str.substr(0, 87) + "...";
            }
            obj[key] = str;
            that.setData(obj);
          }
          console.log(that.data.exceptionData);
          that.hideLoading()
        },
        fail: function () {
          // fail
          console.log('failed')
          that.hideLoading()
          wx.showModal({
            title: '展馆数据错误',
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
          console.log('complete')
          that.hideLoading()
        }
      })
    }

  },

  // 点击左右箭头
  leftArrowClicked: function (event) {
    var that = this;
    var localMaxTap = that.data.maxTap;
    var localCurrentTap = that.data.currentTap;
    if (0 < localCurrentTap) {
      localCurrentTap -= 1;
    }
    that.setData({
      currentTap: localCurrentTap
    })
  },

  rightArrowClicked: function (event) {
    var that = this;
    var localMaxTap = that.data.maxTap;
    var localCurrentTap = that.data.currentTap;
    if (localCurrentTap < localMaxTap) {
      localCurrentTap += 1;
    }
    that.setData({
      currentTap: localCurrentTap
    })
  },

  // 滑动swiper
  bindChange: function (event) {

    var that = this;
    that.setData(
      {
        currentTab: event.detail.current
      });

  },

  // 点击搜索栏
  searchBarClicked: function (event) {
    wx.navigateTo({
      url: '../../search/search',
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

  // 点击分类
  headerClick: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    var title = event.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../../list/list?index=' + index + '&title=' + title,
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

  // 点击酒店大图
  bigHotelClicked: function (event) {
    var that = this;
    var itemId = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../../show/show?itemId=' + itemId,
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

    console.log(app.globalData.userInfo)
    console.log(app.globalData.loginCode)
  },

  // 点击酒店大图的地址
  locationClicked: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    var lat = parseFloat(event.currentTarget.dataset.lat);
    var lng = parseFloat(event.currentTarget.dataset.lng);
    var name = event.currentTarget.dataset.name;
    var location = event.currentTarget.dataset.location;
    wx.openLocation({
      latitude: lat, // 纬度，范围为-90~90，负数表示南纬
      longitude: lng, // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例
      name: name, // 位置名
      address: location, // 地址的详细说明
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

  // 点击展馆大图
  bigExhibitionClicked: function (event) {
    var that = this;
    var itemId = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../../showHouse/showHouse?itemId=' + itemId,
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

// 点击酒店多图
  smallHotelClicked:function (event) {
    var that = this;
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: '../../show/show?itemId=' + itemId,
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

  // 点击酒店多图的地址
  smallLocationClicked: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    var lat = parseFloat(event.currentTarget.dataset.lat);
    var lng = parseFloat(event.currentTarget.dataset.lng);
    var name = event.currentTarget.dataset.name;
    var location = event.currentTarget.dataset.location;
    wx.openLocation({
      latitude: lat, // 纬度，范围为-90~90，负数表示南纬
      longitude: lng, // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例
      name: name, // 位置名
      address: location, // 地址的详细说明
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
    console.log(contentStr)
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
              that.setData({
                needshowInfo:false
              })
              wx.showModal({
                title: '提交成功',
                content: '',
                showCancel: false,
                success: function (res) {
                  if (res.confirm) {
                  }
                }
              })
            },
            fail: function () {
              // fail
              that.hideLoading();
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

  commit: function (event) {
    var that = this;
    app.globalData.didFillinInfo = true;
    that.setData({
      needshowInfo: false
    })
  },

  bindKeyInput: function (e) {
    var that = this;
    console.log("phone number 111= " + that.data.inputPhoneNumber)
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
    console.log("phone number = " + that.data.inputPhoneNumber)
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Userapi/sendMsg',
      data: {
        tel:that.data.inputPhoneNumber
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
        needshowInfo: true,
        loadingHidden:true
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