"use strict";const n=require("../../../../../common/vendor.js");let t=null,e=!1;const o="Z-PAGING-CONFIG-STORAGE-KEY";const c={setConfig:function(t){n.index.setStorageSync(o,t)},getConfig:function(){return e||(t=n.index.getStorageSync(o),e=!0),t}};exports.zConfig=c;