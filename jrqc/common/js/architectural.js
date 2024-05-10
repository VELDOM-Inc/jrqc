document.querySelectorAll('.architectural-tab__link').forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active')
  }
})

$('.architectural-example-img').each(function( i ) {
		var common_slide = $(this);
		//本体スライダー
		common_slide.find( '.architectural-example-slider' ).addClass( 'architectural-example-slider' + i ).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.architectural-example-nav' + i
		} );
		//サムネイルスライダー
		common_slide.find('.architectural-example-nav').addClass( 'architectural-example-nav' + i ).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.architectural-example-slider' + i,
			dots: false,
			centerMode: true,
			focusOnSelect: true
		});
});

$(function() {
	if (!isSP()) {
		var current;
		
		$.scrollify({
			section : ".architectural-example",
			scrollbars: "false",
			interstitialSection : ".header,.footer",
			easing: "swing",
			standardScrollElements: ".facilities-results",
			scrollSpeed: 500,
			setHeights: "false",
			touchScroll: "true",
			offset: -135,
			updateHash: false,
			/*before:function(i,box){
					current = i;
			},*/
		});
		
		$(window).on('resize',function(){
				if(current){
					var currentScrl = $('.architectural-example').eq(currentScrl).offset().top;
					$(window).scrollTop(currentScrl);
				}
		});
		
		$('.pagetop__link').on('click', $.scrollify.move);
	}
	
	if (isSP()) {
  }
});


/*
$(function() {
		var current;
		$.scrollify({
			section:'.architectural-example,.facilities-results,.footer', 
			easing: 'swing', 
			scrollSpeed: 600, 
			scrollbars: "false",
			interstitialSection : ".header,.footer,.facilities-results",
			standardScrollElements: ".footer,.facilities-results",
			touchScroll: "true",
			offset: -135,
			setHeights: "false",
			updateHash: false
		});
		
		$(window).on('resize',function(){
				if(current){
					var currentScrl = $('.architectural-example').eq(currentScrl).offset().top;
					$(window).scrollTop(currentScrl);
				}
		});
		
		$('.pagetop__link').on('click', $.scrollify.move);
	
		if (isSP()) {
			$.scrollify({
				offset: -57,
			});
		}
});*/
