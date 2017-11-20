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

(function(){

	var image = $('.big--picture*');

	$('.header__bottom__images li').click(function() {
		$('.image--sm').removeClass('image--active');
		$(this).find('img').addClass('image--active');
		
		var content = $(this).find('img').data('image');
		image.attr('src', content);
	});

})();

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

$(function() {

	var xhr = new XMLHttpRequest();
	var data = null;
	var iterator = 0;
	xhr.open("GET", "js/data/data.json", false);
	xhr.send();
	
	data = JSON.parse(xhr.responseText);

	console.log(data);

	function render(index) {
	  $('.slider__page').html(index+1 + '/' + data.length);
	  $('.big--picture').attr('src', data[index].img__bg);
	  $('.header__bottom__images li img').eq(0).attr('src', data[index].img__sm_1);
	  $('.header__bottom__images li img').eq(1).attr('src', data[index].img__sm_2);
	  $('.header__bottom__images li img').eq(2).attr('src', data[index].img__sm_3);
	  $('.header__bottom__images li img').eq(3).attr('src', data[index].img__sm_4);
	  $('.header__bottom__description .title--sm').html(data[index].title);
	  $('#tab--1').html(data[index].description);
	  $('#tab--2').html(data[index].feature);
	  $('#tab--3').html(data[index].dimension);
	  $('.price').html(data[index].price);
	}

	render(0);

	$('#left').click(function() {
		console.log(iterator);
		if(iterator > 0)
			iterator--;
		render(iterator);
	});
	$('#right').click(function() {
		console.log(iterator);
		if(iterator < data.length)
			iterator++;
		render(iterator);
	});

});