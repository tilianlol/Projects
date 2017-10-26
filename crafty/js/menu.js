(function(){

	var navtoggle	= document.querySelector(".main-header__nav--deactive");
	var toggle		= document.querySelector(".nav__toggle");

	toggle.addEventListener("click", function(event) {
		toggle.classList.toggle("nav__toggle--deactive");
		navtoggle.classList.toggle("main-header__nav--deactive");
		console.log(toggle);
	});
})();