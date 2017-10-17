$(document).ready(function() {
	flexibility(document.documentElement);
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })

	//MAIN SLIDER
	if ($('.main-slider').length>0) {
		$('.main-slider').slick({
			infinite: false,
			slidesToShow: 1,
			fade: true,
			lazyLoad: 'progressive',

			useTransform:true,
			equalizeHeight: false,
			"accessibility": false,
			nextArrow: $('.main-slider__right'),
  			prevArrow: $('.main-slider__left'),
  			responsive: [
			    {
			      breakpoint: 901,
			      settings: {
			        infinite: false,
					slidesToShow: 1,
					fade: true,
					lazyLoad: 'progressive',
					useTransform:true,
					"accessibility": false,
					nextArrow: $('.main-slider__right'),
		  			prevArrow: $('.main-slider__left'),
		  			dots:true,
		  			arrows:true,
			      }
			    },
		    ]
		});

		$('.main-slider__pager ul li').each( function( i ) {
			$('.main-slider__pager .slide-' + i + ' a').click(function(){
				$('.main-slider__pager a').removeClass('active');
				$(this).addClass('active');
				$('.main-slider').slick('slickGoTo', i);
			})
		})

		$('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var next = nextSlide; 
		 	$('.main-slider__pager a').removeClass('active');
		 	$('.main-slider__pager .slide-' + next + ' a').addClass('active');
		});
	}


	//NEW SLIDER
	if ($('.new__slider').length>0) {
		$('.new__slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			lazyLoad: 'progressive',
			
			useTransform:true,
			equalizeHeight: false,
			"accessibility": false,
  			// responsive: [
			  //   {
			  //   breakpoint: 901,
			  //     settings: {

			  //     }
			  //   },
		   //  ]
		});
	}

	//MAIN NEWS SLIDER
	if ($('.main-news__slider').length>0) {
		$('.main-news__slider').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			lazyLoad: 'progressive',
			
			useTransform:true,
			equalizeHeight: false,
			"accessibility": false,
  			// responsive: [
			  //   {
			  //   breakpoint: 901,
			  //     settings: {

			  //     }
			  //   },
		   //  ]
		});
	}

	//MAIN PARTNERS SLIDER
	if ($('.main-partners__slider').length>0) {
		$('.main-partners__slider').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			lazyLoad: 'progressive',
			
			useTransform:true,
			equalizeHeight: false,
			"accessibility": false,
  			// responsive: [
			  //   {
			  //   breakpoint: 901,
			  //     settings: {

			  //     }
			  //   },
		   //  ]
		});
	}
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions


// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="index.html">Index</a></li> \
// 	</ol> \
// </div>');
