/*
Date 对象包含了一系列的日期时间处理的功能
 创建 Date 对象，例:
 var now = new Date( );
 获取当前日期时间:  toLocaleString( )
 获取年份、月份、日期:  getFullYear()、 
 getMonth()、getDate()
*/
var daytable = document.getElementById("daytable");
var tdtb = daytable.getElementsByTagName("td");
// var dayList = daytable.children;
console.log(tdtb);
for(var i = 0;i<35;i++){
    tdtb[i].style.width = "80px";
    tdtb[i].style.height = "70px";
}
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth()+1;
var date = now.getDate();
var day = now.getDay();//0周日1周一2周二
var cut = date%7-1;
var firstday;
console.log(year+" "+month+" "+date+" ");
if(cut>0){
    firstday = (day-cut)%7;
}
else{
    firstday = (day+cut+1)%7;
}
console.log(firstday);
//var days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
if(month == 1 || month == 3 || month ==5 || month == 7 || month ==8||month ==10||month ==12){
    for(var i = 0;i<31;i++){
        tdtb[i].innerHTML = null;
        if(i<9){
            tdtb[firstday+i].innerHTML = "0"+(i+1);
        }
        else{
            tdtb[firstday+i].innerHTML = i+1;
        }
    }
    for(var j = date-1;j<31;j++){
        tdtb[firstday+j].onmousemove = function(){
            this.style.backgroundColor = "lightgray";
        }
        tdtb[firstday+j].onmouseout = function(){
            this.style.backgroundColor = "white";
        }
    }
}
else if(month == 2){//没有判断闰年平年
    for(var i = 0;i<28;i++){
        tdtb[i].innerHTML = null;
        if(i<9){
            tdtb[firstday+i].innerHTML = "0"+(i+1);
        }
        else{
            tdtb[firstday+i].innerHTML = i+1;
        }
    }
    for(var j = date-1;j<29;j++){
        tdtb[firstday+j].onmousemove = function(){
            this.style.backgroundColor = "lightgray";
        }
        tdtb[firstday+j].onmouseout = function(){
            this.style.backgroundColor = "white";
        }
    }
}
else if(month==4 ||month==6 ||month==9||month==11){
    for(var i = 0;i<30;i++){
        tdtb[i].innerHTML = null;
        if(i<9){
            tdtb[firstday+i].innerHTML = "0"+(i+1);
        }
        else{
            tdtb[firstday+i].innerHTML = i+1;
        }
    }
    for(var j = date-1;j<30;j++){
        tdtb[firstday+j].onmousemove = function(){
            this.style.backgroundColor = "lightgray";
        }
        tdtb[firstday+j].onmouseout = function(){
            this.style.backgroundColor = "white";
        }
    }
}
for(var i = 0;i<date;i++){
    tdtb[firstday+i].style.color = "lightgray";
}
if(date == tdtb[firstday+date-1].innerHTML){
    tdtb[firstday+date-1].innerHTML = "今天";
    tdtb[firstday+date-1].style.color = "#cf4488";
}
