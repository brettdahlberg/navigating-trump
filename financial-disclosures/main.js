$(document).ready(function () {
	$(".dropdown").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");

		if (filter === "reset") {
			console.log("hello world");
			$("div").removeClass("active");

		} else {
			var button = $(this);
			var filter = button.data("filter");
			$("." + filter).toggleClass("active");
		}
	});

	$(".item").on("click", function (e) {

		console.log("clicked");
		var item = $(this);
		if (item.hasClass("turn")) {
			item.removeClass("turn");
		} else {
			item.addClass("turn");
		}
	});
});
