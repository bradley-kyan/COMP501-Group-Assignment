$(document).ready(function () {
	$(".bg-light").css(
		"width", "" + $(window).width() / 1.5 + "px"
	);
	$(".navbar").after('<span class="nav-line"></span>');
});

var width;
$(document).ready(function(){
	$('h1').addClass('Section');
	$('h2').addClass('Section');
	$('h3').addClass('Section');
	$('h4').addClass('Section');
	$('h5').addClass('Section');
	$('p').addClass('Section');
	$('b').addClass('Section');
	$('address').addClass('Section');
	
	width = $(window).width();
	$('.Section').css({
		'transform': 'translateX('+width+'px)',
		'display': 'hidden'
	})
	check_section();
});

$(window).resize(function(){
	width = $(window).width();
});

$(window).scroll(function(){
	check_section();		
});
function check_section()
{
	$('.Section').each(function(){
		if ($(this).isInViewport()) {
			$(this).css({
			'display': 'block',
			'transition': 'transform 1s',
			'transform': 'translateX(0px)'
		})
		}
	})
}

$.fn.isInViewport = function() {
	var elementA = $(this).offset().top;
	var elementB = elementA + $(this).outerHeight();
	var viewportA = $(window).scrollTop();
	var viewportB = viewportA + $(window).height();
	return elementB > viewportA && elementA < viewportB;
};

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