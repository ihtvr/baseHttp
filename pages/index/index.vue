<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<button @click="login">Login</button>
		</view>
	</view>
</template>

<script>
	import {
		userLogin
	} from '../../http/userApi.js'
	export default {

		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			login() {
				uni.showLoading({
					title:'',
					mask:true
				})
				let info = {
					"mobileNumber": '4461105',
					"password": '123456',
					"os": 2,
				};
				userLogin(info).then(res => {
					if(res == -1){
						//todo
					}else{						
						//todo view status
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
