"use strict";const e=require("./request.js");const t={uploadFile:function(t){return e.upload("/index/file/uploadfile",t)},fetchBuildingList:function(t,n,i="",r="",u=""){let o="";return u&&(o="Recommend"),e.get("/web/building/index",{page:t,limit:n,name:i,province:r,type:o})},fetchChannel:function(){return e.get("/web/channel/list",{})},fetchCheckCode:function(t,n){return e.get("/web/building/getCheckCode",{building_id:t,channel_id:n})},submitVerifyNumber:function(t){return e.post("/web/promotion/verifyNumber",{code:t})},submitVerifyCode:function(t){return e.post("/web/promotion/verifyCode",{id:t})},fetchScanRecord:function(t){return e.get("/web/building/getScanLog",{scene:t})},submitLogin:function(t,n,i){return e.post("/web/staff/login2",{username:t,password:n,code:i})},submitCustomerCheck:function(t,n,i,r){return e.post("/web/staff/check",{building_id:t,channel_id:n,phone:i,description:r})},fetchCustomerList:function(t,n,i="",r="",u="",o="",f=""){return e.get("/web/staff/myCustomers",{page:t,limit:n,building_id:i,user_name:r,date:u,channel_id:o,type:f})},fetchStaff:function(){return e.get("/web/staff/getAllUser",{})},submitTransfer:function(t,n){return e.post("/web/staff/updcrmstaff",{id:t,staff_id:n})}};exports.staffApi=t;
