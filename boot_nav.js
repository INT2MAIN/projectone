$(document).ready(function(){
	var a,b,c;
	a=$(window).height();
	$(window).scroll(function(){
		var b=$(this).scrollTop();
        console.log(a,b,c);
			c=$(".yes4").offset().top;
			if(b>=180){
				$(".rr ").addClass("you");
				$(".rr2 ").addClass("you2");
			}						
			else{
				$(".rr ").removeClass("you");
				$(".rr2 ").removeClass("you2");
			}

	});

});
$(document).ready(function() {
	$(".uu").mouseenter(function() {
		$(this).removeClass("uua2");	
		$(this).addClass("uua");
		
		
		
});
	$(".uu").mouseleave(function() {
		$(this).removeClass("uua");	
		$(this).addClass("uua2");	
		
});
	
})

$(document).ready(function() {
	$(".uu-head img").mouseenter(function() {
		$(this).addClass("im");	
		$(this).removeClass("im2");		
		
});
	$(".uu-head img").mouseleave(function() {
		$(this).removeClass("im");	
		$(this).addClass("im2");	
		
		
});
})

