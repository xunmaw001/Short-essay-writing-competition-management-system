<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"20rpx 0 0","background":"#fff","height":"auto"}'>
		<swiper :style='{"padding":"0px ","boxShadow":"inset 0px 0px 0px 0px #f4ead8","borderColor":"#fb9a40","outline":"0px solid #bbb","margin":"0px auto 24rpx","background":"#fff","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"440rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","position":"relative","background":"none","height":"100%"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"calc(100% - 40rpx)","margin":"0px auto","objectFit":"cover","display":"block","height":"100%"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 0px 0px","color":"#fff","borderRadius":"0 0 20rpx 20rpx","left":"20rpx","textAlign":"center","background":"rgba(0,0,0,.2)","bottom":"0px","display":"none","width":"calc(100% - 40rpx)","lineHeight":"80rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"0px","margin":"40rpx auto 40rpx","borderColor":"#edcfc9","outline":"0px solid #ccc","borderRadius":"40rpx","flexWrap":"wrap","background":"#fff","borderWidth":"0px","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"solid ","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"25%","padding":"20rpx 0","margin":"0","borderRadius":"100%","background":"none","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0px","margin":"0px auto","color":"#3c5928","borderRadius":"100%","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#3d8e59","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		
		<!-- 新闻资讯 -->
		<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"40rpx auto 0px","overflow":"hidden","borderRadius":"40rpx","background":"url(http://codegen.caihongy.cn/20230410/9f502c94c8b84bc0aea8e0b413fa7698.png) repeat-x 0% 100%,#e1f9eb","display":"flex","width":"calc(100% - 60rpx)","lineHeight":"url(http://codegen.caihongy.cn/20230407/f36a64fc22f34055a70a17f487c5f75e.png) no-repeat left top / auto 100%,url(http://codegen.caihongy.cn/20230407/208980f2d46b4e8da270f53f8def4c8d.png) no-repeat right top / auto 100%,#e22d2d","minWidth":"50%","justifyContent":"space-between","height":"86rpx"}'>
				<view :style='{"padding":"0 0 0 160rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px 0 0","color":"#3c5928","textAlign":"center","display":"inline-block","minWidth":"200rpx","borderRadius":"0px","background":"url() no-repeat right top / auto 100%","width":"calc(100% - 160rpx)","fontSize":"32rpx","lineHeight":"86rpx","fontWeight":"600","height":"86rpx"}'>公告栏</view>
				<text :style='{"padding":"0 20rpx 0 0","margin":"0px 0px 0 0","fontSize":"28rpx","lineHeight":"86rpx","color":"#3c5928","background":"none"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  
			
			
		  <!-- 样式4 -->
		  
		  <!-- 样式5 -->
		  
		  <!-- 样式6 -->
		  <view class="news-box3" :style='{"width":"100%","padding":"0px 24rpx","margin":"40rpx 0","height":"auto"}'>
			<view @tap="onNewsDetailTap(item.id)" v-for="(item,index) in news" :key="index" class="list-item" :style='{"padding":"8rpx 44rpx","margin":"0","borderColor":"#daf2e3","backgroundColor":"rgba(255,255,255,1)","borderRadius":"0","borderWidth":"0 0 2rpx 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			  <view :style='{"padding":"0","boxShadow":"4rpx 4rpx 4rpx rgba(153,153,153,.6)","margin":"-4rpx 0 0 0","backgroundColor":"#8ed1a7","top":"50%","borderRadius":"100%","left":"16rpx","width":"12rpx","position":"absolute","height":"12rpx"}' class="dian"></view>
			  <view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#3d8e59"}' class="title ">{{item.title}}</view>
			  <view class="cuIcon-right" :style='{"padding":"0","margin":"-36rpx 8rpx 0 0","top":"50%","color":"#3d8e59","width":"32rpx","lineHeight":"80rpx","fontSize":"32rpx","position":"absolute","right":"0"}'></view>
			</view>
		  </view>
		  
		  <!-- 样式7 -->
		  
		  <!-- 样式8 -->
		  
		  <!-- 样式9 -->
			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 新闻资讯 -->
		

		<!-- 商品推荐 -->
		<!-- 商品推荐 -->
		
		

		<!-- 商品列表 -->
																																																				<!-- 商品列表 -->
		
		

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
			// 公告栏
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list


		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
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
