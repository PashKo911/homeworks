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
}
.img {
	width: 100%;
	// @include adaptiveValue('width', 500, 360);
}
</style>
