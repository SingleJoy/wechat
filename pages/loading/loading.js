// pages/loading/loading.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hidden:true,
        hidden2:true,
        time:5
    },
    showtoast1Tap:function () {
        wx.showToast({

            title:'默认1.5秒后关闭loading消息提示框',
            icon:'loading',
            success:function () {
                console.log("success回调，可在这里编写其他代码");
            },
            complete:function () {
                console.log("complete回调，可在这里编写其他代码")
            }
        })

    },

    showtoast2Tap:function () {
        wx.showToastTap({
            title:'5秒后关闭loading消息提示框',
            icon:'loading',
            duration:5000
        })
    },

    showtoast3Tap:function () {

        wx.showToast({
            title:'默认1.5秒关闭的toast消息提示框',
            icon:'success'
        })
    },
    
    showtoast4Tap:function () {

        wx.showToast({
            title:'5秒关闭toast消息提示框',
            icon:'success',
            duration:5000
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var self=this;
        setInterval(function () {
            var h2=self.data.hidden2;
            var t=self.data.time;
            if(!h2)
            {
                t=t-1;
                if(t>0){
                    self.setData({
                        time:t
                    })
                }
            }
        },1000)
    },
    // 第一个loading
    loadingtap:function (e) {
        this.setData({
            hidden:true
        })
    },

    // loading按钮的事件加载函数
    loadingTap1:function () {
        this.setData({
            hidden:false
        })
    },

    //定时loading按钮的事件处理函数
    loadingTap2:function () {
        this.setData({
            hidden2:false,
            time:5
        })
        var self=this;
        //定时器
        setTimeout(function () {
            self.setData({
                hidden2:true   //设置第2个loading组件隐藏状态为true
            })
        },5000)
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