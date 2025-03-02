<template>
	<header class="header" :class="{ 'menu-open': isMenuOpen }">
		<div class="container">
			<div class="menu">
				<button type="button" class="icon" aria-label=" open / close menu" @click="isMenuOpen = !isMenuOpen">
					<span></span>
				</button>
				<nav class="nav">
					<ul class="list">
						<li class="item">
							<router-link class="link" :to="{ name: 'home' }" @click="onClick">Home</router-link>
						</li>
						<li class="item">
							<router-link class="link" :to="{ name: 'lessons' }" @click="onClick">Lessons</router-link>
						</li>
						<li class="item">
							<router-link class="link" :to="{ name: 'teachers' }" @click="onClick">Teachers</router-link>
						</li>
					</ul>
				</nav>
				<button class="auth" @click="onAuth">
					{{ authButtonTitle }}
				</button>
			</div>
		</div>
	</header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'HeaderNav',
	emits: ['onAuth'],
	data() {
		return {
			isMenuOpen: false,
		}
	},
	methods: {
		...mapActions('auth', ['logout']),
		onAuth() {
			this.isAuthenticated ? this.logout() : this.$router.push({ name: 'auth' })
		},
		onClick() {
			if (this.isMenuOpen) this.isMenuOpen = !this.isMenuOpen
		},
	},
	computed: {
		...mapGetters('auth', ['user', 'isAuthenticated']),
		authButtonTitle() {
			return this.isAuthenticated ? `${this.user.firstName} Logout` : 'Login'
		},
	},
}
</script>

<style lang="scss" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 50;
	background-color: var(--main-color);
	box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.2);
}
.container {
	padding-top: toRem(15);
	padding-bottom: toRem(15);

	@media (max-width: $mobile) {
		padding-top: toRem(5);
		padding-bottom: toRem(5);
	}
}
.menu {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	column-gap: toRem(30);
	row-gap: toRem(10);

	@media (max-width: $mobile) {
		flex-direction: row-reverse;
	}
}
.nav {
	display: flex;
	justify-content: flex-end;

	@media (max-width: $mobile) {
		position: fixed;
		width: 100%;
		height: 100%;
		right: -100%;
		top: 0;
		overflow: auto;
		padding-left: toRem(15);
		padding-right: toRem(15);
		padding-bottom: toRem(30);
		padding-top: toRem(90);
		background-color: #686060;
		transition: right 0.3s;
		display: flex;
		justify-content: center;

		.menu-open & {
			right: 0;
		}
	}
}
.list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: toRem(8);
	column-gap: toRem(40);

	@media (max-width: $mobile) {
		flex-direction: column;
	}
}
.item {
}
.link,
.auth {
	color: #fff;
	font-size: 1.375rem;
	font-weight: 500;
	transition: color 0.3s;

	@media (any-hover: hover) {
		&:hover {
			color: var(--light-text-hover);
		}
	}
	&.router-link-active {
		text-decoration: underline;
		color: var(--light-text-hover);
	}

	@media (max-width: $mobile) {
		padding: toRem(10) 0;
		font-size: toRem(24);
	}
}

.icon {
	display: none;

	@media (max-width: $mobile) {
		flex-shrink: 0;
		display: block;
		position: relative;
		width: toRem(44);
		height: toRem(44);
		z-index: 5;

		@media (any-hover: none) {
			cursor: default;
		}
		span,
		&::before,
		&::after {
			content: '';
			transition: all 0.3s ease 0s;
			right: toRem(7);
			position: absolute;
			width: toRem(30);
			height: toRem(2);
			background-color: white;
			border-radius: toRem(3);
			backface-visibility: hidden;
		}
		&::before {
			top: toRem(10);
		}
		&::after {
			bottom: toRem(10);
		}
		span {
			top: calc(50% - toRem(1));
		}
		.menu-open & {
			span {
				opacity: 0;
			}
			&::before,
			&::after {
			}
			&::before {
				backface-visibility: hidden;
				transform: rotate(45deg);
				transition: 0.3s;
				top: calc(50% - toRem(1));
			}
			&::after {
				backface-visibility: hidden;
				transform: rotate(-405deg);
				transition: 0.3s;
				bottom: calc(50% - toRem(1));
			}
		}
	}
}
</style>
