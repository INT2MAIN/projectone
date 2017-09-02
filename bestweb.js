$(document).ready(function(){
	$(".dropdown-submenu").mouseover(function(){
		$(".dropdown-submenu>.dropdown-menu").css("display","block");
	});
	$(".dropdown-submenu").mouseout(function(){
		$(".dropdown-submenu>.dropdown-menu").css("display","none");
	});
	$("#btn").click(function(){
			$("#modal1").modal({
				backdrop:'static',//鼠标点击空白处模态框不会关闭
				keyboard:true,
				show:true,
			});
		});
	$("#formlogin").validate({
		rules:{
			username:{
				required:true,
				minlength:3,
				maxlength:6
			}
		}
	});

$(".content1").mouseover(function(){
	$(".content1 .content-d a").css({"color":"#FFD02B"});
	$(".content1 .content-d a i").css({"paddingLeft":"20px"});
});
$(".content1").mouseout(function(){
	$(".content1 .content-d a").css("color","#f5f5f5");
	$(".content1 .content-d a i").css({"paddingLeft":"8px"});
});

$(".content2").mouseover(function(){
	$(".content2 .content-d a").css({"color":"#f26767"});
	$(".content2 .content-d a i").css({"paddingLeft":"20px"});
});
$(".content2").mouseout(function(){
	$(".content2 .content-d a").css("color","#f5f5f5");
	$(".content2 .content-d a i").css({"paddingLeft":"8px"});
});

$(".content3").mouseover(function(){
	$(".content3 .content-d a").css({"color":"#38b2c1"});
	$(".content3 .content-d a i").css({"paddingLeft":"20px"});
});
$(".content3").mouseout(function(){
	$(".content3 .content-d a").css("color","#f5f5f5");
	$(".content3 .content-d a i").css({"paddingLeft":"8px"});
});

$(".content4").mouseover(function(){
	$(".content4 .content-d a").css({"color":"#37db79"});
	$(".content4 .content-d a i").css({"paddingLeft":"20px"});
});
$(".content4").mouseout(function(){
	$(".content4 .content-d a").css("color","#f5f5f5");
	$(".content4 .content-d a i").css({"paddingLeft":"8px"});
});

$(".content-dd").mouseover(function(){
	$(".content-dd a").css({"color":"#ec663b"});
	$(".content-dd a i").css({"paddingLeft":"20px"});
});
$(".content-dd").mouseout(function(){
	$(" .content-dd a").css("color","#f5f5f5");
	$(".content-dd a i").css({"paddingLeft":"8px"});
});


$(".content-cc.container span").mouseover(function(){
	$(this).addClass("animated");
	$(this).addClass("rubberBand");

});
$(".content-cc.container span").mouseout(function(){
	$(this).removeClass("animated");
	$(this).removeClass("rubberBand")
});

$(".dropdown-menu li a").on("touchstart", touchStart);  
// $(".pr-account-tab").on("touchmove", touchMove);  
$(".dropdown-menu li a").on("touchend", touchEnd);  
$(".dropdown-menu li a").on("mouseover", touchStart);  
$(".dropdown-menu li a").on("mouseout", touchEnd);  
  



});
function touchStart(event) {  
  $(this).addClass("kk");  
}  
  
// function touchMove(event) {  
//   // $("pr-account-tab-mobile").html("You are moving");  
//   // $(this).addClass("pr-account-tab-mobile");  
// }  
  
function touchEnd(event) {  
  $(this).removeClass("kk");  
}  
// 监听body动画效果
$(document).ready(function(){
	var a,b,c;
	a=$(window).height();
	$(window).scroll(function(){
		var b=$(this).scrollTop();
        console.log(a,b,c);
			
			if(b>=780){
				$(".content-message-one .right-text h3 ").addClass("animated");
				$(".content-message-one .right-text h3 ").addClass("bounceInRight");
			}						
			else{
				$(".content-message-one .right-text h3 ").removeClass("animated");
				$(".content-message-one .right-text h3 ").removeClass("bounceInRight");
			}

			if(b>=1280){
				$(".mm ").addClass("animated");
				$(".mm").addClass("lightSpeedIn");
			}						
			else{
				$(".mm ").removeClass("animated");
				$(".mm ").removeClass("lightSpeedIn");
			}
			if(b>=1680){
				$(".rr ").addClass("animated");
				$(".rr ").addClass("bounceInLeft");
			}						
			else{
				$(".rr ").removeClass("animated");
				$(".rr ").removeClass("bounceInLeft");
			}

	});
// layui-弹框
layui.use(['jquery', 'layer'], function(){ 
  var $ = layui.jquery //重点处
  ,layer = layui.layer;
  
  //后面就跟你平时使用jQuery一样
  $('.bottom-fix').click(function(){
  	layer.confirm('您愿意加入我们的学习吗？', {
  btn: ['确定', '取消'] //可以无限个按钮
  ,closeBtn:2,btn1: function(index){
    //按钮【按钮三】的回调
    layer.msg('加我的qq:978469686', {icon: 6});
  }
});
  });
});
});


