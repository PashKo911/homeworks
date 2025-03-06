<template>
	<main-layout>
		<div class="container">
			<h1 class="title">Вітаємо!</h1>
			<h2 class="title">Сподіваюсь ви будете чемними, і обовʼязково щось купите</h2>
		</div>
		<template #footer>
			<div class="footer-owner">
				<h2 class="title">Власник: Баба Галя</h2>
				<div class="image">
					<img src="@/assets/img/galya.webp" alt="Owner Baba Galya" class="img" />
				</div>
			</div>
		</template>
	</main-layout>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
	text-align: center;
}

.footer-owner {
	display: flex;
	align-items: center;
	gap: toRem(30);
}
.title {
}
.image {
	width: 100%;
	max-width: toRem(100);
}
.img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
