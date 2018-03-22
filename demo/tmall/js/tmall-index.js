$(function(){
var i = 0;

$('.mb-stop').hover(
	function(){
		clearInterval(p);
	},
	function(){
		banner();
	});

function banner(){
	p = setInterval(function(){
		i++;
		if (i>5) {
			i=0;
		}
		selectimg(i);
	},3000);
};

function selectimg(i){
	$('.ban-bg-'+i).stop(true,true).animate({"opacity":"1","z-index":"1","display":"block"},600);
	$('.ban-bg-'+i).siblings('div').animate({"opacity":"0","z-index":"0","display":"none"},600);
	$('.ban-btn>li').eq(i).addClass('select').siblings('li').removeClass('select');
};

$('.ban-btn>li').eq(0).addClass('select');

$('.ban-btn>li').each(function(index){
	$(this).mouseover(function(){
		i = index;
		$('.ban-bg-'+index).stop(true,true).animate({"opacity":"1","z-index":"1","display":"block"},600);
		$('.ban-bg-'+index).siblings('div').animate({"opacity":"0","z-index":"0","display":"none"},600);
		$('.ban-btn>li').eq(i).addClass('select').siblings('li').removeClass('select');
	});
});

banner();

});

$(function(){

var pro_i = 0;

$('.two-grid-body').hover(
	function(){
		clearInterval(pro_p);
	},
	function(){
		pro_banner();
	});

function pro_banner(){
	pro_p = setInterval(function(){
		pro_i++;
		if (pro_i>1) {
			pro_i=0;
		}
		selectimg(pro_i);
	},3000);
};

function selectimg(pro_i){
	$('.tgb-body-'+pro_i).stop(true,true).animate({"opacity":"1","z-index":"1","display":"block"},100);
	$('.tgb-body-'+pro_i).siblings('div').animate({"opacity":"0","z-index":"0","display":"none"},100);
	$('.tgb-head>li').eq(pro_i).addClass('active').siblings('li').removeClass('active');
};

$('.tgb-head>li').eq(0).addClass('active');

$('.tgb-head>li').each(function(index){
	$(this).mouseover(function(){
		pro_i = index;
		$('.tgb-body-'+index).stop(true,true).animate({"opacity":"1","z-index":"1","display":"block"},100);
		$('.tgb-body-'+index).siblings('div').animate({"opacity":"0","z-index":"0","display":"none"},100);
		$('.tgb-head>li').eq(pro_i).addClass('active').siblings('li').removeClass('active');
	});
});

pro_banner();

});

$("[href='#noLink']").click(function(){
	alert("模仿天猫的链接，并没有实际的跳转页面！");
})

//通过sessionStorage获取登录名或者注册名
var loginName = sessionStorage.getItem("loginUser");

if(loginName!=null){
	document.getElementById("indexUserName").innerHTML = "Hi,"+loginName;
	document.getElementById("indexRegister").style.display = "none";
	document.getElementById("exit").style.display = "block";

} 

function shopcarCheckLogin(){

	// 通过sessionStorage值来判断是否登录了
	if(loginName == null){
		window.location.href = "tm-login.html";
	}else{
		alert("car");
	} 
}

function orderformCheckLogin(){

	// 通过sessionStorage值来判断是否登录了
	if(loginName == null){
		window.location.href = "tm-login.html";
	}else{
		alert("form");
	} 
}

function exit(){
	sessionStorage.clear();
	document.getElementById("indexUserName").innerHTML = "请登录";
	document.getElementById("indexRegister").style.display = "block";
	document.getElementById("exit").style.display = "none";
}