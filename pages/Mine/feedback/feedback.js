// pages/Mine/feedback/feedback.js
var app = getApp();
Page({
  data: {
    feed: [
      {
        title: '打不开页面', 
        src1: "../../../images/feed-unchoosed.png", 
        src2: '../../../images/feed-choosed.png',
        isChecked:false
      },
      {
        title: '乱码', 
        src1: "../../../images/feed-unchoosed.png", 
        src2: '../../../images/feed-choosed.png',
        isChecked:false
      },
      {
        title: '时间不对', 
        src1: "../../../images/feed-unchoosed.png", 
        src2: '../../../images/feed-choosed.png',
        isChecked:false
      },
      {
        title: '颜色不对', 
        src1: "../../../images/feed-unchoosed.png",
         src2: '../../../images/feed-choosed.png',
         isChecked:false
      },
      {
        title: '完全就是错的', 
        src1: "../../../images/feed-unchoosed.png", 
        src2: '../../../images/feed-choosed.png',
        isChecked:false
      },
      // if unchoosed
    ],
    isOtherCheck: false,
    userName:'',
    userPhoneNumber:'',
    suggestions:'',
    chosedContent:''
  },
  // checkbox的选择函数
  checkboxChange: function (e) {
    var that = this;
    that.setData({
      chosedContent: e.detail.value
    })
  },

  // textarea的函数值
  bindTextAreaBlur: function (event) {
    var that = this;
    that.setData({
      suggestions: event.detail.value
    })
  },

  // 表单提交

  formSubmit: function (e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', that.data.chosedContent)
    console.log("suggestions = " + that.data.suggestions)
    console.log("userName = " + that.data.userName)
    console.log("userPhoneNumber = " + that.data.userPhoneNumber)
    var userId = wx.getStorageSync('userId');
    var contentStr = '';

    for(var i = 0; i < that.data.chosedContent.length; i++){
      contentStr = contentStr + that.data.chosedContent[i] + ',';
    }
    contentStr = contentStr.substring(0, contentStr.length - 1)
    console.log('form发生了submit事件，携带数据为：', contentStr);
    wx.request({
      url: 'https://min.jiushang.cn/index.php/index/Userapi/feedBack?uid=' + userId,
      data: {
        user_name:that.data.userName,
        content:that.data.chosedContent,
        tel:that.data.userPhoneNumber
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
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
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    
  },

  change_status: function (event) {
    var index = event.target.dataset.index;
    var that = this;
    var key = '';
    var condition = true;
    var obj = {};

    for (var i = 0; i < that.data.feed.length; ++i) {
      key = 'feed[' + i + '].isChecked';
      if (i == index) {
        condition = !that.data.feed[i].isChecked;
        obj[key] = condition;
      that.setData(obj);
      break;
      } 
      
    }
  },

  check_others:function (event) {
    var index = event.target.dataset.index;
    var that = this;
    var status = that.data.isOtherCheck
    that.setData({
      isOtherCheck : !status
    })
  },

  bindNameInput:function (event) {
    var that = this;
    that.setData({
      userName: event.detail.value
    })
  },

  bindPhoneNumberInput:function (event) {
    var that = this;
    that.setData({
      userPhoneNumber: event.detail.value
    })
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    wx.setNavigationBarTitle({
      title: '投诉反馈'
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
  }
})