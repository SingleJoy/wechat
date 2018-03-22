// pages/swiper/swiper.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background:[
            '../../images/images01.jpg',
            '../../images/images02.jpg',
            '../../images/images03.jpg'
        ],
        indicatorDots:true,          //是否显示指标点
        vertical:false,              //是否垂直显示指标点
        autoplay:false,              //是否自动播放
        interval:3000,               //页面切换时间间隔
        duration:1200                //滑动动画时长
    },
    //设置是否显示指标点
    changeIndicatorDots:function (e) {
        this.setData({
            indicatorDots:!this.data.indicatorDots
        })
    },
    //设置垂直/水平显示指标点
    changeVertical:function (e) {
        this.setData({
            vertical:!this.data.vertical
        })
    },
    //设置是否自动播放
    changeAutoplay:function (e) {
        this.setData({
            autoplay:!this.data.autoplay
        })
    },
    //设置滑动动画时长
    durationChange:function (e) {
        this.setData({
            duration:e.detail.value
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