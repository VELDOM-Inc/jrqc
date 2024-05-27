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

