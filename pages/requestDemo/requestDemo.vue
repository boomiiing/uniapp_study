<template>
	<view class="contain">
		<view class="box" v-for="(item,index) in picList" :key="item._id">
			<view class="pic">
				<image lazy-load :src="item.url" mode="widthFix" @click="onPreview(index)"></image>
			</view>
			<view class="text">
				<view class="content">{{item.content}}</view>
				<view class="author">————{{item.author}}</view>
			</view>
		</view>
		<view class="handle">
			<view class="refresh" @click="onRefresh">刷新</view>
			<view class="gotop" @click="gotop">顶部</view>
		</view>
	</view>
</template>

<script setup>
	import {onReachBottom,onPullDownRefresh} from '@dcloudio/uni-app'
	const picList = ref([])
	const network = () => {
		return uni.request({
			// url: 'https://api.thecatapi.com/v1/images/search',
			// url: 'https://tea.qingnian8.com/tools/taoShow',
			url: 'https://tea.qingnian8.com/tools/petShow',
			data: {
				size: 5
			}
		})
	}

	const getCats = () => {
		uni.showNavigationBarLoading()
		network().then(res=>{
			console.log(res.data)
			picList.value = [...picList.value,...res.data.data]
			console.log(picList.value)
			uni.hideNavigationBarLoading()
		})
	}
	const onPreview = (index) =>{
		uni.previewImage({
			current:index,
			urls:picList.value.map(ele=>ele.url)
		})
	}
	const gotop = ()=>{
		uni.pageScrollTo({
			scrollTop:0,
			duration:100
		})
	}
	const onRefresh = ()=>{
		uni.startPullDownRefresh()
	}
	onReachBottom(()=>{
		getCats()
	})
	onPullDownRefresh(()=>{
		picList.value = []
		getCats()
	})
	onMounted(()=>{
			getCats()
			})
</script>

<style lang="scss" scoped>
	.contain {
		padding: 50rpx;

		.box {
			margin-bottom: 20rpx;
			box-shadow: 0 10rpx 40rpx #ccc;
			border-radius: 15rpx;
			overflow: hidden;

			.pic {
				image {
					width: 100%;
				}
			}

			.text {
				padding: 10rpx;
				.author{
					color:#ccc;
					text-align: right;
				}
			}
				

		}
		.handle{
			position: fixed;
			bottom:200rpx;
			right:20rpx;
			.refresh,.gotop{
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
				background-color: rgba(255, 255, 255, 0.9);
				text-align: center;
				line-height: 90rpx;
				margin-top: 10rpx;
			}
		}
	}
</style>