"use strict";const e=require("../../common/vendor.js"),s=require("../../utils/cache.js"),a={data:()=>({type:1,userCard:null,userInfo:null,companyName:"",companyData:[]}),onLoad(s){const{type:a}=s;this.type=a,e.index.setNavigationBarTitle({title:1==a?"我的名片":"编辑名片"})},onShow(){this.fetchUserCard(),this.fetchUserInfo(),this.fetchUserCompany()},methods:{showCompanyPicker(){this.$refs.popup.open()},closeCompanyPicker(){this.$refs.popup.close()},onCompanyItemClick(e){this.companyName=e,this.closeCompanyPicker()},getDisplayInputValue(e){return"name"===e&&this.userCard&&this.userCard.name?this.userCard.name:"phone"===e?this.userInfo&&this.userInfo.phone?this.userInfo.phone:"":"company"===e&&this.userCard&&this.userCard.company?this.userCard.company:"address"===e&&this.userCard&&this.userCard.address?this.userCard.address:""},fetchUserInfo(){let e=s.cache.getToken();e&&""!=e?this.$api.fetchUserInfo().then((e=>{this.userInfo=e})).catch((e=>{})):this.userInfo=null},fetchUserCard(){this.$api.fetchUserCard().then((e=>{this.userCard=e,console.log("fetchUserCard: "+JSON.stringify(e)),e&&e.company&&(this.companyName=e.company)})).catch((e=>{}))},fetchUserCompany(){this.$api.fetchUserCompany().then((e=>{this.companyData=e})).catch((e=>{}))},submitUserCard(s){let a=s.detail.value.name,t=s.detail.value.phone,o=s.detail.value.company,n=s.detail.value.address;0!==a.length?this.$api.submitUserCard(a,t,o,n).then((s=>{this.$msg("提交成功"),e.index.navigateBack()})).catch((e=>{})):this.$msg("请输入联系人")}}};if(!Array){(e.resolveComponent("uni-icons")+e.resolveComponent("uni-popup"))()}Math||((()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../uni_modules/uni-popup/components/uni-popup/uni-popup.js"))();const t=e._export_sfc(a,[["render",function(s,a,t,o,n,i){return{a:i.getDisplayInputValue("name"),b:i.getDisplayInputValue("phone"),c:e.o((e=>i.showCompanyPicker())),d:n.companyName,e:e.o((e=>n.companyName=e.detail.value)),f:i.getDisplayInputValue("address"),g:e.t(1==n.type?"确认":"保存并使用"),h:e.o(((...e)=>i.submitUserCard&&i.submitUserCard(...e))),i:e.p({type:"closeempty",size:"20",color:"#999999"}),j:e.o(((...e)=>i.closeCompanyPicker&&i.closeCompanyPicker(...e))),k:e.f(n.companyData,((s,a,t)=>({a:e.t(s),b:e.o((e=>i.onCompanyItemClick(s)))}))),l:e.sr("popup","4a69bb57-0"),m:e.p({type:"bottom"})}}],["__scopeId","data-v-4a69bb57"]]);wx.createPage(t);
