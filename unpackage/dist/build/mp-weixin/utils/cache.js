"use strict";const e=require("../common/vendor.js");function t(){let t=[];try{let n=e.index.getStorageSync("historyKeywords");n&&""!=n&&(t=JSON.parse(n))}catch(n){return t}return t}function n(){let t=[];try{let n=e.index.getStorageSync("history_building");console.log("getHistoryBuilding: "+n),n&&""!=n&&(t=JSON.parse(n))}catch(n){return t}return t}const r={saveToken:function(t){e.index.setStorage({key:"token",data:t})},getToken:function(){try{return e.index.getStorageSync("token")}catch(t){return""}},saveStaffToken:function(t){e.index.setStorage({key:"staffToken",data:t,success:()=>{},fail:e=>{}})},getStaffToken:function(){try{return e.index.getStorageSync("staffToken")}catch(t){return""}},saveHistoryKeywords:function(n){if(!n||""==n)return;let r=t(),i=[];if(i.push(n),r&&r.length>0){let e=r.indexOf(n);e>=0&&r.splice(e,1);for(var o=0;o<r.length&&o<10;o++){let e=r[o];e&&""!=e&&i.push(e)}}e.index.setStorage({key:"historyKeywords",data:JSON.stringify(i)})},getHistoryKeywords:t,cleanHistoryKeywords:function(){e.index.setStorage({key:"historyKeywords",data:"[]"})},saveCurrentBuilding:function(t){t&&t.id&&""!=t.id&&t.name&&""!=t.name?e.index.setStorage({key:"current_building",data:JSON.stringify(t)}):e.index.setStorage({key:"current_building",data:""})},getCurrentBuilding:function(t){let n=null;try{let t=e.index.getStorageSync("current_building");t&&""!=t&&(n=JSON.parse(t))}catch(r){return n}return n},getHistoryBuilding:n,saveHistoryBuilding:function(t){if(t&&t.id&&""!=t.id&&t.name&&""!=t.name){let i=n(),o=[];if(i&&i.length>0)for(var r=0;r<i.length&&o.length<3;r++){let e=i[r];t.id&&e&&e.id!=t.id&&o.push(e)}o.unshift(t),e.index.setStorage({key:"history_building",data:JSON.stringify(o)})}}};exports.cache=r;
