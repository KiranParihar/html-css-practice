$(document).ready(function() {

	let nav = $('nav');

	// Mobile Navigation
	$('.nav-button').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-button').toggleClass('close-nav');
		nav.toggleClass('open');
	});

});