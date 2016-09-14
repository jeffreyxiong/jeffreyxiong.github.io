var architecture = "img/gallery/architecture/"
var nature = "img/gallery/nature/"
var oddsEnds = "img/gallery/oddsends/"
var people = "img/gallery/people/"

$.ajax({
    url : architecture,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g)$/) ) { 
                $(".grid").append( "<img src='"+ architecture + val +"' class='grid-item architecture'>" );
            } 
        });
    }
});





$(function () {

	// initialize grid
	var $grid = $('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'masonry',
		masonry: {
			columnWidth: 400
		}
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

