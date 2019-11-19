var headleft=document.getElementsByClassName("head_left")[0];
var imgs=headleft.getElementsByTagName("img");
var header=document.getElementsByTagName("header")[0];
var textt=document.getElementsByName("textt")[0];
var passw=document.getElementsByName("passw")[0];
var phone=document.getElementsByName("phone")[0];
// console.log(textt);	
var j=0;
//轮播
	for(var i=0;i<imgs.length;i++){
		imgs[i].onclick=function(){
			su();
		}
	}

timer=setInterval(function(){
		su();
	
	},1500);
header.onmousemove=function(){
				clearInterval(timer);
					timer=null;
			}
header.onmouseout=function(){
				timer=setInterval(function(){
			su();
	
	},1500);
		}

    // 用户名
		textt.onfocus=function(){//获取焦点事件
			var span=this.nextElementSibling;
			span.innerHTML="只能输入6-12位数字、字母、汉字";
			span.style.color="red";
			span.style.height='31px'
			// console.log(this.parentNode.nextElementSibling);
		}
		
//		textt.onblur=function(){//失去焦点事件
//			var reg=/^[0-9a-zA-Z\u4e00-\u9fa5]{6,12}$/;
//			var str=this.value;
//			var span=this.nextElementSibling;
//			span.style.height='31px'
//			console.log(span)
//			if(reg.test(str)){
//				span.innerHTML="你的用户名可以注册";
//				span.style.color="green";
//			
//			}else{
//				span.innerHTML="你的用户名不满足条件";
//				span.style.color="red";
//			}
//		}

// 密码
passw.onfocus=function(){//获取焦点事件
	var span=this.nextElementSibling;
	span.innerHTML="密码只能是6位，数字和字母的组合";
	span.style.height='31px'
	span.style.color="red";
}

passw.onblur=function(){//失去焦点事件
	var reg=/^(?![0-9]+$)(?![A-Z]+$)(?![a-z]+$)[0-9a-zA-Z]{6}$/;
	var str=this.value;
	var span=this.nextElementSibling;
	span.style.height='31px'
	if(reg.test(str)){
		span.innerHTML="你的密码真棒";
		span.style.color="green";
	}else{
		span.innerHTML="你的密码不行";
		span.style.color="red";
	}
}

// 手机号码
			var regPhone=/^(\+86|0086)?\s*1[3-9]\d{9}$/;
			var regPwd=/^\d{8}$/;
			//给inp1绑定了获取焦点事件，一旦获取焦点，就在后面span提示文字
			phone.onfocus=function(){
				var span=this.nextElementSibling;
				span.style.height='31px';
				span.style.color="red";
				span.innerHTML="请输入中国大陆正确的手机号";
			}
			//给inp1绑定了失去焦点事件，一旦失去焦点，判断用户输入的内容和正则是否匹配，但是其实只是给了样式
			phone.onblur=function(){
				var user=this.value;
				var span=this.nextElementSibling;
				span.style.height='31px'
				if(regPhone.test(user)){
					span.innerHTML="你的手机号真棒";
					span.style.color="green";
				}else{
					span.innerHTML="你的手机号错误";
					span.style.color="red";
					
				}
			}
//验证码
var yzm=document.getElementsByClassName("yzd")[0];
var arr=[];
			for(var i=48;i<=57;i++){
				 var num=String.fromCharCode(i);
				 arr.push(num);
			}
			for(var i=65;i<=90;i++){
				 var num=String.fromCharCode(i);
				 arr.push(num);
			}
			for(var i=97;i<=122;i++){
				 var num=String.fromCharCode(i);
				 arr.push(num);
			}
			var str=""
			while(str.length<4){
				var r=parseInt(Math.random()*(62-0+1)+0);
				if(str.indexOf(arr[r])==-1){
					str+=arr[r];
				}
				yzm.innerHTML=str;
			}
			yzm.onclick=function(){
				for(var i=48;i<=57;i++){
					var num=String.fromCharCode(i);
					arr.push(num);
			   }
			   for(var i=65;i<=90;i++){
					var num=String.fromCharCode(i);
					arr.push(num);
			   }
			   for(var i=97;i<=122;i++){
					var num=String.fromCharCode(i);
					arr.push(num);
			   }
			   var str=""
			   while(str.length<4){
				   var r=parseInt(Math.random()*(62-0+1)+0);
				   if(str.indexOf(arr[r])==-1){
					   str+=arr[r];
				   }
				   yzm.innerHTML=str;
			   }
			}

		//验证码输入验证
		var sryzm=document.getElementsByClassName("sryzm")[0];

		sryzm.children[0].onfocus=function(){
				this.nextElementSibling.innerHTML='请输入验证码'
				this.nextElementSibling.style.color='red'
				this.nextElementSibling.style.height='31px'
			
		}
		sryzm.children[0].onblur=function(){
			if(sryzm.children[0].value.toLowerCase()==str.toLowerCase()){
			/* console.log("验证正确"); */
				this.nextElementSibling.innerHTML='验证正确'
				this.nextElementSibling.style.color='green'
				this.nextElementSibling.style.height='31px'
			}else{
				/* console.log("验证失败"); */
				this.nextElementSibling.innerHTML='验证失败'
				this.nextElementSibling.style.color='red'
				this.nextElementSibling.style.height='31px'
			}
		}

			
//提交
form.onsubmit=function(){
	if(textt.nextElementSibling.style.color=="red" || textt.value==""){
		return false;//阻止
	}
	if(passw.nextElementSibling.style.color=="red" || passw.value==""){
		return false;//阻止
	}
	if(phone.nextElementSibling.style.color=="red" || phone.value==""){
		return false;//阻止
	}
	if(sryzm.children[0].nextElementSibling.style.color=="red" || sryzm.children[0].value==""){
		return false;//阻止
	}
}




















		function su(){
			j++;
			if(j==3){
				j=0;
			}
			for(var i=0;i<imgs.length;i++){
				imgs[i].className="";
			}
			imgs[j].className="active";
		}