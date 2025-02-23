<template>
	<div class="img-wrp">
		<img src="@/assets/img/taskimg.png" alt="" class="img" />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.img-wrp {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100svh - toRem(230));
}
.img {
	@include adaptiveValue('width', 1200, 345);
}
</style>
