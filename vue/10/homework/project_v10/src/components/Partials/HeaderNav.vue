<template>
	<header class="header">
		<div class="container">
			<nav class="nav">
				<ul class="list">
					<li class="item">
						<router-link class="link" :to="{ name: 'home' }">Home</router-link>
					</li>
					<li class="item">
						<router-link class="link" :to="{ name: 'drivers' }">drivers</router-link>
					</li>
					<li class="item">
						<router-link class="link" :to="{ name: 'buses' }">buses</router-link>
					</li>
					<li class="item">
						<router-link class="link" :to="{ name: 'assignment' }">assignment</router-link>
					</li>
					<li class="item">
						<router-link class="link" :to="{ name: 'contacts' }">contacts</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'HeaderNav',
}
</script>

<style lang="scss" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 50;
	background-color: #58c6c2;
	box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.2);
}
.container {
	padding-top: 0.9375rem;
	padding-bottom: 0.9375rem;
}

.nav {
	display: flex;
	justify-content: flex-end;
}
.list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: toRem(8);
	column-gap: toRem(40);
}
.item {
}
.link {
	color: #fff;
	font-size: 1.375rem;
	font-weight: 500;
	transition: color 0.3s;
	text-transform: capitalize;

	@media (any-hover: hover) {
		&:hover {
			color: #2c2c2c;
		}
	}
	&.router-link-active {
		text-decoration: underline;
		color: #2c2c2c;
	}
}
</style>
