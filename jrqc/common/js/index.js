$(function() {
    $('.index-visual-slider').slick({
					autoplay: true,
					autoplaySpeed: 4000,
					dots: false,
					arrows: false,
					slidesToShow: 1,
					infinite: true,
          responsive: [{
               breakpoint: 1670,
                    settings: {
               }
          },
					{
               breakpoint: 1180,
                    settings: {
               }
          },
					{
               breakpoint: 845,
                    settings: {
               }
          }
				]
     });
});