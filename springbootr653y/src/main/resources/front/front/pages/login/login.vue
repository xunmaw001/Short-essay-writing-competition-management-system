<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"120rpx 40rpx 80rpx","background":"url(http://codegen.caihongy.cn/20230411/8618bc1c31c743f7810277b59089c976.jpg) no-repeat center top / 100% 100%,#fff","height":"100%"}'>
			<view :style='{"padding":"40rpx 80rpx","boxShadow":"0px 0px 0px #aaa","borderColor":"#f0bebb","borderRadius":"40rpx","background":"none","borderWidth":"0px","display":"block","width":"100%","borderStyle":"solid","height":"auto"}'>
				<image :style='{"margin":"0 auto","borderRadius":"8rpx","objectFit":"cover","top":"-320rpx","left":"0","display":"none","width":"100%","position":"absolute","opacity":".3","height":"auto"}' src="http://codegen.caihongy.cn/20221223/15e44917f9454ced9a9ebc4b2d40acc4.gif" mode="aspectFill"></image>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 20rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="username" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#b5eacb","color":"#333","borderRadius":"0px","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
				</view>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0 0 20rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="password" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#b5eacb","color":"#333","borderRadius":"0px","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<picker v-if="roleNum>1" :style='{"boxShadow":"0px 0px 0px #2c77cb","margin":"0 0 32rpx 0","borderColor":"#b5eacb","borderRadius":"0px","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","borderWidth":"2rpx","width":"100%","borderStyle":"solid","height":"auto"}' @change="optionsChange" :value="index" :range="options">
					<view class="uni-picker-type" :style='{"width":"100%","padding":"0 24rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#767676"}'>{{options[index]}}</view>
				</picker>
				<button v-if="loginType==1" class="btn-submit" @tap="onLoginTap" type="primary" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #ccc","margin":"20rpx auto 20rpx","borderColor":"#b5eacb","color":"#333","display":"block","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,247,234,1) 100%)","borderWidth":"2rpx","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>登录</button>
				<button v-if="loginType==2" class="btn-submit" @tap="onFaceLoginTap" type="primary" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #ccc","margin":"20rpx auto 20rpx","borderColor":"#b5eacb","color":"#333","display":"block","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,247,234,1) 100%)","borderWidth":"2rpx","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>人脸识别登录</button>
				<view class="links" :style='{"boxShadow":"0px 0px 0px #eee","padding":"0","margin":"40rpx 0 0","borderRadius":"0px","alignItems":"flex-start","flexWrap":"wrap","textAlign":"center","background":"none","display":"block","width":"100%","justifyContent":"center","height":"auto"}'>
					<view class="link-highlight" @tap="onRegisterTap('youke')" :style='{"border":"2rpx solid #ddd","padding":"20rpx","margin":"0px 20rpx 20rpx 0","color":"#333","borderRadius":"0px","textAlign":"center","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%)","display":"inline-block","width":"100%","fontSize":"28rpx","order":"2"}'>注册游客</view>
					<view class="link-highlight" @tap="onRegisterTap('xuesheng')" :style='{"border":"2rpx solid #ddd","padding":"20rpx","margin":"0px 20rpx 20rpx 0","color":"#333","borderRadius":"0px","textAlign":"center","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%)","display":"inline-block","width":"100%","fontSize":"28rpx","order":"2"}'>注册学生</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				username: '',
				password: '',
                loginType:1,
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型',
				],
                optionsValues: [
					'',
                    'youke',
                    'xuesheng',
				],
				index: 0,
				roleNum:0,
			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登录用户类型')
					return
				}
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
                uni.removeStorageSync("useridTag");
				uni.setStorageSync("token", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
                if(res.data.touxiang) {
                    uni.setStorageSync('headportrait', res.data.touxiang);
                } else if(res.data.headportrait) {
                    uni.setStorageSync('headportrait', res.data.headportrait);
                }
				// 保存用户id
				uni.setStorageSync("userid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("role", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
