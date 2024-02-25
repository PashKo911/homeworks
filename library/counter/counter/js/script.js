"use strict"

import { Counter } from "Counter.js"

// Ну типу універсальна функція для пошуку елементів, їх перевірки, запуску методу класу, ще буде тестуватись і дописуватись

window.onload = () => {
	// Ініціалізація анімованих лічильників
	const counter = new Counter()
	counter.counterInit()
}
