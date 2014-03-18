function reset() {
	$("#header .w0").css("font-weight", "normal");
	$("#header .w0").css("color", "#666666");

	$("#nav ul li a").css("font-weight", "normal");
	$("#nav ul li a").css("color", "#666666");

	$("#cv").css("font-weight", "normal");
	$("#cv").css("color", "#666666");

	$("#contact").css("font-weight", "normal");
	$("#contact").css("color", "#666666");

	$(".w").hide();
	$(".other").hide();
}

$(document).ready(function() {
	var hash = window.location.hash.substr(1);

	var nameToId = {};
	reset();
	$("#nav ul li a").click(function() {
		reset();
		$("."+$(this).attr("class")).show();
		$("#nav ."+$(this).attr("class")).css("color", "#000000");
	});

	$("#header .w0").click(function() {
		reset();
		$("."+$(this).attr("class")).show();
		$("#nav ."+$(this).attr("class")).css("color", "#000000");
	});

	$("#nav .cv").click(function() {
		reset();
		$("."+$(this).attr("class")).show();
		$("#nav ."+$(this).attr("class")).css("color", "#000000");
	});

	$("#nav .contact").click(function() {
		reset();
		$("."+$(this).attr("class")).show();
		$("#nav ."+$(this).attr("class")).css("color", "#000000");
	});

	if (hash != "" && hash != "tor") {
		$("#nav ul li a").each(function() {
			var name = $(this).attr("href");
			var cl = $(this).attr("class");
			if (name == "#"+hash) {
				$("."+cl).show();
				$("#nav ."+cl).css("color", "#000000");
			}
		});
	} else {
		$(".w0").show();
		$("#header .w0").css("color", "#000000");
	}
});
