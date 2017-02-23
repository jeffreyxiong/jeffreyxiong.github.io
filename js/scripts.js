// scripts

// document ready
$(function() {

	var menu_cond = 1;
	var click_cond = [1, 0, 0, 0, 0];
	var navMenu = Snap("#nav-icon-svg");

	// fade in intro
	$(".intro-box").fadeIn(2500);
	// $(".intro-overlay").fadeIn(2000);

	// menu click
	navMenu.click(function() {
		// animate icon
		navMenu.select("rect[width='15']").animate({width: "25"}, 500);
		navMenu.select("rect[width='25']").animate({width: "15"}, 500);

		// toggle menu
		if (menu_cond) {
			$("nav").removeClass("hidden");
			$("nav").fadeTo(500, menu_cond);
		} else {
			$("nav").fadeTo(500, menu_cond);
			setTimeout(function(){ 
				$("nav").addClass("hidden");
			}, 500);
		}

		menu_cond = menu_cond == 0 ? 1 : 0;
	});

	$(window).scroll(function() {

		if ($(window).scrollTop() > $("#header").outerHeight(true) + 30) {
			$(".filter-menu-wrap").addClass("filter-fixed");
			$(".filter-buffer").css({"display" : "block"});
			// $("#header > h1").css({"font-size": "32px"}, 500);
		} else {
			$(".filter-menu-wrap").removeClass("filter-fixed");
			$(".filter-buffer").css({"display" : "none"});
			// $("#header > h1").css({"font-size": "28px"}, 500);
		}
	});


});