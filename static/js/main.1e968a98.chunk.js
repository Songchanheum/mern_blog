(this["webpackJsonpmern-blog"]=this["webpackJsonpmern-blog"]||[]).push([[0],{159:function(e,t,n){},160:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(53),c=n.n(r),s=(n(159),n(160),n(44)),i=(n(161),n(103)),l=n(19),o=n(27),j=n(72),d=n.n(j),u=(n(166),n(230)),b=n(206),x=n(21),O=n(146),p=n(207),h=n(208),m=n(209),f=n(2),g=function(e){var t,n=e.post,a=e.category;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.a,{roundedTop:"lg",w:"full",h:64,fit:"cover",src:(null===n||void 0===n?void 0:n.image)||"https://loremflickr.com/448/256",alt:null===n||void 0===n?void 0:n.tag}),Object(f.jsxs)(b.a,{p:6,children:[Object(f.jsxs)(b.a,{children:[Object(f.jsx)(x.a.span,{fontSize:"xs",textTransform:"uppercase",color:Object(O.c)("brand.600","brand.300"),cursor:"pointer",children:n.tag}),Object(f.jsx)(p.a,{display:"block",color:Object(O.c)("gray.800","white"),fontWeight:"bold",fontSize:"2xl",_hover:{color:"gray.500",textDecor:"underline"},href:null!=a?"".concat(n.tag,"/").concat(n._id):"posts/".concat(n.tag,"/").concat(n._id),children:n.title}),Object(f.jsx)(x.a.span,{mt:2,fontSize:"sm",fontStyle:"italic",color:Object(O.c)("gray.500","gray.500"),children:n.subtitle}),Object(f.jsx)(x.a.p,{mt:4,fontSize:"sm",color:Object(O.c)("gray.400","gray.400"),children:n.content.substring(0,225)+"..."})]}),Object(f.jsx)(b.a,{mt:4,children:Object(f.jsxs)(h.a,{alignItems:"center",children:[Object(f.jsxs)(h.a,{alignItems:"center",justify:"between",children:[Object(f.jsx)(u.a,{h:10,fit:"cover",rounded:"full",src:"https://source.unsplash.com/random/48x48",alt:"Avatar"}),Object(f.jsx)(p.a,{mx:2,fontWeight:"bold",color:Object(O.c)("gray.700","gray.200"),children:n.author})]}),Object(f.jsx)(m.a,{}),Object(f.jsx)(x.a.span,{mx:1,fontSize:"sm",color:Object(O.c)("gray.600","gray.300"),children:(t=n.createdAt,d()(t).fromNow())})]})})]})]})},v=n(7),y=n.n(v),S=n(12),C="FETCH_POSTS_LOADING",_="FETCH_POSTS_SUCCESS",w="FETCH_POSTS_FAIL",E="FETCH_SINGLE_POST_REQUEST",A="FETCH_SINGLE_POST_SUCCESS",T="FETCH_SINGLE_POST_FAIL",k="CREATE_POST_REQUEST",F="CREATE_POST_SUCCESS",I="CREATE_POST_FAIL",P="UPDATE_POST_REQUEST",z="UPDATE_POST_SUCCESS",D="UPDATE_POST_FAIL",H="DELETE_POST_REQUEST",L="DELETE_POST_SUCCESS",N="DELETE_POST_FAIL",R=n(70),q=n.n(R),B="http://localhost:9500/posts",U=function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get(B);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("".concat(B,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.post(B,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(S.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.patch("".concat(B,"/").concat(t),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.delete("".concat(B,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=n.p+"static/media/Loading.709feba7.gif",Q=function(){return Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)("figure",{children:Object(f.jsx)("img",{src:J,alt:"cute loader"})})})},X=n(231),Y=n(211),K=n(131),Z=n(212),$=n(96),ee=n(60),te=function(){var e=Object(o.c)((function(e){return e.posts})),t=e.posts,n=e.loading,r=e.error,c=Object($.a)().category,s=Object(o.b)();return Object(a.useEffect)((function(){s(function(){var e=Object(S.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:C}),e.next=4,U();case 4:n=e.sent,a=n.data,t({type:_,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:w,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[s]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(X.b,{bg:Object(O.c)("#F9FAFB","gray.600"),textAlign:"center",children:Object(f.jsxs)(Y.a,{pt:10,fontSize:"4xl",bgGradient:"linear(to-r, blue.300 0%, blue.200 50%, gray.100 100%)",bgClip:"text",fontWeight:600,children:[Object(f.jsx)(K.a,{as:ee.a,color:"blue.300"}),"  ",null!=c?c:"ALL"]})}),Object(f.jsx)(h.a,{bg:Object(O.c)("#F9FAFB","gray.600"),px:5,py:30,w:"full",align:"center",justify:"center",minH:"100vh",children:Object(f.jsxs)(Z.a,{spacing:"30px",justify:"center",children:[r&&Object(f.jsx)("p",{children:r}),n?Object(f.jsx)(Q,{}):(null===t||void 0===t?void 0:t.length)>0&&(null==c||t.findIndex((function(e){return e.tag==c}))>-1)?null===t||void 0===t?void 0:t.map((function(e){return null==c||e.tag==c?Object(f.jsx)(b.a,{mx:"auto",rounded:"lg",shadow:"md",bg:"gray.800",maxW:"md",boxShadow:"dark-lg",children:Object(f.jsx)(g,{post:e,category:c})},null===e||void 0===e?void 0:e._id):Object(f.jsx)(f.Fragment,{})})):"Blog not found!"]})})]})},ne=n(6),ae=n(17),re=n(90),ce=n.n(re),se=n(69),ie=n(213),le=n(217),oe=n(218),je=n(78),de=n(215),ue=n(142),be=n(216),xe=function(e){var t=e.post,n=e.closeEditMode,r=Object(o.c)((function(e){return e.category})),c=Object(a.useState)(null===t||void 0===t?void 0:t.image),i=Object(ne.a)(c,2),l=i[0],j=i[1],d=Object(se.b)(),u=d.register,x=d.errors,O=d.control,p=d.handleSubmit,m=Object(o.b)();return Object(f.jsx)(h.a,{maxW:"900px",px:5,mx:"auto",align:"center",justify:"center",minH:"90vh",children:Object(f.jsxs)(b.a,{w:"100%",px:10,py:5,bg:"gray.700",borderRadius:"lg",boxShadow:"dark-lg",children:[Object(f.jsx)(b.a,{textAlign:"center",children:Object(f.jsx)(ie.a,{as:"h2",children:"Edit Post "})}),Object(f.jsx)(b.a,{my:4,textAlign:"left",children:Object(f.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:p((function(e){try{var a=Object(ae.a)(Object(ae.a)({_id:t._id},e),{},{image:l});m(function(e,t){return function(){var n=Object(S.a)(y.a.mark((function n(a){var r,c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:P}),n.next=4,V(e,t);case 4:r=n.sent,c=r.data,a({type:z,payload:c}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),a({type:D,payload:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(t._id,a)),s.b.success("Blog successfully updated!"),j(null),n()}catch(r){s.b.error(r)}})),children:[Object(f.jsxs)(je.a,{isInvalid:x.title,minH:"100px",children:[Object(f.jsx)(de.a,{children:"Title"}),Object(f.jsx)(be.a,{id:"title",label:"Ba\u015fl\u0131k",name:"title",ref:u({required:{value:!0,message:"This field is required."}}),defaultValue:null===t||void 0===t?void 0:t.title}),x.title&&Object(f.jsx)("p",{className:"validation__error",children:x.title.message})]}),Object(f.jsxs)(je.a,{isInvalid:x.subtitle,minH:"100px",children:[Object(f.jsx)(de.a,{children:"Subtitle"}),Object(f.jsx)(be.a,{id:"subtitle",label:"Alt Ba\u015fl\u0131k",name:"subtitle",ref:u({required:{value:!0,message:"This field is required."}}),defaultValue:null===t||void 0===t?void 0:t.subtitle}),x.subtitle&&Object(f.jsx)("p",{className:"validation__error",children:x.subtitle.message})]}),Object(f.jsxs)(je.a,{isInvalid:x.author,minH:"100px",children:[Object(f.jsx)(de.a,{children:"Author"}),Object(f.jsx)(be.a,{id:"author",label:"Author",name:"author",ref:u({required:{value:!0,message:"This field is required."}}),defaultValue:null===t||void 0===t?void 0:t.author}),x.author&&Object(f.jsx)("p",{className:"validation__error",children:x.author.message})]}),Object(f.jsxs)(je.a,{minH:"100px",children:[Object(f.jsx)(de.a,{children:"Category"}),Object(f.jsx)(se.a,{as:Object(f.jsx)(le.a,{placeholder:"Choose Category",children:r.category.post.map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)}))}),name:"tag",control:O,defaultValue:null===t||void 0===t?void 0:t.tag})]}),Object(f.jsxs)(je.a,{isInvalid:x.content,minH:"100px",children:[Object(f.jsx)(de.a,{children:"Content"}),Object(f.jsx)(oe.a,{id:"content",label:"\u0130\xe7erik",name:"content",ref:u({required:{value:!0,message:"This field is required."},minLength:{message:"Content must contain at least 50 characters or more.",value:50}}),defaultValue:null===t||void 0===t?void 0:t.content}),x.content&&Object(f.jsx)("p",{className:"validation__error",children:x.content.message})]}),Object(f.jsx)(je.a,{mt:4,children:Object(f.jsx)(ce.a,{multiple:!1,onDone:function(e){var t=e.base64;return j(t)}})}),Object(f.jsxs)(b.a,{mt:4,display:"flex",alignItems:"center",justifyContent:"flex-end",children:[Object(f.jsx)(ue.a,{colorScheme:"blue",mr:3,type:"submit",children:"Update"}),Object(f.jsx)(ue.a,{onClick:n,children:"Cancel"})]})]})})]})})},Oe=n(219),pe=n(220),he=n(143),me=function(){var e=Object($.a)().id,t=Object(l.g)(),n=Object(o.b)(),r=Object(o.c)((function(e){return e.posts})),c=r.currentPost,i=r.loading,j=r.error,O=Object(a.useState)(!1),g=Object(ne.a)(O,2),v=g[0],C=g[1];Object(a.useEffect)((function(){n(function(e){return function(){var t=Object(S.a)(y.a.mark((function t(n){var a,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:E}),t.next=4,W(e);case 4:a=t.sent,r=a.data,n({type:A,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:T,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[n,e]);var _;return Object(f.jsx)(f.Fragment,{children:i?Object(f.jsx)(Q,{}):Object(f.jsxs)("div",{children:[j&&Object(f.jsx)("p",{children:j}),v?Object(f.jsx)(xe,{post:c,closeEditMode:function(){C(!1)}}):Object(f.jsx)(h.a,{maxW:"900px",mx:"auto",align:"center",justify:"center",px:5,children:Object(f.jsx)(b.a,{w:"100%",py:5,children:Object(f.jsxs)(b.a,{py:6,children:[Object(f.jsx)(ie.a,{as:"h1",size:"xl",color:"gray.100",children:null===c||void 0===c?void 0:c.title}),Object(f.jsx)(ie.a,{as:"h2",fontWeight:"normal",size:"sm",mt:2,fontStyle:"italic",color:"gray.400",children:null===c||void 0===c?void 0:c.subtitle}),Object(f.jsx)(b.a,{my:6,children:Object(f.jsxs)(h.a,{align:"center",children:[Object(f.jsxs)(h.a,{align:"center",justify:"between",children:[Object(f.jsx)(u.a,{h:10,fit:"cover",rounded:"full",src:"https://source.unsplash.com/random/48x48",alt:"Avatar"}),Object(f.jsxs)(h.a,{align:"flex-start",direction:"column",children:[Object(f.jsx)(p.a,{mx:3,fontWeight:"bold",color:"brand.200",children:null===c||void 0===c?void 0:c.author}),Object(f.jsx)(x.a.span,{mx:3,fontSize:"sm",color:"whiteAlpha.600",children:(_=null===c||void 0===c?void 0:c.createdAt,d()(_).format("LL"))})]})]}),Object(f.jsx)(m.a,{}),Object(f.jsx)(ue.a,{colorScheme:"blue",mr:3,onClick:function(){C(!0)},children:Object(f.jsx)(Oe.a,{})}),Object(f.jsx)(ue.a,{onClick:function(){try{window.confirm("Are you sure? You can't undo this action afterwards.")&&(n(function(e){return function(){var t=Object(S.a)(y.a.mark((function t(n){var a,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:H}),t.next=4,M(e);case 4:a=t.sent,r=a.data,n({type:L,payload:r._id}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:N,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(null===c||void 0===c?void 0:c._id)),s.b.success("Blog successfully removed!"),setTimeout((function(){t.push("/posts")}),500))}catch(j){s.b.error(j)}},colorScheme:"red",children:Object(f.jsx)(pe.a,{})})]})}),Object(f.jsx)("figure",{style:{marginBottom:"2rem"},children:Object(f.jsx)(u.a,{w:"100%",borderRadius:"md",src:(null===c||void 0===c?void 0:c.image)||"https://loremflickr.com/1280/720",alt:null===c||void 0===c?void 0:c.tag})}),Object(f.jsx)(oe.a,{mt:4,fontSize:"lg",color:"gray.300",isReadOnly:"true",variant:"unstyled",resize:"none",overflow:"hidden",as:he.a,children:null===c||void 0===c?void 0:c.content.replace()})]})})})]})})};var fe=n(228),ge=function(e){var t=e.isOpen,n=e.onClose,r=Object(o.c)((function(e){return e.category})),c=Object(a.useState)(null),i=Object(ne.a)(c,2),l=i[0],j=i[1],d=Object(se.b)(),u=d.register,b=d.errors,x=d.control,O=d.handleSubmit,p=Object(o.b)(),h=function(e){try{p((t=Object(ae.a)(Object(ae.a)({},e),{},{image:l}),function(){var e=Object(S.a)(y.a.mark((function e(n){var a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:k,payload:t}),e.next=4,G(t);case 4:a=e.sent,r=a.data,n({type:F,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:I,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),s.b.success("Blog successfully added!"),m()}catch(n){s.b.error(n)}var t},m=function(){n(),j(null)};return Object(f.jsxs)(fe.a,{isOpen:t,onClose:n,children:[Object(f.jsx)(fe.g,{}),Object(f.jsxs)(fe.d,{children:[Object(f.jsx)(fe.f,{children:"Add New Post"}),Object(f.jsx)(fe.c,{}),Object(f.jsx)(fe.b,{pb:6,children:Object(f.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:O(h),children:[Object(f.jsxs)(je.a,{isInvalid:b.title,minH:"100px",children:[Object(f.jsx)(de.a,{children:"Title"}),Object(f.jsx)(be.a,{id:"title",label:"Ba\u015fl\u0131k",name:"title",ref:u({required:{value:!0,message:"This field is required."}})}),b.title&&Object(f.jsx)("p",{className:"validation__error",children:b.title.message})]}),Object(f.jsxs)(je.a,{isInvalid:b.subtitle,minH:"100px",children:[Object(f.jsx)(de.a,{children:"Subtitle"}),Object(f.jsx)(be.a,{id:"subtitle",label:"Alt Ba\u015fl\u0131k",name:"subtitle",ref:u({required:{value:!0,message:"This field is required."}})}),b.subtitle&&Object(f.jsx)("p",{className:"validation__error",children:b.subtitle.message})]}),Object(f.jsxs)(je.a,{isInvalid:b.author,minH:"100px",children:[Object(f.jsx)(de.a,{children:"Author"}),Object(f.jsx)(be.a,{id:"author",label:"Author",name:"author",ref:u({required:{value:!0,message:"This field is required."}})}),b.author&&Object(f.jsx)("p",{className:"validation__error",children:b.author.message})]}),Object(f.jsxs)(je.a,{minH:"100px",children:[Object(f.jsx)(de.a,{children:"Category"}),Object(f.jsx)(se.a,{as:Object(f.jsx)(le.a,{placeholder:"Choose Category",children:r.category.post.map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)}))}),name:"tag",control:x,defaultValue:r.category.post[0]})]}),Object(f.jsxs)(je.a,{isInvalid:b.content,minH:"100px",children:[Object(f.jsx)(de.a,{children:"Content"}),Object(f.jsx)(oe.a,{id:"content",label:"\u0130\xe7erik",name:"content",ref:u({required:{value:!0,message:"This field is required."},minLength:{message:"Content must contain at least 50 characters or more.",value:50}})}),b.content&&Object(f.jsx)("p",{className:"validation__error",children:b.content.message})]}),Object(f.jsx)(je.a,{mt:4,children:Object(f.jsx)(ce.a,{multiple:!1,onDone:function(e){var t=e.base64;return j(t)}})}),Object(f.jsxs)(fe.e,{pr:0,children:[Object(f.jsx)(ue.a,{colorScheme:"blue",mr:3,onClick:function(){return O(h)()},children:"Save"}),Object(f.jsx)(ue.a,{onClick:n,children:"Cancel"})]})]})})]})]})},ve=n(222),ye=n(223),Se=n(137),Ce=n(227);var _e=function(e){e.icon,e.title;var t=e.description;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h.a,{pos:"absolute",mt:"calc(100px - 7.5px)",ml:"-10px",width:0,height:0,borderTop:"10px solid transparent",borderBottom:"10px solid transparent",borderRight:"10px solid #82AAAD"}),Object(f.jsx)(h.a,{h:200,w:200,flexDir:"column",alignItems:"center",justify:"center",bgColor:"#82AAAD",borderRadius:"10px",color:"#fff",textAlign:"center",children:t.map((function(e){return Object(f.jsx)(p.a,{href:"/posts/"+e,children:Object(f.jsx)(Y.a,{children:e})})}))})]})};var we=function(e){var t=e.navSize,n=e.path,a=e.title,r=e.icon,c=e.active,s=e.description;return Object(f.jsx)(h.a,{mt:30,flexDir:"column",w:"100%",alignItems:"small"==t?"center":"flex-start",children:Object(f.jsxs)(Ce.a,{placement:"right",children:[null!=s?Object(f.jsx)(p.a,{bgColor:c&&"AEC8CA",p:3,borderRadius:8,_hover:{textDector:"none",bgColor:"#AEC8CA"},w:"large"==t&&"100%",children:Object(f.jsx)(Ce.b,{w:"100%",children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(K.a,{as:r,mt:1,fontSize:"xl",color:c?"#82AAAD":"gray.500:"}),Object(f.jsx)(Y.a,{ml:5,fontFamily:"Jua",fontSize:"xl",display:"small"==t?"none":"flex",children:a})]})})}):Object(f.jsx)(p.a,{bgColor:c&&"AEC8CA",p:3,borderRadius:8,_hover:{textDector:"none",bgColor:"#AEC8CA"},w:"large"==t&&"100%",href:"/"+n,children:Object(f.jsx)(Ce.b,{w:"100%",children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(K.a,{as:r,mt:1,fontSize:"xl",color:c?"#82AAAD":"gray.500:"}),Object(f.jsx)(Y.a,{ml:5,fontFamily:"Jua",fontSize:"xl",display:"small"==t?"none":"flex",children:a})]})})}),null!=s?Object(f.jsx)(Ce.c,{py:0,border:"none",w:200,h:200,ml:5,children:Object(f.jsx)(_e,{title:a,icon:r,description:s})}):Object(f.jsx)(f.Fragment,{})]})})};var Ee=function(){var e=Object(a.useState)("small"),t=Object(ne.a)(e,2),n=t[0],r=t[1],c=Object(o.c)((function(e){return e.category}));return Object(f.jsx)(h.a,{pos:"sticky",h:"95vh",boxShadow:"0 4px 12px 0 rgba(0,0,0,0.05)",borderRadius:"small"==n?"15px":"30px",w:"small"==n?"75px":"200px",flexDir:"column",justifyContent:"space-between",children:Object(f.jsxs)(h.a,{p:"5%",flexDir:"column",alignItems:"small"==n?"center":"flex-start",as:"nav",children:[Object(f.jsx)(ye.a,{bg:"none",mt:5,_hover:{bg:"none"},icon:Object(f.jsx)(ee.d,{}),onClick:function(){r("small"==n?"large":"small")}}),Object(f.jsx)(we,{navSize:n,icon:ee.c,title:"\ub300\uc2dc\ubcf4\ub4dc",path:"dashboard"}),Object(f.jsx)(we,{navSize:n,icon:ee.a,title:"\uc804\uccb4\ubcf4\uae30",path:"posts"}),Object(f.jsx)(we,{navSize:n,icon:ee.b,title:"\uce74\ud14c\uace0\ub9ac\ubcc4",description:c.category.post}),Object(f.jsx)(we,{navSize:n,icon:Se.a,title:"\uc57c\uad6c",path:"baseball"}),Object(f.jsx)(we,{navSize:n,icon:ee.e,title:"\uc124\uc815",path:"setting"})]})})},Ae=function(){var e=Object(O.c)("white","gray.800"),t=Object(ve.a)(),n=t.isOpen,a=t.onOpen,r=t.onClose;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(x.a.header,{bg:e,w:"full",px:5,py:1,shadow:"md",mx:"auto",children:Object(f.jsxs)(h.a,{align:"center",justify:"space-between",mx:"auto",maxW:"1420px",children:[Object(f.jsx)(h.a,{children:Object(f.jsx)(x.a.a,{href:"/",title:"Choc Home Page",display:"flex",alignItems:"center",children:Object(f.jsxs)(X.a,{children:[Object(f.jsx)(Y.a,{fontSize:"3xl",children:"\u26be"}),Object(f.jsx)(Y.a,{m:2,bgGradient:"linear(to-r, blue.300 0%, blue.200 50%, gray.100 100%)",bgClip:"text",fontWeight:700,fontSize:"4xl",fontFamily:"Gamja Flower",children:"SCH BLOG"})]})})}),Object(f.jsx)(h.a,{align:"center",children:Object(f.jsx)(ue.a,{ml:"10",colorScheme:"teal",size:"sm",onClick:a,children:"New Post"})})]})}),Object(f.jsx)(ge,{isOpen:n,onClose:r})]})},Te=n(224);function ke(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(Te.a,{maxW:"3xl",minH:"90vh",display:"flex",alignItems:"center",justifyContent:"center",children:Object(f.jsx)(X.b,{as:b.a,textAlign:"center",spacing:{base:8,md:14},py:{base:20,md:36},children:Object(f.jsxs)(ie.a,{fontWeight:600,fontSize:{base:"2xl",sm:"4xl",md:"6xl"},lineHeight:"110%",children:["MERN stack +  ",Object(f.jsx)(Y.a,{as:"span",color:"green.400",bgGradient:"linear(to-r, #30CFD0 0%, #ce47e7 100%)",bgClip:"text",children:"Chakra UI"}),Object(f.jsx)("br",{}),"BLOG ",Object(f.jsx)("br",{})]})})})})}var Fe=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s.a,{autoClose:3e3}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(Ee,{}),Object(f.jsx)(b.a,{w:"100%",children:Object(f.jsxs)(i.a,{basename:"/blog_temp",children:[Object(f.jsx)(Ae,{}),Object(f.jsxs)(l.d,{children:[Object(f.jsx)(l.b,{exact:!0,path:"/",component:ke}),Object(f.jsx)(l.b,{exact:!0,path:"/dashboard",component:ke}),Object(f.jsx)(l.b,{exact:!0,path:"/posts",component:te}),Object(f.jsx)(l.b,{exact:!0,path:"/posts/:category",component:te}),Object(f.jsx)(l.b,{exact:!0,path:"/posts/:category/:id",component:me}),Object(f.jsx)(l.a,{to:"/"})]})]})})]})]})},Ie=n(79),Pe=n(138),ze=n(10),De={posts:[],currentPost:null},He=Object(Ie.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:case E:return{loading:!0,posts:[]};case _:return Object(ae.a)(Object(ae.a)({},e),{},{posts:t.payload,loading:!1});case w:case T:case I:case N:case D:return{loading:!1,error:t.payload};case A:return Object(ae.a)(Object(ae.a)({},e),{},{currentPost:t.payload,loading:!1});case k:case H:case P:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0});case F:return Object(ae.a)(Object(ae.a)({},e),{},{posts:[].concat(Object(ze.a)(e.posts),[t.payload]),loading:!1});case L:return Object(ae.a)(Object(ae.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload})),currentPost:null,loading:!1});case z:return Object(ae.a)(Object(ae.a)({},e),{},{posts:e.posts.map((function(e){e._id===t.payload._id&&t.payload})),currentPost:t.payload,loading:!1});default:return Object(ae.a)({},e)}},category:function(){return{category:{post:["Frontend","Backend","React","Vue","JavaScript","ETC"],baseball:["Play","Repair"]}}}}),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ie.c,Ne=Object(Ie.d)(He,{},Le(Object(Ie.a)(Pe.a))),Re=n(225),qe=n(229),Be=Object(Re.a)({colors:{brand:{50:"#ecefff",100:"#cbceeb",200:"#a9aed6",300:"#888ec5",400:"#666db3",500:"#4d5499",600:"#3c4178",700:"#2a2f57",800:"#181c37",900:"#080819"}},config:{initialColorMode:"dark",useSystemColorMode:!1}});c.a.render(Object(f.jsx)(qe.a,{theme:Be,children:Object(f.jsx)(o.a,{store:Ne,children:Object(f.jsx)(Fe,{})})}),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.1e968a98.chunk.js.map