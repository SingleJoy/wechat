// pages/range/range.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     countries:['中国','美国','巴西','日本','英国','法国','意大利'],
      index:0,
      data:'2018-03-15',
      time:'12:01'
  },
    bindPickerChange:function (e) {
      console.log('picker 发送选择改变');
      console.log(e.detail.value);
      this.setData({
          index:e.detail.value
      })
    },
    bindDateChange:function (e) {
        console.log('日期发生改变');
        console.log(e.detail.value);
        this.setData({
            date:e.detail.value
        })

    },
    bindTimeChange:function (e) {
        console.log('时间发生改变');
        console.log(e.detail.value);
        this.setData({
            time:e.detail.value
        })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})