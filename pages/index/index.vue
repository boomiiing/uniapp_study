<template>
	<view class="content">
	<view class="box1" hover-class="hoverBox1" hover-stay-time="0"></view>
	<text selectable="true">textwenbenbi</text>
	<scroll-view scroll-y="true" scroll-x="true" class="scrollView">
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
		<view>assssssssssssss</view>
	</scroll-view>
	<view>
		<navigator url="/pages/demo1/demo1">
			跳转至demo1
		</navigator>
	</view>
	</view>
</template>

<script>

</script>

<style lang='scss'>
	.content{
		width: 100%;
		height: 100vh;
		border: 1px solid deeppink;
		.box1{
			width: 50%;
			height: 200px;
			background: #ccc;
			border: 2px solid #000;
		}
		.hoverBox1{
			background: deeppink;
			width: 100%;
		}
		.scrollView{
			width: 100%;
			height: 220px;
			border: 1px solid #ccc;
		}
		
	}
</style>
