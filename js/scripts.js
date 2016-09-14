// scripts

// document ready
$(function() {

	var menu_cond = 1;
	var navMenu = Snap("#nav-icon-svg");

	// fade in intro
	$(".intro-box").fadeIn(2000);
	// $(".intro-overlay").fadeIn(2000);

	// menu click
	navMenu.click(function() {
		// animate icon
		navMenu.select("rect[width='15']").animate({width: "25"}, 500);
		navMenu.select("rect[width='25']").animate({width: "15"}, 500);

		// toggle menu
		$("nav").fadeTo(500, menu_cond);

		menu_cond = menu_cond == 0 ? 1 : 0;
	});
});