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