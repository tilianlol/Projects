$(function() {

	$('.tab__content:not(:first)').hide();

	$('.header__bottom__description__titles li').click(function(e) {
		e.preventDefault();

		$('.header__bottom__description__titles li').removeClass('tab--active');
		$('.tab__content').hide();
		$(this).addClass('tab--active');

		var content = $(this).find('a').attr('href');
		$(content).fadeIn();
	});

});