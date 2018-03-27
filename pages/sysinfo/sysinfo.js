Page({
   data:{
       language:'',
       modal:'',
       pixelRatio:'',
       platform:'',
       version:'',
       windowHeight:''
   },
    sysinfoTap:function () {
       var self=this;
        wx.getSystemInfo({
            success:function (res) {
               console.log(res)
               self.setData({
                   language:res.language,
                   modal:res.modal,
                   pixelRatio:res.pixelRatio,
                   platform:res.platform,
                   version:res.version,
                   windowHeight:res.windowHeight
               })

            }
        })
    }
})