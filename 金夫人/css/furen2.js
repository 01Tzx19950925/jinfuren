var but=document.getElementsByTagName("button");
var img=document.getElementsByClassName("img")[0];
var box=document.getElementsByClassName("box1")[0];
var img1=img.getElementsByTagName("img");
var ul=document.getElementsByClassName("ul")[0];
var lis=ul.getElementsByTagName("li");
var b=0;
for(var i=0;i<but.length;i++){
	but[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			b++;
				if(b==4){
					b=0;
				}
			for(var i=0;i<img1.length;i++){
				img1[i].className="";
				lis[i].className="";
			}
			
				
			img1[b].className="red1";
			lis[b].className="red"
		}
		else{
			b--;
			if(b==-1){
				b=3;
			}
			for(var i=0;i<img1.length;i++){
				img1[i].className="";
				lis[i].className="";
			}
			img1[b].className="red1";
			lis[b].className="red"
		}
		
	}
}
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
			img1[i].className="";
		}
		this.className="red";
		b=this.getAttribute("ly");
        img1[b].className="red1";
		
	}
}
ter=setInterval(function(){
		b++;
	if(b==4){
			b=0;
		}
	for(var i=0;i<img1.length;i++){
		img1[i].className="";
		lis[i].className="";
	}
		img1[b].className="red1";
		lis[b].className="red"
},2000)
box.onmouseover=function(){
	clearInterval(ter);
	ter=null;
}
	box.onmouseout=function(){
		ter=setInterval(function(){
		b++;
	if(b==4){
			b=0;
	}
	for(var i=0;i<img1.length;i++){
		img1[i].className="";
		lis[i].className="";
	}
		img1[b].className="red1";
		lis[b].className="red"
			},2000)
		}