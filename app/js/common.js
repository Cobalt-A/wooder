$(function() {

	// Custom JS
	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'pagedim-black'],
		navbar: {
			title: '<span id="logo">W O O D E R</span>'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

});
