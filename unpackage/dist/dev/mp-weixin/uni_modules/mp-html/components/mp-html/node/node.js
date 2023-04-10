"use strict";const e=require("../../../../../common/vendor.js"),p={},T=()=>Promise.resolve().then(()=>w),y={name:"node",options:{virtualHost:!0},data(){return{ctrl:{},isiOS:e.index.getSystemInfoSync().system.includes("iOS")}},props:{name:String,attrs:{type:Object,default(){return{}}},childs:Array,opts:Array},components:{node:T},mounted(){this.$nextTick(()=>{for(this.root=this.$parent;this.root.$options.name!=="mp-html";this.root=this.root.$parent);})},beforeDestroy(){},methods:{toJSON(){return this},play(l){if(this.root.$emit("play"),this.root.pauseVideo){let i=!1;const s=l.target.id;for(let o=this.root._videos.length;o--;)this.root._videos[o].id===s?i=!0:this.root._videos[o].pause();if(!i){const o=e.index.createVideoContext(s,this);o.id=s,this.root.playbackRate&&o.playbackRate(this.root.playbackRate),this.root._videos.push(o)}}},imgTap(l){const i=this.childs[l.currentTarget.dataset.i];if(i.a){this.linkTap(i.a);return}i.attrs.ignore||(this.root.$emit("imgtap",i.attrs),this.root.previewImg&&e.index.previewImage({showmenu:this.root.showImgMenu,current:parseInt(i.attrs.i),urls:this.root.imgList}))},imgLongTap(l){},imgLoad(l){const i=l.currentTarget.dataset.i;this.childs[i].w?(this.opts[1]&&!this.ctrl[i]||this.ctrl[i]===-1)&&this.$set(this.ctrl,i,1):this.$set(this.ctrl,i,l.detail.width),this.checkReady()},checkReady(){this.root.lazyLoad||(this.root._unloadimgs-=1,this.root._unloadimgs||setTimeout(()=>{this.root.getRect().then(l=>{this.root.$emit("ready",l)}).catch(()=>{this.root.$emit("ready",{})})},350))},linkTap(l){const i=l.currentTarget?this.childs[l.currentTarget.dataset.i]:{},s=i.attrs||l,o=s.href;this.root.$emit("linktap",Object.assign({innerText:this.root.getText(i.children||[])},s)),o&&(o[0]==="#"?this.root.navigateTo(o.substring(1)).catch(()=>{}):o.split("?")[0].includes("://")?this.root.copyLink&&e.index.setClipboardData({data:o,success:()=>e.index.showToast({title:"链接已复制"})}):e.index.navigateTo({url:o,fail(){e.index.switchTab({url:o,fail(){}})}}))},mediaError(l){const i=l.currentTarget.dataset.i,s=this.childs[i];if(s.name==="video"||s.name==="audio"){let o=(this.ctrl[i]||0)+1;if(o>s.src.length&&(o=0),o<s.src.length){this.$set(this.ctrl,i,o);return}}else s.name==="img"&&(this.opts[2]&&this.$set(this.ctrl,i,-1),this.checkReady());this.root&&this.root.$emit("error",{source:s.name,attrs:s.attrs,errMsg:l.detail.errMsg})}}};Array||e.resolveComponent("node")();function v(l,i,s,o,h,c){return{a:e.f(s.childs,(t,r,d)=>e.e({a:t.name==="img"&&!t.t&&(s.opts[1]&&!h.ctrl[r]||h.ctrl[r]<0)},t.name==="img"&&!t.t&&(s.opts[1]&&!h.ctrl[r]||h.ctrl[r]<0)?{b:e.s(t.attrs.style),c:h.ctrl[r]<0?s.opts[2]:s.opts[1]}:{},{d:t.name==="img"&&t.t},t.name==="img"&&t.t?{e:e.s("display:"+t.t),f:"<img class='_img' style='"+t.attrs.style+"' src='"+t.attrs.src+"'>",g:r,h:e.o((...a)=>c.imgTap&&c.imgTap(...a),r)}:t.name==="img"?{j:t.attrs.id,k:e.n("_img "+t.attrs.class),l:e.s((h.ctrl[r]===-1?"display:none;":"")+"width:"+(h.ctrl[r]||1)+"px;height:1px;"+t.attrs.style),m:t.attrs.src,n:t.h?t.w?"":"heightFix":"widthFix",o:s.opts[0],p:t.webp,q:s.opts[3]&&!t.attrs.ignore,r:!s.opts[3]||t.attrs.ignore,s:r,t:e.o((...a)=>c.imgLoad&&c.imgLoad(...a),r),v:e.o((...a)=>c.mediaError&&c.mediaError(...a),r),w:e.o((...a)=>c.imgTap&&c.imgTap(...a),r),x:e.o((...a)=>c.imgLongTap&&c.imgLongTap(...a),r)}:t.text?{z:e.t(t.text),A:s.opts[4]=="force"&&h.isiOS}:t.name==="br"?{}:t.name==="a"?{D:"6dbf131a-0-"+d,E:e.p({name:"span",childs:t.children,opts:s.opts}),F:t.attrs.id,G:e.n((t.attrs.href?"_a ":"")+t.attrs.class),H:e.s("display:inline;"+t.attrs.style),I:r,J:e.o((...a)=>c.linkTap&&c.linkTap(...a),r)}:t.name==="video"?{L:t.attrs.id,M:e.n(t.attrs.class),N:e.s(t.attrs.style),O:t.attrs.autoplay,P:t.attrs.controls,Q:t.attrs.loop,R:t.attrs.muted,S:t.attrs["object-fit"],T:t.attrs.poster,U:t.src[h.ctrl[r]||0],V:r,W:e.o((...a)=>c.play&&c.play(...a),r),X:e.o((...a)=>c.mediaError&&c.mediaError(...a),r)}:t.name==="audio"?{Z:t.attrs.id,aa:e.n(t.attrs.class),ab:e.s(t.attrs.style),ac:t.attrs.author,ad:t.attrs.controls,ae:t.attrs.loop,af:t.attrs.name,ag:t.attrs.poster,ah:t.src[h.ctrl[r]||0],ai:r,aj:e.o((...a)=>c.play&&c.play(...a),r),ak:e.o((...a)=>c.mediaError&&c.mediaError(...a),r)}:t.name==="table"&&t.c||t.name==="li"?e.e({am:t.name==="li"},t.name==="li"?{an:"6dbf131a-1-"+d,ao:e.p({childs:t.children,opts:s.opts})}:{ap:e.f(t.children,(a,g,n)=>e.e({a:a.name==="td"||a.name==="th"},a.name==="td"||a.name==="th"?{b:"6dbf131a-2-"+d+"-"+n,c:e.p({childs:a.children,opts:s.opts})}:{d:e.f(a.children,(m,_,u)=>e.e({a:m.name==="td"||m.name==="th"},m.name==="td"||m.name==="th"?{b:"6dbf131a-3-"+d+"-"+n+"-"+u,c:e.p({childs:m.children,opts:s.opts}),d:e.n("_"+m.name+" "+m.attrs.class),e:e.s(m.attrs.style)}:{f:e.f(m.children,(f,b,x)=>({a:"6dbf131a-4-"+d+"-"+n+"-"+u+"-"+x,b:e.p({childs:f.children,opts:s.opts}),c:b,d:e.n("_"+f.name+" "+f.attrs.class),e:e.s(f.attrs.style)})),g:e.n("_"+m.name+" "+m.attrs.class),h:e.s(m.attrs.style)},{i:_}))},{e:g,f:e.n("_"+a.name+" "+a.attrs.class),g:e.s(a.attrs.style)}))},{aq:t.attrs.id,ar:e.n("_"+t.name+" "+t.attrs.class),as:e.s(t.attrs.style)}):t.c?t.c===2?{aB:e.f(t.children,(a,g,n)=>({a:g,b:e.s(a.f),c:"6dbf131a-5-"+d+"-"+n,d:e.p({name:a.name,attrs:a.attrs,childs:a.children,opts:s.opts})})),aC:t.attrs.id,aD:e.n("_block _"+t.name+" "+t.attrs.class),aE:e.s(t.f+";"+t.attrs.style)}:{aF:e.s(t.f),aG:"6dbf131a-6-"+d,aH:e.p({name:t.name,attrs:t.attrs,childs:t.children,opts:s.opts})}:{av:t.attrs.id,aw:e.s(t.f+";display:inline"),ax:s.opts[4],ay:s.opts[4],az:[t]},{i:t.name==="img",y:t.text,B:t.name==="br",C:t.name==="a",K:t.name==="video",Y:t.name==="audio",al:t.name==="table"&&t.c||t.name==="li",at:!t.c,aA:t.c===2,aI:r})),b:s.attrs.id,c:e.n("_block _"+s.name+" "+s.attrs.class),d:e.s(s.attrs.style)}}typeof p=="function"&&p(y);const k=e._export_sfc(y,[["render",v],["__file","D:/HBuilderProjects/house/uni_modules/mp-html/components/mp-html/node/node.vue"]]);wx.createComponent(k);const w=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));