<!-- 
//// Document Ready Functions

$(document).ready(function(){

	//	PARALLAX SCROLL
	//	media check (disable parallax on mobile devices)
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
		var device = true
	}
	var media = window.matchMedia('(min-width: 720px)')
	if (media.matches || !device) {
		// cache window object
		$window = $(window);
		$('section[data-type="background"]').each(function(){
			// assign parallax object
			var $bg = $(this);
			// custom scroll
			$(window).scroll(function(){
				// scroll speed
				var y = -($window.scrollTop() / $bg.data('speed'));
				// background position
				var coords = '50%' + y + 'px'
				// move background
				$bg.css({backgroundPosition: coords});
			}); // end scroll
		}); // end parallax
	}

	//	MISCELLANEOUS 
	// 	device check (disable hover effect on touch-enabled devices)
	var touch = 'ontouchstart' in document.documentElement;
	if (touch) {
		$('.love-box').removeClass('hover')
		$('.caption').css({'opacity':'1'})
		$('.love-img').css({'opacity':'0.8'})
	}
});