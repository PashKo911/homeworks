"use strict"

// function getLengthEl(svgElement) {
// 	if (!svgElement) {
// 		console.error("SVG element not provided.")
// 		return
// 	}

// 	const circleElement = svgElement.querySelector("circle")
// 	if (!circleElement) {
// 		console.error("Circle element not found.")
// 		return
// 	}

// 	const totalLength = circleElement.getTotalLength()
// 	return { totalLength, circleElement }
// }

// function changeCounter(numberElement) {
// 	if (numberElement) {
// 		const valueAttribute = numberElement.getAttribute("some-value")
// 		const value = valueAttribute ? parseInt(valueAttribute) : 0
// 		const duration = numberElement.getAttribute("data-duration")
// 		const counterInterval = (duration * 1000) / value
// 		let counter = 0

// 		const intervalId = setInterval(() => {
// 			if (counter === value) clearInterval(intervalId)
// 			else {
// 				counter += 1
// 				numberElement.innerHTML = counter + "%"
// 			}
// 		}, counterInterval)

// 		return { value, duration }
// 	}
// }
// function setAnimationProperties(numberElement, svgElement) {
// 	const { totalLength, circleElement } = getLengthEl(svgElement)
// 	const { value, duration } = changeCounter(numberElement)

// 	const offsetValue = totalLength - (totalLength * value) / 100
// 	circleElement.style.setProperty("--custom-stroke-dashoffset", offsetValue)

// 	circleElement.style.animationDuration = duration + "s"
// }

// document.addEventListener("DOMContentLoaded", function () {
// 	const numberElements = document.querySelectorAll(".number")
// 	const svgElements = document.querySelectorAll(".circle")

// 	numberElements.forEach((numberElement, index) => {
// 		const svgElement = svgElements[index]
// 		setAnimationProperties(numberElement, svgElement)
// 	})
// })


//========================================================================================================================================================


"use strict"

function getLengthEl(svgElement) {
  if (!svgElement) {
    console.error("SVG element not provided.")
    return
  }

  const circleElement = svgElement.querySelector("circle")
  if (!circleElement) {
    console.error("Circle element not found.")
    return
  }

  const totalLength = circleElement.getTotalLength()
  return { totalLength, circleElement }
}

function changeCounter(numberElement) {
  if (numberElement) {
    const valueAttribute = numberElement.getAttribute("some-value")
    const value = valueAttribute ? parseInt(valueAttribute) : 0
    const duration = numberElement.getAttribute("data-duration")
    const counterInterval = (duration * 1000) / value
    let counter = 0

    const intervalId = setInterval(() => {
      if (counter === value) clearInterval(intervalId)
      else {
        counter += 1
        numberElement.innerHTML = counter + "%"
      }
    }, counterInterval)

    return { value, duration }
  }
}
function setAnimationProperties(numberElement, svgElement) {
  const { totalLength, circleElement } = getLengthEl(svgElement)
  const { value, duration } = changeCounter(numberElement)

  const offsetValue = totalLength - (totalLength * value) / 100
  circleElement.style.setProperty("--custom-stroke-dashoffset", offsetValue)

  circleElement.style.animationDuration = duration + "s"
  circleElement.classList.add("animate") 
}

document.addEventListener("DOMContentLoaded", function () {
  const numberElements = document.querySelectorAll(".number")
  const svgElements = document.querySelectorAll(".circle")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const numberElement = entry.target
      const index = Array.from(numberElements).indexOf(numberElement)
      const svgElement = svgElements[index]

      if (entry.isIntersecting) {
        setAnimationProperties(numberElement, svgElement)
      } else {
        svgElement.querySelector("circle").classList.remove("animate") // Remove class when out of viewport
      }
    })
  })

  numberElements.forEach((numberElement) => {
    observer.observe(numberElement)
  })
})
