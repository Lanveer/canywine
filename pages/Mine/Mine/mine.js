// pages/Mine/Mine/mine.js
var app = getApp();
Page({
  data:{
    userHeader:'',
    userNick:'',
    showInfo:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var header = wx.getStorageSync("userHeader");
    var nick = wx.getStorageSync('userNick');
    console.log(header)
    console.log(nick)
    header = app.globalData.header
    nick = app.globalData.nick_name
    that.setData({
      userHeader:header,
      userNick:nick
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