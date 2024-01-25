export function initSliders(frtSliderCl, scdSliderCl, trdSliderCl) {
	if (document.querySelector(frtSliderCl)) {
		new Swiper(frtSliderCl, {
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
				// dynamicBullets: true,
			},

			// Включение, отключение свайпа, перетаскивания
			simulateTouch: true,
			// Чувствительность свайпа
			// touchRatio: 1,
			// Угол срабатывания свайпа перетаскивания
			// touchAngle: 45,
			// Курсор перетаскивания
			grabCursor: true,

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
			mousewheel: {
				// Чувствительность колеса мыши
				sensitivity: 1,
				// класс обьекта на котором будет срабатывать прокрутка мышью
				// если много слайдеров, стоит отключать
				eventsTarget: frtSliderCl,
			},

			// !Количество слайдов для показа
			slidesPerView: 3,

			// Отключение функционала
			// Если слайдов меньше чем нужно
			watchOverflow: true,

			// ! Отступ между слайдами
			spaceBetween: 23,

			// Активный слайд по центру
			// centeredSlides: true,

			// Бесконечный слайдер
			// Не работает со скролом, не работает с мультирядностью
			loop: true,

			// Автопрокрутка
			// autoplay : {
			// 	delay: 1000,
			// 	stopOnLastSlide: true,
			// Отключать после ручного переключения
			// 	disableOnInteraction: false
			// }

			// Скорость
			// speed: 300,

			// Адаптив
			// Ширина екрана
			// По принципу mobile-first

			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
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
		})
	}
	if (document.querySelector(scdSliderCl)) {
		const swiperArrival = new Swiper(scdSliderCl, {
			// Стрелки
			// Navigation arrows

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			// Буллеты, прогрессбар, текущее положение
			// pagination: {
			// el: ".swiper-pagination",
			// type: 'bullets',
			// переключение по клику
			// clickable: true,
			// Динамические буллеты
			// dynamicBullets: true,
			// },
			// Включение, отключение свайпа, перетаскивания
			simulateTouch: true,
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
			mousewheel: {
				// Чувствительность колеса мыши
				sensitivity: 1,
				// класс обьекта на котором будет срабатывать прокрутка мышью
				// если много слайдеров, стоит отключать
				eventsTarget: scdSliderCl,
			},
			// !Количество слайдов для показа
			slidesPerView: 4,
			// Отключение функционала
			// Если слайдов меньше чем нужно
			watchOverflow: true,
			// ! Отступ между слайдами
			spaceBetween: 38,
			// Активный слайд по центру
			// centeredSlides: true,
			// Бесконечный слайдер
			// Не работает со скролом, не работает с мультирядностью
			loop: true,
			// Автопрокрутка
			// autoplay : {
			// 	delay: 1000,
			// 	stopOnLastSlide: true,
			// Отключать после ручного переключения
			// 	disableOnInteraction: false
			// }
			// Скорость
			// speed: 300,
			// Адаптив
			// Ширина екрана
			// По принципу mobile-first
			breakpoints: {
				992: {
					slidesPerView: 4,
					spaceBetween: 38,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
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
		})
	}
	if (document.querySelector(trdSliderCl)) {
		const swiperArrival = new Swiper(trdSliderCl, {
			// Стрелки
			// Navigation arrows

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			// Буллеты, прогрессбар, текущее положение
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				// переключение по клику
				clickable: true,
				// Динамические буллеты
				// dynamicBullets: true,
			},
			// Включение, отключение свайпа, перетаскивания
			simulateTouch: true,
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
			// eventsTarget: trdSliderCl,
			// },
			// !Количество слайдов для показа
			slidesPerView: 1,
			// Отключение функционала
			// Если слайдов меньше чем нужно
			watchOverflow: true,
			// ! Отступ между слайдами
			// spaceBetween: 38,
			// Активный слайд по центру
			// centeredSlides: true,
			// Бесконечный слайдер
			// Не работает со скролом, не работает с мультирядностью
			loop: true,
			// Автопрокрутка
			autoplay: {
				delay: 5000,
				stopOnLastSlide: true,
				// Отключать после ручного переключения
				disableOnInteraction: false,
			},
			// Скорость
			speed: 1000,
			// Адаптив
			// Ширина екрана
			// По принципу mobile-first
			// breakpoints: {
			// 	992: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 38,
			// 	},
			// 	768: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 25,
			// 	},
			// 	480: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 15,
			// 	},
			// 	320: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 15,
			// 	},
			// },
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
		})
	}
}

