/*! For license information please see index.49db05eb.js.LICENSE.txt */
"use strict";(self.webpackChunktucao=self.webpackChunktucao||[]).push([[5312],{16238:function(r,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(r){return(0,i.default)(r)};var n,i=(n=t(25477))&&n.__esModule?n:{default:n};r.exports=e.default},50638:function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(r){return"string"==typeof r&&t.test(r)};var t=/-webkit-|-moz-|-ms-/;r.exports=e.default},25477:function(r,e,t){t.r(e);var n=/[A-Z]/g,i=/^ms-/,o={};function a(r){return"-"+r.toLowerCase()}e.default=function(r){if(o.hasOwnProperty(r))return o[r];var e=r.replace(n,a);return o[r]=i.test(e)?"-"+e:e}},5312:function(r,e,t){function n(r){return r.charAt(0).toUpperCase()+r.slice(1)}function i(r,e,t){if(r.hasOwnProperty(e)){for(var i={},o=r[e],a=n(e),l=Object.keys(t),d=0;d<l.length;d++){var f=l[d];if(f===e)for(var s=0;s<o.length;s++)i[o[s]+a]=t[e];i[f]=t[f]}return i}return t}function o(r,e,t,n,i){for(var o=0,a=r.length;o<a;++o){var l=r[o](e,t,n,i);if(l)return l}}function a(r,e){-1===r.indexOf(e)&&r.push(e)}function l(r,e){if(Array.isArray(e))for(var t=0,n=e.length;t<n;++t)a(r,e[t]);else a(r,e)}function d(r){return r instanceof Object&&!Array.isArray(r)}function f(r){var e=r.prefixMap,t=r.plugins;return function r(n){for(var a in n){var f=n[a];if(d(f))n[a]=r(f);else if(Array.isArray(f)){for(var s=[],u=0,c=f.length;u<c;++u)l(s,o(t,a,f[u],n,e)||f[u]);s.length>0&&(n[a]=s)}else{var p=o(t,a,f,n,e);p&&(n[a]=p),n=i(e,a,n)}}return n}}t.r(e),t.d(e,{createPrefixer:function(){return f},prefix:function(){return _}});var s=["Webkit"],u=["ms"],c=["Webkit","ms"],p={plugins:[],prefixMap:{appearance:["Webkit","Moz"],textEmphasisPosition:s,textEmphasis:s,textEmphasisStyle:s,textEmphasisColor:s,boxDecorationBreak:s,maskImage:s,maskMode:s,maskRepeat:s,maskPosition:s,maskClip:s,maskOrigin:s,maskSize:s,maskComposite:s,mask:s,maskBorderSource:s,maskBorderMode:s,maskBorderSlice:s,maskBorderWidth:s,maskBorderOutset:s,maskBorderRepeat:s,maskBorder:s,maskType:s,textDecorationStyle:s,textDecorationSkip:s,textDecorationLine:s,textDecorationColor:s,userSelect:["Webkit","Moz","ms"],backdropFilter:s,fontKerning:s,scrollSnapType:c,scrollSnapPointsX:c,scrollSnapPointsY:c,scrollSnapDestination:c,scrollSnapCoordinate:c,clipPath:s,shapeImageThreshold:s,shapeImageMargin:s,shapeImageOutside:s,filter:s,hyphens:c,flowInto:c,flowFrom:c,breakBefore:c,breakAfter:c,breakInside:c,regionFragment:c,writingMode:c,textOrientation:s,tabSize:["Moz"],fontFeatureSettings:s,columnCount:s,columnFill:s,columnGap:s,columnRule:s,columnRuleColor:s,columnRuleStyle:s,columnRuleWidth:s,columns:s,columnSpan:s,columnWidth:s,wrapFlow:u,wrapThrough:u,wrapMargin:u,textSizeAdjust:c}},m=["-webkit-","-moz-",""],g={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0},b=t(50638),k=t.n(b),h=["-webkit-",""],y=["-webkit-",""],x={flex:["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex","flex"],"inline-flex":["-webkit-inline-box","-moz-inline-box","-ms-inline-flexbox","-webkit-inline-flex","inline-flex"]},S={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple"},B={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines",flexGrow:"WebkitBoxFlex"},W=["-webkit-","-moz-",""],w=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi,v=function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var t=[],n=!0,i=!1,o=void 0;try{for(var a,l=r[Symbol.iterator]();!(n=(a=l.next()).done)&&(t.push(a.value),!e||t.length!==e);n=!0);}catch(r){i=!0,o=r}finally{try{!n&&l.return&&l.return()}finally{if(i)throw o}}return t}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function M(r){return"number"==typeof r&&!isNaN(r)}function C(r){return"string"==typeof r&&r.includes("/")}var E=["center","end","start","stretch"],z={"inline-grid":["-ms-inline-grid","inline-grid"],grid:["-ms-grid","grid"]},O={alignSelf:function(r,e){E.indexOf(r)>-1&&(e.msGridRowAlign=r)},gridColumn:function(r,e){if(M(r))e.msGridColumn=r;else if(C(r)){var t=r.split("/"),n=v(t,2),i=n[0],o=n[1];O.gridColumnStart(+i,e);var a=o.split(/ ?span /),l=v(a,2),d=l[0],f=l[1];""===d?O.gridColumnEnd(+i+ +f,e):O.gridColumnEnd(+o,e)}else O.gridColumnStart(r,e)},gridColumnEnd:function(r,e){var t=e.msGridColumn;M(r)&&M(t)&&(e.msGridColumnSpan=r-t)},gridColumnStart:function(r,e){M(r)&&(e.msGridColumn=r)},gridRow:function(r,e){if(M(r))e.msGridRow=r;else if(C(r)){var t=r.split("/"),n=v(t,2),i=n[0],o=n[1];O.gridRowStart(+i,e);var a=o.split(/ ?span /),l=v(a,2),d=l[0],f=l[1];""===d?O.gridRowEnd(+i+ +f,e):O.gridRowEnd(+o,e)}else O.gridRowStart(r,e)},gridRowEnd:function(r,e){var t=e.msGridRow;M(r)&&M(t)&&(e.msGridRowSpan=r-t)},gridRowStart:function(r,e){M(r)&&(e.msGridRow=r)},gridTemplateColumns:function(r,e){e.msGridColumns=r},gridTemplateRows:function(r,e){e.msGridRows=r},justifySelf:function(r,e){E.indexOf(r)>-1&&(e.msGridColumnAlign=r)}},P=["-webkit-",""],A={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]},I=["-webkit-","-moz-",""],R={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},j={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0},G=t(16238),T=t.n(G),D={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},F={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"},_=f({prefixMap:p.prefixMap,plugins:[function(r,e){if("string"==typeof e&&"text"===e)return["-webkit-text","text"]},function(r,e){if("string"==typeof e&&!k()(e)&&e.indexOf("cross-fade(")>-1)return h.map((function(r){return e.replace(/cross-fade\(/g,r+"cross-fade(")}))},function(r,e){if("cursor"===r&&g.hasOwnProperty(e))return m.map((function(r){return r+e}))},function(r,e){if("string"==typeof e&&!k()(e)&&e.indexOf("filter(")>-1)return y.map((function(r){return e.replace(/filter\(/g,r+"filter(")}))},function(r,e,t){"flexDirection"===r&&"string"==typeof e&&(e.indexOf("column")>-1?t.WebkitBoxOrient="vertical":t.WebkitBoxOrient="horizontal",e.indexOf("reverse")>-1?t.WebkitBoxDirection="reverse":t.WebkitBoxDirection="normal"),B.hasOwnProperty(r)&&(t[B[r]]=S[e]||e)},function(r,e){if("string"==typeof e&&!k()(e)&&w.test(e))return W.map((function(r){return e.replace(w,(function(e){return r+e}))}))},function(r,e,t){if("display"===r&&e in z)return z[e];r in O&&(0,O[r])(e,t)},function(r,e){if("string"==typeof e&&!k()(e)&&e.indexOf("image-set(")>-1)return P.map((function(r){return e.replace(/image-set\(/g,r+"image-set(")}))},function(r,e,t){if(Object.prototype.hasOwnProperty.call(A,r))for(var n=A[r],i=0,o=n.length;i<o;++i)t[n[i]]=e},function(r,e){if("position"===r&&"sticky"===e)return["-webkit-sticky","sticky"]},function(r,e){if(R.hasOwnProperty(r)&&j.hasOwnProperty(e))return I.map((function(r){return r+e}))},function(r,e,t,i){if("string"==typeof e&&D.hasOwnProperty(r)){var o=function(r,e){if(k()(r))return r;for(var t=r.split(/,(?![^()]*(?:\([^()]*\))?\))/g),n=0,i=t.length;n<i;++n){var o=t[n],a=[o];for(var l in e){var d=T()(l);if(o.indexOf(d)>-1&&"order"!==d)for(var f=e[l],s=0,u=f.length;s<u;++s)a.unshift(o.replace(d,F[f[s]]+d))}t[n]=a.join(",")}return t.join(",")}(e,i),a=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter((function(r){return!/-moz-|-ms-/.test(r)})).join(",");if(r.indexOf("Webkit")>-1)return a;var l=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter((function(r){return!/-webkit-|-ms-/.test(r)})).join(",");return r.indexOf("Moz")>-1?l:(t["Webkit"+n(r)]=a,t["Moz"+n(r)]=l,o)}},function(r,e){if("display"===r&&x.hasOwnProperty(e))return x[e]}]})}}]);
//# sourceMappingURL=index.49db05eb.js.map