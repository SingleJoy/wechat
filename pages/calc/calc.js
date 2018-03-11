// pages/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:"" ,//保存被加数
    num2:"" ,//保存加数
    result:"" //保存结果
  },
    //计算按钮触按事件处理函数
    bindAdd:function (e) {

        this.setData(
            {
                disabled:!this.data.disabled
            });
    },
    //减法
    bindCut:function (e) {

        this.setData({
                disabled:!this.data.disabled
        });

    },
    //乘法
    bindTimes:function (e) {

        this.setData({
            disabled:!this.data.disabled
        });

    },
    //除法
    bindDivide:function (e) {
        // var r=(this.data.num1*1)/(this.data.num2*1);  //两数相除
        this.setData({
            disabled:!this.data.disabled
        });

    },
    //计算
    bindCal:function (e) {
      var index= e.currentTarget.dataset.index;
      // console.log(index);

        this.setData({
            result:r     //更新结果到result变量
        });

    },
    //被加数输入事件处理函数
    bindInput1:function (e) {
        var n=e.detail.value;
        if(!isNaN(n))  //输入为数字
        {
          this.setData({
              num1:n //
          })
        }
    },

    //加数事件处理函数
    bindInput2:function (e) {
        var n=e.detail.value;
        if(!isNaN(n)){
          this.setData({
              num2:n  //
          })
        }
    },
    //重置
    bindStart:function (e) {
        this.setData({
            num1:"",
            num2:""
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