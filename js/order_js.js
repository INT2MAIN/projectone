
$(document).ready(function () {
							 
 /*订单详情收缩展开效果*/
$(".jb_Info_nav h1 span,.jb_Info_nav h1 b").toggle(
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
});