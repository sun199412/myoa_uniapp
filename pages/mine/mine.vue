<template>
	<view class="mine">
		<view class="header">
			<view class="pd"></view>
			<view class="header-info">
				<image src="../../static/image/user_logo.jpg" mode="" class="header-user-logo"></image>
				<view class="header-user">
					<view class="header-name">admin</view>
					<view class="header-company">蒙阴县城投建设发展集团有限公司</view>
				</view>
			</view>
			<view class="header-tip"></view>
		</view>
		<scroll-view class="content" :scroll-y="true">
			<view class="list">
				<view class="list-item">
					<view class="list-left">
						<icon type="" class="iconfont icongeren left-icon"></icon>
						<text>个人中心</text>
					</view>
					<view class="list-right">
						<icon type="" class="iconfont icondayuhao right-icon"></icon>
					</view>
				</view>
				<view class="list-item">
					<view class="list-left">
						<icon type="" class="iconfont icongeren left-icon"></icon>
						<text>个人中心</text>
					</view>
					<view class="list-right">
						<icon type="" class="iconfont icondayuhao right-icon"></icon>
					</view>
				</view>
				<view class="list-item">
					<view class="list-left">
						<icon type="" class="iconfont icongeren left-icon"></icon>
						<text>个人中心</text>
					</view>
					<view class="list-right">
						<icon type="" class="iconfont icondayuhao right-icon"></icon>
					</view>
				</view>
				<view class="list-item">
					<view class="list-left">
						<icon type="" class="iconfont icongeren left-icon"></icon>
						<text>个人中心</text>
					</view>
					<view class="list-right">
						<icon type="" class="iconfont icondayuhao right-icon"></icon>
					</view>
				</view>
				<view class="list-item">
					<view class="list-left">
						<icon type="" class="iconfont icongeren left-icon"></icon>
						<text>个人中心</text>
					</view>
					<view class="list-right">
						<icon type="" class="iconfont icondayuhao right-icon"></icon>
					</view>
				</view>
				<view class="list-item">
					<view class="list-left">
						<icon type="" class="iconfont icongeren left-icon"></icon>
						<text>个人中心</text>
					</view>
					<view class="list-right">
						<icon type="" class="iconfont icondayuhao right-icon"></icon>
					</view>
				</view>
				<view class="list-item">
					<view class="list-left">
						<icon type="" class="iconfont icongeren left-icon"></icon>
						<text>个人中心</text>
					</view>
					<view class="list-right">
						<icon type="" class="iconfont icondayuhao right-icon"></icon>
					</view>
				</view>
				<view class="list-item">
					<view class="list-left">
						<icon type="" class="iconfont icongeren left-icon"></icon>
						<text>个人中心</text>
					</view>
					<view class="list-right">
						<icon type="" class="iconfont icondayuhao right-icon"></icon>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
@import '../../common/index.scss';
.header {
	height: 300rpx;
	width: 100%;
	background: $theme-color;
	.pd {
		height: 50rpx;
	}
	.header-info {
		display: flex;
		flex-direction: row;
		height: 210rpx;
		align-items: center;
		.header-user-logo {
			width: 126rpx;
			height: 126rpx;
			border-radius: 50%;
			margin:0 42rpx 0 46rpx;
			border: 4rpx solid #fff;
		}
		.header-user {
			color: #fff;
			.header-name {
				font-size: 32rpx;
			}
			.header-company {
				font-size: 24rpx;
			}
		}
	}
	.header-tip {
		wdith: 100%;
		height: 40rpx;
		border-top-left-radius: 50rpx;
		border-top-right-radius: 50rpx;
		background: #fff;
	}
}
.content {
	padding: 0 40rpx;
	width: 100%;
	box-sizing: border-box;
	.list {
		.list-item{
			width: 100%;
			height: 100rpx;
			border-bottom: 2rpx solid #eee;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.list-left {
				.left-icon {
					font-size: 36rpx;
					color: #000;
				}
				text {
					display: inline-block;
					margin-left: 20rpx;
				}
			}
			.list-right {
				.right-icon {
					color: #a6a6a6;
				}
			}
		}
	}
}
</style>
