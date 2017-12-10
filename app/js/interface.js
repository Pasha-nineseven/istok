$(document).ready(function() {
	flexibility(document.documentElement);
	$.responsiveTables();
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })

	//TOP-MENU
	$('body').on('click','.top-menu', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		// $('.menu-mobile').slideToggle();
	});

	//TOP-SEARCH
	$('body').on('click','.top-search', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		// $('.menu-mobile').slideToggle();
	});


	//LANG TOGGLE
	$('body').on('click', '.top-language__link', function(e){
	    e.preventDefault();
	    $(this).toggleClass('active');
	    $('.top-language__list').fadeToggle();
	});
	$(document).click(function (e){
		var div = $(".top-language");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.top-language__link').removeClass('active');
			$('.top-language__list').fadeOut();
		}
	});

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
			accessibility: false,
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


	//PLAY-PAUSE
	$('body').on('click', '.main-video__play', function(e){
	    e.preventDefault();

	    // var vidClip = document.getElementById("main-video"); 


	    // if ( $(this).hasClass('play') ) {
	    //     $(this).removeClass('play');
	    //     $(this).addClass('pause');
	    //     $('#main-video').get(0).pause();
	    // } else {
	    //     $(this).removeClass('pause');
	    //     $(this).addClass('play');
	    //     $('#main-video').get(0).play();
	    // }

	});


	//POPUP-INLINE
	$('.main-video__play').magnificPopup({
		type: 'inline',
		removalDelay: 500,
		closeBtnInside: true,
		fixedContentPos: false,
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			open: function(){
				$('body').addClass('noscroll');
				$('#popup-video').get(0).play();
		    },
		    close: function() {
                 $('body').removeClass('noscroll');
                 $('#popup-video').get(0).pause();
            }
		},

		//midClick: true,
	});





	//ABOUT-PAGE slider
	if ($('.slider-default').length>0) {
		var $gallery = $('.slider-default');
		var slideCount = null;

		$( document ).ready(function() {
		    $gallery.slick({
				speed: 250,
				fade: true,
				cssEase: 'linear',
				swipe: true,
				swipeToSlide: true,
				touchThreshold: 10,
				arrows:true,
				useTransform:true,
				accessibility: false,
				infinite: false,
		    });
		});

		$gallery.on('init', function(event, slick){
			slideCount = slick.slideCount;
			setSlideCount();
			setCurrentSlideNumber(slick.currentSlide);
		});

		$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  setCurrentSlideNumber(nextSlide);
		});

		function setSlideCount() {
		  var $el = $('.slide-count-wrap').find('.total');
		  $el.text(slideCount);
		}

		function setCurrentSlideNumber(currentSlide) {
		  var $el = $('.slide-count-wrap').find('.current');
		  $el.text(currentSlide + 1);
		}
	};


	//POPUP-INLINE
	$('.default-gallery__link').magnificPopup({
		type: 'image',
		gallery:{
		    enabled:true
		},
		removalDelay: 500,
		closeBtnInside: true,
		fixedContentPos: false,
		callbacks: {
			open: function(){
				$('body').addClass('noscroll');
		    },
		    close: function() {
                 $('body').removeClass('noscroll');
            }
		},

		//midClick: true,
	});


	//SEARCH FOCUS
	$('body').on('focus','.search-form__input', function(){
		$(this).parents('.search-form').addClass('search-form--focus');
	});
	$('body').on('focusout','.search-form__input', function(){
		$(this).parents('.search-form').removeClass('search-form--focus');
	});
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions


// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 14px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="about.html">О нас</a></li> \
		<li><a href="index.html">Главная</a></li> \
		<li><a href="news.html">Новости</a></li> \
		<li><a href="news-in.html">Новости-внутр</a></li> \
		<li><a href="search.html">Поиск</a></li> \
		<li><a href="catalog.html">Каталог</a></li> \
	</ol> \
</div>');
