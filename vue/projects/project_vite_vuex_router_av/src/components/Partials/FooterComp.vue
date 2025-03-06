<template>
	<footer class="footer">
		<div class="container">
			<h2>Виконавець: Коваленко Павло</h2>
			<a class="link" target="_blank" href="https://www.linkedin.com/in/pavlo-kovalenko-7999a5141/">
				Долучайтесь до Linkedin
			</a>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'FooterComp',
}
</script>

<style lang="scss" scoped>
.footer {
	background-color: var(--main-color);
	box-shadow: 0 -0.25rem 0.625rem rgba(0, 0, 0, 0.2);
	padding: 0.625rem 0;
}
.container {
	display: flex;
	flex-direction: column;
	gap: 0.3125rem;
	align-items: center;
	color: var(--light-text);
}
.link {
	text-decoration: underline;
}
</style>
