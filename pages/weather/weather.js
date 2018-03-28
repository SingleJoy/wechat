var util=require('../../utils/util.js');


Page({
    data:{
       weather:{
           wendu:18,
           gaomao:'昼夜温差比较大，容易感冒，请适当添加衣服。体质较弱的朋友请注意防护。',
           yesterday:{
               date:'17日星期四',
               type:'阴',
               dx:'南风',
               fx:'微风级',
               low:'低温8℃',
               high:'高温18℃'
           },
           forecast:[
               {
                   date:'18日星期五',
                   type:'晴朗',
                   dx:'南风',
                   fx:'微风级',
                   low:'低温8℃',
                   high:'高温18℃'
               },
               {
                   date:'18日星期五',
                   type:'晴朗',
                   dx:'南风',
                   fx:'微风级',
                   low:'低温8℃',
                   high:'高温18℃'
               },
               {
                   date:'18日星期五',
                   type:'晴朗',
                   dx:'南风',
                   fx:'微风级',
                   low:'低温8℃',
                   high:'高温18℃'
               },
               {
                   date:'18日星期五',
                   type:'晴朗',
                   dx:'南风',
                   fx:'微风级',
                   low:'低温8℃',
                   high:'高温18℃'
               },
               {
                   date:'18日星期五',
                   type:'晴朗',
                   dx:'南风',
                   fx:'微风级',
                   low:'低温8℃',
                   high:'高温18℃'
               }

           ]
       },
        today:'2018-03-27',
        city:'北京', //城市名称
        inputCity:''   //输入查询的城市名称
    },
    onLoad:function (options) {
        this.setData({
            today:util.formatTime(new Date()).split(' ')[0]
        });
        var self=this;
        wx.getLocation({

            type:'wgs84',
            success:function (res) {
                wx.request({
                    url:'http://api.map.baidu.com/geocoder/v2/'+'ak=ASAT5N3tnHIa4APW0SNPeXN5&location='+res.latitude+','+res.longitude+'&output=json&pois=0',
                    data: {},
                    header:{
                        'Content-Type':'application/json'
                    },
                    success:function (res) {
                        var city=res.data.result.addressComponent.city.replace('市',''); //城市名称
                        self.searchWeather(city);
                    }



                })


            }

        })
    },
    searchWeather:function (cityName) {
        var self=this;
        wx.request({
            url:'http://wthrcdn.etouch.cn/weather_mini?city='+cityName,
            data:{},
            header:{
                'Content-Type':'application/json'
            },
            success:function (res) {
                //显示错误信息
                if(res.data.status==1002){
                    wx.showModal({
                        title:'提示',
                        content:'输入的城市名称有误，请重新输入！',
                        showCancel:false,
                        success:function (res) {
                            self.setData({
                                inputCity:''
                            })
                        }

                    })
                }else{
                    var weather=res.data.data;           //获取天气数据
                    for(var i=0;i<weather.forecast.length;i++){
                        var d=weather.forecast[i].date;
                        //处理日期信息，添加空格
                        weather.forecast[i].date=''+d.replace('星期',' 星期');
                    }
                    self.setData({
                        city:cityName,   //更新显示城市名称
                        weather:weather,   //更新天气信息
                        inputCity:''       //清空查询输入框
                    })
                }
            }
        })
    }
})

