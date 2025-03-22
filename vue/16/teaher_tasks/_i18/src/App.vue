<template>
	<nav>
		<router-link to="/"> {{ $t('menu.home') }} </router-link> |
		<router-link to="/contacts"> {{ $t('menu.contacts') }} </router-link>
		<div>
			<span>Current language: {{ $i18n.locale }}</span>
			<button @click="changeLanguage('en')">EN</button>
			<button @click="changeLanguage('ua')">UA</button>
		</div>
	</nav>
	<router-view />
</template>
<script>
export default {
	created() {
		this.$i18n.locale = localStorage.getItem('lastLanguage') || 'en'
		if (localStorage.getItem('lastLanguage') !== this.$i18n.locale) {
			localStorage.setItem('lastLanguage', this.$i18n.locale)
			// window.dispatchEvent(new Event('storage'))
		}
		const self = this
		window.addEventListener('storage', function () {
			if (self.$i18n.locale !== localStorage.getItem('lastLanguage')) {
				self.$i18n.locale = localStorage.getItem('lastLanguage')
				self.$router.go()
			}
		})
	},

	methods: {
		changeLanguage(lang) {
			this.$i18n.locale = lang
			localStorage.setItem('lastLanguage', this.$i18n.locale)
		},
	},
}
</script>
