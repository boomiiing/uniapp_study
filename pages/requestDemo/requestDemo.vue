<template>
	<view class="contain">
		<view class="menu">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view class="box" v-for="(item,index) in picList" :key="item._id">
			<view class="pic">
				<image lazy-load :src="item.url" mode="widthFix" @click="onPreview(index)"></image>
			</view>
			<view class="text">
				<view class="content">{{item.content}}</view>
				<view class="author">————{{item.author}}</view>
			</view>
		</view>
		<view class="loadMore">
			<uni-load-more status="loading"></uni-load-more>
		</view>
		<view class="handle">
			<view class="refresh" @click="onRefresh">
				<uni-icons type="refresh" size="30"> </uni-icons>
			</view>
			<view class="gotop" @click="gotop">
				<uni-icons type="arrow-up" size="30"> </uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onReachBottom,
		onPullDownRefresh
	} from '@dcloudio/uni-app'
	const picList = ref([])
	let current = ref(1)
	let items = ['所有', '小猫', '小狗']
	const network = () => {
		const animalList = ['all', 'cat', 'dog']
		return uni.request({
			// url: 'https://api.thecatapi.com/v1/images/search',
			// url: 'https://tea.qingnian8.com/tools/taoShow',
			url: 'https://tea.qingnian8.com/tools/petShow',
			data: {
				size: 5,
				type: animalList[current.value]
			}
		})
	}

	const getCats = () => {
		uni.showNavigationBarLoading()
		network().then(res => {
			console.log(res.data)
			picList.value = [...picList.value, ...res.data.data]
			console.log(picList.value)
			uni.hideNavigationBarLoading()
		})
	}
	const onPreview = (index) => {
		uni.previewImage({
			current: index,
			urls: picList.value.map(ele => ele.url)
		})
	}
	const gotop = () => {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 100
		})
	}
	const onRefresh = () => {
		uni.startPullDownRefresh()
	}
	const onClickItem = (e) => {
		console.log(e.currentIndex)
		current.value = e.currentIndex
		picList.value = []
		getCats()
	}
	onReachBottom(() => {
		getCats()
	})
	onPullDownRefresh(() => {
		picList.value = []
		current.value = 0
		getCats()
	})
	onMounted(() => {
		getCats()
	})
</script>

<style lang="scss" scoped>
	.contain {
		padding:0 50rpx;
		.menu{
			margin: 20rpx 0;
		}
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

				.author {
					color: #ccc;
					text-align: right;
				}
			}


		}

		.loadMore {
			padding-bottom: calc(env(safe-area-inset-bottom) + 50rpx);
		}

		.handle {
			position: fixed;
			bottom: 200rpx;
			right: 20rpx;

			.refresh,
			.gotop {
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