(this["webpackJsonpauthenticate-me"]=this["webpackJsonpauthenticate-me"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=(n(29),n(13)),i=n.n(a),u=n(6),o=n(12),j=n(4),b=(n(37),s.a.createContext());function d(e){var t=e.children,n=Object(c.useRef)(),s=Object(c.useState)(),a=Object(j.a)(s,2),i=a[0],u=a[1];return Object(c.useEffect)((function(){u(n.current)}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.Provider,{value:i,children:t}),Object(r.jsx)("div",{ref:n})]})}function l(e){var t=e.onClose,n=e.children,s=Object(c.useContext)(b);return s?i.a.createPortal(Object(r.jsxs)("div",{id:"modal",children:[Object(r.jsx)("div",{id:"modal-background",onClick:t}),Object(r.jsx)("div",{id:"modal-content",children:n})]}),s):null}var O=n(3),h=n(5),f=n.n(h),p=n(10),x=n(25),v=n.n(x);function m(e){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(f.a.mark((function e(t){var n,r,c,s,a=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=a.length>1&&void 0!==a[1]?a[1]:{}).method=n.method||"GET",n.headers=n.headers||{},"GET"!==n.method.toUpperCase()&&(n.headers["Content-Type"]=n.headers["Content-Type"]||"application/json",n.headers["XSRF-Token"]=v.a.get("XSRF-TOKEN")),e.next=6,window.fetch(t,n);case 6:if(r=e.sent,!(c=r.headers.get("content-type"))||!c.includes("application/json")){e.next=13;break}return e.next=11,r.json();case 11:s=e.sent,r.data=s;case 13:if(!(r.status>=400)){e.next=15;break}throw r;case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w="session/setUser",y="session/removeUser",S=function(e){return{type:w,payload:e}},k={user:null};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object.assign({},e,{user:t.payload});case y:return Object.assign({},e,{user:null});default:return e}};n(39);var C=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.session.user})),n=Object(c.useState)(""),s=Object(j.a)(n,2),a=s[0],i=s[1],o=Object(c.useState)(""),b=Object(j.a)(o,2),d=b[0],l=b[1],h=Object(c.useState)(""),x=Object(j.a)(h,2),v=x[0],g=x[1],w=Object(c.useState)(""),y=Object(j.a)(w,2),k=y[0],E=y[1],C=Object(c.useState)([]),P=Object(j.a)(C,2),F=P[0],L=P[1];return t?Object(r.jsx)(O.a,{to:"/"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Sign Up"}),Object(r.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),v===k?(L([]),e((n={email:a,username:d,password:v},function(){var e=Object(p.a)(f.a.mark((function e(t){var r,c,s,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.username,c=n.email,s=n.password,e.next=3,m("/api/users",{method:"POST",body:JSON.stringify({username:r,email:c,password:s})});case 3:return a=e.sent,t(S(a.data.user)),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).catch((function(e){e.data&&e.data.errors&&L(e.data.errors)}))):L(["Confirm Password field must be the same as the Password field"]);var n},children:[Object(r.jsx)("ul",{children:F.map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))}),Object(r.jsxs)("label",{children:["Email",Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)},required:!0})]}),Object(r.jsxs)("label",{children:["Username",Object(r.jsx)("input",{type:"text",value:d,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(r.jsxs)("label",{children:["Password",Object(r.jsx)("input",{type:"password",value:v,onChange:function(e){return g(e.target.value)},required:!0})]}),Object(r.jsxs)("label",{children:["Confirm Password",Object(r.jsx)("input",{type:"password",value:k,onChange:function(e){return E(e.target.value)},required:!0})]}),Object(r.jsx)("button",{type:"submit",children:"Sign Up"})]})]})};var P=function(e){var t=e.user,n=Object(u.b)(),s=Object(c.useState)(!1),a=Object(j.a)(s,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){if(i){var e=function(){o(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}}),[i]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){i||o(!0)},children:Object(r.jsx)("i",{className:"fas fa-user-circle"})}),i&&Object(r.jsxs)("ul",{className:"profile-dropdown",children:[Object(r.jsx)("li",{children:t.username}),Object(r.jsx)("li",{children:t.email}),Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),n(function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/api/session",{method:"DELETE"});case 2:return n=e.sent,t({type:y}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log Out"})})]})]})};n(41);var F=function(){var e=Object(u.b)(),t=Object(c.useState)(""),n=Object(j.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(""),o=Object(j.a)(i,2),b=o[0],d=o[1],l=Object(c.useState)([]),O=Object(j.a)(l,2),h=O[0],x=O[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Log In"}),Object(r.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),x([]),e(function(e){var t=e.credential,n=e.password;return function(){var e=Object(p.a)(f.a.mark((function e(r){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/api/session",{method:"POST",body:JSON.stringify({credential:t,password:n})});case 2:return c=e.sent,r(S(c.data.user)),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({credential:s,password:b})).catch((function(e){e.data&&e.data.errors&&x(e.data.errors)}))},children:[Object(r.jsx)("ul",{children:h.map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))}),Object(r.jsxs)("label",{children:["Username or Email",Object(r.jsx)("input",{type:"text",value:s,onChange:function(e){return a(e.target.value)},required:!0})]}),Object(r.jsxs)("label",{children:["Password",Object(r.jsx)("input",{type:"password",value:b,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(r.jsx)("button",{type:"submit",children:"Log In"})]})]})};var L=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){return s(!0)},children:"Log In"}),n&&Object(r.jsx)(l,{onClose:function(){return s(!1)},children:Object(r.jsx)(F,{})})]})};n(42);var N=function(e){var t,n=e.isLoaded,c=Object(u.c)((function(e){return e.session.user}));return t=c?Object(r.jsx)(P,{user:c}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L,{}),Object(r.jsx)(o.b,{to:"/signup",children:"Sign Up"})]}),c?Object(r.jsxs)("div",{className:"links",children:[Object(r.jsx)("div",{className:"messageboard",children:Object(r.jsx)(o.b,{to:"/messageboard",children:"Message Board"})}),Object(r.jsx)("div",{children:Object(r.jsx)(o.b,{to:"/schedule",children:"Schedule"})}),Object(r.jsx)("div",{children:Object(r.jsx)(o.b,{to:"/event",children:"Events"})}),Object(r.jsx)("div",{children:n&&t}),Object(r.jsx)("h3",{children:c.username})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"links",children:Object(r.jsxs)("div",{children:[Object(r.jsx)(o.b,{exact:!0,to:"/",children:"Home"}),n&&t]})}),Object(r.jsx)("h1",{children:"Please sign in!"})]})};var T=function(){return Object(r.jsx)("h1",{children:"SCHEDULE PAGE"})},D=function(e){return{type:"message/LOAD",list:e}},U=function(e){return{type:"message/ADD_ONE",message:e}},A=function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/messages",{method:"POST",body:JSON.stringify(e)});case 2:if(!(r=t.sent).ok){t.next=9;break}return t.next=6,r.json();case 6:return c=t.sent,n(U(c)),t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q=function(){var e=Object(u.b)(),t=Object(c.useState)(""),n=Object(j.a)(t,2),s=n[0],a=n[1],i=Object(O.g)(),o=function(){var t=Object(p.a)(f.a.mark((function t(n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={body:s},t.next=4,e(A(r));case 4:(c=t.sent)&&i.push("/message/".concat(c.id));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"MESSAGE BOARD PAGE"}),Object(r.jsx)("section",{children:Object(r.jsxs)("form",{onSubmit:o,children:[Object(r.jsx)("textarea",{type:"text",placeholder:"Create a post...",onChange:a}),Object(r.jsx)("button",{type:"submit",children:"Post"})]})})]})};var G=function(){return Object(r.jsx)("h1",{children:"EVENTS PAGE"})};var J,I=function(){var e=Object(u.b)(),t=Object(c.useState)(!1),n=Object(j.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){e(function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/api/session");case 2:return n=e.sent,t(S(n.data.user)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){return a(!0)}))}),[e]),Object(c.useEffect)((function(){e(function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/messages");case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:r=e.sent,t(D(r));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{isLoaded:s}),s&&Object(r.jsxs)(O.d,{children:[Object(r.jsx)(O.b,{path:"/signup",children:Object(r.jsx)(C,{})}),Object(r.jsx)(O.b,{path:"/messageboard",children:Object(r.jsx)(q,{})}),Object(r.jsx)(O.b,{path:"/schedule",children:Object(r.jsx)(T,{})}),Object(r.jsx)(O.b,{path:"/event",children:Object(r.jsx)(G,{})})]})]})},R=n(15),B=n(26),M=Object(R.c)({session:E});J=Object(R.a)(B.a);var H=function(e){return Object(R.d)(M,e,J)}();function X(){return Object(r.jsx)(d,{children:Object(r.jsx)(u.a,{store:H,children:Object(r.jsx)(o.a,{children:Object(r.jsx)(I,{})})})})}i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(X,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b3d4e2b5.chunk.js.map