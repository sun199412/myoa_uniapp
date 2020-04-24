<template>
	<view class="message">
		<view class="header">
			<view class="pd"></view>
			<view class="status_bar"></view>
			<view class="header-title">早上好，周霞红</view>
			<view class="message-search">
				<image src="../../static/image/search.png" mode="" class="search-icon"></image>
				<input type="text" placeholder="搜索" class="search-input" />
			</view>
			<view class="message-tip">最新消息</view>
		</view>
		<scroll-view class="list" :scroll-y="true">
			<view class="list-item">
				<image class="list-item-icon" src="../../static/image/Internal_documents.png" mode=""></image>
				<view class="list-item-box">
					<view class="list-item-row">
						<view class="list-item-title">工作汇报</view>
						<view class="list-item-date">昨天</view>
					</view>
					<view class="list-item-row2">
						<view class="list-item-text">考情打卡：今天团队出勤率为100%慰问费违法</view>
						<view class="list-item-tip">
							<view class="total">12</view>
							<!-- <view class="tip"></view> -->
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<image class="list-item-icon" src="../../static/image/Internal_documents.png" mode=""></image>
				<view class="list-item-box">
					<view class="list-item-row">
						<view class="list-item-title">工作汇报</view>
						<view class="list-item-date">昨天</view>
					</view>
					<view class="list-item-row2">
						<view class="list-item-text">考情打卡：今天团队出勤率为100%慰问费违法</view>
						<view class="list-item-tip">
							<view class="tip"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<image class="list-item-icon" src="../../static/image/Internal_documents.png" mode=""></image>
				<view class="list-item-box">
					<view class="list-item-row">
						<view class="list-item-title">工作汇报</view>
						<view class="list-item-date">昨天</view>
					</view>
					<view class="list-item-row2">
						<view class="list-item-text">考情打卡：今天团队出勤率为100%慰问费违法</view>
						<view class="list-item-tip">
							<view class="tip"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<image class="list-item-icon" src="../../static/image/Internal_documents.png" mode=""></image>
				<view class="list-item-box">
					<view class="list-item-row">
						<view class="list-item-title">工作汇报</view>
						<view class="list-item-date">昨天</view>
					</view>
					<view class="list-item-row2">
						<view class="list-item-text">考情打卡：今天团队出勤率为100%慰问费违法</view>
						<view class="list-item-tip">
							<view class="tip"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<image class="list-item-icon" src="../../static/image/Internal_documents.png" mode=""></image>
				<view class="list-item-box">
					<view class="list-item-row">
						<view class="list-item-title">工作汇报</view>
						<view class="list-item-date">昨天</view>
					</view>
					<view class="list-item-row2">
						<view class="list-item-text">考情打卡：今天团队出勤率为100%慰问费违法</view>
						<view class="list-item-tip">
							<view class="tip"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<image class="list-item-icon" src="../../static/image/Internal_documents.png" mode=""></image>
				<view class="list-item-box">
					<view class="list-item-row">
						<view class="list-item-title">工作汇报</view>
						<view class="list-item-date">昨天</view>
					</view>
					<view class="list-item-row2">
						<view class="list-item-text">考情打卡：今天团队出勤率为100%慰问费违法</view>
						<view class="list-item-tip">
							<view class="tip"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<image class="list-item-icon" src="../../static/image/Internal_documents.png" mode=""></image>
				<view class="list-item-box">
					<view class="list-item-row">
						<view class="list-item-title">工作汇报</view>
						<view class="list-item-date">昨天</view>
					</view>
					<view class="list-item-row2">
						<view class="list-item-text">考情打卡：今天团队出勤率为100%慰问费违法</view>
						<view class="list-item-tip">
							<view class="tip"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<image class="list-item-icon" src="../../static/image/Internal_documents.png" mode=""></image>
				<view class="list-item-box">
					<view class="list-item-row">
						<view class="list-item-title">工作汇报</view>
						<view class="list-item-date">昨天</view>
					</view>
					<view class="list-item-row2">
						<view class="list-item-text">考情打卡：今天团队出勤率为100%慰问费违法</view>
						<view class="list-item-tip">
							<view class="tip"></view>
						</view>
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
@mixin box {
	padding:0 33.33rpx;
	box-sizing: border-box;
}
.header {
	width: 100%;
	height: 350rpx;
	background: $theme-color;
	/* #ifdef H5 */
	.pd {
		height: 50rpx;
	}
	/* #endif */
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.header-title {
		height: 114.58rpx;
		color: #fff;
		font-size: 41.67rpx;
		line-height: 114.58rpx;
		@include box;
	}
	.message-search {
		width: calc(100% - 66.66rpx);
		height: 83.33rpx;
		position: relative;
		background: rgba(255,255,255,0.2);
		border-radius: 8.33rpx;
		margin-left: 33.33rpx;
		.search-icon {
			width: 50rpx;
			height: 50rpx;
			position: absolute;
			left: 25rpx;
			top: 50%;
			margin-top: -25rpx;
		}
		.search-input {
			padding-left: 93.75rpx;
			box-sizing: border-box;
			height: 100%;
			.uni-input-placeholder {
				color: #fff;
			}
		}
	}
	.message-tip {
		height: 70.83rpx;
		background: #ccc;
		margin-top: 35.42rpx;
		@include box;
		border-top-left-radius: 50rpx;
		border-top-right-radius: 50rpx;
		background-color: #fff;
		line-height: 70.83rpx;
	}
}
.list {
	/deep/ uni-view {
		line-height: 1 !important;
	}
	.list-item {
		width: 100%;
		height: 150rpx;
		display: flex;
		flex-direction: row;
		.list-item-icon {
			width: 100rpx;
			height: 100rpx;
			margin: 25rpx 43.75rpx;
		}
		.list-item-box {
			flex: 1;
			margin-right: 25rpx;
			border-bottom: 2.08rpx solid #E3E3E3;
			display: flex;
			flex-direction: column;
			// justify-content: center;
			.list-item-row {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				/* #ifdef MP */
				margin: 10rpx 0;
				/* #endif */
				/* #ifdef H5 || APP-PLUS */
				margin: 26rpx 0;
				/* #endif */
				.list-item-title {
					font-size: 33.33rpx;
				}
				.list-item-date {
					font-size: 25rpx;
					color: rgba(0, 0, 0, 0.38);
				}
			}
			.list-item-row2 {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.list-item-text {
					font-size: 33.33rpx;
					width: 470rpx;
					font-size: 29.17rpx;
					color: rgba(0, 0, 0, 0.54);
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					display: inline-block;
					
				}
				.list-item-tip {
					// width: 12%;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					display: inline-block;
					.tip{
						width: 16.67rpx;
						height: 16.67rpx;
						background: $theme-color;
						border-radius: 50%;
					}
				}
				.total {
					height: 33.33rpx;
					min-width: 33.33rpx;
					background-color: $theme-color;
					padding: 8.5rpx;
					font-size: 25rpx;
					border-radius: 50%;
					color: #fff;
				}
			}
		}
	}
}
</style>
