"use strict";const e=require("../common/vendor.js"),t=require("./cache.js");let o="";o="https://houseapi.cqsoftware.cn";const s=o=>{let s="";if(o.msg&&""!=o.msg)s=o.msg;else switch(o.code){case 300:s="未授权，请登录";break;case 400:s="请求参数错误";break;case 403:s="跨域拒绝访问";break;case 404:s="请求地址不存在";break;case 500:s="服务器内部错误";break;case 504:s="请求超时";break;default:s="请求失败"}e.index.showToast({title:s,icon:"none",duration:3e3,complete:function(){setTimeout((function(){e.index.hideToast()}),3e3)}}),300==o.code&&setTimeout((function(){t.cache.saveToken(""),e.index.navigateTo({url:"/pages/login/login"})}),500)};exports.HOST_IMG="https://zykjstore.oss-cn-chengdu.aliyuncs.com",exports.get=function(n,r={}){let a=t.cache.getToken(),c={Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"};return a&&a.length>0&&(c.uid=a),new Promise(((t,a)=>{e.index.request({url:o+n,data:r,header:c,method:"GET",success:e=>{let o=e.data;1==o.code?t(o.return):(a(o),s(o))},fail:e=>{console.log("get request fail: "+JSON.stringify(e)),e&&e.response&&(a(e.response),s(e.response))}})}))},exports.post=function(n,r){let a=t.cache.getToken(),c={"content-type":"application/x-www-form-urlencoded"};return a&&a.length>0&&(c.uid=a),new Promise(((t,a)=>{e.index.request({url:o+n,data:r,header:c,method:"POST",success:e=>{let o=e.data;1===o.code?t(o.return):(a(o),s(o))},fail:e=>{e&&e.response&&(a(e.response),s(e.response))}})}))},exports.postWithoutToken=function(t,n){return new Promise(((r,a)=>{e.index.request({url:o+t,data:n,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:e=>{let t=e.data;1===t.code?r(t.return):(a(t),s(t))},fail:e=>{e&&e.response&&(a(e),s(e.response))}})}))},exports.upload=function(t,n){return new Promise(((r,a)=>{e.index.uploadFile({url:o+t,filePath:n,name:"file",formData:{},success:e=>{let t=JSON.parse(e.data);1===t.code?r(t.return):(a(t),s(t))},fail:e=>{e&&e.response&&(a(e),s(e.response))}})}))};