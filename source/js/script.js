'use strict';

(() => {
	$("#phone").mask("+7 (999) 999 99-99", {
		placeholder: "+7(___) ___ __-__"
	});


	$("#form").validate({
		rules: {
			user_name: {
				required: true,
			},
			user_email: {
				required: true,
			},
			user_phone: {
				required: true,
			},
			user_checkbox: {
				required: true,
			}
		},
		messages: {
			user_name: {
				required: "Заполните поле",
			},
			user_email: {
				required: "Заполните поле",
			},
			user_phone: {
				required: "Заполните поле",
			},
			user_checkbox: {
				required: "Заполните поле",
			},
		},
		errorClass   : "error-message",
        errorElement : "p",
	});


	$(".mobile-burger").click(function() {
		$(".modal--menu").addClass("active");
	});
	
	$(".overlay").click(function() {
		$(".modal--menu").removeClass("active");
		$(".modal--request").removeClass("active");
	});

	$(".mobile-menu__link").click(function() {
		$(".modal--menu").removeClass("active");
	});

	$(".footer__mobile-button").click(function() {
		$(".modal--request").addClass("active");
	});


	document.addEventListener('keydown', (e) => {
		if (e.keyCode === 27) {
			$(".modal--menu").removeClass("active");
			$(".modal--request").removeClass("active");
		}
	});

})();
