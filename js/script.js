
 $(document).ready(function () {
  /*左边展开、收起效果*/
$(".leftnav dl dt").toggle(
	   function () {
            $(this).css("background-image", "url(../images/leftnavbga.jpg)");
            $(this).parent().find("dd").slideDown(400);
            return false;
        },										
        function () {
            $(this).css("background-image", "url(../images/leftnavbg.jpg)");
			$(this).css(".eerer");
            $(this).parent().find("dd").slideUp(400);
            return false;
        }
        
    );
  /*订单详情收缩展开效果*/
$(".jb_Info_nav h1 span").toggle(
	function () {
            $(this).css("background-image", "url(../images/sqico.gif)");
            $(this).parent().parent().find(".oder_info_t").slideUp(1);
			$(this).parent().css("border-bottom", "none");
			$("#oder_info_tqt").css("border-bottom", "1px solid #cdcbcb");
            return false;
        },
	   function () {
            $(this).css("background-image", "url(../images/zkico.gif)");
            $(this).parent().parent().find(".oder_info_t").slideDown(1);
			$(this).parent().css("border-bottom", "1px solid #cdcbcb");
			$(this).parent().parent().find("#contenttb").css("margin-top", "10px");
            return false;
        }										
    );

/*头部提示信息固定*/
var menuYloc = $(".Message_nav").offset().top; 
	$(window).scroll(function (){ 
	var offsetTop = menuYloc + $(window).scrollTop() +"px"; 
	$(".Message_nav").animate({top : offsetTop },{ duration:600 , queue:false }); 
	}); 
$(document).ready(function(){
		$("#massage_note").hide();
	    $("#save").click(function(){
		  $("#massage_note").fadeIn("slow").delay(3000).fadeOut("slow");
		//setTimeout("document.getElementById('massage_note').style.display='none'",5000);
		});
		});

});