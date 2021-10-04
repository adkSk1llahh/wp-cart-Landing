'use strict';

(() => {
	$('.contact-modal-btn').on('click', () => $('.modal--question').addClass('active'));
	$('.header__menu').on('click', () => $('.modal--menu').addClass('active'));
	$('.menu-list__link').on('click', () => $('.modal--menu').removeClass('active'));
	$('.menu__close').on('click', () => $('.modal--menu').removeClass('active'));
	$('.faq-list__button').on('click', function () {
		if ($(this).next().hasClass('active')) {
			$(this).next().removeClass('active');
		} else {
			$('.faq-list__text').removeClass('active');
			$(this).next().addClass('active');
		}
	});
})();

(() => {
	const closeModal = () => $('.modal').removeClass('active');

	/**
	 * Закрыть модалки при клике на кнопку закрытия
	 */
	$(document).on('click', '.modal__close-btn', function (e) {
		e.preventDefault();
		if ($(this).is($('.modal__close-btn'))) closeModal();
	});

	/**
	 * Закрыть модалки при клике на кнопку закрытия
	 */
	$(document).on('click', '.modal__btn', function (e) {
		e.preventDefault();
		if ($(this).is($('.modal__btn'))) closeModal();
	});

	/**
	 * Закрыть модалки при клике на подложку или на кнопку закрытия
	 */
	$(document).on('click', '.backdrop', function () {
		if ($(this).is($('.backdrop'))) closeModal();
	});

	/**
	 * Закрыть модалки при нажатии на Esc
	 */
	$(document).on('keydown', (e) => {
		if (e.keyCode === 27) closeModal();
	});
})();

