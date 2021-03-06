(function(a,c,b){
a.fn.responsiveSlides=function(d){
var e=a.extend({"auto":true,"speed":500,"timeout":4000,"pager":false,"nav":false,"random":false,"pause":false,"pauseControls":true,"prevText":"Previous","nextText":"Next","maxwidth":"","navContainer":"","manualControls":"","namespace":"rslides","before":a.noop,"after":a.noop,"first_pic_delay_time":0,"lastNavDisable":false},d);
return this.each(function(){
b++;
var j=a(this),D,x,A,v,w,i,o=0,h=j.children(),p=h.size(),m=parseFloat(e.speed),G=parseFloat(e.timeout),q=parseFloat(e.maxwidth),r=e.namespace,s=r+b,t=r+"_nav "+s+"_nav",l=r+"_here",F=s+"_on",y=s+"_s",f=a("<ul class='"+r+"_tabs "+s+"_tabs' />"),E={"float":"left","position":"relative","opacity":1,"zIndex":2},n={"float":"none","position":"absolute","opacity":0,"zIndex":1},B=(function(){
var I=document.body||document.documentElement;
var L=I.style;
var K="transition";
if(typeof L[K]==="string")
{
return true;
}
D=["Moz","Webkit","Khtml","O","ms"];
K=K.charAt(0).toUpperCase()+K.substr(1);
var J;
for(J=0;J<D.length;J++)
{
if(typeof L[D[J]+K]==="string")
{
return true;
}
}
return false;
})(),z=function(I){
e.before(I);
if(B)
{
h.removeClass(F).css(n).eq(I).addClass(F).css(E);
o=I;
setTimeout(function(){
e.after(I);
},m);
}
else{
h.stop().fadeOut(m,function(){
a(this).removeClass(F).css(n).css("opacity",1);
}).eq(I).fadeIn(m,function(){
a(this).addClass(F).css(E);
e.after(I);
o=I;
});
}
};
if(e.random)
{
h.sort(function(){
return (Math.round(Math.random())-0.5);
});
j.empty().append(h);
}
h.each(function(I){
this.id=y+I;
});
j.addClass(r+" "+s);
if(d&&d.maxwidth)
{
j.css("max-width",q);
}
h.hide().css(n).eq(0).addClass(F).css(E).show();
if(B)
{
h.show().css({"-webkit-transition":"opacity "+m+"ms ease-in-out","-moz-transition":"opacity "+m+"ms ease-in-out","-o-transition":"opacity "+m+"ms ease-in-out","transition":"opacity "+m+"ms ease-in-out"});
}
if(h.size()>1)
{
if(G<m+100)
{
return;
}
if(e.pager&&!e.manualControls)
{
var C=[];
h.each(function(I){
var J=I+1;
C+="<li>"+"<a href='#' class='"+y+J+"'>"+J+"</a>"+"</li>";
});
f.append(C);
if(d.navContainer)
{
a(e.navContainer).append(f);
}
else{
j.after(f);
}
}
if(e.manualControls)
{
f=a(e.manualControls);
f.addClass(r+"_tabs "+s+"_tabs");
}
if(e.pager||e.manualControls)
{
f.find('li').each(function(I){
a(this).addClass(y+(I+1));
});
}
if(e.pager||e.manualControls)
{
i=f.find('a');
x=function(I){
i.closest("li").removeClass(l).eq(I).addClass(l);
};
}
if(e.auto)
{
A=function(){
if(e.first_pic_delay_time!==0&&e.first_pic_delay_time!==e.timeout)
{
first_rotate=setTimeout(function(){
h.stop(true,true);
var I=o+1<p?o+1:0;
if(e.pager||e.manualControls)
{
x(I);
}
z(I);
w=setInterval(function(){
h.stop(true,true);
var J=o+1<p?o+1:0;
if(e.pager||e.manualControls)
{
x(J);
}
z(J);
},G);
},e.first_pic_delay_time);
}
else{
w=setInterval(function(){
h.stop(true,true);
var I=o+1<p?o+1:0;
if(e.pager||e.manualControls)
{
x(I);
}
z(I);
},G);
}
};
A();
}
v=function(){
if(e.auto)
{
clearInterval(w);
A();
}
};
if(e.pause)
{
j.hover(function(){
clearInterval(w);
},function(){
v();
});
}
if(e.pager||e.manualControls)
{
i.bind("click",function(I){
I.preventDefault();
if(!e.pauseControls)
{
v();
}
var J=i.index(this);
if(o===J||a("."+F).queue('fx').length)
{
return;
}
x(J);
z(J);
}).eq(0).closest("li").addClass(l);
if(e.pauseControls)
{
i.hover(function(){
clearInterval(w);
},function(){
v();
});
}
}
if(e.nav)
{
var u="<a href='#' class='"+t+" prev'>"+e.prevText+"</a>"+"<a href='#' class='"+t+" next'>"+e.nextText+"</a>";
if(d.navContainer)
{
a(e.navContainer).append(u);
}
else{
j.after(u);
}
var k=a("."+s+"_nav"),g=k.filter(".prev");
k.bind("click",function(J){
J.preventDefault();
var I=a("."+F);
if(h.index(I)==(p-1))
{
if(e.lastNavDisable&&a(this)[0]!==g[0])
{
return;
}
}
if(I.queue('fx').length)
{
return;
}
var K=h.index(I),M=K-1,L=K+1<p?o+1:0;
z(a(this)[0]===g[0]?M:L);
if(e.pager||e.manualControls)
{
x(a(this)[0]===g[0]?M:L);
}
if(!e.pauseControls)
{
v();
}
});
if(e.pauseControls)
{
k.hover(function(){
clearInterval(w);
},function(){
v();
});
}
}
}
if(typeof document.body.style.maxWidth==="undefined"&&d.maxwidth)
{
var H=function(){
j.css("width","100%");
if(j.width()>q)
{
j.css("width",q);
}
};
H();
a(c).bind("resize",function(){
H();
});
}
});
};
})(jQuery,this,0);
