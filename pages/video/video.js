function getRandColor() {
    var colorStr=Math.floor(Math.random()*0xFFFFFF).toString(16); //生成随机颜色值

    return "#"+'000000'.substring(0,6-colorStr)+colorStr;          //返回格式化的颜色字符串
}



Page({
    inputValue:'',  //输入的弹幕内容
    data:{
        src:'http://123.56.143.131/Child_App/test.mp4' , //视频播放地址
        danmuList:[
            {
                text:'第2秒出现的弹幕',
                color:'#ff0000',
                time:2
            },
            {
                text:'第5秒出现的弹幕',
                color:'#ff00ff',
                time:5
            },
            {
                text:'第10秒出现的弹幕',
                color:'#3ebbce',
                time:7

            }
        ]

    },
   //获取视频上下文
    onReady:function (res) {
        this.videoContext=wx.createVideoContext('myVideo')
    },
    //获取输入的弹幕值
    bindInputBlur:function (e) {
        this.inputValue=e.detail.value
    },
    //发射弹幕
    bindSendDanmu:function (e) {
        this.videoContext.sendDanmu({
            text:this.inputValue,
            color:getRandColor()
        })
    },
    //错误回调
    bindErrorCallback:function (e) {
        console.log('视频错误信息');
        console.log(e.detail.errMsg)
    }
})