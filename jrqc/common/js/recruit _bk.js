$(function() {
	$('.slider').slick({ 
		arrows: false,
			slidesToShow: 5,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 5000,
			arrow: false,
			cssEase: 'linear',
			pauseOnFocus: false,
			pauseOnHover: false,
			//pauseOnDotsHover: false,
			lazyLoad: 'progressive',
			swipe: false,
			variableWidth: true,
			responsive: [
				{
				breakpoint: 1350,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			}
			]
	});
	
	$('.slider02').slick({ 
		arrows: false,
			slidesToShow: 5,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 5000,
			arrow: false,
			cssEase: 'linear',
			pauseOnFocus: false,
			pauseOnHover: false,
			//pauseOnDotsHover: false,
			lazyLoad: 'progressive',
			rtl: true,
			swipe: false,
			variableWidth: true,
			responsive: [
				{
				breakpoint: 1350,
				settings: {
					slidesToShow: 4,
				}
			},
				{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			}
			]
	});
});

