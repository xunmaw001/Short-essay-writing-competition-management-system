(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{"27ae":function(e,t,r){"use strict";r.r(t);var i=r("55b4"),n=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"55b4":function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("96cf");var n=i(r("3b8d")),o=i(r("2971")),a={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[],iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=uni.getStorageSync("role"),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:r=e.sent,this.user=r.data,this.tableName=t,i=o.default.list(),this.menuList=i;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onShow:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.removeStorageSync("useridTag"),this.role=uni.getStorageSync("role"),t=uni.getStorageSync("nowTable"),e.next=5,this.$api.session(t);case 5:r=e.sent,this.user=r.data,this.tableName=t,i=o.default.list(),this.menuList=i;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{onPageTap:function(e){uni.setStorageSync("useridTag",1),uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e})}})}}};t.default=a},70491:function(e,t,r){"use strict";var i,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 120rpx",borderColor:"#21d5ae",flexWrap:"wrap",background:"#fff",borderWidth:"0px 0 0",display:"block",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-view",{staticClass:"header",class:{status:e.isH5Plus},style:{padding:"40rpx 40rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f7dcab",margin:"0px auto 20rpx",borderColor:"#e9be70",display:"flex",justifyContent:"space-between",borderRadius:"0",flexWrap:"wrap",background:"none",borderWidth:"0px 0px 0px 0px",width:"calc(100% - 0px)",position:"relative",borderStyle:"solid",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../user-info/user-info")}}},["fuzeren"==e.tableName?r("v-uni-view",{staticClass:"userinfo",style:{padding:"0",margin:"0",alignItems:"flex-start",flexWrap:"wrap",background:"none",display:"flex",width:"calc(100% - 0px)",position:"static",height:"auto",order:"2"}},[r("v-uni-view",{staticClass:"info",style:{padding:"36rpx 16rpx 60rpx 40rpx",margin:"0 auto",borderColor:"#86ce9f #e1f9eb",flexDirection:"column",display:"block",float:"left",justifyContent:"center",minHeight:"324rpx",borderRadius:"20rpx",background:"url(http://codegen.caihongy.cn/20230410/9f502c94c8b84bc0aea8e0b413fa7698.png) repeat-x 0% 100%,#f5fdf8",borderWidth:"8rpx 2rpx 0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 8rpx",borderColor:"#eecece",margin:"0 0 0px",color:"#369555",borderWidth:"0 0 0px",width:"90%",lineHeight:"60rpx",fontSize:"28rpx",borderStyle:"dashed",fontWeight:"600"}},[e._v(e._s(e.user.fuzerenzhanghao)),e.user.vip&&"是"==e.user.vip?r("v-uni-text",[e._v("(VIP)")]):e._e()],1)],1)],1):e._e(),"youke"==e.tableName?r("v-uni-view",{staticClass:"userinfo",style:{padding:"0",margin:"0",alignItems:"flex-start",flexWrap:"wrap",background:"none",display:"flex",width:"calc(100% - 0px)",position:"static",height:"auto",order:"2"}},[r("v-uni-image",{style:{padding:"0px",margin:"0px 0 20rpx",borderColor:"#1bd0a9",objectFit:"cover",textAlign:"center",right:"100rpx",borderRadius:"100%",top:"80rpx",background:"rgba(255,255,255,.6)",borderWidth:"0px",width:"120rpx",position:"absolute",borderStyle:"solid",height:"120rpx",zIndex:"999"},attrs:{src:e.user.touxiang?e.baseUrl+e.user.touxiang:"/static/gen/upload.png"}}),r("v-uni-view",{staticClass:"info",style:{padding:"36rpx 16rpx 60rpx 40rpx",margin:"0 auto",borderColor:"#86ce9f #e1f9eb",flexDirection:"column",display:"block",float:"left",justifyContent:"center",minHeight:"324rpx",borderRadius:"20rpx",background:"url(http://codegen.caihongy.cn/20230410/9f502c94c8b84bc0aea8e0b413fa7698.png) repeat-x 0% 100%,#f5fdf8",borderWidth:"8rpx 2rpx 0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 8rpx",borderColor:"#eecece",margin:"0 0 0px",color:"#369555",borderWidth:"0 0 0px",width:"90%",lineHeight:"60rpx",fontSize:"28rpx",borderStyle:"dashed",fontWeight:"600"}},[e._v(e._s(e.user.youkezhanghao)),e.user.vip&&"是"==e.user.vip?r("v-uni-text",[e._v("(VIP)")]):e._e()],1)],1)],1):e._e(),"xuesheng"==e.tableName?r("v-uni-view",{staticClass:"userinfo",style:{padding:"0",margin:"0",alignItems:"flex-start",flexWrap:"wrap",background:"none",display:"flex",width:"calc(100% - 0px)",position:"static",height:"auto",order:"2"}},[r("v-uni-image",{style:{padding:"0px",margin:"0px 0 20rpx",borderColor:"#1bd0a9",objectFit:"cover",textAlign:"center",right:"100rpx",borderRadius:"100%",top:"80rpx",background:"rgba(255,255,255,.6)",borderWidth:"0px",width:"120rpx",position:"absolute",borderStyle:"solid",height:"120rpx",zIndex:"999"},attrs:{src:e.user.touxiang?e.baseUrl+e.user.touxiang:"/static/gen/upload.png"}}),r("v-uni-view",{staticClass:"info",style:{padding:"36rpx 16rpx 60rpx 40rpx",margin:"0 auto",borderColor:"#86ce9f #e1f9eb",flexDirection:"column",display:"block",float:"left",justifyContent:"center",minHeight:"324rpx",borderRadius:"20rpx",background:"url(http://codegen.caihongy.cn/20230410/9f502c94c8b84bc0aea8e0b413fa7698.png) repeat-x 0% 100%,#f5fdf8",borderWidth:"8rpx 2rpx 0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 8rpx",borderColor:"#eecece",margin:"0 0 0px",color:"#369555",borderWidth:"0 0 0px",width:"90%",lineHeight:"60rpx",fontSize:"28rpx",borderStyle:"dashed",fontWeight:"600"}},[e._v(e._s(e.user.xueshengxuehao)),e.user.vip&&"是"==e.user.vip?r("v-uni-text",[e._v("(VIP)")]):e._e()],1)],1)],1):e._e(),"pingwei"==e.tableName?r("v-uni-view",{staticClass:"userinfo",style:{padding:"0",margin:"0",alignItems:"flex-start",flexWrap:"wrap",background:"none",display:"flex",width:"calc(100% - 0px)",position:"static",height:"auto",order:"2"}},[r("v-uni-view",{staticClass:"info",style:{padding:"36rpx 16rpx 60rpx 40rpx",margin:"0 auto",borderColor:"#86ce9f #e1f9eb",flexDirection:"column",display:"block",float:"left",justifyContent:"center",minHeight:"324rpx",borderRadius:"20rpx",background:"url(http://codegen.caihongy.cn/20230410/9f502c94c8b84bc0aea8e0b413fa7698.png) repeat-x 0% 100%,#f5fdf8",borderWidth:"8rpx 2rpx 0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 8rpx",borderColor:"#eecece",margin:"0 0 0px",color:"#369555",borderWidth:"0 0 0px",width:"90%",lineHeight:"60rpx",fontSize:"28rpx",borderStyle:"dashed",fontWeight:"600"}},[e._v(e._s(e.user.pingweizhanghao)),e.user.vip&&"是"==e.user.vip?r("v-uni-text",[e._v("(VIP)")]):e._e()],1)],1)],1):e._e(),r("v-uni-view",{staticClass:"setting",style:{padding:"20rpx 0 0",margin:"0px 0 0",borderColor:"#1bd0a9",alignItems:"flex-start",display:"flex",right:"80rpx",justifyContent:"center",top:"220rpx",background:"none",borderWidth:"0px",width:"160rpx",position:"absolute",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"cuIcon-settings",style:{border:"0",width:"80rpx",lineHeight:"80rpx",fontSize:"80rpx",color:"#369555",borderRadius:"0"}})],1)],1),r("v-uni-view",{staticClass:"list",style:{padding:"0px 24rpx 80rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 auto",borderColor:"#1bd0a9",display:"block",justifyContent:"space-between",overflow:"hidden",borderRadius:"0px",flexWrap:"wrap",background:"#fff",borderWidth:"0px 0px 0px 0px",width:"calc(100% - 48rpx)",borderStyle:"solid",height:"auto"}},[e._l(e.menuList,(function(t){return[e._l(t.backMenu,(function(i,n){return e.role==t.roleName?[e._l(i.child,(function(t,i){return["yifahuodingdan"!=t.tableName&&"yituikuandingdan"!=t.tableName&&"yiquxiaodingdan"!=t.tableName&&"weizhifudingdan"!=t.tableName&&"yizhifudingdan"!=t.tableName&&"yiwanchengdingdan"!=t.tableName&&"exampaper"!=t.tableName&&"examquestion"!=t.tableName?r("v-uni-view",{key:i+"_0",staticClass:"li",style:{padding:"0 40rpx 0px",borderColor:"#e1f9eb",margin:"0 0 20rpx",alignItems:"center",display:"flex",float:"left",borderRadius:"0px",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",width:"100%",lineHeight:"88rpx",borderStyle:"solid",height:"100rpx"},attrs:{"hover-class":"hover"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onPageTap("../"+t.tableName+"/list?userid="+e.user.id+"&menuJump="+t.menuJump)}}},[r("v-uni-view",{class:t.appFrontIcon,style:{width:"88rpx",lineHeight:"88rpx",fontSize:"56rpx",color:"#369555"}}),r("v-uni-view",{staticClass:"text",style:{padding:"0 8rpx",color:"#369555",flex:"1",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",fontWeight:"500"}},[e._v(e._s(t.menu))]),r("v-uni-view",{staticClass:"cuIcon-right",style:{width:"28rpx",lineHeight:"28rpx",fontSize:"32rpx",color:"#369555"}})],1):e._e()]}))]:e._e()}))]}))],2)],1)],1)},o=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}))},"8fb2":function(e,t,r){"use strict";var i=r("b635"),n=r.n(i);n.a},b635:function(e,t,r){var i=r("c636");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("89015e1c",i,!0,{sourceMap:!1,shadowMode:!1})},c636:function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-2db62b53]{height:calc(100vh - 94px);box-sizing:border-box}',""]),e.exports=t},d2c0:function(e,t,r){"use strict";r.r(t);var i=r("70491"),n=r("27ae");for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);r("8fb2");var a,s=r("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"2db62b53",null,!1,i["a"],a);t["default"]=d.exports}}]);