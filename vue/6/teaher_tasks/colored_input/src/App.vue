<template>
	<header>
		<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
	</header>

	<main>
		<colored-input
			label-text="Заряд батареї"
			:level-status-values="energyStatusValues"
			v-model="chargeLevel" />
		<div>Введений заряд : {{ chargeLevel }}</div>
		<hr />
		<colored-input label-text="Вік працівника" :level-status-values="ageStatusValues" v-model="workerAge" />
		<div>{{ workerAge }}</div>
	</main>
</template>

<script>
import ColoredInput from './components/ColoredInput/index.vue'

export default {
	components: {
		ColoredInput,
	},
	data() {
		return {
			chargeLevel: 0,
			energyStatusValues: {
				warn: 40,
				ok: 50,
			},
			workerAge: 18,
			ageStatusValues: {
				warn: 25,
				ok: 30,
			},
		}
	},
}
</script>

<style scoped>
header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>
