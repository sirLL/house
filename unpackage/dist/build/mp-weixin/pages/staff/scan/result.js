"use strict";const e=require("../../../common/vendor.js"),s={data:()=>({result:1,codeId:""}),onLoad(e){e.id?(this.codeId=e.id,this.submitCode()):this.result=2},methods:{submitCode(){this.$staffApi.submitVerifyCode(this.codeId).then((e=>{this.result=1,console.log("submitCode success: "+JSON.stringify(e))})).catch((e=>{this.result=2,console.log("submitCode err: "+JSON.stringify(e))}))}}};const t=e._export_sfc(s,[["render",function(s,t,r,o,i,u){return e.e({a:1==i.result},(1==i.result||i.result,{}),{b:2==i.result,c:1==i.result},(i.result,{}),{d:2==i.result},(i.result,{}))}],["__scopeId","data-v-a0f8c988"]]);wx.createPage(t);