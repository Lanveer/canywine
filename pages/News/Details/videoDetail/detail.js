// pages/News/Details/videoDetail/detail.js
var app = getApp();
Page({
  data:{
    src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    // src:"http://61.128.153.106/youku/6776D90E4CA3B81E90C14F4DBD/0300020300561A94F1795F08C444ECA305D19D-C8FE-8DE4-F437-CE08E6AA961C.flv?sid=04887858334571057cc52_00&sign=dac7d86cfbdb62e6d4af51bda4ed678f&ctype=10&nk=411278681320_24813098904&ns=1997040_2665680&special=true",
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
    loadingHidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var newsId = options.itemId;
    var uid = wx.getStorageSync('userId')
    uid = app.globalData.userId;
    that.showLoading()
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Newsapi/newsInfo',
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
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})