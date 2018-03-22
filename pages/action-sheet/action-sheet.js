// pages/action-sheet/action-sheet.js

var items=['菜单1','菜单2','菜单3','菜单4'];
var pageObject={
    data:{
        actionSheetHidden:true,  //action-sheet组件的隐藏状态
        actionSheetItems:items   //菜单数组
    },
    //按钮点击事件
    actionSheetTap:function (e) {
       this.setData({
           actionSheetHidden:false   //显示action-sheet组件
       })
    },
    //action-sheet的change事件
    actionSheetChange:function (e) {
        this.setData({
            actionSheetHidden:true
        })
    },
    actionSheetTap2:function(e) {
        wx.showActionSheet({
            itemList:items,
            success:function(res){
                console.log('success');
                console.log(res);
                if(!res.cancel){   //用户点击的不是"取消"菜单栏
                    console.log(res.tapIndex)
                }
            },
            complete:function(e){
                console.log('complete');
                console.log(e);
            }
        })
    }


}

//循环生成4个菜单项的点击事件
for(var i=0;i<items.length;++i){
    (function (itemName) {
        pageObject['bind'+itemName]=function (e) {
            // console.log('click'+itemName);
            // console.log(e); //在控制台输出单击菜单项的参数
            this.setData({
                actionSheetHidden:true   //隐藏action-sheet组件
            })
        }
    })(items[i])
}





Page(pageObject);