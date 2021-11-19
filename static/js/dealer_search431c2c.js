$(function(){
var b=$.fn.basetool,c=$.fn.nano,d=$.fn.nav,a=$.fn.adapt_helper;
b.doIndexStatistic();
a.adaptHeader();
a.adaptBodyWidth();
$('.index_banner').responsiveSlides({auto:true,speed:500,timeout:12000,pager:true});
$(".js_dealer_search").click(function(){
var f=$(".dealer_search_input"),g=$.trim(f.val());
if(!g)
{
b.showErr("\u8BF7\u586B\u5199\u67E5\u8BE2\u4FE1\u606F");
f.focus();
return false;
}
$.ajax({url:"/cgi-bin/bizmail_portal?action=query_agent&check=false&t=biz_rf_portal_premium&s=searchfranchiser&resp_charset=UTF8&newef=json&key="+encodeURIComponent(g),type:'post',dataType:'json',success:function(h){
if(h.errorcode==0)
{
var i='';
if(h.type=='person')
{
var j=$('#person_result_tpl').html();
$.each(h.persons,function(k,l){
if(l.id==undefined)
{
return;
}
switch(l.level)
{case '1':
l.title='\u9500\u552E\u987E\u95EE';
break;
case '2':
l.title='\u9AD8\u7EA7\u9500\u552E';
break;
case '3':
l.title='\u9500\u552E\u4E13\u5BB6';
break;
}l.image='/cgi-bin/viewfile?type=signature&uin=111111&picid='+l.picid;
i+=c(j,l);
});
if(i=='')
{
e();
return false;
}
}
else{
var j=$('#company_result_tpl').html();
i=c(j,h);
}
$('.search_result p').hide();
$('.search_result ul').empty().show().html(i);
if(h.type=='person')
{
$(".type_2").each(function(k,l){
if($(l).attr("data-id"))
{
$(l).find("#userCustomLogo").show();
}
else{
$(l).find("#userDefaultLogo").show();
}
});
}
b.logKvEx({type:"nosession_statistics",businame:"new_index",item:"dealer_search|click|dealer_search"});
}
else{
e();
}
}});
});
if(!("placeholder" in document.createElement('input')))
{
$(".cus_placeholder").show();
b.setPlaceholderEvent($(".dealer_search_input").eq(0),$("#fake_placeholder").eq(0));
}
function e()
{
$('.search_result ul').empty().hide();
$('.search_result p').show();
}
});
