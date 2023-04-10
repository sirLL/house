"use strict";const e=require("../../../common/vendor.js"),a=require("../../../utils/cache.js"),g={data(){return{currentBuilding:null,showChannelPicker:!1,channelData:[],selectedChannel:null,buildingData:[],customPhone:"",customNote:""}},onLoad(){this.currentBuilding=a.cache.getCurrentBuilding()},methods:{onClickBuilding(){this.$refs.buildingPicker.open()},closeBuildingSelected(){this.$refs.buildingPicker.close()},onClickChennel(){this.$refs.channelPicker.open(),this.fetchChannel()},closeChannelSelected(){this.$refs.channelPicker.close()},onChannelSelected(t){this.selectedChannel=t,this.closeChannelSelected()},onClickSubmit(t){let l=t.detail.value.phone,s=t.detail.value.note;if(!this.currentBuilding){this.$msg("请选择楼盘");return}if(!this.selectedChannel){this.$msg("请选择渠道");return}if(!l||l==""){this.$msg("请输入客户电话");return}if(l.length!=11){this.$msg("请输入正确的客户电话");return}let o=this;e.index.showModal({title:"提示",content:"请确认登记信息，是否确认提交？",success:function(i){i.confirm?o.submitInfo(l,s):i.cancel}})},bindCurrentBuilding(t){this.currentBuilding=t,this.closeBuildingSelected()},fetchChannel(){this.$staffApi.fetchChannel().then(t=>{this.$refs.pagingChannel.complete(t)}).catch(t=>{})},fetchBuilding(t,l){this.$staffApi.fetchBuildingList(t,l).then(s=>{this.customPhone="",this.$refs.paging.complete(s)}).catch(s=>{})},submitInfo(t,l){this.$staffApi.submitCustomerCheck(this.currentBuilding.id,this.selectedChannel.id,t,l).then(s=>{this.$msg("提交成功"),this.customPhone="",this.customNote=""}).catch(s=>{})}}};if(!Array){const t=e.resolveComponent("uni-icons"),l=e.resolveComponent("z-paging"),s=e.resolveComponent("uni-popup");(t+l+s)()}const d=()=>"../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js",f=()=>"../../../uni_modules/z-paging/components/z-paging/z-paging.js",p=()=>"../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";Math||(d+f+p)();function m(t,l,s,o,i,c){return e.e({a:i.currentBuilding},i.currentBuilding?{b:i.currentBuilding.name}:{},{c:e.p({type:"right",size:"18",color:"#999999"}),d:e.o(n=>c.onClickBuilding()),e:i.selectedChannel},i.selectedChannel?{f:i.selectedChannel.name}:{},{g:e.p({type:"right",size:"18",color:"#999999"}),h:e.o(n=>c.onClickChennel()),i:i.customPhone,j:e.o(n=>i.customPhone=n.detail.value),k:i.customNote,l:e.o(n=>i.customNote=n.detail.value),m:e.o((...n)=>c.onClickSubmit&&c.onClickSubmit(...n)),n:e.p({type:"closeempty",size:"20",color:"#999999"}),o:e.o((...n)=>c.closeChannelSelected&&c.closeChannelSelected(...n)),p:e.f(i.channelData,(n,u,r)=>({a:e.t(n.name),b:e.o(h=>c.onChannelSelected(n))})),q:e.sr("pagingChannel","8b9f9631-3,8b9f9631-2"),r:e.o(c.fetchChannel),s:e.o(c.fetchChannel),t:e.o(n=>i.channelData=n),v:e.p({fixed:!1,["refresher-only"]:!0,modelValue:i.channelData}),w:e.sr("channelPicker","8b9f9631-2"),x:e.p({type:"bottom"}),y:e.p({type:"closeempty",size:"20",color:"#999999"}),z:e.o((...n)=>c.closeBuildingSelected&&c.closeBuildingSelected(...n)),A:e.f(i.buildingData,(n,u,r)=>({a:e.t(n.name),b:e.o(h=>c.bindCurrentBuilding(n))})),B:e.sr("paging","8b9f9631-6,8b9f9631-5"),C:e.o(c.fetchBuilding),D:e.o(n=>i.buildingData=n),E:e.p({fixed:!1,modelValue:i.buildingData}),F:e.sr("buildingPicker","8b9f9631-5"),G:e.p({type:"bottom"})})}const C=e._export_sfc(g,[["render",m],["__scopeId","data-v-8b9f9631"],["__file","D:/HBuilderProjects/house/pages/staff/qr/check_in.vue"]]);wx.createPage(C);
