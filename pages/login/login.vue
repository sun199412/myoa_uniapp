<template>
	<view class="login">
		<view class="titleBox">
			<image src="../../static/image/login_logo.png" class="login_logo" mode=""></image>
			<text class="login_text">蒙阴城投集团</text>
		</view>
		<view class="login_content">
			<form @submit="formSubmit" @reset="formReset">
				<input class="uni-input" name="userName" placeholder="请输入用户名" />
				<input class="uni-input pass" password name="passWord" placeholder="请输入密码" />
				<view class="pas-box">
					<label>
						<checkbox name="forgetPas" class="forgetPas"></checkbox>
						<text class="text">记住密码</text>
					</label>
				</view>
				<button form-type="submit" class="login-btn">登录</button>
			</form>
			<navigator class="face-login" url="../index/index">
				人脸识别登录
				<icon class="iconfont iconfanhui1 turn-face" type=""></icon>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rules: [
					{name: 'userName', type: 'required', errmsg: '请输入用户名'},
					{name: 'userName', type: 'user', errmsg: '请输入正确的用户名'},
					{name: 'passWord', type: 'required', errmsg: '请输入密码'},
					{name: 'passWord', type: 'pwd', errmsg: '请输入正确的密码'},
				]
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				const formdata = e.detail.value
				const valLoginRes = this.$validate.validate(formdata, this.rules)
				console.log(valLoginRes, '2222')
				if(!valLoginRes.isOk) {
					uni.showToast({
					    icon: 'none',
					    title: valLoginRes.errmsg
				    })
					return false
				}
				uni.switchTab({
					url: '/pages/index/index',
				})
			}
		}
	}
</script>

<style lang="scss">
@import '../../common/index.scss';
.login {
	position: fixed;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	.titleBox{
		display: flex;
		justify-content: center;
		align-items: center;
		.login_logo {
			width: 58.34rpx;
			height: 58.34rpx;
		}
		.login_text {
			font-weight: 800;
			font-size: 45.83rpx;
			margin-left: 12.5rpx;
		}
	}
	.login_content {
		width: 541.67rpx;
		margin: 164.58rpx auto 0 auto;
		.uni-input {
			height: 116.67rpx;
			border-bottom: 2.08rpx solid #e3e3e3;
		}
		.pas-box {
			height: 116.67rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			/* #ifdef APP-PLUS || H5 */
			.forgetPas {
				width: 29.17rpx;
				height: 29.17rpx;
				margin-right: 12.5rpx;
				/deep/ .uni-checkbox-wrapper {
					@extend .forgetPas;
					/deep/ .uni-checkbox-input {
						@extend .forgetPas;
						margin-right: 0;
						box-sizing: border-box;
					}
				}
			}
			/* #endif */
			/* #ifdef MP */
			.forgetPas {
				transform: scale(0.6);
			}
			/* #endif */
			.text {
				font-size: 29.17rpx;
				color: #000;
			}
		}
		.login-btn{
			padding: 0;
			background-color: $theme-color;
			color: #fff;
		}
		.face-login {
			text-align: center;
			font-size: 29.17rpx;
			color: $theme-color;
			margin-top: 54.17rpx;
			.turn-face {
				transform: rotate(180deg);
			}
		}
	}
}
</style>
