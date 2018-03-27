// record.js
var formatSeconds=function (value) {
    var time=parseFloat(value);
    var h=Math.floor(time/3600);
    var m=Math.floor((time-h*3600)/60);

    var s=time-h*3600-m*60;
    return [h,m,s].map(formatNumber).join(':');
    function  formatNumber(n) {
        n=n.toString()
        return n[1] ? n:'0'+n
    }
}

var interval;


Page({
    data:{
        formatRecordTime:'00:00:00',
        recordTime:0,
        recordFile:''
    },

    //"开始录音" 按钮事件处理函数
    startTap:function () {
        var self=this;
        //设置定时器  每秒执行一次
        interval=setInterval(function () {
            self.data.recordTime+=1; //计数器增加1
            self.setData({
                formatRecordTime:formatSeconds(self.data.recordTime)   //格式化时间显示
            })
        },1000);
        //开始录音
        wx.startRecord({
            success:function (res) {
                console.log(res);
                self.setData({
                    formatRecordTime:formatSeconds(self.data.recordTime),    //更新显示的时长
                    recordFile:res.tempFilePath               //更新音频临时文件路径

                })
            },
            //定时清除定时器
            complete:function () {
                clearInterval(interval)  //清除定时器
            }
        })
    },
    endTap:function () {
        wx.stopRecord();
        clearInterval(interval);
        this.setData({
            formatRecordTime:'00:00:00',      //显示时长设置为初始值
            recordTime:0                      //计数器清0


        })
    },
    playTap:function () {
        var self=this;
        wx.playVoice({
            filePath:self.data.recordFile,  //设置播放文件路径
            complete:function () {
                
            }
        })
    }
})