import{Q as t}from"./index.50f83746.js";function e(t){return null!=t?t.indexOf("?")>=0?t+"&x-oss-process=image/resize,h_500,w_500":t+"?x-oss-process=image/resize,h_500,w_500":t}const n={getImgUrl:function(n){return""==n||null==n||0===n.length?"":-1!=n.indexOf("https://")||-1!=n.indexOf("http://")?e(n+""):n.startsWith("/")?e(t+n):e(t+"/"+n)},getImgUrlNotSize:function(e){return""==e||null==e?"":-1!=e.indexOf("https://")||-1!=e.indexOf("http://")?e+"":e.startsWith("/")?t+e:t+"/"+e},isVideo:function(t){if(t){if(t.indexOf(".")>=0){let e=t.substring(t.lastIndexOf("."));return".mp4"===e||".m4v"===e||".3gp"===e||".rmvb"===e||".rm"===e||".mpg"===e||".mpeg"===e||".mpe"===e||".avi"===e||".dat"===e||".mkv"===e||".flv"===e||".vob"===e||".wmv"===e||".asf"===e||".asx"===e}return!1}return!1}};export{n as u};