Page({
    data:{
        html:''
    },
    getweixinTap:function () {
        var self=this;
        wx:request({
            url:'https://mp.wexin.qq.com',              //服务器地址
            data:{
                                                        //上传数据
            },
            head:{
                'Content-Type':'application/json'
            },
            success:function (res) {           //调用成功后的回调函数
                console.log(res);             //在控制台输出参数
                self.setData({
                    html:res.data           //更新HTML代码
                })
            }

        })
    }
})