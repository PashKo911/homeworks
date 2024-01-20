"use strict"

// КОД ЖЕНИ
function initRatings(ratings) {
	let ratingActive, ratingValue

	for (let i = 0; i < ratings.length; i++) {
		const rating = ratings[i]
		console.log(rating)
		initRating(rating)
	}

	function initRating(rating) {
		initRatingVars(rating)
		setActiveRatingWidth()

		if (rating.classList.contains("rating--set")) {
			setRating(rating)
		}
	}

	function initRatingVars(rating) {
		ratingActive = rating.querySelector(".rating__active")
		ratingValue = rating.querySelector(".rating__value")
	}

	function setActiveRatingWidth(index = ratingValue.textContent) {
		console.log(ratingActive)
		const ratingActiveWidth = index / 0.05
		ratingActive.style.width = `${ratingActiveWidth}%`
	}

	function setRating(rating) {
		const ratingItems = rating.querySelectorAll(".rating__item")

		for (let i = 0; i < ratingItems.length; i++) {
			const ratingItem = ratingItems[i]
			ratingItem.addEventListener("mouseenter", function (e) {
				initRatingVars(rating)
				setActiveRatingWidth(ratingItem.value)
			})

			ratingItem.addEventListener("mouseleave", function (e) {
				setActiveRatingWidth()
			})

			ratingItem.addEventListener("click", function (e) {
				if (rating.dataset.ajax) {
					// отправка по нажатию на звездочку
	
					// setRatingValue(ratingItem.value, rating)
				} else {
					// отправка по нажатию на кнопку отправить
					ratingValue.textContent = i + 1
					setActiveRatingWidth()
				}
			})
		}
	}

// <div data-ajax="true" class="reviews__rating rating rating--set">

	async function setRatingValue(value, rating){
		console.log(rating);
		if(!rating.classList.contains('rating--sending')){
			rating.classList.add('rating--sending')
		}
		// отправка данных value на сервер

		let response = await fetch('rating.json', {
			method: 'GET',

			// body: JSON.stringify({
			// userRating: value;
			// }),
			// headers: {
			// 'content-type': 'application/json'
			// }
			
		})
		if(response.ok){
			const result = await response.json()

			// Получаем новый рейтинг
			const newRating = result.newRating

			// Вывод нового среднего результата
			ratingValue.textContent = newRating

			// Обновление активных звезд
			setActiveRatingWidth()

			rating.classList.remove('rating--sending')
		} else {
			alert('Error')

			rating.classList.remove('rating--sending')
		}
	}

}




window.onload = () => {
	const icon = document.querySelector(".icon-menu")
	icon.addEventListener("click", function () {
		document.documentElement.classList.toggle("menu-open")
	})

	const ratings = document.querySelectorAll(".rating")

	if (ratings.length) {
		initRatings(ratings)
	}
}
