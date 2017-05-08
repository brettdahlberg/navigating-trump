$(document).ready(function () {
	$(".dropdown").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");

		if (filter === "reset") {
			console.log("hello world");
			$(".dropdown").removeClass("active");

		} else {
			var button = $(this);
			var filter = button.data("filter");
			$("." + filter).toggleClass("active");
		}
	});
});
