// pages/calculator/calculator.js
// 保存数据在本地缓存数组中
var saveExprs=function (expr) {

    var exprs=wx.getStorageSync("exprs")||[]  //获取本地缓存
    exprs.unshift(expr) ;//在数组开头增加元素
    wx.setStorageSync('exprs',exprs);

}


var calculate=function (data1,oper,data2) {
    var data;
    data1=parseFloat(data1);
    data2=parseFloat(data2);
    switch (oper){
        case "+":
            data=data1+data2;
            break;
        case "-":
            data=data1-data2;
            break;
        case "x":
            data=data1*data2;
            break;
        case  "÷":
            if(data2 !==0){
                data=data1/data2;
            }else{
                data=0;
            }
            break;
    }
    return data;
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
   temp:"0",      //临时结果
   lastoper:"+", //上一次操作符
   flag:true, //上一次操作符
   result:"0"  ,//计算结果
   id1:"history"  ,//历史
   id2:"clear"  ,//清除
   id3:"back"  ,//回退
   id4:"div"  ,//除
   id5:"num_7"  ,//数字7
   id6:"num_8"  ,
   id7:"num_9"  ,
   id8:"mul"  ,
   id9:"num_4"  ,
   id10:"num_5"  ,//
   id11:"num_6"  ,//
   id12:"sub"  ,//减
   id13:"num_1"  ,//
   id14:"num_2"  ,//
   id15:"num_3"  ,//
   id16:"add"  ,//
   id17:"negative"  ,//取负
   id18:"num_0" ,
   id19:"dot" ,
   id20:"equ" ,//等号
   record:true, //计算过程记录到历史记录中
   expr:""
  },

   clickButton:function (e) {

       var data=this.data.result;    //获取上一个结果值;
       var tmp=this.data.temp;     //获取上次的临时结果;
       var lastoper1=this.data.lastoper; //上一次的运算符;
       var noNumFlag=this.data.flag;   //上一次非数字按钮标志
       var expr1=this.data.expr;          //上一次非数字按钮标志

       if(e.target.id>='num_0'&& e.target.id<="num_9"){
           data +=e.target.id.split("_")[1]; //正常情况，串接输入的值
           if(this.data.result=="0"||noNumFlag){  //原值为0，或上次所按是非数字按钮
               data=e.target.id.split("_")[1]; //用输入的值代替
           }
           noNumFlag=false;
       }else{  //不是数字按钮
           noNumFlag=true;
           // console.log(e.target.id);  //在控制台输出按钮的id
           if(e.target.id=="dot"){    //小数点
               if(data.toString().indexOf(".")== -1){   //输入的值中不包含小数点
                   data +=".";
               }
           }else if(e.target.id =="clear"){  //清除按钮
               expr1=expr1.substr(0,expr1.length-1)+"="+tmp;  //删除最后一个运算符
               if(this.data.record){
                   wx.setStorageSync("expr",expr1);
               }
               expr1="";
               data=0;       //数字清0
               tmp=0;         //清除中间的结果
               lastoper1 ="+";   //设置上次运算符为加

           }else if(e.target.id =="negative"){ //数字取负
               data=-1*data;
           }else if(e.target.id =="back"){  //回退一个字符
               if(data.toString().length>1){  //长度超过1位数
                   data=data.substr(0,data.toString().length-1);   //去掉最后一位
               }else{  //长度只有一位
                   data=0;   //置0
               }
           }else if(e.target.id =="div"){ //除法
               expr1 +=data.toString()+"÷";
               data=calculate(tmp,lastoper1,data);
               tmp=data;
               lastoper1 = "÷";
           }else if(e.target.id =="mul"){ //乘法
               expr1 +=data.toString()+"x";
               data=calculate(tmp,lastoper1,data);
               tmp=data;
               lastoper1="x";
           }else if(e.target.id =="add"){ //加法
               expr1 +=data.toString()+"+";
               data=calculate(tmp,lastoper1,data);
               tmp=data;
               lastoper1="+";

           }else if(e.target.id=="sub"){ //减法
               expr1 +=data.toString()+"-";
               data=calculate(tmp,lastoper1,data);
               tmp=data;
               lastoper1="-";

           }else if(e.target.id=="equ"){ //等号
               expr1+=data.toString();
               data=calculate(tmp,lastoper1,data);
               expr1 +="="+data;  //生成表达式
               if(this.data.record){
                   wx.setStorageSync("expr",expr1);
               }
               expr1="";
               tmp=0;
               lastoper1="+";
               saveExprs(expr1)

           }

       }
       this.setData({
           result:data,
           lastoper:lastoper1,
           temp:tmp,
           flag:noNumFlag,
           expr:expr1

       })
   },
    //修改记录标志
    RecordHistory:function (e) {
        console.log(e);
        this.setData({
            record:e.detail.value
        })
    },
    
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})

