(function(){

	var image = $('.big--picture*');

	$('.header__bottom__images li').click(function() {
		$('.image--sm').removeClass('image--active');
		$(this).find('img').addClass('image--active');
		
		var content = $(this).find('img').data('image');
		image.attr('src', content);
	});

})();