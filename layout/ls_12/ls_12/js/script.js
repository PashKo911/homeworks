// class Game {
// 	constructor(animationClassName, gameFieldClassName) {
// 		this.animationClassName = animationClassName;
// 		this.gameFieldClassName = gameFieldClassName;
// 		this.isInsideGameField = false;
// 	}

// 	async getMousePosition() {
// 		return new Promise((resolve) => {
// 			this.gameField.addEventListener("mouseenter", () => {
// 				this.isInsideGameField = true;
// 				resolve(true);
// 			});

// 			this.gameField.addEventListener("mouseleave", () => {
// 				this.isInsideGameField = false;
// 				resolve(false);
// 			});
// 		});
// 	}

// 	animationMoving() {
// 		let prevX = 0;
// 		let prevY = 0;

// 		this.gameField.addEventListener("mousemove", (e) => {
// 			if (this.isInsideGameField) {
// 				const x = e.clientX - this.gameField.getBoundingClientRect().left - this.animation.offsetWidth / 2;
// 				const y = e.clientY - this.gameField.getBoundingClientRect().top - this.animation.offsetHeight / 2;

// 				const deltaX = x - prevX;
// 				const deltaY = y - prevY;

// 				if (Math.abs(deltaX) >= 5) {
// 					if (deltaX > 0) {
// 						this.animation.classList.remove('animation-up', 'animation-down', 'animation-left');
// 						this.animation.classList.add('animation-right');
// 					} else {
// 						this.animation.classList.remove('animation-up', 'animation-down', 'animation-right');
// 						this.animation.classList.add('animation-left');
// 					}
// 				}

// 				if (Math.abs(deltaY) >= 5) {
// 					if (deltaY > 0) {
// 						this.animation.classList.remove('animation-left', 'animation-right', 'animation-up');
// 						this.animation.classList.add('animation-down');
// 					} else {
// 						this.animation.classList.remove('animation-left', 'animation-right', 'animation-down');
// 						this.animation.classList.add('animation-up');
// 					}

// 					prevX = x;
// 					prevY = y;

// 					this.animation.style.transform = `translate(${x}px, ${y}px)`;
// 				}
// 			}
// 		});
// 	}

// 	render(containerSelector) {
// 		this.gameField = document.createElement("div")
// 		this.gameField.className = "game-field"

// 		this.animation = document.createElement("div")
// 		this.animation.className = "animation"

// 		this.gameField.append(this.animation)

// 		if (containerSelector) {
// 			this.gameBody = document.querySelector(containerSelector)
// 			this.gameBody.append(this.gameField)
// 		}

// 		this.gameBody.addEventListener("mousemove", this.animationMoving.bind(this));
// 	}
// }

// let game = new Game(".animation", ".game-field")

// window.onload = async () => {
// 	game.render(".game__container");
// 	const isInside = await game.getMousePosition();
// 	console.log(isInside);
// };

document.addEventListener("DOMContentLoaded", function () {
	const gameField = document.querySelector(".game-field")
	const animation = document.querySelector(".animation")
	let isInsideGameField = false
	let prevX = 0
	let prevY = 0

	gameField.addEventListener("mouseover", function () {
		isInsideGameField = true
	})

	gameField.addEventListener("mouseleave", function () {
		isInsideGameField = false
	})

	gameField.addEventListener("mousemove", function (e) {
		if (isInsideGameField) {
			const x = e.clientX - gameField.getBoundingClientRect().left - animation.offsetWidth / 2
			const y = e.clientY - gameField.getBoundingClientRect().top - animation.offsetHeight / 2

			const deltaX = x - prevX
			const deltaY = y - prevY

			if (Math.abs(deltaX) >= 5) {
				if (deltaX > 0) {
					animation.classList.remove("animation-up", "animation-down", "animation-left")
					animation.classList.add("animation-right")
				} else {
					animation.classList.remove("animation-up", "animation-down", "animation-right")
					animation.classList.add("animation-left")
				}
			}

			if (Math.abs(deltaY) >= 5) {
				if (deltaY > 0) {
					animation.classList.remove("animation-left", "animation-right", "animation-up")
					animation.classList.add("animation-down")
				} else {
					animation.classList.remove("animation-left", "animation-right", "animation-down")
					animation.classList.add("animation-up")
				}
			}

			prevX = x
			prevY = y

			animation.style.transform = `translate(${x}px, ${y}px)`
		}
	})
})

function getHoveredEl(element) {
	console.log(element.classList[0])

	let currentClassName = element.classList[0]
	element.nextElementSibling.style.visibility = "visible"

	if (currentClassName === "vertical_1") {
		document.querySelector(".horizontal_2").style.visibility = "visible"
	}

	if (currentClassName === "horizontal_3") {
		document.querySelector(".vertical_1").style.visibility = "hidden"
		const customAlert = document.getElementById("customAlert")
		customAlert.style.display = "flex"
		document.querySelector(".animation").style.visibility = "hidden"
	}

	if (currentClassName === "horizontal_2") {
		document.querySelector(".vertical_1").style.visibility = "hidden"
		document.querySelector(".horizontal_1").style.visibility = "hidden"
		document.querySelector(".horizontal_3").style.visibility = "hidden"
		document.querySelector("h2").style.visibility = "hidden"

		document.querySelector(".vertical_2").style.visibility = "visible"
	}

	if (currentClassName === "vertical_5") {
		document.querySelector(".horizontal_2").style.visibility = "hidden"
		const customAlert = document.getElementById("customAlert")
		customAlert.style.display = "flex"
		document.querySelector(".animation").style.visibility = "hidden"
	}

	if (currentClassName === "vertical_3") {
		document.querySelector(".vertical_5").style.visibility = "hidden"
		document.querySelector(".horizontal_2").style.visibility = "hidden"
		document.querySelector(".horizontal_4").style.visibility = "hidden"
		document.querySelector(".vertical_2").style.visibility = "hidden"

		document.querySelector(".horizontal_5").style.visibility = "visible"
	}

	if (currentClassName === "horizontal_7") {
		document.querySelector(".vertical_3").style.visibility = "hidden"
		const customAlert = document.getElementById("customAlert")
		customAlert.style.display = "flex"
		document.querySelector(".animation").style.visibility = "hidden"
	}

	if (currentClassName === "horizontal_5") {
		document.querySelector(".vertical_3").style.visibility = "hidden"
		document.querySelector(".horizontal_7").style.visibility = "hidden"
	}
}

function getWinner(element) {
	let currentClassName = element.classList[0]

	if (currentClassName === "finish") {
		document.querySelector(".vertical_4").style.visibility = "hidden"
		document.querySelector(".vertical_6").style.visibility = "hidden"
		document.querySelector(".horizontal_6").style.visibility = "hidden"
		document.querySelector(".horizontal_5").style.visibility = "hidden"
	}

	setTimeout(function () {
		document.querySelector(".image-container").style.visibility = "visible"
	}, 1500)
}

document.getElementById("showAlert").addEventListener("click", function () {
	const customAlert = document.getElementById("customAlert")
	customAlert.style.display = "flex"
})

document.getElementById("closeButton").addEventListener("click", function () {
	const customAlert = document.getElementById("customAlert")
	location.reload()
	customAlert.style.display = "none"
})

document.getElementById("okButton").addEventListener("click", function () {
	const customAlert = document.getElementById("customAlert")
	location.reload()
	customAlert.style.display = "none"
})

// function getHoveredEl(element) {
// 	console.log(element.classList[0]);
// 	element.style.visibility = "visible";
// 	element.nextElementSibling.style.visibility = "visible"
// }

function removeVisibility(element) {
	element.previousElementSibling.style.visibility = "hidden"
}

function removeClass(element) {}
// onmouseover="replaceField(this)" onmouseout="removeField(this)"

class Bubble {
	constructor(imgSrc, snowflakesNumber) {
		this.imgSrc = imgSrc
		this.snowflakesNumber = snowflakesNumber
	}

	getRandomNumber(min = 0, max = 100) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}

	showSnow(step = 0.2, maxTopPOsition = 100, minTopPosition = -10, minInterval = 10, maxInterval = 40) {
		for (const lake of this.snowContainer.children) {
			let topPosition = this.getRandomNumber(-30, -5)
			setInterval(() => {
				topPosition += step
				lake.style.bottom = topPosition + "%"
				if (topPosition >= maxTopPOsition) topPosition = minTopPosition
			}, this.getRandomNumber(minInterval, maxInterval))
		}
	}

	render(containerSelector, minLakeSize = 20, maxLakeSize = 50) {
		if (containerSelector) this.snowContainer = document.querySelector(containerSelector)

		for (let i = 0; i < this.snowflakesNumber; i++) {
			const lake = document.createElement("img")
			lake.setAttribute("src", this.imgSrc)

			const lakeSize = this.getRandomNumber(minLakeSize, maxLakeSize) + "px"
			lake.style.width = lakeSize
			lake.style.height = lakeSize
			lake.style.left = this.getRandomNumber() + "%"
			lake.className = "snow"

			this.snowContainer.append(lake)
		}
		this.showSnow()
	}
}

window.onload = function () {
	const bubble = new Bubble("./img/bubble.png", 10)
	bubble.render(".bubbles__container")
}
