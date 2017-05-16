//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    testData:[
      {
        expect:'20170120'
      },
      {
        expect:'20170120'
      },
      {
        expect:'20170120'
      },
      {
        expect:'20170120'
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  changeData:function(){
    var that = this;
    var data = that.data.testData;
    var dateStr = '';
    for(var i = 0; i < data.length; ++i){
      dateStr = data[i].expect;
      dateStr = dateStr.substr(0, 4) + "-" + dateStr.substr(4, 2) + "-" + dateStr.substr(6, 2);
      data[i].expect = dateStr;
    }
    that.setData({
      testData:data
    })
    console.log(that.data.testData);
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
