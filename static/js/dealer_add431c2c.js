var basetool=$.fn.basetool;
var nav=$.fn.nav,adapt_helper=$.fn.adapt_helper;
adapt_helper.adaptHeader();
adapt_helper.adaptBodyWidth();
$.validator.addMethod('phone',function(e,a){
var b=e.length;
var c=/^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
var d=/^(\d{3,4}-?)?\d{7,9}$/;
return this.optional(a)||c.test(e)||d.test(e);
},'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801');
$.validator.addMethod('license',function(d,a){
var b=/^([0-9a-zA-Z]{15})$/;
var c=/^([0-9a-zA-Z]{18})$/;
return this.optional(a)||b.test(d)||c.test(d);
},'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8425\u4E1A\u6267\u7167\u7F16\u53F7');
$('#corp_add_form').validate({debug:false,errorClass:"errorTest",onfocusout:function(a){
$(a).valid();
},success:function(b,a){
$(a).siblings('label.error').eq(0).html('').hide();
},errorPlacement:function(b,a){
if(b.text())
{
a.siblings('label.error').eq(0).html(b.text()).show();
}
},ignore:'.ignore',rules:{name:{required:true,rangelength:[5,30]},addr:{required:true,rangelength:[8,100]},url:{url:true},license:{required:true,license:true},person:{required:true,rangelength:[2,100]},qqnum:{digits:true,rangelength:[0,20]},mobile:{required:true,phone:true},smscode:{required:true,digits:true,rangelength:[6,6]},corp_desc:{required:true,rangelength:[100,400]}},messages:{name:{required:'\u8BF7\u8F93\u5165\u516C\u53F8\u5B8C\u6574\u5168\u79F0',rangelength:'\u8BF7\u586B\u5199\u516C\u53F8\u5B8C\u6574\u5168\u79F0\uFF0C5-30\u4E2A\u5B57'},addr:{required:'\u8BF7\u8F93\u5165\u516C\u53F8\u5B8C\u6574\u5730\u5740',rangelength:'\u8BF7\u8F93\u5165\u516C\u53F8\u5B8C\u6574\u5730\u5740\uFF0C8-100\u4E2A\u5B57'},url:{url:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u7F51\u5740'},license:{required:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8425\u4E1A\u6267\u7167\u7F16\u53F7',license:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8425\u4E1A\u6267\u7167\u7F16\u53F7'},person:{required:'\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u59D3\u540D',rangelength:'\u8054\u7CFB\u4EBA\u59D3\u540D\u81F3\u5C112\u4E2A\u5B57'},qqnum:{digits:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684QQ\u53F7\u7801',rangelength:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684QQ\u53F7\u7801'},mobile:{required:'\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801',phone:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801'},smscode:{required:'\u8BF7\u8F93\u5165\u624B\u673A\u9A8C\u8BC1\u7801',digits:'\u8BF7\u8F93\u51656\u4F4D\u624B\u673A\u9A8C\u8BC1\u7801',rangelength:'\u8BF7\u8F93\u51656\u4F4D\u624B\u673A\u9A8C\u8BC1\u7801'},corp_desc:{required:'\u8BF7\u8F93\u5165\u516C\u53F8\u7B80\u4ECB',rangelength:'\u8BF7\u8F93\u5165100-400\u4E2A\u5B57\u7684\u516C\u53F8\u7B80\u4ECB'}},submitHandler:function(b){
var c=$(b).serialize();
var a=$("#applyType").val();
var d="";
var e="";
if(a=="shanxi")
{
d="&apply_core_agent=1";
e="dealer_add|click|dealer_add_shanxi";
}
else{
d="";
e="dealer_add|click|dealer_add";
}
$.ajax({url:'/cgi-bin/bizmail_portal?t=biz_rf_portal_mgr&action=apply_agent'+d+'&ef=jsnew&resp_charset=UTF8',data:c,type:'POST',dataType:'json',success:function(f){
if(f.retcode==0)
{
$(".dealer_add_condition").remove();
$('.dealer_add_form').remove();
$(".dealer_form_suc").show();
basetool.logKvEx({type:"nosession_statistics",businame:"new_index",item:e});
}
else if(f.retcode==-101)
{
basetool.showErr("\u624B\u673A\u9A8C\u8BC1\u7801\u9519\u8BEF");
}
else{
basetool.showErr(f.errmsg);
}
},error:function(f){
basetool.showErr("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5");
}});
}});
$('.js_dealder_add_submit').click(function(a){
a.preventDefault();
$('#corp_add_form').submit();
});
$('.js_get_vcode').click(function(c){
var b=$(c.currentTarget),a=$("[name='mobile']");
if(!$.trim(a.val()))
{
a.focus().blur();
return false;
}
else if(b.hasClass("js_sms_disable")||a.siblings("label.error").eq(0).text())
{
return false;
}
else{
b.addClass("js_sms_disable");
}
$.ajax({url:'/cgi-bin/bizmail_portal?t=biz_rf_portal_mgr&ef=js',data:{action:"send_smsex",type:0,mobile:a.val()},type:'POST',dataType:'json'});
basetool.generateTimer(60*1000,1000,{processHandler:function(d){
b.text(d+"s \u540E\u83B7\u53D6");
},endHandler:function(){
b.text("\u83B7\u53D6\u9A8C\u8BC1\u7801");
b.removeClass("js_sms_disable");
}});
});
$.fn.city_data.initProvCity($('#prov'),$('#city'));
