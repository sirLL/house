"use strict";const o=require("../common/vendor.js");getApp();const e={saveImage:function(e,n){let t=this;o.index.authorize({scope:"scope.writePhotosAlbum",success:()=>{t.downLoadImg(e,n)},fail:()=>{o.index.getSetting({success:o=>{o.authSetting["scope.writePhotosAlbum"]||t.isAuth()}})}})},downLoadImg:function(e,n){o.index.showLoading({title:"加载中"}),o.index.downloadFile({url:e,success:e=>{o.index.hideLoading(),200===e.statusCode?0==n?o.index.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){o.index.showToast({title:"已保存到相册",icon:"none"})},fail:function(){o.index.showToast({title:"保存失败，请稍后重试",icon:"none"})}}):o.index.saveVideoToPhotosAlbum({filePath:e.tempFilePath,success:function(){o.index.showToast({title:"已保存到相册",icon:"none"})},fail:function(){o.index.showToast({title:"保存失败，请稍后重试",icon:"none"})}}):o.index.showToast({title:"资源格式错误，请联系管理员",icon:"none"})},fail:e=>{o.index.showToast({title:"保存失败，请联系管理员",icon:"none"})}})},isAuth:function(){o.index.showModal({content:"由于您还没有允许保存图片到您相册里,无法进行保存,请点击确定允许授权",success:e=>{e.confirm&&o.index.openSetting({success:o=>{console.log(o.authSetting)}})}})}};exports.download=e;