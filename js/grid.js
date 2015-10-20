$(function () {

	// initialize grid
	var $grid = $('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});


	$grid.isotope({ filter: '.nature' });
	$grid.isotope({ filter: '.people' });
	$grid.isotope({ filter: '.places' });
	$grid.isotope({ filter: '.misc' });
	$grid.isotope({ filter: '*' });


	$('#menu-links').on('click', '.filter-a', function(){
		var filterValue = $(this).attr('data-filter');
	});

});

