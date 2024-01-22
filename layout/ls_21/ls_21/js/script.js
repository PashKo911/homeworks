"use strict"

// КОД ЖЕНИ

/* <div class="reviews__container">
					 <div data-ajax="true" class="reviews__rating rating rating--set">
						<div class="rating__body _icon-stars">
							<div data-rating class="rating__active _icon-fill-stars"></div>
							<div class="rating__items">
								<input type="radio" class="rating__item" value="1" name="rating">
								<input type="radio" class="rating__item" value="2" name="rating">
								<input type="radio" class="rating__item" value="3" name="rating">
								<input type="radio" class="rating__item" value="4" name="rating">
								<input type="radio" class="rating__item" value="5" name="rating">
							</div>
						</div>
						<div class="rating__value">
							
						</div>
					</div>
				</div> }

				.rating {
	display: flex;
	align-items: flex-end;
	font-size: toRem(40);
	line-height: 0.75;
	transition: opacity 0.3s ease 0s;

	// .rating__sending
	&--sending {
		opacity: 0.2;
	}
	// .rating__body
	&__body {
		position: relative;
		display: flex;
		align-items: center;
		&::before {
			color: #edd146;
			font-size: toRem(24);
		}
	}
	// .rating__active
	&__active {
		position: absolute;
		width: 0%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;

		&::before {
			position: absolute;
			font-size: toRem(24);
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			color: #edd146;
		}

		.rating.rating--set & {
			cursor: pointer;
		}
	}
	// .rating__items
	&__items {
		display: flex;
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
	}
	// .rating__item
	&__item {
		flex: 0 0 20%;
		height: 100%;
		opacity: 0;

		.rating.rating--set & {
			cursor: pointer;
		}
	}
	// .rating__value
	&__value {
		font-size: 50%;
		line-height: 1;
		padding-left: toRem(10);
	}
}

// function initRatings(ratings) {
// 	let ratingActive, ratingValue

// 	for (let i = 0; i < ratings.length; i++) {
// 		const rating = ratings[i]
// 		console.log(rating)
// 		initRating(rating)
// 	}

// 	function initRating(rating) {
// 		initRatingVars(rating)
// 		setActiveRatingWidth()

// 		if (rating.classList.contains("rating--set")) {
// 			setRating(rating)
// 		}
// 	}

// 	function initRatingVars(rating) {
// 		ratingActive = rating.querySelector(".rating__active")
// 		ratingValue = rating.querySelector(".rating__value")
// 	}

// 	function setActiveRatingWidth(index = ratingValue.textContent) {
// 		console.log(ratingActive)
// 		const ratingActiveWidth = index / 0.05
// 		ratingActive.style.width = `${ratingActiveWidth}%`
// 	}

// 	function setRating(rating) {
// 		const ratingItems = rating.querySelectorAll(".rating__item")

// 		for (let i = 0; i < ratingItems.length; i++) {
// 			const ratingItem = ratingItems[i]
// 			ratingItem.addEventListener("mouseenter", function (e) {
// 				initRatingVars(rating)
// 				setActiveRatingWidth(ratingItem.value)
// 			})

// 			ratingItem.addEventListener("mouseleave", function (e) {
// 				setActiveRatingWidth()
// 			})

// 			ratingItem.addEventListener("click", function (e) {
// 				if (rating.dataset.ajax) {
// 					// отправка по нажатию на звездочку
	
// 					setRatingValue(ratingItem.value, rating)
// 				} else {
// 					// отправка по нажатию на кнопку отправить
// 					ratingValue.textContent = i + 1
// 					setActiveRatingWidth()
// 				}
// 			})
// 		}
// 	}

// // <div data-ajax="true" class="reviews__rating rating rating--set">

// 	async function setRatingValue(value, rating){
// 		console.log(rating);
// 		if(!rating.classList.contains('rating--sending')){
// 			rating.classList.add('rating--sending')
// 		}
// 		// отправка данных value на сервер

// 		let response = await fetch('rating.json', {
// 			method: 'GET',

// 			// body: JSON.stringify({
// 			// userRating: value;
// 			// }),
// 			// headers: {
// 			// 'content-type': 'application/json'
// 			// }
			
// 		})
// 		if(response.ok){
// 			const result = await response.json()

// 			// Получаем новый рейтинг
// 			const newRating = result.newRating

// 			// Вывод нового среднего результата
// 			ratingValue.textContent = newRating

// 			// Обновление активных звезд
// 			setActiveRatingWidth()

// 			rating.classList.remove('rating--sending')
// 		} else {
// 			alert('Error')

// 			rating.classList.remove('rating--sending')
// 		}
// 	}

// }




window.onload = () => {
	const icon = document.querySelector(".icon-menu")
	icon.addEventListener("click", function () {
		document.documentElement.classList.toggle("menu-open")
	})

	const ratings = document.querySelectorAll(".rating")

	if (ratings.length) {
		initRatings(ratings)
	}
}*/

function setRating(el, attribute, childClass) {
	const ratingValue = parseFloat(el.getAttribute(attribute)) || 0

	const childEl = el.querySelector(childClass)

	if (ratingValue) {
		if (childEl) {
			childEl.style.width = `${ratingValue / 0.05}%`
		}
	} else {
		el.style.opacity = 0.4
	}
}

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
			// dynamicBullets: true,
		},

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
		// keyboard: {
			// Включить / выключить
			// enabled: true,
			// Включить / выключить управление клавишамитолько когда слайдер в пределах вьюпорта
			// onlyInViewPort: true,
			// Включить / выключить управление клавишами PG UP PG DOWN
			// pageUpDown: true,
		// },

		// Управление колесом мыши
		// mousewheel: {
		// Чувствительность колеса мыши
		// sensitivity: 1,
		// класс обьекта на котором будет срабатывать прокрутка мышью
		// если много слайдеров, стоит отключать
		// eventsTarget: '.reviews__swiper'
		// },

		// Количество слайдов для показа
		slidesPerView: 3.1,

		// Отключение функционала
		// Если слайдов меньше чем нужно
		// watchOverflow: true,

		// Отступ между слайдами
		spaceBetween: 23,

		// Активный слайд по центру
		// centeredSlides: true,

		// Бесконечный слайдер
		// Не работает со скролом, не работает с мультирядностью
		// loop: true,

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

		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1.1,
		// 	},
		// 	480: {
		// 		slidesPerView: 2.1,
		// 	},
		// 	992: {
		// 		slidesPerView: 3.1,
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
		// a11y: {
		// 	// Включить / выключить
		// 	enabled: true,
		// 	// Сообщения
		// 	prevSlideMessage: "Previous slide",
		// 	nextSlideMessage: "Next slide",
		// 	firstSlideMessage: "This is the first slide",
		// 	firslastSlideMessage: "This is the last slide",
		// 	paginationBulletMessage: "Go to slide {{index}}",
		// 	notificationClass: "swiper-notification",
		// 	containerMessage: "",
		// 	containerRoleDescriptionMessage: "",
		// 	itemRoleDescriptionMessage: "",
		// 	// и тд
		// },
	})

	const icon = document.querySelector(".icon-menu")
	const ratingElements = document.querySelectorAll("[data-rate-value]")

	icon.addEventListener("click", function () {
		document.documentElement.classList.toggle("menu-open")
	})

	if (ratingElements.length) {
		ratingElements.forEach((el) => setRating(el, "data-rate-value", ".rate__active"))
	}
}
