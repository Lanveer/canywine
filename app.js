//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var that = this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function(res){
          that.globalData.loginCode = res.code;
          console.log(res);
           wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
          console.log("info")
          console.log(this.globalData);
        }
      })
      // wx.login({
      //   success: function () {
      //     wx.getUserInfo({
      //       success: function (res) {
      //         that.globalData.userInfo = res.userInfo
      //         that.globalData.loginCode = res.code;
      //         typeof cb == "function" && cb(that.globalData.userInfo)
      //       }
      //     })
      //   }
      // })
    }
  },
  globalData:{
    userInfo:null,
    latitude:12.1,
    longitude:11,
    didFillinInfo:false,
    needShowFillInfo:false,
    loginCode:'',
    userId:'',
    header:'',
    nick_name:''
  },
  show_window:function(){
    console.log('在这里将调用app中展示函数！')
  }
  
})