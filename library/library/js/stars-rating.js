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
	const ratings = document.querySelectorAll(".rating")

	if (ratings.length) {
		initRatings(ratings)
	}
}*/
