/*! For license information please see index.5556cd56.js.LICENSE.txt */
"use strict";(self.webpackChunktucao=self.webpackChunktucao||[]).push([[5113],{2968:function(t,e,s){s.d(e,{D:function(){return y}});var i=s(87462),n=s(51721),o=s(23282),a=s(77249),r=s(72252),c=s(85389),u=s(6328),p=s(79697),d=s(935),l=s(11348),f=s(67294),_=s(45697),h=s.n(_),L=s(9131),I=s(13501),g=s(13030),v=s(48915),y=function(t){function e(e){var s;return(s=t.call(this,e)||this).productId=e.productId,s.state={label:g.wS.INIT,isLoading:!0,pagination:{},noticeList:{},postsList:{},iWant:{},userList:{},post_liked:{},reply_liked:{},rewardInfo:{},tipBatchList:{}},s.isWilsonBeta=!0,s}(0,n.Z)(e,t),e.asyncGetLiked=function(t){var e=t.postIds,s=void 0===e?[]:e,i=t.replyIds,n=void 0===i?[]:i,a=t.productId,r=function t(e,s,i){return new Promise((function(n){if(0===s.length)return n();if(s.length>200){var a=(0,o.Z)(s,200).map((function(s){return t(e,s,i)}));Promise.all(a).then((function(t){return n((0,u.Z)(t))}))}else"post"===i&&(0,L.post_api_v2_posts_liked)({productId:e,ids:s}).then((function(t){return n(t.data)})),"reply"===i&&(0,L.post_api_post_reply_liked)({productId:e,ids:s}).then((function(t){return n(t.data)}))}))};return new Promise((function(t){Promise.all([r(a,s,"post"),r(a,n,"reply")]).then(t)}))},e.mergeLiked=function(t,e){var s=t.id;if(e.post[s]&&(t.is_liked=e.post[s].like_flag,t.like_count=e.post[s].like_count),void 0!==t.replies){var i=Object.keys(t.replies);t.repliesLiked=(0,c.Z)(e.reply,i)}return t},e.calcLikeCount=function(t,e){return 0===t?e?0:1:e?t-1:t+1},e.sortList=function(t,e){var s=t.noticeList,n=t.postsList,o=t.userList,a=t.label,c=Object.keys(s),u=n;switch([g.wS.DEFAULT].includes(a)&&(u=(0,i.Z)({},u,o)),u=(0,r.Z)(u,c),e){case"wilson":u=(0,l.Z)(u,(function(t){return Number(t.wilson_score)})).reverse();break;default:u=(0,l.Z)(u,(function(t){return Number(1e3*t.created_at_timestamp)})).reverse()}var p=c.map((function(t){return s[t]})),d=function(t){switch(a){case g.wS.GOOD:return t.is_good;case g.wS.HIDDEN:return t.is_hidden;default:return!t.is_hidden}};return{noticeList:p=p.filter(d),postsList:u=u.filter(d)}},e.getListByLabel=function(t){return t===g.wS.GOOD?L.get_api_v2_posts_label_good:t===g.wS.SHOW?L.get_api_v2_posts_label_show:t===g.wS.HIDDEN?L.get_api_v2_posts_label_hidden:function(){return Promise.reject(new Error("��ʼ����Ʒ��ǩ"))}},e.getDiffIds=function(t,e){var s=(0,i.Z)({},t.noticeList,t.postsList),n=Object.keys(s),o=(0,i.Z)({},e.noticeList,e.postsList),r=Object.keys(o);return(0,a.Z)(r,n)},e.getLatestUserPosts=function(t){var e,s,i;return void 0===t&&(t={}),Object.keys(t).forEach((function(e){i=t[e],s?i.created_at_timestamp>s.created_at_timestamp&&(s=i):s=i})),s?((e={})[s.id]=s,e):{}};var s=e.prototype;return s.componentDidMount=function(){this._updateListByLabel()},s.componentDidUpdate=function(t,e){t.productInfo&&!t.productInfo.id||(e.label===g.wS.INIT&&this.initialLabel(t.productInfo&&t.productInfo.is_tencent_product&&t.productInfo.access_type===v.D.PRIVATE),e.label!==this.state.label&&this._updateListByLabel(),t.userData,this.props.userData,t.submitPostSuccess!==this.props.submitPostSuccess&&this.props.submitPostSuccess>0&&this.unshiftUserPost(),e.postsList===this.state.postsList&&e.noticeList===this.state.noticeList||this._updateLikedByList(e),e.postsList===this.state.postsList&&e.noticeList===this.state.noticeList||this._updateBatchByList(e))},s.initialLabel=function(t){var e=(0,I.v3)("label"),s=g.wS.DEFAULT;t&&(s=g.wS.SHOW),e&&(s=e),this.setState({label:s})},s.asyncDeletePostOrReply=function(t,e){var s=this,n=this.productId,o=this.state;if(e){var a=function(){["noticeList","postsList","userList"].filter((function(e){return o[e][t]})).forEach((function(n){var a=o[n][t];a.replies=(0,r.Z)(a.replies,e),a.reply_count=Object.keys(a.replies).length,s.setState((function(e){var s,o;return(o={})[n]=(0,i.Z)({},e[n],((s={})[t]=a,s)),o}))}))};return new Promise((function(s,i){(0,L.delete_api_posts_replies)({productId:n,postId:t,replyId:e}).then(a).then(s).catch(i)}))}return new Promise((function(e,i){(0,L.delete_api_posts)({productId:s.productId,postId:t}).then((function(){return s.deleteTargetPost(t)})).then(e).catch(i)}))},s.deleteTargetPost=function(t){this.setState((function(e){return{noticeList:(0,r.Z)(e.noticeList,t),postsList:(0,r.Z)(e.postsList,t),userList:(0,r.Z)(e.userList,t)}}))},s.asyncLiked=function(t){var s=t.postId,n=t.replyId,o=this.productId,a=this.state;if(n){var r=a.reply_liked[n]||{like_flag:!1,like_count:0},c=r.like_flag,u=r.like_count,p=c?"off":"on";return this.setState((function(t){var s;return{reply_liked:(0,i.Z)({},t.reply_liked,(s={},s[n]={like_flag:!c,like_count:e.calcLikeCount(u,c)},s))}})),(0,L.post_api_posts_replies_liked)({productId:o,postId:s,replyId:n,val:p})}var d=a.post_liked[s]||{like_flag:!1,like_count:0},l=d.like_flag,f=d.like_count,_=l?"off":"on";return this.setState((function(t){var n;return{post_liked:(0,i.Z)({},t.post_liked,(n={},n[s]={like_flag:!l,like_count:e.calcLikeCount(f,l)},n))}})),(0,L.post_api_posts_liked)({productId:o,postId:s,val:_})},s.asyncUpdateReplies=function(t,e){var s=this,n=this.state;return(0,L.get_api_posts_replies)({productId:this.productId,postId:t}).then((function(o){var a,r,c=((a={})[e]=(r=o.data[e],(0,i.Z)({},r,{f_reply_text:r.content,f_reply_id:r.id})),a);["userList","noticeList","postsList"].filter((function(e){return n[e][t]})).forEach((function(e){var o=n[e][t];o.replies=(0,i.Z)({},o.replies,c),o.reply_count=Object.keys(o.replies).length,s.setState((function(s){var n,a;return(a={})[e]=(0,i.Z)({},s[e],((n={})[t]=o,n)),a}))}))}))},s.updatePostAttr=function(t){var e=this,s=t.postData,n=t.opt,o=t.val;if(s&&s.id){var a=this.state,c=s.id;if("del"!==n)if("top"!==n)["noticeList","postsList","userList"].forEach((function(t){a[t][c]&&e.setState((function(e){var n,o,a=e[t],r=a[c],u=(0,i.Z)({},r,{is_hidden:s.is_hidden,is_locked:s.is_locked,is_spam:s.is_spam,is_good:s.is_good});return(o={})[t]=(0,i.Z)({},a,((n={})[c]=u,n)),o}))}));else{if("on"===o){var u,p=a.postsList[c],d=(0,i.Z)({},p,{is_top:s.is_top});this.setState({noticeList:(0,i.Z)({},a.noticeList,(u={},u[c]=d,u)),postsList:(0,r.Z)(a.postsList,c)})}if("off"===o){var l,f=a.noticeList[c]||a.postsList[c],_=(0,i.Z)({},f,{is_top:s.is_top});this.setState({noticeList:(0,r.Z)(a.noticeList,c),postsList:(0,i.Z)({},a.postsList,(l={},l[c]=_,l))})}}else this.deleteTargetPost(c)}},s.asyncOperation=function(t){var e=this,s=t.postId,i=t.replyId,n=t.opt,o=t.val,a=this.productId;return new Promise(i?function(t,e){(0,L.post_api_v2_posts_replies)({productId:a,postId:s,replyId:i,opt:n,val:o}).then(t).catch(e)}:function(t,i){(0,L.post_api_v2_posts)({productId:a,postId:s,opt:n,val:o,scene:"post"}).then((function(t){return e.updatePostAttr({postData:t.data,opt:n,val:o})})).then(t).catch(i)})},s.asyncReport=function(t){var e=t.postId,s=t.replyId,i=t.value,n=this.productId;return new Promise((function(t,o){(0,L.post_api_abuse_reports)({productId:n,object_id:s||e,comment:i,object_type:s?"reply":"post"}).then(t).catch(o)}))},s.asyncGetTipBatchInfo=function(t){var e=this,s=this.productId;return new Promise((function(n,o){(0,L.post_api_tip_batch_info)({productId:s,postIdList:t}).then((function(t){e.setState((function(e){return{tipBatchList:(0,i.Z)({},e.tipBatchList,t.data)}}))})).then(n).catch(o)}))},s._updateListByLabel=function(){var t,s=this,n=this.state,o=this.productId,a=this.isWilsonBeta;t=n.label===g.wS.DEFAULT?a?"����ѷ":"��̬":"��ǩ",Promise.resolve().then((function(){switch(s.setState({isLoading:!0,pagination:{}}),t){case"��̬":return(0,L.get_api_v2_posts_static)({productId:o});case"����ѷ":return(0,L.get_api_v2_posts_wilson)({productId:o});case"��ǩ":return e.getListByLabel(n.label)({productId:o})}})).then((function(e){var n={};switch(t){case"��̬":case"����ѷ":if(!e.data.posts||!e.data.notice){n={postsList:[],noticeList:{},isLoading:!1};break}n={postsList:e.data.posts,noticeList:e.data.notice,isLoading:!1};break;case"��ǩ":n={postsList:e.data,noticeList:{},isLoading:!1,pagination:e.pagination}}e.data&&e.data.i_want_it&&e.data.i_want_it.id&&(n=(0,i.Z)({},n,{iWant:e.data.i_want_it})),s.setState(n)})).then((function(){})).catch((function(t){console.log(t)}))},s._updateLikedByList=function(t){var s=this,n=this.state,o=(this.props,this.productId),a=(0,i.Z)({},n.noticeList,n.postsList),r=e.getDiffIds(t,n),c=[];try{c=(0,u.Z)(r.map((function(t){return Object.keys(a[t].replies)})))}catch(t){return}0!==r.length&&e.asyncGetLiked({postIds:r,replyIds:c,productId:o}).then((function(t){var e=t[0],i=t[1];s.setState({post_liked:e||{},reply_liked:i||{}})}))},s.loadMore=function(){this.state.isLoading||this.getLabelPost()},s._updateBatchByList=function(t){var s=this,n=this.state,o=this.props,a=this.productId;if(o.batch){var r=e.getDiffIds(t,n);0!==r.length&&((0,L.post_api_tip_batch_list)({productId:a,postIdList:r}).then((function(t){s.setState((function(e){return{rewardInfo:(0,i.Z)({},e.rewardInfo,t.data)}}))})),this.asyncGetTipBatchInfo(r))}},s.setLabel=function(t){console.log("�л���ǩ:"+t),this.setState({label:t,pagination:{}})},s.isEmptyList=function(){var t=this.state;return Boolean((0,p.Z)(t.postsList)&&(0,p.Z)(t.noticeList)&&!t.pagination.has_more_pages&&!t.isLoading)},s.getLabelPost=function(){var t=this,s=this.state,n={productId:this.productId,next_page_id:s.pagination.next_page_id};e.getListByLabel(s.label)(n).then((function(e){var s=e.pagination,n=e.data;t.setState((function(t){return{pagination:s,postsList:(0,i.Z)({},t.postsList,(0,I.x_)(n))}}))}))},s.ifEmptyListSetHash=function(t){if(this.state.label===g.wS.DEFAULT)return!0;Boolean(Object.keys(t).length)||(console.log("��ǰ��Ʒ������Ϊ�գ��Զ��л�ΪĬ���б�"),this.setState({label:g.wS.DEFAULT}))},s.asyncGetDynamicPosts=function(t,e){void 0===t&&(t=!1),void 0===e&&(e=!0);var s=this.state,i={productId:this.productId,next_page_id:e?void 0:s.pagination.next_page_id,per_page:e?void 0:s.pagination.per_page};return(0,L.get_api_v2_posts_user)(i)},s.asyncGetUserData=function(){var t=this;this.state.label===g.wS.DEFAULT&&(this.props.userData.user_id||this.props.isOnPageShow)&&Promise.resolve(this.props.userData).then((function(t){return t.is_admin})).then((function(e){return t.asyncGetDynamicPosts(e)})).then((function(e){return t.asyncConnectPosts(e)}))},s.asyncConnectPosts=function(t,e){var s=this;if(void 0===e&&(e=3),t){var n=this.state;return new Promise((function(o){var a,r,c,u,p;try{r=(0,d.Z)(Object.keys(t.data).map((function(e){return t.data[e]}))),a=(0,d.Z)(Object.keys(n.postsList).map((function(t){return n.postsList[t]}))),c=Number(r.created_at_timestamp),u=Number(a.created_at_timestamp),p=Boolean(c>=u)}catch(t){p=!1}s.setState((function(e){return{userList:(0,i.Z)({},e.userList,t.data)}})),0!==e?(!s.props.userData.is_admin&&t.pagination.has_more_pages&&p&&s.asyncGetDynamicPosts(!1,!1).then((function(t){return s.asyncConnectPosts(t,e-1)})),o(t)):o(t)}))}},s.unshiftUserPost=function(){var t=this,s=this.props.userData.is_admin;this.asyncGetDynamicPosts(s).then((function(s){t.setState((function(t){var n=t.postsList;return{postsList:(0,i.Z)({},n,e.getLatestUserPosts(s.data))}}))}))},s.render=function(){var t=this,s=this.state,i=(this.props,this.productId),n=this.isWilsonBeta,o=(this.isEmptyList,{noticeList:s.noticeList,postsList:s.postsList,pagination:s.pagination,userList:s.userList,label:s.label}),a={post:s.post_liked,reply:s.reply_liked},r=n&&s.label===g.wS.DEFAULT?e.sortList(o,"wilson"):e.sortList(o),c=r.noticeList,u=r.postsList,p={noticeList:c=c.map((function(t){return e.mergeLiked(t,a)})),postsList:u=u.map((function(t){return e.mergeLiked(t,a)})),pagination:s.pagination,rewardInfo:s.rewardInfo,tipBatchList:s.tipBatchList,isLoading:s.isLoading};return s.label===g.wS.DEFAULT&&(p.iWant=s.iWant),s.label===g.wS.INIT?this.props.children(p):f.createElement(f.Fragment,null,f.createElement(g.ou,{productId:i,label:s.label,onChange:function(e){return t.setLabel(e)},userData:this.props.userData}),this.props.children(p))},e}(f.Component);y.defaultProps={submitPostSuccess:0,rewardInfo:{},postsData:{},userData:{},getPostListInfo:function(){return console.log("getPostListInfo û��")},getPostDataFromPostList:function(){return console.log("getPostDataFromPostList û��")}},y.propType={productId:h().number.isRequired,userData:h().shape({user_id:h().number,is_admin:h().bool}),submitPostSuccess:h().number,getPostDataFromPostList:h().func.isRequired,children:h().func.isRequired}},11848:function(t,e,s){s.d(e,{o:function(){return f},w:function(){return l}});var i=s(87462),n=s(67294),o=s(63075),a=s(45697),r=s.n(a),c=s(94184),u=s.n(c),p=s(34410),d=s(9131),l={INIT:"init",DEFAULT:"default",GOOD:"good",SHOW:"show",HIDDEN:"hidden"},f=function(t){var e=(0,n.useState)(t.label),s=e[0],a=e[1],r=(0,n.useState)([l.DEFAULT,l.SHOW]),c=r[0],f=r[1];(0,n.useEffect)((function(){(0,d.get_api_labels_overview)({productId:t.productId}).then((function(t){t.data.good_post.total&&f((function(t){return[].concat(t,[l.GOOD])}))}))}),[t.productId]),(0,n.useEffect)((function(){t.userData.is_admin&&f((function(t){return[].concat(t,[l.HIDDEN])}))}),[t.userData]);var _=[{key:l.DEFAULT,text:"�Ƽ�"},{key:l.SHOW,text:"����"},{key:l.GOOD,text:"������"},{key:l.HIDDEN,text:"������"}].filter((function(t){return c.includes(t.key)}));return n.createElement(o.Z.div,{className:"post_list_label"},n.createElement(o.Z.div,(0,i.Z)({className:"label_list"},(0,p.I)("tablist")),_.map((function(e){return n.createElement(o.Z.a,(0,i.Z)({key:e.key},(0,p.I)("tab"),{"aria-selected":s===e.key,className:u()("label_list__item",{"label_list__item--native":s===e.key}),onClick:function(){return i=e.key,void(s!==i&&(a(i),t.onChange(i)));var i},href:"#label="+e.key}),e.text)}))))};f.propTypes={onChange:r().func,label:r().string,productId:r().string.isRequired,userData:r().shape({user_id:r().number,is_admin:r().bool})}}}]);
//# sourceMappingURL=index.5556cd56.js.map