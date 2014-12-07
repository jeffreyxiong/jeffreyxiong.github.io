<!-- 
// Document Ready Functions

$(document).ready(function(){

//	 PARALLAX SCROLL 	

	// Cache window object
	$window = $(window);
	$('div[data-type="background"]').each(function(){
		// Assign parallax object
		var $bg = $(this);
		// Custom scroll
		$(window).scroll(function(){
			// Scroll speed
			var y = -($window.scrollTop() / $bg.data('speed'));
			// Background position
			var coords = '50%' + y + 'px'
			// Move background
			$bg.css({backgroundPosition: coords});
		}); // end scroll
	}); // end parallax

});


-->