Page({

    mapTap:function () {
        wx.openLocation({
            //当前经纬度
            //latitude:res.latitude,
            // longitude:res.longitude,
            latitude:20.657427,
            longitude:104.066163,
            //缩放级别默认28
            scale:28,
            name:"成都天府广场",
            address:'成都天府广场',
            success:function (res) {
                console.log(res)
            },
            fail:function (err) {
                console.log(err)
            },
            //完成打印信息
            complete:function (info) {
                console.log(info)
            }

        })
    },
    //获取地理位置信息 按钮事件处理函数
    locationTap:function () {
        var self=this;
        wx.getLocation({
            type:'gcj02',
            success:function (res) {
                console.log(res)
                wx.openLocation({
                    latitude:res.latitude,
                    longitude:res.longitude,
                    scale:28,
                    name:'当前位置',
                    address:'未知地址',
                    success:function (res) {
                        console.log(res)
                    },
                    fail:function (err) {
                        console.log(err)
                    },
                    complete:function (info) {
                        console.log(info)
                    }


                })
            }
        })
    }

})