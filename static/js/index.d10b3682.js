/*! For license information please see index.d10b3682.js.LICENSE.txt */
"use strict";(self.webpackChunktucao=self.webpackChunktucao||[]).push([[9226],{9226:function(e,r,t){t.d(r,{MN:function(){return X},CC:function(){return re},dT:function(){return ne},mW:function(){return oe},rs:function(){return ce},uq:function(){return fe},Fs:function(){return ue},Oh:function(){return me},GR:function(){return ye},fS:function(){return we},qp:function(){return ge},Z7:function(){return ze},i6:function(){return Se},W:function(){return Ee}});var n=t(94184),l=t.n(n);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}function c(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&t.path)}},t.exports),t.exports}var i=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var p=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,l=u(e),o=1;o<arguments.length;o++){for(var a in t=Object(arguments[o]))f.call(t,a)&&(l[a]=t[a]);if(i){n=i(t);for(var c=0;c<n.length;c++)s.call(t,n[c])&&(l[n[c]]=t[n[c]])}}return l},m="function"==typeof Symbol&&Symbol.for,v=m?Symbol.for("react.element"):60103,y=m?Symbol.for("react.portal"):60106,d=m?Symbol.for("react.fragment"):60107,w=m?Symbol.for("react.strict_mode"):60108,h=m?Symbol.for("react.profiler"):60114,g=m?Symbol.for("react.provider"):60109,_=m?Symbol.for("react.context"):60110,z=m?Symbol.for("react.forward_ref"):60112,b=m?Symbol.for("react.suspense"):60113,S=m?Symbol.for("react.memo"):60115,x=m?Symbol.for("react.lazy"):60116,E="function"==typeof Symbol&&Symbol.iterator;function N(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,r,t){this.props=e,this.context=r,this.refs=j,this.updater=t||R}function k(){}function C(e,r,t){this.props=e,this.context=r,this.refs=j,this.updater=t||R}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(N(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=O.prototype;var M=C.prototype=new k;M.constructor=C,p(M,O.prototype),M.isPureReactComponent=!0;var $={current:null},P=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function L(e,r,t){var n,l={},o=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(o=""+r.key),r)P.call(r,n)&&!A.hasOwnProperty(n)&&(l[n]=r[n]);var c=arguments.length-2;if(1===c)l.children=t;else if(1<c){for(var i=Array(c),f=0;f<c;f++)i[f]=arguments[f+2];l.children=i}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===l[n]&&(l[n]=c[n]);return{$$typeof:v,type:e,key:o,ref:a,props:l,_owner:$.current}}function B(e){return"object"==typeof e&&null!==e&&e.$$typeof===v}var H=/\/+/g,V=[];function q(e,r,t,n){if(V.length){var l=V.pop();return l.result=e,l.keyPrefix=r,l.func=t,l.context=n,l.count=0,l}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>V.length&&V.push(e)}function T(e,r,t,n){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var o=!1;if(null===e)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case v:case y:o=!0}}if(o)return t(n,e,""===r?"."+F(e,0):r),1;if(o=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var c=r+F(l=e[a],a);o+=T(l,c,t,n)}else if("function"==typeof(c=null===e||"object"!=typeof e?null:"function"==typeof(c=E&&e[E]||e["@@iterator"])?c:null))for(e=c.call(e),a=0;!(l=e.next()).done;)o+=T(l=l.value,c=r+F(l,a++),t,n);else if("object"===l)throw t=""+e,Error(N(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return o}function U(e,r,t){return null==e?0:T(e,"",r,t)}function F(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function D(e,r){e.func.call(e.context,r,e.count++)}function W(e,r,t){var n=e.result,l=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?G(e,n,t,(function(e){return e})):null!=e&&(B(e)&&(e=function(e,r){return{$$typeof:v,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,l+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(H,"$&/")+"/")+t)),n.push(e))}function G(e,r,t,n,l){var o="";null!=t&&(o=(""+t).replace(H,"$&/")+"/"),U(e,W,r=q(r,o,n,l)),I(r)}var Y={current:null};function Z(){var e=Y.current;if(null===e)throw Error(N(321));return e}var J={Children:{map:function(e,r,t){if(null==e)return e;var n=[];return G(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;U(e,D,r=q(null,null,r,t)),I(r)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var r=[];return G(e,r,null,(function(e){return e})),r},only:function(e){if(!B(e))throw Error(N(143));return e}},Component:O,Fragment:d,Profiler:h,PureComponent:C,StrictMode:w,Suspense:b,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:$,IsSomeRendererActing:{current:!1},assign:p},cloneElement:function(e,r,t){if(null==e)throw Error(N(267,e));var n=p({},e.props),l=e.key,o=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(o=r.ref,a=$.current),void 0!==r.key&&(l=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in r)P.call(r,i)&&!A.hasOwnProperty(i)&&(n[i]=void 0===r[i]&&void 0!==c?c[i]:r[i])}var i=arguments.length-2;if(1===i)n.children=t;else if(1<i){c=Array(i);for(var f=0;f<i;f++)c[f]=arguments[f+2];n.children=c}return{$$typeof:v,type:e.type,key:l,ref:o,props:n,_owner:a}},createContext:function(e,r){return void 0===r&&(r=null),(e={$$typeof:_,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:g,_context:e},e.Consumer=e},createElement:L,createFactory:function(e){var r=L.bind(null,e);return r.type=e,r},createRef:function(){return{current:null}},forwardRef:function(e){return{$$typeof:z,render:e}},isValidElement:B,lazy:function(e){return{$$typeof:x,_ctor:e,_status:-1,_result:null}},memo:function(e,r){return{$$typeof:S,type:e,compare:void 0===r?null:r}},useCallback:function(e,r){return Z().useCallback(e,r)},useContext:function(e,r){return Z().useContext(e,r)},useDebugValue:function(){},useEffect:function(e,r){return Z().useEffect(e,r)},useImperativeHandle:function(e,r,t){return Z().useImperativeHandle(e,r,t)},useLayoutEffect:function(e,r){return Z().useLayoutEffect(e,r)},useMemo:function(e,r){return Z().useMemo(e,r)},useReducer:function(e,r,t){return Z().useReducer(e,r,t)},useRef:function(e){return Z().useRef(e)},useState:function(e){return Z().useState(e)},version:"16.14.0"};c((function(e,r){}));var K=c((function(e){e.exports=J}));function Q(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-arrow_down_line "+t:"coral-icon-arrow_down_line",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M11.993 16.993a.997.997 0 01-.707-.293L3.293 8.707a.999.999 0 111.414-1.414l7.287 7.286 7.3-7.287a1 1 0 011.412 1.415L12.7 16.701a.996.996 0 01-.706.292",fillRule:"evenodd"}))}!function(e,r){void 0===r&&(r={});var t=r.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===t&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".coral-icon {\n  font-size: 24px;\n  width: 1em;\n  height: 1em;\n}\n");var X=K.forwardRef(Q);function ee(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-arrow_left_line "+t:"coral-icon-arrow_left_line",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M15.994 21a1 1 0 01-.708-.293L7.292 12.7a.999.999 0 01.001-1.413l7.994-7.994a.999.999 0 111.414 1.414l-7.287 7.287 7.288 7.299A1.001 1.001 0 0115.994 21",fillRule:"evenodd"}))}var re=K.forwardRef(ee);function te(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-arrow_right_line "+t:"coral-icon-arrow_right_line",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M8 21a.999.999 0 01-.707-1.707l7.287-7.287-7.288-7.299a1.001 1.001 0 011.416-1.414l7.994 8.007a.999.999 0 010 1.413l-7.995 7.994A.997.997 0 018 21",fillRule:"evenodd"}))}var ne=K.forwardRef(te);function le(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-arrowdown_fill "+t:"coral-icon-arrowdown_fill",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M12.664 21.747l.043-.04 5.814-6.537a1 1 0 00-.748-1.665L15 13.506v-9a2 2 0 00-2-2h-2a2 2 0 00-2 2v9H6.227a1 1 0 00-.748 1.664l5.774 6.494a1 1 0 001.411.083z",fillRule:"evenodd"}))}var oe=K.forwardRef(le);function ae(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-arrowright_fill "+t:"coral-icon-arrowright_fill",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M21.242 12.664l-.083.083-6.495 5.774A1 1 0 0113 17.773V15H4a2 2 0 01-2-2v-2a2 2 0 012-2h9V6.227a1 1 0 011.664-.748l6.495 5.774a1 1 0 01.083 1.411z",fillRule:"evenodd"}))}var ce=K.forwardRef(ae);function ie(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-arrowup_fill "+t:"coral-icon-arrowup_fill",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M12.664 2.758l.083.083 5.774 6.495A1 1 0 0117.773 11H15v9a2 2 0 01-2 2h-2a2 2 0 01-2-2v-9H6.227a1 1 0 01-.748-1.664l5.774-6.495a1 1 0 011.411-.083z",fillRule:"evenodd"}))}var fe=K.forwardRef(ie);function se(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-close_fill "+t:"coral-icon-close_fill",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.375 5c-.16 0-.32.061-.442.183L12 11.116 8.067 7.183a.623.623 0 00-.884 0 .624.624 0 000 .884L11.116 12l-3.933 3.933a.624.624 0 10.884.884L12 12.884l3.933 3.933a.623.623 0 00.884 0 .624.624 0 000-.884L12.884 12l3.933-3.933A.624.624 0 0016.375 7z",fillRule:"evenodd"}))}var ue=K.forwardRef(se);function pe(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-close_line "+t:"coral-icon-close_line",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M13.414 12l6.293-6.293a.999.999 0 10-1.414-1.414L12 10.586 5.707 4.293a.997.997 0 00-1.414 0 .999.999 0 000 1.414L10.586 12l-6.293 6.293a.999.999 0 101.414 1.414L12 13.414l6.293 6.293a.997.997 0 001.414 0 .999.999 0 000-1.414L13.414 12z",fillRule:"evenodd"}))}var me=K.forwardRef(pe);function ve(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-correct_fill "+t:"coral-icon-correct_fill",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.243 7a1 1 0 00-1.32-.083L14.828 9l-4.242 4.243-1.414-1.415a1 1 0 00-1.498 1.32l.083.095 2.122 2.121a1 1 0 001.32.083l.094-.083 4.95-4.95a1 1 0 000-1.414z"}))}var ye=K.forwardRef(ve);function de(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-image_line "+t:"coral-icon-image_line",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3zm0 2H5a1 1 0 00-1 1v10a1 1 0 001 1h1l9-9 5 5V7a1 1 0 00-1-1zm-4 5.828L8.828 18H19a1 1 0 001-1v-.172l-5-5zM7.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",fillRule:"evenodd"}))}var we=K.forwardRef(de);function he(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-info_fill "+t:"coral-icon-info_fill",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2zm0 8a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm0-3a1 1 0 100 2 1 1 0 000-2z",fillRule:"evenodd"}))}var ge=K.forwardRef(he);function _e(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-this_moment_line "+t:"coral-icon-this_moment_line",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2zm1 2.062V7a1 1 0 01-2 0V4.062A8.017 8.017 0 004.062 11H7a1 1 0 010 2H4.062A8.017 8.017 0 0011 19.939V17a1 1 0 012 0v2.938A8.017 8.017 0 0019.939 13L17 13a1 1 0 010-2h2.938A8.017 8.017 0 0013 4.062zM12 10a2 2 0 110 4 2 2 0 010-4z",fillRule:"evenodd"}))}var ze=K.forwardRef(_e);function be(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-time_line "+t:"coral-icon-time_line",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 2a1 1 0 011 1v4.586l2.707 2.707a.999.999 0 11-1.414 1.414l-2.999-2.999A1 1 0 0111 12V7a1 1 0 011-1z",fillRule:"evenodd"}))}var Se=K.forwardRef(be);function xe(e,r){var t=e.className,n=e.fill,c=e.color,i=e.size,f=e.style,s=a(e,["className","fill","color","size","style"]),u=t?"coral-icon-up_to_top_line "+t:"coral-icon-up_to_top_line",p=o({fontSize:i,fill:n||c},f);return K.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:l()("coral-icon",u),style:p,ref:r},s),K.createElement("path",{d:"M12.714 9.333l7.993 7.993a.999.999 0 11-1.414 1.414l-7.287-7.287-7.3 7.288a1 1 0 01-1.412-1.416l8.007-7.993a1 1 0 011.413.001zM20 5a1 1 0 110 2H4a1 1 0 110-2z",fillRule:"evenodd"}))}var Ee=K.forwardRef(xe)}}]);
//# sourceMappingURL=index.d10b3682.js.map