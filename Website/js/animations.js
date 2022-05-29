$(document).ready(function () {
	$(".bg-light").css(
		"width", "" + $(window).width() / 1.5 + "px"
	)
});

$(".nav-item").mouseover(function () {
	$(this).css({
		'transition': 'transform .2s',
		'transform': 'translateX(7px)'
	})
});
$(".nav-item").mouseleave(function () {
	$(this).css({
		'transition': 'transform .4s',
		'transform': 'translateX(0px)'
	})
});
