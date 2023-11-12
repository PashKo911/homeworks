"use strict"

function setZIndex(parentContainerSelector) {
	const parent = document.querySelector(parentContainerSelector)
	const children = Array.from(parent.children)

	for (let i = 0; i < children.length; i++) {
		children[i].style.zIndex = children.length - i
	}
}

function pagesFlipping(e, nextButtonClassName, switcher, markAttribute, pageSelector) {
	const currentEl = e.target
	const parent = currentEl.parentElement.parentElement.parentElement
	console.log(parent);

	if (currentEl.classList.contains(nextButtonClassName)) {

		const previousSibling = parent.previousElementSibling
		parent.classList.toggle(switcher)

		if (previousSibling) {
			const currentIndex = parseInt(parent.style.zIndex)
			const prevIndex = parseInt(previousSibling.style.zIndex)

			if (parent.hasAttribute(markAttribute)) {
				parent.style.zIndex = currentIndex - prevIndex
				parent.removeAttribute(markAttribute)

			} else{
				parent.style.zIndex = prevIndex + currentIndex
				parent.setAttribute(markAttribute, 1)
			}
		}
	}
}

window.onload = () => {
	const container = document.querySelector(".practice__book")
	setZIndex(".page__body")
	container.onclick = (e) => {
		pagesFlipping(e, "button__link", "transform-next", 'open', '.page__content')
	}
}
