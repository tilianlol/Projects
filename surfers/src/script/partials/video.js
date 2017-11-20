(function(){

	$('.about__video__link').click(function(event) {
		event.preventDefault();
		console.log('click');

		$('.about__video__modal').addClass('about__video__modal--active');
	});

	$('.btn').click(function() {
		$('.about__video__modal').removeClass('about__video__modal--active');
	});

	$('.about__video__modal').click(function() {
		$(this).removeClass('about__video__modal--active');
	});

})();