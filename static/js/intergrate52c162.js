$(document).ready(function(){$.fn.nav;var t=$.fn.adapt_helper,e=$.fn.basetool,n=$.fn.qrcode;function r(t,e){(new Image).src="https://exmail.qq.com/qy_mng_logic/reportKV?type="+t+"&itemName="+e+"&r="+Math.random()}t.adaptHeader(),t.adaptBodyWidth(),e.doIndexStatistic(),n.initMpQrcode({$dom:$(".intergrate_qr")}),$(".js_item_hover").on("mouseover",function(t){var e=$(t.currentTarget),n=e.parents(".intergrate_content_item").eq(0);e.hasClass("intergrate_content_itemContent_curr")||(t=e.attr("data-index"),n.find(".intergrate_content_itemContent_curr").removeClass("intergrate_content_itemContent_curr"),n.find(".intergrate_group_interMobile").hide().eq(t).show(),e.addClass("intergrate_content_itemContent_curr"))}),$(".js_intergrate_tab").on("click",function(t){var e=parseInt($(this).index(),10);isNaN(e)||($(".js_intergrate_content").hide().eq(e).show(),$("#intergrate_nav").css("left",75*e+1+"px"),$(".intergrate_top_content_navItem_curr").removeClass("intergrate_top_content_navItem_curr"),$(this).addClass("intergrate_top_content_navItem_curr"))});var a=e.getUrlParam("from");-1<["foxmail","foxmail_client","foxmail_bottom"].indexOf(a)&&($(".index_topbar_btn_reg").click(function(){r("FoxmailNew","index_buy_now|click|"+a)}),$(".index_topbar_btn_login").click(function(){r("FoxmailNew","index_free_open|click|"+a)}))});