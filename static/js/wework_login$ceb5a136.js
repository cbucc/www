$(function(){function a(a,b,c){return a}window.addEventListener("beforeunload",function(a){});var b={NEVER:1,ING:2,SUCC:3,FAIL:4,EXPIRED:5,WEWORK_EMPTY:6},c=function(a){a=a||{};var c=Math.random();$.ajax({type:"get",url:"/qy_mng_logic/wwlogin/get_key?r="+c,data:{}}).then(function(c){if(c.data){var e=c.data.qrcode_key;QRCODE_KEY=e,$(".js_qrcode_img").attr("src","/qy_mng_logic/wwlogin/qrcode/"+e+"?r="+Math.random()).show(),d(e,b.NEVER),callback&&"fail"!=a.from&&window.top[callback]&&window.top[callback]({
status:"new"})}},function(a){console.error(a)})},d=function(f,g){return $.ajax({type:"get",timeout:3e4,url:"/qy_mng_logic/wwlogin/check/"+f+"?status="+g+"&r="+Math.random()}).then(function(g){if(g.result)-303==g.result.errCode||-304==g.result.errCode?($(".qrcode_login_rl_bg").show(),$(".js_status_succ").hide(),$(".js_status_not_admin").hide(),$(".js_status_cancel").hide(),callback&&window.top[callback]&&window.top[callback]({status:"expired"})):setTimeout(function(){d(f,g.data.status)});else if(g.data){
var h=a("\u5fae\u4fe1");switch("SOURCE_FROM_WEWORK"==g.data.auth_source&&(h=a("\u4f01\u4e1a\u5fae\u4fe1")),$(".js_status_succ p").html(a("\u8bf7\u5728")+h+a("\u4e2d\u70b9\u51fb\u786e\u8ba4\u5373\u53ef")),g.data.status){case b.NEVER:setTimeout(function(){d(f,g.data.status)});break;case b.ING:$(".js_status_succ").show(),$(".js_status_not_admin").hide(),$(".js_status_cancel").hide(),callback&&window.top[callback]&&window.top[callback]({status:"scan",auth_source:g.data.auth_source}),setTimeout(function(){
d(f,g.data.status)});break;case b.SUCC:e(g.data,f);break;case b.FAIL:c({from:"fail"}),callback&&window.top[callback]&&window.top[callback]({status:"cancel"}),$(".js_status_succ").hide(),$(".js_status_cancel").show();break;case b.WEWORK_EMPTY:window.top.showWeworkEmptyPanel&&window.top.showWeworkEmptyPanel({})}}},function(a){setTimeout(function(){},3e3)})},e=function(a){if(callback&&window.top&&window.top[callback])setTimeout(function(){window.top[callback]({status:"succ",auth_code:a.auth_code})},100);else{
var b="";try{var c=window.top.location.hostname;"exmail.weixin.qq.com"===c&&(c="exmail.qq.com"),"exmail.qq.com"===c&&lang&&"en_US"==lang&&(c="en.exmail.qq.com");var d=window.top.location.search.match(/[&?]redirect_hash=([^&]+)/)&&RegExp.$1;b=location.protocol+"//"+c+"/cgi-bin/login?code="+encodeURIComponent(a.auth_code)+"&vt=wework",d&&(b+="&redirect_hash="+d)}catch(e){}if(b)try{window.top.location.href=b}catch(e){".qq.com"===window.top.location.hostname.substr(-7)&&window.top.postMessage(b,"https://"+window.top.location.hostname);
}}};try{document.domain="exmail.qq.com"}catch(f){}c()});