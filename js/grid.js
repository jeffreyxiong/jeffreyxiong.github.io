$(function () {

	var categoryUrl = ["http://www.jeffreyxiong.me/img/gallery/nature/", "http://www.jeffreyxiong.me/img/gallery/architecture/", "http://www.jeffreyxiong.me/img/gallery/oddsends/", "http://www.jeffreyxiong.me/img/gallery/people/"];
	var categoryName = ["nature","architecture", "oddsends", "people"];
	var categoryMap = {"nature": 0, "architecture": 1, "oddsends": 2, "people": 3};

	var limit = 15;
	var rise = limit;

	var images = [];
	var categorized = [[], [], [], []];

	$.when(loadImageFromCategory(0), loadImageFromCategory(1), loadImageFromCategory(2), loadImageFromCategory(3)).done(function() {
		shuffle(images);
		for (var i = 0; i < limit; i++) {
			$(".grid").append(images[i]);
		}
	});

	// AJAX load image handler
	function loadImageFromCategory(i) {
		return $.ajax({
			url: categoryUrl[i],
			success: function(data) {
				$(data).find("a").attr("href", function(j, val) {
					// match jpg file type
		            if( val.match(/\.(jpe?g)$/) ) {
		            	// push html code to array
		            	var html = "<div class='grid-item " + categoryName[i] + "' style='background: url(" + categoryUrl[i] + val + ") no-repeat center center; background-size: cover;'>";
		            	images.push(html);
						categorized[i].push(html);
		            }
				});
			}
		});
	}

	// menu click handler
	$(".filter-menu-item").click(function(event) {
		// prevent default
		event.preventDefault();
		// stylize selected item
		// reset all
		$(".filter-menu-item").removeClass("filter-selected");
		click_cond = [0, 0, 0, 0, 0]

		// set current as clicked
		var i = $(this).index();
		click_cond[i] = click_cond[i] == 0 ? 1 : 0;

		if (click_cond[i]) {
			// add selected class
			$(this).addClass("filter-selected");
		}

		// filter photos
		// get filter value
		var cat = $(this).attr("data-filter");
		// load images
		if (cat === "all") {
			$("#load").removeClass("hidden");
			// load from all
			$(".grid-item").remove();
			for (var i = 0; i < limit; i++) {
				$(".grid").append(images[i]);
			}
		} else {
			// load from specific category
			// get index from filter value
			$("#load").addClass("hidden");
			var idx = categoryMap[cat]
			// load proper image
			$(".grid-item").remove();
			for (var i = 0; i < categorized[idx].length; i++) {
				$(".grid").append(categorized[idx][i]);
			}
		}

		return false;
	});

	// load image handler
	$("#load").click(function(event) {
		// prevent default
		event.preventDefault();
		var cap = rise + limit;

		if (rise + limit > images.length) {
			cap = images.length
		}

		if (rise === images.length) {
			return false;
		}

		for (var i = rise; i < cap; i++) {
			$(".grid").append(images[i]);
		}
		rise += limit;

		return false;
	});

	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}
});

