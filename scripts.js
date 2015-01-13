<!-- 
//// Document Ready Functions

$(document).ready(function(){

	//	PARALLAX SCROLL
	//	media check
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
		var device = true
	}
	var media = window.matchMedia("(min-width: 720px)")
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

});