$(document).ready(function () {
	$(".bg-light").css(
		"width", "" + $(window).width() / 1.5 + "px"
	);
	$("address").before('<hr>');
	$("address").before('<p><a href="#" class="hyperlink-top">Back to top</a></p>');
	$(".navbar").after('<span class="nav-line"></span>');
	nav_brand_pos();
});

var width;
$(document).ready(function(){
	$('h1').addClass('Section');
	$('hr').addClass('Section');
	$('h2').addClass('Section');
	$('h3').addClass('Section');
	$('.container').addClass('Section');
	$('h4').addClass('Section');
	$('h5').addClass('Section');
	$('p').addClass('Section');
	$('b').addClass('Section');
	$('p').addClass('vert-rule');
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
	nav_brand_pos();
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
function nav_brand_pos()
{
	var nav_center = $(".brand-position").width() / 2;
	var window_center = $(window).width() / 2;
	
	var position = window_center - nav_center;
	
	$('.brand-position').css({
		'left': ''+position+'px',
	});
	
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