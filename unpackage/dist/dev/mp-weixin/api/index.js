"use strict";const n=require("../utils/request.js");function c(){return n.get("/web/index/banner")}function d(e,t,i,o,u){let r="";return u&&(r="Recommend"),n.get("/web/building/index",{page:e,limit:t,name:i,province:o,type:r})}function s(e){return n.get("/web/building/detail",{id:e})}function f(e,t){return n.get("/web/promotion/index",{page:e,limit:t})}function b(e){return n.get("/web/promotion/detail",{id:e})}function g(e,t){return n.get("/web/promotion/log",{page:e,limit:t})}function l(e,t){return n.post("/web/promotion/prof",{promotion_id:e,picture:t})}function a(e,t){return n.get("/web/activity/index",{page:e,limit:t})}function m(e,t){return n.postWithoutToken("/web/user/login2",{code:e,phonecode:t})}function p(e){return n.upload("/index/file/uploadfile",e)}function h(e,t,i,o){return n.post("/web/user/cardModify",{name:e,phone:t,company:i,address:o})}function w(){return n.post("/web/user/getCard",{})}function C(e,t){return n.post("/web/user/feedBack",{content:e,contact:t})}function k(e,t){return n.post("/web/building/salesCheck",{scene:e,picture:t})}function y(e){return n.post("/web/building/CustomerCheck",{scene:e,debug:1})}function _(e,t){return n.get("/web/building/log",{page:e,limit:t})}function v(){return n.get("/web/user/getUserInfo",{})}function x(){return n.get("/web/channel/list",{})}function L(e,t){return n.get("/web/building/getCheckCode",{building_id:e,channel_id:t})}function B(e){return n.post("/web/promotion/verifyNumber",{code:e})}function P(e){return n.post("/web/promotion/verifyCode",{id:e})}function R(e){return n.get("/web/building/getScanLog",{scene:e})}function U(e,t,i,o){return n.post("/web/staff/check",{building_id:e,channel_id:t,phone:i,description:o})}const S={uploadFile:p,getBanner:c,fetchBuildingList:d,fetchBuildingDetail:s,fetchPromotionList:f,fetchPromotionDetail:b,fetchPromotionRecord:g,submitPromotion:l,fetchActivityList:a,submitLogin:m,submitUserCard:h,fetchUserCard:w,submitFeedback:C,submitSalesCheck:k,submitCustomCheck:y,fetchCheckRecord:_,fetchUserInfo:v,fetchChannel:x,fetchCheckCode:L,submitVerifyNumber:B,submitVerifyCode:P,fetchScanRecord:R,submitCustomerCheck:U};exports.api=S;