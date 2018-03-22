// audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },

   tapPlay:function () {
       wx.playBackgroundAudio({
           dataUrl:'http://192.168.10.253:8090/Child_App/Oops.mp3',
           title:'Little Mix/Charlie Puth',
           conImgUrl:'http://p1.music.126.net/O_gHnR3Qwu0vcNAY2DTuyQ==/2946691240466931.jpg?param=130y130'
       })
   },
    tapPause:function () {
        wx.pauseBackgroundAudio();
    },
    tapSeek:function () {
        wx.seekBackgroundAudio({
            position:30
        });
    },
    tapStop:function () {
        wx.stopBackgroundAudio();
    },
    tapGetPlayState:function () {
        wx.getBackgroundAudioPlayerState({
            success:function (res) {
                console.log(res)
            }
        })
    },
    //页面初始化options为页面跳转所带来的参数
    onLoad:function (options) {
        //监听音乐播放
        wx.onBackgroundAudioPlay(function () {
            console.log('监听音乐播放，开始音乐播放')
        }),
        //监听音乐暂停
        wx.onBackgroundAudioPause(function () {
            console.log('监听音乐暂停，暂停音乐');
        }),
        wx.onBackgroundAudioStop(function () {
            console.log('监听音乐停止，停止了音乐')
        })
    }


})
