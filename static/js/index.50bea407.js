/*! For license information please see index.50bea407.js.LICENSE.txt */
"use strict";(self.webpackChunktucao=self.webpackChunktucao||[]).push([[7069],{2378:function(e,t,r){r.d(t,{z:function(){return c}});var n=r(87462),s=r(51721),o=r(67294),a=r(73935),i=r(83078),c=function(e){return function(t){function r(e){var r;return(r=t.call(this,e)||this).state={showBrowser:!!e.showBrowser||!1},r}(0,s.Z)(r,t);var c=r.prototype;return c.openBrowser=function(e){e.stopPropagation(),e.preventDefault(),this.setState({showBrowser:!0})},c.closeBrowser=function(e){e.stopPropagation(),e.preventDefault(),this.props.onClose&&this.props.onClose(),this.setState({showBrowser:!1})},c.render=function(){var t,r=this,s=this.state,c=this.props;return o.createElement(o.Fragment,null,e&&o.createElement(e,(0,n.Z)({},c,{onClick:function(e){return r.openBrowser(e)}})),s.showBrowser&&(0,a.createPortal)(o.createElement(i.z,{onClick:function(e){return r.closeBrowser(e)},dark:!0},o.createElement("div",{className:"browser-image-mask"},o.createElement("div",{className:"browser-image-container"},o.createElement("img",{alt:"�Ŵ���ͼƬ",src:(t=c.src,t.replace("_thumb",""))})))),document.body))},r}(o.Component)}},99087:function(e,t,r){r.d(t,{z:function(){return n.z}});var n=r(2378)},71073:function(e,t,r){r.d(t,{Y:function(){return A}});var n=r(67294),s=r(45697),o=r.n(s),a=r(94184),i=r.n(a),c=r(63075),l=r(38861),u=(0,r(99087).z)(l.w),A=function(e){return n.createElement(c.Z.div,{className:"image_mobile"},e.imgList.map((function(t,r){return n.createElement(c.Z.div,{className:i()({desc_pic_one:1===e.imgList.length,desc_pic_list:1!==e.imgList.length}),key:r},n.createElement(u,{className:"pic_img",src:m(t.thumb_url)}))})))},m=function(e){return e.replace(/^https?:/i,"")};A.defaultProps={imgList:[],thumb_url:""},A.propTypes={imgList:o().array}},88243:function(e,t){var r=window.IntersectionObserver?new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var t=e.target;t.dataset.src&&(t.src=t.dataset.src,t.dataset.srcset&&(t.srcset=t.dataset.srcset),t.classList.remove("lazy"),r.unobserve(t))}}))})):(console.log("LazyImage ���� IntersectionObserver API����ǰ runtime �������� API������ polyfill"),{observe:function(){},unobserve:function(){}});t.Z=r},88927:function(e,t,r){r.d(t,{FL:function(){return A},jQ:function(){return m},d2:function(){return f},ah:function(){return g}});var n=r(68924),s=r.n(n),o=r(64724),a=/\[(\d|\D)*?\]/g,i="[΢Ц][Ʋ��][ɫ][����][����][����][����][����][˯][���][����][��ŭ][��Ƥ][����][����][�ѹ�][��][�亹][ץ��][��][͵Ц][���][����][����][����][��][����][����][��Ц][����][�ܶ�][����][����][��][��][����][˥][����][�ô�][�ټ�][����][�ٱ�][����][�ܴ���][��Ц][��ߺ�][�Һߺ�][��Ƿ][����][ί��][�����][����][����][��][����][�˵�][����][ơ��][����][ƹ��][����][��][��ͷ][õ��][��л][�촽][����][����][����][����][ը��][��][����][ư��][���][����][̫��][����][ӵ��][ǿ][��][����][ʤ��][��ȭ][����][ȭͷ][�][����][NO][OK][����][����][����][����][���][תȦ][��ͷ][��ͷ][����][Ͷ��]".match(a),c=[],l={};i.forEach((function(e,t){var r={msg:e,index:t,clazz:"expression-"+(t+1)+"-2x",src:"./img/Expression_"+(t+1)+"@2x.png"};c.push(r),l[e]=r}));var u={REG_EXP:a,LIST:c,MAP:l},A=function(e){return void 0===e&&(e=""),e.replace(/\n/g,"<br />")},m=function(e){void 0===e&&(e="");var t=e;return t.replace(/\[[\w\u4E00-\u9FA5]+\]/g,(function(e){return f(e)}))},f=function(e){void 0===e&&(e="");var t=u.MAP[e];if(!t)return console.log("���ǺϷ�����:"+e),e;var r=document.createElement("img");return r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",r.className="Expression_"+(t.index+1),r.alt=e,r.title=e,r.outerHTML},g=function(e,t){var r,n=m(e);return n=function(e,t){return e.replace(/https?:\/\/[\w\.\/:\-=#!]+(\?[\w=&;#!\.\-]+)?/g,(function(e){return'<a href="'+(0,o.b2)(e,t)+'" target="_blank" class="goto-link">'+e+"</a>"}))}(n=A(n),t),{__html:(r=n,n=s()(r,{whiteList:{a:["target","href","title","class"],p:["style"],span:["style"],div:["style"],pre:["style"],u:["style"],br:[],em:[],ol:[],ul:[],li:[],strong:[],img:["class","height","width","alt","title"],i:["class"],figure:["class","style"],figcaption:[],blockquote:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],table:["style"],tbody:[],thead:[],tr:[],td:[],th:["scope"]},stripIgnoreTagBody:!0,allowCommentTag:!1,onIgnoreTagAttr:function(e,t,r,n){if("img"===e&&"src"===t)return[/^https?:\/\//,/^mailto:/,/^tel:/,/^#/,/^\//].concat([/^data:image\/gif;base64,R0lGODlhAQABAIAAAAAAAP\/\/\/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7/]).find((function(e){return e.test(r)}))?t+'="'+r+'"':""}}))}}},7765:function(e,t,r){var n=r(87462),s=r(63366),o=r(67294),a=r(94184),i=r.n(a),c=r(63075),l=["content","className","previewImg","isText"],u=o.forwardRef((function(e,t){var r=e.content,a=e.className,u=(e.previewImg,e.isText),A=(0,s.Z)(e,l),m=r.replace(/<img(.*?)>/g,(function(e,t){return'<img alt="�������" '+t+" />"})),f=(0,n.Z)({className:i()("rich-text","skeleton-multi",a),key:!m,dangerouslySetInnerHTML:{__html:m},ref:t},A);return u?o.createElement(c.Z.span,f):o.createElement(c.Z.div,f)}));t.Z=u}}]);
//# sourceMappingURL=index.50bea407.js.map