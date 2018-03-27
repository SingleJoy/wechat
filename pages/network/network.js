Page({
    data:{
        network:''
    },
    networkTap:function () {
        var self=this;
        wx.getNetworkType({
            success:function (res) {
                console.log(res)
                self.setData({
                    network:res.networkType
                })
            },
            fail:function (err) {
                self.setData({
                    network:'无法获取网络状态'
                })
            }
        })
    }
})