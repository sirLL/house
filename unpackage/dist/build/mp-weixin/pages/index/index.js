"use strict";const n=require("../../common/vendor.js"),i=require("../../utils/urlUtil.js"),a=require("../../utils/cache.js"),t=require("../../common/assets.js");require("../../utils/request.js");const r={components:{Head:()=>"../../components/Head/Head.js",Search:()=>"../../components/Search/Search.js"},data:()=>({imageBannerData:[],videoBannerData:[],recommendBuildingData:[],wx:{}}),onShareAppMessage(e){return this.$shareIndex()},onShow(){this.wx=n.wx$1.getMenuButtonBoundingClientRect()},onLoad(){this.fetchBanner()},methods:{getImageUrl:e=>i.urlUtil.getImgUrlNotSize(e),isVideoBanner:e=>i.urlUtil.isVideo(e),onBannerClick(a){a&&("1"==a.handle_type?a.web_url&&""!=a.web_url&&n.index.navigateTo({url:"/pages/web/web?url="+i.urlUtil.getFullUrl(a.web_url)}):"2"==a.handle_type?a.web_url&&""!=a.web_url&&n.wx$1.openChannelsUserProfile({finderUserName:a.web_url,success:function(){},fail:function(){console.log("openChannelsUserProfile fail: "+JSON.stringify(e))}}):"3"==a.handle_type&&a.web_url&&""!=a.web_url&&a.relation_id&&""!=a.relation_id&&n.wx$1.openChannelsActivity({finderUserName:a.web_url,feedId:a.relation_id,success:function(){},fail:function(){console.log("openChannelsActivity fail: "+JSON.stringify(e))}}))},onItemClick(e){n.index.navigateTo({url:"/pages/pfs/detail?id="+e.id})},onClickScan(){this.checkLogin()&&n.index.navigateTo({url:"/pages/register/scan"})},getDisplayAddress(e){let n="";return e&&(e.province&&(n=e.province),e.city&&(n+=e.city),e.district&&(n+=e.district),e.address&&(n+=e.address)),n},fetchBanner(){this.$api.getBanner().then((e=>{this.imageBannerData=e.imgBanner,this.videoBannerData=e.videoBanner})).catch((e=>{console.log("getBanner err: "+JSON.stringify(e))}))},onRefresh(e,n){1==e&&this.fetchBanner(),this.fetchRecommendBuilding(e,n)},fetchRecommendBuilding(e,n){this.$api.fetchBuildingList(e,n,"","",!0).then((e=>{this.$refs.paging.complete(e)})).catch((e=>{this.$refs.paging.complete(!1)}))},checkLogin(){let e=a.cache.getToken();return!(!e||""==e)||(n.index.navigateTo({url:"/pages/login/login"}),!1)}}};if(!Array){(n.resolveComponent("Head")+n.resolveComponent("Search")+n.resolveComponent("z-paging"))()}Math||((()=>"../../components/Head/Head.js")+(()=>"../../components/Search/Search.js")+(()=>"../../uni_modules/z-paging/components/z-paging/z-paging.js"))();const o=n._export_sfc(r,[["render",function(e,i,a,r,o,s){return{a:n.p({title:"首页"}),b:n.f(o.imageBannerData,((e,i,a)=>({a:s.getImageUrl(e.img_url),b:i,c:n.o((n=>s.onBannerClick(e)),i)}))),c:t._imports_0,d:t._imports_1,e:n.o((e=>s.onClickScan())),f:t._imports_2,g:n.f(o.videoBannerData,((i,a,t)=>n.e({a:s.isVideoBanner(i.img_url)},s.isVideoBanner(i.img_url)?{b:s.getImageUrl(i.img_url),c:n.o((n=>e.BoFang()),a),d:n.o((n=>e.ZanTing()),a)}:{e:s.getImageUrl(i.img_url)},{f:a,g:n.o((e=>s.onBannerClick(i)),a)}))),h:n.f(o.recommendBuildingData,((e,i,a)=>n.e({a:s.getImageUrl(e.pic),b:"preSale"===e.status},("preSale"===e.status||e.status,{}),{c:"onSale"===e.status,d:n.f(e.tags,((e,i,a)=>n.e({a:e&&""!=e},e&&""!=e?{b:n.t(e)}:{}))),e:n.t(e.name),f:n.t(e.price),g:n.t(s.getDisplayAddress(e)),h:n.o((n=>s.onItemClick(e)))}))),i:n.sr("paging","98ab0045-1"),j:n.o(s.onRefresh),k:n.o((e=>o.recommendBuildingData=e)),l:n.p({modelValue:o.recommendBuildingData})}}],["__scopeId","data-v-98ab0045"]]);r.__runtimeHooks=2,wx.createPage(o);
