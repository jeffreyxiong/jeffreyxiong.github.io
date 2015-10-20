<!-- 
//// Document Ready Functions

$(document).ready(function(){
//	SMOOTH SCROLL
//	between in-page anchors
	$(function() {
	    $('a[href*=#]:not([href=#])').click(function() {
	    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      		var target = $(this.hash);
	      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html,body').animate({
	          		scrollTop: target.offset().top
	        		}, 1000);
	        	return false;
	      		}
	    	}
	  	});
	});

//	PARALLAX SCROLL
//	media check (disable parallax on mobile devices)
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
		var device = true;
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
				var y = -($window.scrollTop() / 4);
				// background position
				var coords = '50%' + y + 'px';
				// move background
				$bg.css({backgroundPosition: coords});
			}); // end scroll
		}); // end parallax
	}

//	MISCELLANEOUS 
// 	device check (disable hover effect on touch-enabled devices)
	var touch = 'ontouchstart' in document.documentElement;
	if (touch) {
		$('.love-box').removeClass('hover');
		$('.love-img').css({'opacity':'0.8'});
	}

// MENU ICON EXPANSION
// initial click condition
	var click = false;
	$('#menu-icon').click(function(){
		// expand on click
		if (!click){
			$('.expand').css({'display':'block'});
			click = true;
		}
		// hide on next click
		else {
			$('.expand').css({'display':'none'});
			click = false;
		}
	});
	// click away of menu
	$(':not(.expand)').click(function(){
		if (click){
			$('.expand').css({'display':'none'});
			click = false;
		}
	});
	// hide menu on window resize to greater than 720
	$(window).resize(function(){
		var w = $(window).width();
		if (w >= 720) {
			if ($(window).width() > 720) {
				$('.expand').css({'display':'none'});
				click = false;
			}
		}	
	});

// SCROLL FUNCTIONS
	$(window).scroll(function(){
		// scrollbar colors
		if ($(this).scrollTop() > 5) {
			$('nav').css({'background-color':'#2D3142'});
			// $('nav a').css({'color':'#49494B'});
			// $('.st0').css({'fill':'#5793B9'})
			// $('.st1').css({'fill':'#27536e'})
		} else {
			$('nav').css({'background-color':'#27536e'});
			$('nav a').css({'color':'#ffffff'});
			$('.st0').css({'fill':'#27536e'})
			$('.st1').css({'fill':'#ffffff'})
		}
		// link highlight logic
		if ($(this).scrollTop() >= 1167) {
        	$('.menu-item a[href="#about"]').removeClass('selected');
        	$('.menu-item a[href="#projects"]').addClass('selected');
    	} else if ($(this).scrollTop() >= 520) {
        	$('.menu-item a[href="#about"]').addClass('selected');
        	$('.menu-item a[href="#projects"]').removeClass('selected');
    	} else {
    		$('.menu-item a[href="#about"]').removeClass('selected');
    		$('.menu-item a[href="#projects"]').removeClass('selected');
    	}
	});

});

