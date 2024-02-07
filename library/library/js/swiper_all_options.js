"use strict"

{/* <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
	<link rel="stylesheet" href="css/style.css">

	<script type="module" src="js/script.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
	<title>HW_21</title>
</head> */}


window.onload = () => {
	const swiper = new Swiper(".reviews__swiper", {
		// Стрелки
		// Navigation arrows
		// navigation: {
		// 	nextEl: ".swiper-button-next",
		// 	prevEl: ".swiper-button-prev",
		// },

		// Буллеты, прогрессбар, текущее положение
		pagination: {
			el: ".swiper-pagination",
			// type: 'bullets',
			// переключение по клику
			clickable: true,
			// Динамические буллеты
			dynamicBullets: true,

			// Кастомные буллеты
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + "</span>"
			// },
			// type: 'progressbar',
		},

		// Скроллбар
		// scrollbar: {
		// <div class="swiper-scrollbar"></div>
		// 	el: 'swiper-scrollbar',
		// Возможность перетаскивать скроллбар
		// 	draggable: true,
		// },

		// Включение, отключение свайпа, перетаскивания
		// simulateTouch: true,
		// Чувствительность свайпа
		// touchRatio: 1,
		// Угол срабатывания свайпа перетаскивания
		// touchAngle: 45,
		// Курсор перетаскивания
		// grabCursor: true,

		// Переключение при клике на слайд
		// slideToClickedSlide: true,

		// Управление клавиатурой
		keyboard: {
			// Включить / выключить
			enabled: true,
			// Включить / выключить управление клавишамитолько когда слайдер в пределах вьюпорта
			onlyInViewPort: true,
			// Включить / выключить управление клавишами PG UP PG DOWN
			pageUpDown: true,
		},

		// Управление колесом мыши
		// mousewheel: {
		// Чувствительность колеса мыши
		// sensitivity: 1,
		// класс обьекта на котором будет срабатывать прокрутка мышью
		// если много слайдеров, стоит отключать
		// eventsTarget: '.reviews__swiper'
		// },

		// Автовысота
		// autoHeight: true,

		// Количество слайдов для показа
		slidesPerView: 3.1,

		// Отключение функционала
		// Если слайдов меньше чем нужно
		// watchOverflow: true,

		// Отступ между слайдами
		spaceBetween: 23,

		// Количество пролистываемых слайдов
		// slidesPerGroup: 1,

		// Активный слайд по центру
		// centeredSlides: true,

		// Стартовый слайд
		// Первый слайд === 0
		// initialSlide: 1,

		// Мультирядность
		// Отключить автовысоту
		// slidesPerColumn: 2,

		// Бесконечный слайдер
		// Не работает со скролом, не работает с мультирядностью
		// loop: true,

		// Количество дублирующих слайдов, что бы работал loop c автоматической шириной слада
		// loopedSlides: 3,

		// Свободный режим
		// freeMode: true,

		// Автопрокрутка
		// autoplay : {
		// 	delay: 1000,
		// 	stopOnLastSlide: true,
		// Отключать после ручного переключения
		// 	disableOnInteraction: false
		// }

		// Скорость
		// speed: 300,

		// Вертикальный слайдер
		// direction: vertical,

		// Эффекты переключения слайдов
		// Листание
		// effect: slide,

		// effect: fade,
		//Дополнение к fade
		// fadeEffect:{
		// Параллельная смена прозрачности
		// смена прозрачности
		// crossFade: true,
		// }

		// Переворот
		// effect: flip,

		//Дополнение к flip
		// flipEffect: {
		// Тень
		// slideShadows: true,

		// Показ только активного слайда
		// limitRotation: true,
		// },

		// 3d Куб
		// effect: 'cube',

		//Дополнение к cube
		// cubeEffect: {
		//  Настройки Тени
		// slideShadows: true,
		// shadow: true,
		// shadowOffset: 20,
		// shadowScale: 0.94,
		// },

		// Эффект потока
		// effect: "coverflow",

		//Дополнение к coverflow
		// coverflowEffect: {
		//  Угол
		// rotate: 20,
		// Наложение
		// stretch: 50,
		// Тень
		// slideShadows: true,
		// },

		// Адаптив
		// Ширина екрана
		// По принципу mobile-first

		breakpoints: {
			320: {
				slidesPerView: 1.1,
			},
			480: {
				slidesPerView: 2.1,
			},
			992: {
				slidesPerView: 3.1,
			},
		},

		// Отключить предзагрузку картинок
		// !!! ОЧЕНЬ СИЛЬНО ОПТИМИЗИРУЕТ ЗАГРУЗКУ САЙТА
		// <div class="swiper-slide__img">
		// 	!<img data-src="img/rating/floyd-miles.webp" src="img/ 1x1.png" class="swiper-lazy" alt="user picture">
		// 	!<div class="swiper-lazy-preloader"></div>
		// </div>

		// preloadImages: false,
		// Lazy Loading ленивая подгрузка картинок

		// lazy: {
		// Подгружать на старте подключения слайда
		// loadOnTransitionStart: false,
		// Подгружать предидущую и следующую картинку
		// loadPrevNext: false,
		// },
		// Слежка за видимыми слайдами
		// watchSlidesProgress: true,
		// Добавление класса видимым слайдам
		// watchSlidesVisibility: true,

		// ZOOM картинки
		//! <div class="swiper-slide__img  swiper-zoom-container">
		// 	<img data-src="img/rating/floyd-miles.webp" src="img/ 1x1.png" class="swiper-lazy" alt="user picture">
		// 	<div class="swiper-lazy-preloader"></div>
		// </div>

		// zoom: {
		// Максимальное увелечение
		// maxRatio: 5,
		// Минимальное увеличение
		// minRatio: 1,
		// },

		// !SWIPER PREVIEW T:37:01
		// https://www.youtube.com/watch?v=ddbxsrGPRY0

		// !МНОЖИСТВО СЛАЙДЕРОВ НА СТРАНИЦЕ T:38:13
		// https://www.youtube.com/watch?v=ddbxsrGPRY0

		// Доступность
		a11y: {
			// Включить / выключить
			enabled: true,
			// Сообщения
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
			firstSlideMessage: "This is the first slide",
			firslastSlideMessage: "This is the last slide",
			paginationBulletMessage: "Go to slide {{index}}",
			notificationClass: "swiper-notification",
			containerMessage: "",
			containerRoleDescriptionMessage: "",
			itemRoleDescriptionMessage: "",
			// и тд
		},
		
		// !Вывод прогрессбар и фракции одновременно T:48:38
		//  https://www.youtube.com/watch?v=ddbxsrGPRY0
	})

	// //! Запуск и остановка прокрутки слайдов при наведении мыши T:47:44
	//  https://www.youtube.com/watch?v=ddbxsrGPRY0

	// let sliderBlock = document.querySelector('.reviews__swiper')

	// sliderBlock.addEventListener('mouseenter', function (e){
	// 	swiper.params.autoplay.disableOnInteraction = false
	// 	swiper.params.autoplay.delay = 500
	// 	swiper.params.autoplay.start()
	// })

	// sliderBlock.addEventListener('mouseenter', function (e){
	// 	swiper.params.autoplay.stop()
	// })
}
