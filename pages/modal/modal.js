// pages/modal/modal.js
Page({

    /**
     * 页面的初始数据
     */

    data:{
        modalHidden:true,   //对话框隐藏
        modalHidden2:true,   //对话框隐藏
        regions:[
            {name:'CHN',value:'中国',checked:'true'},
            {name:'USA',value:'美国'},
            {name:'BRA',value:'巴西'},
            {name:'ENG',value:'英国'},
            {name:'TUR',value:'法国'}
        ],
        date:'2016-01-01'
    },

    //按钮点击事件
    modalTap:function (e) {
      this.setData({
          modalHidden:false  //对话框显示
      })
    },

    //弹出框的确认按钮
    modalConfirm:function (e) {
        this.setData({
            modalHidden:true   //对话框隐藏
        })
    },


    //弹出框取消按钮
    modalCancel:function (e) {
        this.setData({
            modalHidden:true   //对话框隐藏
        }),
        console.log(e);
    },
    // 弹出框2的点击事件
    modalTap2:function (e) {
        this.setData({
            modalHidden2:false  //隐藏弹出框2
        })

    },
    // 弹出框2的change事件
    modalChange2:function (e) {
        this.setData({
            modalHidden2:true  //隐藏弹出框2
        })
        console.log(e);
    },
    //选择日期
    bindDateChange:function (e) {
        console.log(e.detail.value);
        this.setData({
            date:e.detail.value
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