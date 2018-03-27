Page({

    data:{
      sources:''
    },
    //选择图片
    choosePhotoTap1:function () {
        var self=this;
        wx.chooseImage({
            count:6,
            sizeType:['original'],      //原图
            sourceType:['album'],         //从相册中选择
            //成功调用时
            success:function (res) {
                console.log(res);
                self.setData({
                    sources:res.tempFilePaths  //更新相片列表
                })
            }
        })
    },
    //拍照
    choosePhotoTap2:function () {
        var self=this;
        wx.chooseImage({
            count:7,
            sizeType:['original','compressed'],  //原图和压缩图
            sourceType:['camera'],    //直接调用相机
            //成功调用时
            success:function (res) {
                console.log(res);
                self.setData({
                    sources:res.tempFilePaths     //更新相片列表
                })
            }
        })
    },
    //选择图片按钮事件处理函数
    choosePhotoTap3:function () {
        var slef=this;
        wx.chooseImage({
            count:8,
            sizeType:['original'],    //原图
            sourceType:['album','camera'],  //可从相册选择或拍照
            //成功时回调
            success:function (res) {
                console.log(res);
                self.setData({
                    sources:res.tempFilePaths
                })
            }

        })

    }

})