(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=m(e,i,4);var o=!w(r)&&g.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=b(r,e);for(var u=null!=t&&t.length,i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t){var r=S.length,e=n.constructor,u=g.isFunction(e)&&e.prototype||o,i="constructor";for(g.has(n,i)&&!g.contains(t,i)&&t.push(i);r--;)(i=S[r])in n&&n[i]!==u[i]&&!g.contains(t,i)&&t.push(i)}var e=this,u=e._,i=Array.prototype,o=Object.prototype,a=Function.prototype,c=i.push,l=i.slice,f=o.toString,s=o.hasOwnProperty,p=Array.isArray,h=Object.keys,v=a.bind,y=Object.create,d=function(){},g=function(n){return n instanceof g?n:this instanceof g?void(this._wrapped=n):new g(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=g),exports._=g):e._=g,g.VERSION="1.8.2";var m=function(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},b=function(n,t,r){return null==n?g.identity:g.isFunction(n)?m(n,t,r):g.isObject(n)?g.matcher(n):g.property(n)};g.iteratee=function(n,t){return b(n,t,1/0)};var x=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var l=o[c];t&&void 0!==r[l]||(r[l]=i[l])}return r}},_=function(n){if(!g.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},j=Math.pow(2,53)-1,w=function(n){var t=n&&n.length;return"number"==typeof t&&t>=0&&j>=t};g.each=g.forEach=function(n,t,r){var e,u;if(t=m(t,r),w(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=g.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},g.map=g.collect=function(n,t,r){t=b(t,r);for(var e=!w(n)&&g.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},g.reduce=g.foldl=g.inject=n(1),g.reduceRight=g.foldr=n(-1),g.find=g.detect=function(n,t,r){var e;return void 0!==(e=w(n)?g.findIndex(n,t,r):g.findKey(n,t,r))&&-1!==e?n[e]:void 0},g.filter=g.select=function(n,t,r){var e=[];return t=b(t,r),g.each(n,(function(n,r,u){t(n,r,u)&&e.push(n)})),e},g.reject=function(n,t,r){return g.filter(n,g.negate(b(t)),r)},g.every=g.all=function(n,t,r){t=b(t,r);for(var e=!w(n)&&g.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},g.some=g.any=function(n,t,r){t=b(t,r);for(var e=!w(n)&&g.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},g.contains=g.includes=g.include=function(n,t,r){return w(n)||(n=g.values(n)),g.indexOf(n,t,"number"==typeof r&&r)>=0},g.invoke=function(n,t){var r=l.call(arguments,2),e=g.isFunction(t);return g.map(n,(function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)}))},g.pluck=function(n,t){return g.map(n,g.property(t))},g.where=function(n,t){return g.filter(n,g.matcher(t))},g.findWhere=function(n,t){return g.find(n,g.matcher(t))},g.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n)for(var a=0,c=(n=w(n)?n:g.values(n)).length;c>a;a++)(e=n[a])>i&&(i=e);else t=b(t,r),g.each(n,(function(n,r,e){((u=t(n,r,e))>o||u===-1/0&&i===-1/0)&&(i=n,o=u)}));return i},g.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n)for(var a=0,c=(n=w(n)?n:g.values(n)).length;c>a;a++)e=n[a],i>e&&(i=e);else t=b(t,r),g.each(n,(function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)}));return i},g.shuffle=function(n){for(var t,r=w(n)?n:g.values(n),e=r.length,u=Array(e),i=0;e>i;i++)(t=g.random(0,i))!==i&&(u[i]=u[t]),u[t]=r[i];return u},g.sample=function(n,t,r){return null==t||r?(w(n)||(n=g.values(n)),n[g.random(n.length-1)]):g.shuffle(n).slice(0,Math.max(0,t))},g.sortBy=function(n,t,r){return t=b(t,r),g.pluck(g.map(n,(function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}})).sort((function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index-t.index})),"value")};var A=function(n){return function(t,r,e){var u={};return r=b(r,e),g.each(t,(function(e,i){var o=r(e,i,t);n(u,e,o)})),u}};g.groupBy=A((function(n,t,r){g.has(n,r)?n[r].push(t):n[r]=[t]})),g.indexBy=A((function(n,t,r){n[r]=t})),g.countBy=A((function(n,t,r){g.has(n,r)?n[r]++:n[r]=1})),g.toArray=function(n){return n?g.isArray(n)?l.call(n):w(n)?g.map(n,g.identity):g.values(n):[]},g.size=function(n){return null==n?0:w(n)?n.length:g.keys(n).length},g.partition=function(n,t,r){t=b(t,r);var e=[],u=[];return g.each(n,(function(n,r,i){(t(n,r,i)?e:u).push(n)})),[e,u]},g.first=g.head=g.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:g.initial(n,n.length-t)},g.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},g.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:g.rest(n,Math.max(0,n.length-t))},g.rest=g.tail=g.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},g.compact=function(n){return g.filter(n,g.identity)};var k=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=n&&n.length;a>o;o++){var c=n[o];if(w(c)&&(g.isArray(c)||g.isArguments(c))){t||(c=k(c,t,r));var l=0,f=c.length;for(u.length+=f;f>l;)u[i++]=c[l++]}else r||(u[i++]=c)}return u};g.flatten=function(n,t){return k(n,t,!1)},g.without=function(n){return g.difference(n,l.call(arguments,1))},g.uniq=g.unique=function(n,t,r,e){if(null==n)return[];g.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=b(r,e));for(var u=[],i=[],o=0,a=n.length;a>o;o++){var c=n[o],l=r?r(c,o,n):c;t?(o&&i===l||u.push(c),i=l):r?g.contains(i,l)||(i.push(l),u.push(c)):g.contains(u,c)||u.push(c)}return u},g.union=function(){return g.uniq(k(arguments,!0,!0))},g.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!g.contains(t,i)){for(var o=1;r>o&&g.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},g.difference=function(n){var t=k(arguments,!0,!0,1);return g.filter(n,(function(n){return!g.contains(t,n)}))},g.zip=function(){return g.unzip(arguments)},g.unzip=function(n){for(var t=n&&g.max(n,"length").length||0,r=Array(t),e=0;t>e;e++)r[e]=g.pluck(n,e);return r},g.object=function(n,t){for(var r={},e=0,u=n&&n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},g.indexOf=function(n,t,r){var e=0,u=n&&n.length;if("number"==typeof r)e=0>r?Math.max(0,u+r):r;else if(r&&u)return n[e=g.sortedIndex(n,t)]===t?e:-1;if(t!=t)return g.findIndex(l.call(n,e),g.isNaN);for(;u>e;e++)if(n[e]===t)return e;return-1},g.lastIndexOf=function(n,t,r){var e=n?n.length:0;if("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1)),t!=t)return g.findLastIndex(l.call(n,0,e),g.isNaN);for(;--e>=0;)if(n[e]===t)return e;return-1},g.findIndex=t(1),g.findLastIndex=t(-1),g.sortedIndex=function(n,t,r,e){for(var u=(r=b(r,e,1))(t),i=0,o=n.length;o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},g.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var O=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=_(n.prototype),o=n.apply(i,u);return g.isObject(o)?o:i};g.bind=function(n,t){if(v&&n.bind===v)return v.apply(n,l.call(arguments,1));if(!g.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return O(n,e,t,this,r.concat(l.call(arguments)))};return e},g.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===g?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return O(n,r,this,this,i)};return r},g.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)n[r=arguments[t]]=g.bind(n[r],n);return n},g.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return g.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},g.delay=function(n,t){var r=l.call(arguments,2);return setTimeout((function(){return n.apply(null,r)}),t)},g.defer=g.partial(g.delay,g,1),g.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=!1===r.leading?0:g.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var l=g.now();a||!1!==r.leading||(a=l);var f=t-(l-a);return e=this,u=arguments,0>=f||f>t?(o&&(clearTimeout(o),o=null),a=l,i=n.apply(e,u),o||(e=u=null)):o||!1===r.trailing||(o=setTimeout(c,f)),i}},g.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var l=g.now()-o;t>l&&l>=0?e=setTimeout(c,t-l):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=g.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(a=n.apply(i,u),i=u=null),a}},g.wrap=function(n,t){return g.partial(t,n)},g.negate=function(n){return function(){return!n.apply(this,arguments)}},g.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},g.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},g.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},g.once=g.partial(g.before,2);var F=!{toString:null}.propertyIsEnumerable("toString"),S=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];g.keys=function(n){if(!g.isObject(n))return[];if(h)return h(n);var t=[];for(var e in n)g.has(n,e)&&t.push(e);return F&&r(n,t),t},g.allKeys=function(n){if(!g.isObject(n))return[];var t=[];for(var e in n)t.push(e);return F&&r(n,t),t},g.values=function(n){for(var t=g.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},g.mapObject=function(n,t,r){t=b(t,r);for(var e,u=g.keys(n),i=u.length,o={},a=0;i>a;a++)o[e=u[a]]=t(n[e],e,n);return o},g.pairs=function(n){for(var t=g.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},g.invert=function(n){for(var t={},r=g.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},g.functions=g.methods=function(n){var t=[];for(var r in n)g.isFunction(n[r])&&t.push(r);return t.sort()},g.extend=x(g.allKeys),g.extendOwn=g.assign=x(g.keys),g.findKey=function(n,t,r){t=b(t,r);for(var e,u=g.keys(n),i=0,o=u.length;o>i;i++)if(t(n[e=u[i]],e,n))return e},g.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;g.isFunction(t)?(u=g.allKeys(o),e=m(t,r)):(u=k(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var l=u[a],f=o[l];e(f,l,o)&&(i[l]=f)}return i},g.omit=function(n,t,r){if(g.isFunction(t))t=g.negate(t);else{var e=g.map(k(arguments,!1,!1,1),String);t=function(n,t){return!g.contains(e,t)}}return g.pick(n,t,r)},g.defaults=x(g.allKeys,!0),g.clone=function(n){return g.isObject(n)?g.isArray(n)?n.slice():g.extend({},n):n},g.tap=function(n,t){return t(n),n},g.isMatch=function(n,t){var r=g.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var E=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof g&&(n=n._wrapped),t instanceof g&&(t=t._wrapped);var u=f.call(n);if(u!==f.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(g.isFunction(o)&&o instanceof o&&g.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}e=e||[];for(var c=(r=r||[]).length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if((c=n.length)!==t.length)return!1;for(;c--;)if(!E(n[c],t[c],r,e))return!1}else{var l,s=g.keys(n);if(c=s.length,g.keys(t).length!==c)return!1;for(;c--;)if(l=s[c],!g.has(t,l)||!E(n[l],t[l],r,e))return!1}return r.pop(),e.pop(),!0};g.isEqual=function(n,t){return E(n,t)},g.isEmpty=function(n){return null==n||(w(n)&&(g.isArray(n)||g.isString(n)||g.isArguments(n))?0===n.length:0===g.keys(n).length)},g.isElement=function(n){return!(!n||1!==n.nodeType)},g.isArray=p||function(n){return"[object Array]"===f.call(n)},g.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},g.each(["Arguments","Function","String","Number","Date","RegExp","Error"],(function(n){g["is"+n]=function(t){return f.call(t)==="[object "+n+"]"}})),g.isArguments(arguments)||(g.isArguments=function(n){return g.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(g.isFunction=function(n){return"function"==typeof n||!1}),g.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},g.isNaN=function(n){return g.isNumber(n)&&n!==+n},g.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===f.call(n)},g.isNull=function(n){return null===n},g.isUndefined=function(n){return void 0===n},g.has=function(n,t){return null!=n&&s.call(n,t)},g.noConflict=function(){return e._=u,this},g.identity=function(n){return n},g.constant=function(n){return function(){return n}},g.noop=function(){},g.property=function(n){return function(t){return null==t?void 0:t[n]}},g.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},g.matcher=g.matches=function(n){return n=g.extendOwn({},n),function(t){return g.isMatch(t,n)}},g.times=function(n,t,r){var e=Array(Math.max(0,n));t=m(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},g.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},g.now=Date.now||function(){return(new Date).getTime()};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},N=g.invert(M),I=function(n){var t=function(t){return n[t]},r="(?:"+g.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};g.escape=I(M),g.unescape=I(N),g.result=function(n,t,r){var e=null==n?void 0:n[t];return void 0===e&&(e=r),g.isFunction(e)?e.call(n):e};var B=0;g.uniqueId=function(n){var t=++B+"";return n?n+t:t},g.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},q=/\\|'|\r|\n|\u2028|\u2029/g,K=function(n){return"\\"+R[n]};g.template=function(n,t,r){!t&&r&&(t=r),t=g.defaults({},t,g.templateSettings);var e=RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,(function(t,r,e,o,a){return i+=n.slice(u,a).replace(q,K),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t})),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(n){throw n.source=i,n}var a=function(n){return o.call(this,n,g)},c=t.variable||"obj";return a.source="function("+c+"){\n"+i+"}",a},g.chain=function(n){var t=g(n);return t._chain=!0,t};var z=function(n,t){return n._chain?g(t).chain():t};g.mixin=function(n){g.each(g.functions(n),(function(t){var r=g[t]=n[t];g.prototype[t]=function(){var n=[this._wrapped];return c.apply(n,arguments),z(this,r.apply(g,n))}}))},g.mixin(g),g.each(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var t=i[n];g.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],z(this,r)}})),g.each(["concat","join","slice"],(function(n){var t=i[n];g.prototype[n]=function(){return z(this,t.apply(this._wrapped,arguments))}})),g.prototype.value=function(){return this._wrapped},g.prototype.valueOf=g.prototype.toJSON=g.prototype.value,g.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return g})}).call(this);