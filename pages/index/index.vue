<template>
	<view class="index">
		<view class="nav">
			<view class="status_bar"></view>
			<view class="title">蒙阴县城投建设发展集团有限公司</view>
		</view>
		<view class="content">
			<view class="list" v-for="item in info" :key="item.id">
				<view class="list-title-box">
					<view class="list-line"></view>
					<view class="list-title">{{ item.title }}</view>
				</view>
				<view class="list-content">
					<view class="list-item" v-for="it in item.list" :key="it.id">
						<image :src="it.imgUrl" mode="" class="list-item-img"></image>
						<view class="list-item-text">{{ it.desc }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniList from "@/component/uni-list/uni-list.vue"
import uniListItem from "@/component/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				info: [
					{
						title: '办公服务',
						id: '33167927194053280',
						list: [
							{
								id: '26370569706791836',
								imgUrl: '../../static/image/c9.png',
								desc: '通讯录'
							}
						]
					},
					{
						title: '办公服务',
						id: '61424745599821870',
						list: [
							{
								id: '98436197674290700',
								imgUrl: '../../static/image/company_system.png',
								desc: '公司制度'
							},
							{
								id: '48111804634847520',
								imgUrl: '../../static/image/contract_management.png',
								desc: '合同管理'
							}
						]
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
@import '../../common/index.scss';
.index {
	.nav {
		height: 230.77rpx;
		width: 100%;
		line-height: 230.77rpx;
		border-bottom: 1px solid #e1e1e1;
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}
		.title {
			height: calc(100% - var(--status-bar-height));
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 36rpx;
		}
	}
	.content {
		padding: 0 27.78rpx;
		.list {
			padding-bottom: 52rpx;
			border-bottom: 1px solid #e1e1e1;
			.list-title-box {
				height: 97.22rpx;
				display: flex;
				align-items: center;
				.list-line {
					width: 6.25rpx;
					height: 27.78rpx;
					background-color: $theme-color;
					margin-right: 16.67rpx;
				}
				.list-title {
					font-size: 32rpx;
				}
			}
			.list-content {
				display: flex;
				flex-wrap: wrap;
				.list-item {
					margin: 0 36.1rpx 16.66rpx 36.1rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					.list-item-img {
						width: 100rpx;
						height: 100rpx;
					}
					.list-item-text {
						text-align: center;
					}
				}
			}
		}
	}
}
</style>
