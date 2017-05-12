$(document).ready(function () {
	$(".dropdown").on("click", function (e) {
		e.preventDefault();
		console.log("button clicked");
		var button = $(this);
		var filter = button.data("filter");

		if (filter === "reset") {
			console.log("Hello, William.");
			$("div").removeClass("active");
			$("button").removeClass("active");

		} else {
			var button = $(this);
			$(this).toggleClass("active")
			var filter = button.data("filter");
			$("." + filter).toggleClass("active");
		}
	});

	$(".item").on("click", function (e) {

		console.log("photo clicked");
		var item = $(this);
		if (item.hasClass("turn")) {
			item.removeClass("turn");
		} else {
			item.addClass("turn");
		}
	});
});
