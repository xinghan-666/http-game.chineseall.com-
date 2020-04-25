$(function() {
//job切换
$("#job li").each(function(index) { 
		$(this).click(function() { 
			$("#job li.on").removeClass("on"); 
			$(this).addClass("on"); 
			$("#job-about li:eq(" + index + ")").show()
			.siblings().hide();
		});
	});
//大幻灯速度 
    var swiper1 = new Swiper('.big-light .swiper-container', {
    	effect : 'fade',
    	speed:3000,
		fade: { crossFade: true,},
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
		observer: true, 
		observeParents: true, 
        zoom: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
//小幻灯速度 
    var swiper2 = new Swiper('.light-s .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 5500,
        autoplayDisableOnInteraction: false,
		observer: true, 
		observeParents: true, 
    });
//hotgame
	$(".top-game01").hover(function(){
		$(".top-game01").hide();
		$(".top-game01-hover").fadeIn();
		$(".top-game02,.top-game03").show();
	});
	$(".top-game01-hover").mouseout(function(){
        $(".top-game01-hover,.top-game02-hover,.top-game03-hover").hide();
		$(".top-game01").fadeIn();
		$(".top-game02,.top-game03").show();
	});
	$(".top-game02").hover(function(){
		$(".top-game02").hide();
		$(".top-game02-hover").fadeIn();
		$(".top-game01,.top-game03").show();
	});
	$(".top-game02-hover").mouseout(function(){
        $(".top-game01-hover,.top-game02-hover,.top-game03-hover").hide();
		$(".top-game02").fadeIn();
		$(".top-game01,.top-game03").show();
	});
	$(".top-game03").hover(function(){
		$(".top-game03").hide();
		$(".top-game03-hover").fadeIn();
		$(".top-game01,.top-game02").show();
	});
	$(".top-game03-hover").mouseout(function(){
        $(".top-game01-hover,.top-game02-hover,.top-game03-hover").hide();
		$(".top-game03").fadeIn();
		$(".top-game01,.top-game02").show();
	});
	
	
	
	
	
	
});

