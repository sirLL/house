"use strict";const e=require("../../common/vendor.js"),c={data:()=>({recordData:[]}),methods:{fetchCheckRecord(e,c){this.$api.fetchCheckRecord(e,c).then((e=>{this.$refs.paging.complete(e)})).catch((e=>{this.$refs.paging.complete(!1)}))}}};if(!Array){(e.resolveComponent("uni-icons")+e.resolveComponent("z-paging"))()}Math||((()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../uni_modules/z-paging/components/z-paging/z-paging.js"))();const a=e._export_sfc(c,[["render",function(c,a,t,o,n,r){return{a:e.f(n.recordData,((c,a,t)=>({a:e.t(c.build_name),b:e.t(c.date),c:"25c7c00a-1-"+t+",25c7c00a-0",d:"/pages/register/detail?detail="+JSON.stringify(c)}))),b:e.p({type:"right",size:"30rpx",color:"rgba(51, 49, 52, .6)"}),c:e.sr("paging","25c7c00a-0"),d:e.o(r.fetchCheckRecord),e:e.o((e=>n.recordData=e)),f:e.p({"default-page-size":"30",modelValue:n.recordData})}}],["__scopeId","data-v-25c7c00a"]]);wx.createPage(a);
