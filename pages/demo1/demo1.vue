<template>
	<view>
		<swiper indicator-dots="true" circular="true" autoplay="true" interval="2000">
			<swiper-item><image src="../../static/logo.png"></image></swiper-item>
			<swiper-item>22222</swiper-item>
			<swiper-item>33333</swiper-item>
			<swiper-item>44444</swiper-item>
		</swiper>
		<navigator url="/pages/demo2/demo2">
			跳转至demo2
		</navigator>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">
	swiper{
		width: 50%;
		height: 300px;
		border:1px solid #ccc;
		image{
			width: 100%;
			height:100%
		}
	}

</style>
