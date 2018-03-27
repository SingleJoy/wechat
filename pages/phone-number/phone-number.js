var apiKey='rSWING2NoOdpZon587RGbyvqGmbfc6Os';

Page({
    data:{
        phone:'',
        city:'',
        prefix:'',
        province:'',
        suit:'',
        supplier:'',
        errMsg:'',
        errNum:-2
    },
    //文本框输入事件处理函数，输入手机号码，保存到data中
    bindinput:function (e) {
        this.setData({
            phone:e.detail.value                   //更新手机号码
        })
    },
    //查询按钮事件处理函数
    phoneTap:function () {
       var phone=this.data.phone;                //从data中获取输入的手机号码

       if(phone!=null && phone!=''){             //如果手机号码不为空
           var self=this;
           //显示toast提示信息
           wx.showToast({
              title:'正在查询，请稍后...',
              icon:'loading',
              duration:10000
           });
           wx.request({
               url:'https://apis.baidu.com/apistore/mobilenumber/mobilenumber',  //接口地址
               data:{
                 'phone':phone                 //查询的手机号码
               },
               header:{
                   'apikey':apiKey                    //百度账号秘钥
               },
               success:function (res) {
                   console.log(res);
                   //查询成功
                   if(res.data.errNum ==0){
                       self.setData({
                           errMsg:'res.data.retMsg||res.data.errMsg', //清空错误描述
                           errNum:res.data.errNum,                    //错误码
                           city:res.data.retData.city,               //城市
                           prefix:res.data.retData.prefix,              //段号
                           province:res.data.retData.province,           //省份
                           suit:res.data.retData.suit,                   //套餐
                           supplier:res.data.retData.supplier            //运营商
                       })
                   }else{                     //查询失败
                       self.setData({
                           errMsg:res.data.retMsg||res.data.errMsg,   //错误描述
                           errNum:res.data.errNum     //错误码
                       })
                   }
               }
           })
       }
    }
})