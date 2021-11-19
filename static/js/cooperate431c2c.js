var tab=location.search.match(/[&?]tab=([^&]+)/)&&RegExp.$1||0;
$(document).ready(function(){
var b=$('.cooperate_nav');
var a=$('.cooperate_content');
$.fn.basetool.doIndexStatistic();
b.on('click','.cooperate_nav_item',function(){
var d=$(this);
var c=d.index();
d.addClass('current').siblings().removeClass('current');
a.eq(c).show().siblings().hide();
});
tab=parseInt(tab);
if(tab)
{
$('.cooperate_nav_item').eq(tab).trigger('click');
}
});
