var box = document.getElementById("box");
var oNavlist = document.getElementById("box2").children;
var slider = document.getElementById("slider");
var index = 1;
var isMoving = false;

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navChange();
	animate(slider,{top:-400*index},function(){
		if(index === 6){
			slider.style.top = "-400px";
			index=1;
		}
		isMoving = false;
	});	
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navChange();
	animate(slider,{top:-400*index},function(){
		if(index === 0){
		slider.style.top = -400*5+"px";
		index=5;
	    }
		isMoving = false;
	});
	}
var timer = setInterval(next,3000);
box.onmouseover = function(){
	clearInterval(timer)
}
box.onmouseout = function(){
	timer = setInterval(next,3000);
}
for(var i =0;i<oNavlist.length;i++){
	oNavlist[i].idx=i;
	oNavlist[i].onclick=function(){
		index = this.idx+1;
		navChange();
		animate(slider,{top:-400*index});
	}
}
function navChange(){
	for(var i = 0;i<oNavlist.length;i++){
		oNavlist[i].className = '';
	}
	if(index>5){
		oNavlist[0].className = 'active';
	}else if(index===0){
		oNavlist[4].className = 'active';
	}else{
		oNavlist[index-1].className = 'active';
	}
}
var img1 = document.getElementById("img1");
var main3 = document.getElementById("main3");
var Simg = document.getElementById("Simg");
var slider1 = document.getElementById("slider1");
var main5 = document.getElementById("main5");
var Bimg = document.getElementById("Bimg");
 // main3.onmouseover = function() {
 //   slider1.style.display="block";
 //   main5.style.display = "block";
 // }
 main3.onmousemove = function(e) {
   var mouseX = e.clientX;
   var mouseY = e.clientY;
   var boxLeft = main1.offsetLeft;
   var boxTop = main1.offsetTop;
   console.log(boxLeft);
   console.log(boxTop);
   var sliderWidth = slider1.offsetWidth;
   var sliderHeight = slider1.offsetHeight;
   console.log(sliderHeight);
   var sliderLeft = mouseX-boxLeft-sliderWidth/2;
   var sliderTop = mouseY-boxTop-sliderHeight/2;
   if(sliderLeft <= 0){
     sliderLeft = 0;
   }
   else if(sliderLeft >= (main3.offsetWidth - slider1.offsetWidth)){
       sliderLeft = main3.offsetWidth - slider1.offsetWidth;
   }
   if(sliderTop<=0){
     sliderTop=0;
   }
   else if(sliderTop>=(main3.offsetHeight - slider1.offsetHeight)){
     sliderTop = main3.offsetHeight - slider1.offsetHeight;
   }
   slider1.style.left = sliderLeft + 'px';
   slider1.style.top = sliderTop + 'px';
   var percent = Bimg.offsetWidth/Simg.offsetWidth;
   Bimg.style.left = (-sliderLeft*percent)+"px";
   Bimg.style.top = (-sliderTop*percent)+"px";
  }
var putList = document.getElementsByClassName("inp");
var imgList = ['zAZfB.jpg','ZEhUN.jpg','zFC9H.jpg','zhWY9.jpg','zJ6iV.jpg','zjsKP.jpg','ZKc9S.jpg','zKDXU.jpg','Zin4c.jpg','ZITGj.jpg'];
var i;
var codeImg = document.getElementsByClassName("codeImg");
document.getElementsByClassName("getCode")[0].onclick = function(){
    i=Math.round(Math.random()*(imgList.length-1));
document.getElementsByClassName("codeImg")[0].innerHTML ='<img src="'+imgList[i]+'" />';
}
document.getElementsByClassName("btn")[0].onclick = function(){
    var yanzheng = putList[5].value+".jpg";
    if(yanzheng==imgList[i]){
     	codeImg[0].innerHTML = "验证码正确";
    }
    if(yanzheng!=imgList[i]){
     	codeImg[0].innerHTML = "验证码错误";
    }
}
	var d = new Date();
    var time = d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();
putList[3].placeholder = time;
putList[4].placeholder = time;