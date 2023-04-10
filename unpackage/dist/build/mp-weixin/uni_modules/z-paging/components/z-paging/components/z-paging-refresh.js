"use strict";const e=require("../../../../../common/vendor.js"),t=require("../js/z-paging-static.js"),s=require("../js/z-paging-utils.js"),i=require("../js/z-paging-enum.js");require("../js/z-paging-config.js"),require("../config/index.js");const r={name:"z-paging-refresh",data:()=>({R:i.Enum.Refresher,isIos:"ios"===e.index.getSystemInfoSync().platform,refresherTimeText:"",zTheme:{title:{white:"#efefef",black:"#555555"},arrow:{white:t.zStatic.base64ArrowWhite,black:t.zStatic.base64Arrow},flower:{white:t.zStatic.base64FlowerWhite,black:t.zStatic.base64Flower},success:{white:t.zStatic.base64SuccessWhite,black:t.zStatic.base64Success},indicator:{white:"#eeeeee",black:"#777777"}}}),props:["status","defaultThemeStyle","defaultText","pullingText","refreshingText","completeText","defaultImg","pullingImg","refreshingImg","completeImg","showUpdateTime","updateTimeKey","imgStyle","titleStyle","updateTimeStyle","updateTimeTextMap"],computed:{ts(){return this.defaultThemeStyle},statusTextArr(){return this.updateTime(),[this.defaultText,this.pullingText,this.refreshingText,this.completeText]},currentTitle(){return this.statusTextArr[this.status]||this.defaultText},leftImageClass(){return this.status===this.R.Complete?"zp-r-left-image-pre-size":"zp-r-left-image zp-r-left-image-pre-size "+(this.status===this.R.Default?"zp-r-arrow-down":"zp-r-arrow-top")},leftImageStyle(){const e=this.showUpdateTime,t=e?"36rpx":"30rpx";return{width:t,height:t,"margin-right":e?"20rpx":"9rpx"}},leftImageSrc(){const e=this.R,t=this.status;return t===e.Default?this.defaultImg?this.defaultImg:this.zTheme.arrow[this.ts]:t===e.ReleaseToRefresh?this.pullingImg?this.pullingImg:this.defaultImg?this.defaultImg:this.zTheme.arrow[this.ts]:t===e.Loading?this.refreshingImg?this.refreshingImg:this.zTheme.flower[this.ts]:t===e.Complete?this.completeImg?this.completeImg:this.zTheme.success[this.ts]:""},rightTextStyle(){let e={};return e.color=this.zTheme.title[this.ts],e}},methods:{updateTime(){this.showUpdateTime&&(this.refresherTimeText=s.u.getRefesrherFormatTimeByKey(this.updateTimeKey,this.updateTimeTextMap))}}};const a=e._export_sfc(r,[["render",function(t,s,i,r,a,h){return e.e({a:i.status!==a.R.Loading},i.status!==a.R.Loading?{b:e.n(h.leftImageClass),c:e.s(h.leftImageStyle),d:e.s(i.imgStyle),e:h.leftImageSrc}:{f:e.s(h.leftImageStyle),g:e.s(i.imgStyle),h:h.leftImageSrc},{i:e.t(h.currentTitle),j:e.s(h.rightTextStyle),k:e.s(i.titleStyle),l:i.showUpdateTime&&a.refresherTimeText.length},i.showUpdateTime&&a.refresherTimeText.length?{m:e.t(a.refresherTimeText),n:e.s(h.rightTextStyle),o:e.s(i.updateTimeStyle)}:{},{p:e.n(i.showUpdateTime?"zp-r-container zp-r-container-padding":"zp-r-container")})}],["__scopeId","data-v-57d0f5ce"]]);wx.createComponent(a);