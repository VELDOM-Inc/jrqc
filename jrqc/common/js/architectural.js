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
		var current;
		$.scrollify({
			section:'.architectural-example,.facilities-results', //対象要素を指定
			easing: 'swing', // イージングを指定
			scrollSpeed: 600, // スクロール時の速度
			scrollbars: "false",
			interstitialSection : ".header,.footer",
			standardScrollElements: ".facilities-results,.footer",
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
});
