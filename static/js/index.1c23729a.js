/*! For license information please see index.1c23729a.js.LICENSE.txt */
"use strict";(self.webpackChunktucao=self.webpackChunktucao||[]).push([[198],{97199:function(t,n,e){var r;e.d(n,{$:function(){return r}}),function(t){t.Ok="ok",t.Exited="exited",t.Crashed="crashed",t.Abnormal="abnormal"}(r||(r={}))},13819:function(t,n,e){var r;e.d(n,{z:function(){return r}}),function(t){t.Fatal="fatal",t.Error="error",t.Warning="warning",t.Log="log",t.Info="info",t.Debug="debug",t.Critical="critical"}(r||(r={})),function(t){t.fromString=function(n){switch(n){case"debug":return t.Debug;case"info":return t.Info;case"warn":case"warning":return t.Warning;case"error":return t.Error;case"fatal":return t.Fatal;case"critical":return t.Critical;case"log":default:return t.Log}}}(r||(r={}))},15506:function(t,n,e){var r;e.d(n,{q:function(){return r}}),function(t){t.Unknown="unknown",t.Skipped="skipped",t.Success="success",t.RateLimit="rate_limit",t.Invalid="invalid",t.Failed="failed"}(r||(r={})),function(t){t.fromHttpCode=function(n){return n>=200&&n<300?t.Success:429===n?t.RateLimit:n>=400&&n<500?t.Invalid:n>=500?t.Failed:t.Unknown}}(r||(r={}))},58464:function(t,n,e){e.d(n,{R:function(){return o}});var r=e(67597);function o(t){try{for(var n=t,e=[],r=0,o=0,u=" > ".length,c=void 0;n&&r++<5&&!("html"===(c=i(n))||r>1&&o+e.length*u+c.length>=80);)e.push(c),o+=c.length,n=n.parentNode;return e.reverse().join(" > ")}catch(t){return"<unknown>"}}function i(t){var n,e,o,i,u,c=t,a=[];if(!c||!c.tagName)return"";if(a.push(c.tagName.toLowerCase()),c.id&&a.push("#"+c.id),(n=c.className)&&(0,r.HD)(n))for(e=n.split(/\s+/),u=0;u<e.length;u++)a.push("."+e[u]);var f=["type","name","title","alt"];for(u=0;u<f.length;u++)o=f[u],(i=c.getAttribute(o))&&a.push("["+o+'="'+i+'"]');return a.join("")}},30292:function(t,n,e){e.d(n,{l:function(){return u}});var r=e(70655),o=e(80409),i=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,u=function(){function t(t){"string"==typeof t?this._fromString(t):this._fromComponents(t),this._validate()}return t.prototype.toString=function(t){void 0===t&&(t=!1);var n=this,e=n.host,r=n.path,o=n.pass,i=n.port,u=n.projectId;return n.protocol+"://"+n.user+(t&&o?":"+o:"")+"@"+e+(i?":"+i:"")+"/"+(r?r+"/":r)+u},t.prototype._fromString=function(t){var n=i.exec(t);if(!n)throw new o.b("Invalid Dsn");var e=(0,r.CR)(n.slice(1),6),u=e[0],c=e[1],a=e[2],f=void 0===a?"":a,s=e[3],l=e[4],h=void 0===l?"":l,p="",d=e[5],v=d.split("/");if(v.length>1&&(p=v.slice(0,-1).join("/"),d=v.pop()),d){var y=d.match(/^\d+/);y&&(d=y[0])}this._fromComponents({host:s,pass:f,path:p,projectId:d,port:h,protocol:u,user:c})},t.prototype._fromComponents=function(t){this.protocol=t.protocol,this.user=t.user,this.pass=t.pass||"",this.host=t.host,this.port=t.port||"",this.path=t.path||"",this.projectId=t.projectId},t.prototype._validate=function(){var t=this;if(["protocol","user","host","projectId"].forEach((function(n){if(!t[n])throw new o.b("Invalid Dsn: "+n+" missing")})),!this.projectId.match(/^\d+$/))throw new o.b("Invalid Dsn: Invalid projectId "+this.projectId);if("http"!==this.protocol&&"https"!==this.protocol)throw new o.b("Invalid Dsn: Invalid protocol "+this.protocol);if(this.port&&isNaN(parseInt(this.port,10)))throw new o.b("Invalid Dsn: Invalid port "+this.port)},t}()},80409:function(t,n,e){e.d(n,{b:function(){return i}});var r=e(70655),o=e(11786),i=function(t){function n(n){var e=this.constructor,r=t.call(this,n)||this;return r.message=n,r.name=e.prototype.constructor.name,(0,o.f)(r,e.prototype),r}return(0,r.ZT)(n,t),n}(Error)},9732:function(t,n,e){e.d(n,{o:function(){return d}});var r,o=e(70655),i=e(67597),u=e(12343),c=e(62844),a=e(20535),f=e(30360),s=e(8823),l=(0,c.Rf)(),h={},p={};function d(t){t&&"string"==typeof t.type&&"function"==typeof t.callback&&(h[t.type]=h[t.type]||[],h[t.type].push(t.callback),function(t){if(!p[t])switch(p[t]=!0,t){case"console":"console"in l&&["debug","info","warn","error","log","assert"].forEach((function(t){t in l.console&&(0,a.hl)(l.console,t,(function(n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];v("console",{args:e,level:t}),n&&Function.prototype.apply.call(n,l.console,e)}}))}));break;case"dom":"document"in l&&(l.document.addEventListener("click",w("click",v.bind(null,"dom")),!1),l.document.addEventListener("keypress",E(v.bind(null,"dom")),!1),["EventTarget","Node"].forEach((function(t){var n=l[t]&&l[t].prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&((0,a.hl)(n,"addEventListener",(function(t){return function(n,e,r){return e&&e.handleEvent?("click"===n&&(0,a.hl)(e,"handleEvent",(function(t){return function(n){return w("click",v.bind(null,"dom"))(n),t.call(this,n)}})),"keypress"===n&&(0,a.hl)(e,"handleEvent",(function(t){return function(n){return E(v.bind(null,"dom"))(n),t.call(this,n)}}))):("click"===n&&w("click",v.bind(null,"dom"),!0)(this),"keypress"===n&&E(v.bind(null,"dom"))(this)),t.call(this,n,e,r)}})),(0,a.hl)(n,"removeEventListener",(function(t){return function(n,e,r){try{t.call(this,n,e.__sentry_wrapped__,r)}catch(t){}return t.call(this,n,e,r)}})))})));break;case"xhr":!function(){if("XMLHttpRequest"in l){var t=[],n=[],e=XMLHttpRequest.prototype;(0,a.hl)(e,"open",(function(e){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var u=this,c=r[1];u.__sentry_xhr__={method:(0,i.HD)(r[0])?r[0].toUpperCase():r[0],url:r[1]},(0,i.HD)(c)&&"POST"===u.__sentry_xhr__.method&&c.match(/sentry_key/)&&(u.__sentry_own_request__=!0);var f=function(){if(4===u.readyState){try{u.__sentry_xhr__&&(u.__sentry_xhr__.status_code=u.status)}catch(t){}try{var e=t.indexOf(u);if(-1!==e){t.splice(e);var o=n.splice(e)[0];u.__sentry_xhr__&&void 0!==o[0]&&(u.__sentry_xhr__.body=o[0])}}catch(t){}v("xhr",{args:r,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:u})}};return"onreadystatechange"in u&&"function"==typeof u.onreadystatechange?(0,a.hl)(u,"onreadystatechange",(function(t){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return f(),t.apply(u,n)}})):u.addEventListener("readystatechange",f),e.apply(u,r)}})),(0,a.hl)(e,"send",(function(e){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return t.push(this),n.push(r),v("xhr",{args:r,startTimestamp:Date.now(),xhr:this}),e.apply(this,r)}}))}}();break;case"fetch":(0,s.t$)()&&(0,a.hl)(l,"fetch",(function(t){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var r={args:n,fetchData:{method:y(n),url:_(n)},startTimestamp:Date.now()};return v("fetch",(0,o.pi)({},r)),t.apply(l,n).then((function(t){return v("fetch",(0,o.pi)((0,o.pi)({},r),{endTimestamp:Date.now(),response:t})),t}),(function(t){throw v("fetch",(0,o.pi)((0,o.pi)({},r),{endTimestamp:Date.now(),error:t})),t}))}}));break;case"history":!function(){if((0,s.Bf)()){var t=l.onpopstate;l.onpopstate=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var o=l.location.href,i=r;if(r=o,v("history",{from:i,to:o}),t)return t.apply(this,n)},(0,a.hl)(l.history,"pushState",n),(0,a.hl)(l.history,"replaceState",n)}function n(t){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var o=n.length>2?n[2]:void 0;if(o){var i=r,u=String(o);r=u,v("history",{from:i,to:u})}return t.apply(this,n)}}}();break;case"error":x=l.onerror,l.onerror=function(t,n,e,r,o){return v("error",{column:r,error:o,line:e,msg:t,url:n}),!!x&&x.apply(this,arguments)};break;case"unhandledrejection":j=l.onunhandledrejection,l.onunhandledrejection=function(t){return v("unhandledrejection",t),!j||j.apply(this,arguments)};break;default:u.k.warn("unknown instrumentation type:",t)}}(t.type))}function v(t,n){var e,r;if(t&&h[t])try{for(var i=(0,o.XA)(h[t]||[]),c=i.next();!c.done;c=i.next()){var a=c.value;try{a(n)}catch(n){u.k.error("Error while triggering instrumentation handler.\nType: "+t+"\nName: "+(0,f.$)(a)+"\nError: "+n)}}}catch(t){e={error:t}}finally{try{c&&!c.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}}function y(t){return void 0===t&&(t=[]),"Request"in l&&(0,i.V9)(t[0],Request)&&t[0].method?String(t[0].method).toUpperCase():t[1]&&t[1].method?String(t[1].method).toUpperCase():"GET"}function _(t){return void 0===t&&(t=[]),"string"==typeof t[0]?t[0]:"Request"in l&&(0,i.V9)(t[0],Request)?t[0].url:String(t[0])}var g,m,b=0;function w(t,n,e){return void 0===e&&(e=!1),function(r){g=void 0,r&&m!==r&&(m=r,b&&clearTimeout(b),e?b=setTimeout((function(){n({event:r,name:t})})):n({event:r,name:t}))}}function E(t){return function(n){var e;try{e=n.target}catch(t){return}var r=e&&e.tagName;r&&("INPUT"===r||"TEXTAREA"===r||e.isContentEditable)&&(g||w("input",t)(n),clearTimeout(g),g=setTimeout((function(){g=void 0}),1e3))}}var x=null,j=null},67597:function(t,n,e){function r(t){switch(Object.prototype.toString.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return v(t,Error)}}function o(t){return"[object ErrorEvent]"===Object.prototype.toString.call(t)}function i(t){return"[object DOMError]"===Object.prototype.toString.call(t)}function u(t){return"[object DOMException]"===Object.prototype.toString.call(t)}function c(t){return"[object String]"===Object.prototype.toString.call(t)}function a(t){return null===t||"object"!=typeof t&&"function"!=typeof t}function f(t){return"[object Object]"===Object.prototype.toString.call(t)}function s(t){return"undefined"!=typeof Event&&v(t,Event)}function l(t){return"undefined"!=typeof Element&&v(t,Element)}function h(t){return"[object RegExp]"===Object.prototype.toString.call(t)}function p(t){return Boolean(t&&t.then&&"function"==typeof t.then)}function d(t){return f(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t}function v(t,n){try{return t instanceof n}catch(t){return!1}}e.d(n,{VZ:function(){return r},VW:function(){return o},TX:function(){return i},fm:function(){return u},HD:function(){return c},pt:function(){return a},PO:function(){return f},cO:function(){return s},kK:function(){return l},Kj:function(){return h},J8:function(){return p},Cy:function(){return d},V9:function(){return v}})},12343:function(t,n,e){e.d(n,{k:function(){return c}});var r=e(62844),o=(0,r.Rf)(),i="Sentry Logger ",u=function(){function t(){this._enabled=!1}return t.prototype.disable=function(){this._enabled=!1},t.prototype.enable=function(){this._enabled=!0},t.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._enabled&&(0,r.Cf)((function(){o.console.log(i+"[Log]: "+t.join(" "))}))},t.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._enabled&&(0,r.Cf)((function(){o.console.warn(i+"[Warn]: "+t.join(" "))}))},t.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._enabled&&(0,r.Cf)((function(){o.console.error(i+"[Error]: "+t.join(" "))}))},t}();o.__SENTRY__=o.__SENTRY__||{};var c=o.__SENTRY__.logger||(o.__SENTRY__.logger=new u)},32004:function(t,n,e){e.d(n,{_:function(){return r}});var r=function(){function t(){this._hasWeakSet="function"==typeof WeakSet,this._inner=this._hasWeakSet?new WeakSet:[]}return t.prototype.memoize=function(t){if(this._hasWeakSet)return!!this._inner.has(t)||(this._inner.add(t),!1);for(var n=0;n<this._inner.length;n++)if(this._inner[n]===t)return!0;return this._inner.push(t),!1},t.prototype.unmemoize=function(t){if(this._hasWeakSet)this._inner.delete(t);else for(var n=0;n<this._inner.length;n++)if(this._inner[n]===t){this._inner.splice(n,1);break}},t}()},62844:function(t,n,e){e.d(n,{Rf:function(){return i},DM:function(){return u},en:function(){return c},jH:function(){return a},Cf:function(){return f},Db:function(){return s},EG:function(){return l},l4:function(){return h},JY:function(){return p}});var r=e(61422),o={};function i(){return(0,r.KV)()?e.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:o}function u(){var t=i(),n=t.crypto||t.msCrypto;if(void 0!==n&&n.getRandomValues){var e=new Uint16Array(8);n.getRandomValues(e),e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(t){for(var n=t.toString(16);n.length<4;)n="0"+n;return n};return r(e[0])+r(e[1])+r(e[2])+r(e[3])+r(e[4])+r(e[5])+r(e[6])+r(e[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=16*Math.random()|0;return("x"===t?n:3&n|8).toString(16)}))}function c(t){if(!t)return{};var n=t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!n)return{};var e=n[6]||"",r=n[8]||"";return{host:n[4],path:n[5],protocol:n[2],relative:n[5]+e+r}}function a(t){if(t.message)return t.message;if(t.exception&&t.exception.values&&t.exception.values[0]){var n=t.exception.values[0];return n.type&&n.value?n.type+": "+n.value:n.type||n.value||t.event_id||"<unknown>"}return t.event_id||"<unknown>"}function f(t){var n=i();if(!("console"in n))return t();var e=n.console,r={};["debug","info","warn","error","log","assert"].forEach((function(t){t in n.console&&e[t].__sentry_original__&&(r[t]=e[t],e[t]=e[t].__sentry_original__)}));var o=t();return Object.keys(r).forEach((function(t){e[t]=r[t]})),o}function s(t,n,e){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].value=t.exception.values[0].value||n||"",t.exception.values[0].type=t.exception.values[0].type||e||"Error"}function l(t,n){void 0===n&&(n={});try{t.exception.values[0].mechanism=t.exception.values[0].mechanism||{},Object.keys(n).forEach((function(e){t.exception.values[0].mechanism[e]=n[e]}))}catch(t){}}function h(){try{return document.location.href}catch(t){return""}}function p(t,n){if(!n)return 6e4;var e=parseInt(""+n,10);if(!isNaN(e))return 1e3*e;var r=Date.parse(""+n);return isNaN(r)?6e4:r-t}},61422:function(t,n,e){function r(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)}function o(t,n){return t.require(n)}e.d(n,{KV:function(){return r},l$:function(){return o}}),t=e.hmd(t)},20535:function(t,n,e){e.d(n,{hl:function(){return f},_j:function(){return s},Qy:function(){return h},Fv:function(){return v},zf:function(){return y},Jr:function(){return _}});var r=e(70655),o=e(58464),i=e(67597),u=e(32004),c=e(30360),a=e(57321);function f(t,n,e){if(n in t){var r=t[n],o=e(r);if("function"==typeof o)try{o.prototype=o.prototype||{},Object.defineProperties(o,{__sentry_original__:{enumerable:!1,value:r}})}catch(t){}t[n]=o}}function s(t){return Object.keys(t).map((function(n){return encodeURIComponent(n)+"="+encodeURIComponent(t[n])})).join("&")}function l(t){if((0,i.VZ)(t)){var n=t,e={message:n.message,name:n.name,stack:n.stack};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}if((0,i.cO)(t)){var u=t,c={};c.type=u.type;try{c.target=(0,i.kK)(u.target)?(0,o.R)(u.target):Object.prototype.toString.call(u.target)}catch(t){c.target="<unknown>"}try{c.currentTarget=(0,i.kK)(u.currentTarget)?(0,o.R)(u.currentTarget):Object.prototype.toString.call(u.currentTarget)}catch(t){c.currentTarget="<unknown>"}for(var r in"undefined"!=typeof CustomEvent&&(0,i.V9)(t,CustomEvent)&&(c.detail=u.detail),u)Object.prototype.hasOwnProperty.call(u,r)&&(c[r]=u);return c}return t}function h(t,n,e){void 0===n&&(n=3),void 0===e&&(e=102400);var r,o=v(t,n);return r=o,function(t){return~-encodeURI(t).split(/%..|./).length}(JSON.stringify(r))>e?h(t,n-1,e):o}function p(t,n){return"domain"===n&&t&&"object"==typeof t&&t._events?"[Domain]":"domainEmitter"===n?"[DomainEmitter]":void 0!==e.g&&t===e.g?"[Global]":"undefined"!=typeof window&&t===window?"[Window]":"undefined"!=typeof document&&t===document?"[Document]":(0,i.Cy)(t)?"[SyntheticEvent]":"number"==typeof t&&t!=t?"[NaN]":void 0===t?"[undefined]":"function"==typeof t?"[Function: "+(0,c.$)(t)+"]":"symbol"==typeof t?"["+String(t)+"]":"bigint"==typeof t?"[BigInt: "+String(t)+"]":t}function d(t,n,e,r){if(void 0===e&&(e=1/0),void 0===r&&(r=new u._),0===e)return function(t){var n=Object.prototype.toString.call(t);if("string"==typeof t)return t;if("[object Object]"===n)return"[Object]";if("[object Array]"===n)return"[Array]";var e=p(t);return(0,i.pt)(e)?e:n}(n);if(null!=n&&"function"==typeof n.toJSON)return n.toJSON();var o=p(n,t);if((0,i.pt)(o))return o;var c=l(n),a=Array.isArray(n)?[]:{};if(r.memoize(n))return"[Circular ~]";for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(a[f]=d(f,c[f],e-1,r));return r.unmemoize(n),a}function v(t,n){try{return JSON.parse(JSON.stringify(t,(function(t,e){return d(t,e,n)})))}catch(t){return"**non-serializable**"}}function y(t,n){void 0===n&&(n=40);var e=Object.keys(l(t));if(e.sort(),!e.length)return"[object has no keys]";if(e[0].length>=n)return(0,a.$G)(e[0],n);for(var r=e.length;r>0;r--){var o=e.slice(0,r).join(", ");if(!(o.length>n))return r===e.length?o:(0,a.$G)(o,n)}return""}function _(t){var n,e;if((0,i.PO)(t)){var o=t,u={};try{for(var c=(0,r.XA)(Object.keys(o)),a=c.next();!a.done;a=c.next()){var f=a.value;void 0!==o[f]&&(u[f]=_(o[f]))}}catch(t){n={error:t}}finally{try{a&&!a.done&&(e=c.return)&&e.call(c)}finally{if(n)throw n.error}}return u}return Array.isArray(t)?t.map(_):t}},11786:function(t,n,e){e.d(n,{f:function(){return r}});var r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,n){return t.__proto__=n,t}:function(t,n){for(var e in n)t.hasOwnProperty(e)||(t[e]=n[e]);return t})},81227:function(t,n,e){e.d(n,{D:function(){return i}});var r=e(80409),o=e(96893),i=function(){function t(t){this._limit=t,this._buffer=[]}return t.prototype.isReady=function(){return void 0===this._limit||this.length()<this._limit},t.prototype.add=function(t){var n=this;return this.isReady()?(-1===this._buffer.indexOf(t)&&this._buffer.push(t),t.then((function(){return n.remove(t)})).then(null,(function(){return n.remove(t).then(null,(function(){}))})),t):o.c.reject(new r.b("Not adding Promise due to buffer limit reached."))},t.prototype.remove=function(t){return this._buffer.splice(this._buffer.indexOf(t),1)[0]},t.prototype.length=function(){return this._buffer.length},t.prototype.drain=function(t){var n=this;return new o.c((function(e){var r=setTimeout((function(){t&&t>0&&e(!1)}),t);o.c.all(n._buffer).then((function(){clearTimeout(r),e(!0)})).then(null,(function(){e(!0)}))}))},t}()},30360:function(t,n,e){e.d(n,{$:function(){return o}});var r="<anonymous>";function o(t){try{return t&&"function"==typeof t&&t.name||r}catch(t){return r}}},57321:function(t,n,e){e.d(n,{$G:function(){return o},nK:function(){return i},zC:function(){return u}});var r=e(67597);function o(t,n){return void 0===n&&(n=0),"string"!=typeof t||0===n||t.length<=n?t:t.substr(0,n)+"..."}function i(t,n){if(!Array.isArray(t))return"";for(var e=[],r=0;r<t.length;r++){var o=t[r];try{e.push(String(o))}catch(t){e.push("[value cannot be serialized]")}}return e.join(n)}function u(t,n){return!!(0,r.HD)(t)&&((0,r.Kj)(n)?n.test(t):"string"==typeof n&&-1!==t.indexOf(n))}},8823:function(t,n,e){e.d(n,{Ak:function(){return i},t$:function(){return c},hv:function(){return a},Bf:function(){return f}});var r=e(12343),o=e(62844);function i(){if(!("fetch"in(0,o.Rf)()))return!1;try{return new Headers,new Request(""),new Response,!0}catch(t){return!1}}function u(t){return t&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())}function c(){if(!i())return!1;var t=(0,o.Rf)();if(u(t.fetch))return!0;var n=!1,e=t.document;if(e&&"function"==typeof e.createElement)try{var c=e.createElement("iframe");c.hidden=!0,e.head.appendChild(c),c.contentWindow&&c.contentWindow.fetch&&(n=u(c.contentWindow.fetch)),e.head.removeChild(c)}catch(t){r.k.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return n}function a(){if(!i())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch(t){return!1}}function f(){var t=(0,o.Rf)(),n=t.chrome,e=n&&n.app&&n.app.runtime,r="history"in t&&!!t.history.pushState&&!!t.history.replaceState;return!e&&r}},96893:function(t,n,e){e.d(n,{c:function(){return i}});var r,o=e(67597);!function(t){t.PENDING="PENDING",t.RESOLVED="RESOLVED",t.REJECTED="REJECTED"}(r||(r={}));var i=function(){function t(t){var n=this;this._state=r.PENDING,this._handlers=[],this._resolve=function(t){n._setResult(r.RESOLVED,t)},this._reject=function(t){n._setResult(r.REJECTED,t)},this._setResult=function(t,e){n._state===r.PENDING&&((0,o.J8)(e)?e.then(n._resolve,n._reject):(n._state=t,n._value=e,n._executeHandlers()))},this._attachHandler=function(t){n._handlers=n._handlers.concat(t),n._executeHandlers()},this._executeHandlers=function(){if(n._state!==r.PENDING){var t=n._handlers.slice();n._handlers=[],t.forEach((function(t){t.done||(n._state===r.RESOLVED&&t.onfulfilled&&t.onfulfilled(n._value),n._state===r.REJECTED&&t.onrejected&&t.onrejected(n._value),t.done=!0)}))}};try{t(this._resolve,this._reject)}catch(t){this._reject(t)}}return t.resolve=function(n){return new t((function(t){t(n)}))},t.reject=function(n){return new t((function(t,e){e(n)}))},t.all=function(n){return new t((function(e,r){if(Array.isArray(n))if(0!==n.length){var o=n.length,i=[];n.forEach((function(n,u){t.resolve(n).then((function(t){i[u]=t,0==(o-=1)&&e(i)})).then(null,r)}))}else e([]);else r(new TypeError("Promise.all requires an array as input."))}))},t.prototype.then=function(n,e){var r=this;return new t((function(t,o){r._attachHandler({done:!1,onfulfilled:function(e){if(n)try{return void t(n(e))}catch(t){return void o(t)}else t(e)},onrejected:function(n){if(e)try{return void t(e(n))}catch(t){return void o(t)}else o(n)}})}))},t.prototype.catch=function(t){return this.then((function(t){return t}),t)},t.prototype.finally=function(n){var e=this;return new t((function(t,r){var o,i;return e.then((function(t){i=!1,o=t,n&&n()}),(function(t){i=!0,o=t,n&&n()})).then((function(){i?r(o):t(o)}))}))},t.prototype.toString=function(){return"[object SyncPromise]"},t}()},21170:function(t,n,e){e.d(n,{yW:function(){return f}});var r=e(62844),o=e(61422);t=e.hmd(t);var i,u={nowSeconds:function(){return Date.now()/1e3}},c=(0,o.KV)()?function(){try{return(0,o.l$)(t,"perf_hooks").performance}catch(t){return}}():function(){var t=(0,r.Rf)().performance;if(t&&t.now)return{now:function(){return t.now()},timeOrigin:Date.now()-t.now()}}(),a=void 0===c?u:{nowSeconds:function(){return(c.timeOrigin+c.now())/1e3}},f=u.nowSeconds.bind(u);a.nowSeconds.bind(a),(i=(0,r.Rf)().performance)&&(i.timeOrigin?i.timeOrigin:i.timing&&i.timing.navigationStart||Date.now())}}]);
//# sourceMappingURL=index.1c23729a.js.map