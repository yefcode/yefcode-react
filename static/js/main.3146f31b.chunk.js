(this["webpackJsonpyefcode.github.io"]=this["webpackJsonpyefcode.github.io"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(10),r=c.n(s),o=(c(17),c(18),c(4)),i=c(2),l=c(12),u=c(0),j="",b=0,d=function(e){var t=e.offset,c=Object(n.useState)(""),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(u.jsxs)("form",{className:"search-form",onSubmit:function(e){if(e.preventDefault(),s){j===s?b++:(j=s,b=0);var t=document.querySelectorAll("h1, h2, p, a, label"),c=Object(l.a)(t).filter((function(e){return e.textContent.toLowerCase().indexOf(s.toLowerCase())>=0}));b>=c.length&&(b=0);var n=c[b];null!==n&&void 0!==n&&n.getBoundingClientRect()&&window.scrollTo(0,(null===n||void 0===n?void 0:n.getBoundingClientRect().top)+window.scrollY-48)}},children:[Object(u.jsx)("input",{className:"navbar-transition ".concat(t?"scrolled":""," nav-search"),type:"text",placeholder:"Search Project...",value:s,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("button",{type:"submit",className:"submit-search-button",children:Object(u.jsx)("svg",{className:"navbar-transition ".concat(t?"scrolled":""," svg-search-icon"),children:Object(u.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})})]})},m=[{ref:"#about",label:"About",activeStyle:!1},{ref:"#projects",label:"Projects",activeStyle:!1},{ref:"#contact",label:"Contact",activeStyle:!1}],h=function(){var e=Object(n.useState)(m),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),l=r[0],j=r[1];Object(n.useEffect)((function(){b(0)}),[]),Object(n.useEffect)((function(){window.onscroll=function(){j(window.scrollY>50)}}),[]);var b=function(e){a(m.map((function(t,c){return c===e?Object(o.a)(Object(o.a)({},t),{},{activeStyle:!0}):t})))};return Object(u.jsxs)("div",{className:"navbar navbar-transition ".concat(l?"scrolled":""),children:[Object(u.jsx)("div",{className:"nav-links",children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(u.jsx)("a",{className:"navbar-transition ".concat(l?"scrolled":""," nav-link ").concat(e.activeStyle?"active":""),href:e.ref,onClick:function(){return b(t)},children:e.label},t)}))}),Object(u.jsx)(d,{offset:l})]})},f=function(){return Object(u.jsx)("section",{className:"main-section",children:Object(u.jsx)("div",{className:"section-content",id:"about",children:Object(u.jsxs)("div",{className:"main-content",children:[Object(u.jsx)("h1",{className:"title",children:"YEFERSON MARIN"}),Object(u.jsx)("div",{className:"typewriter typewriter-anim",children:Object(u.jsx)("p",{className:"subtitle",children:"JavaScript, CSS, Node, React, Svelte, Angular and Java"})})]})})})},p=c(9),O=c(6),x=c.n(O),v=c(3),N=function(e){var t=e.repo,c=t.description;return c.length>132&&((c=(c=c.substr(0,132)).substr(0,Math.min(c.length,Math.max(c.indexOf(" "),c.indexOf(","),c.indexOf("."))))).length<=10&&(c=c.substr(0,132)),c+="..."),Object(u.jsxs)("li",{id:"repo-item",className:"repo-list-item fade-in-bottom",children:[Object(u.jsxs)("div",{className:"repo-item-content",children:[Object(u.jsx)("a",{className:"repo-title-name",href:t.html_url,children:t.name}),Object(u.jsxs)("p",{className:"repo-description",children:[c,t.description&&t.description.length!==c.length&&Object(u.jsx)("a",{className:"repo-description-readmore",href:t.html_url,children:"(see more)"})]})]}),Object(u.jsxs)("div",{className:"github_buttons",children:[Object(u.jsx)(v.a,{href:"https://github.com/yefcode/".concat(t.name,"/subscription"),"data-icon":"octicon-eye","data-size":"large","aria-label":"Watch yefcode/".concat(t.name," on GitHub"),children:"Watch"}),Object(u.jsx)(v.a,{href:"https://github.com/yefcode/".concat(t.name),"data-icon":"octicon-star","data-size":"large","aria-label":"Star yefcode/".concat(t.name," on GitHub"),children:"Star"}),Object(u.jsx)(v.a,{href:"https://github.com/yefcode/".concat(t.name,"/fork"),"data-icon":"octicon-repo-forked","data-size":"large","aria-label":"Fork yefcode/".concat(t.name," on GitHub"),children:"Fork"})]})]})},g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){var e=function(){var e=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=(t=e.sent).filter((function(e){return e&&!e.fork})),a(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s=function(){var e=Object(p.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/yefcode/repos");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{className:"blobs",children:[Object(u.jsx)("div",{className:"wave",children:Object(u.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(u.jsx)("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",className:"shape-fill"})})}),Object(u.jsxs)("div",{className:"section-content",id:"projects",children:[Object(u.jsx)("h2",{className:"content-title",children:"Projects"}),Object(u.jsx)("ul",{className:"repo-list",children:c.map((function(e,t){return Object(u.jsx)(N,{repo:e},t)}))})]})]})},y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(n.useState)(""),b=Object(i.a)(j,2),d=b[0],m=b[1];return Object(u.jsxs)("section",{className:"pink",children:[Object(u.jsx)("div",{className:"wave",children:Object(u.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(u.jsx)("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",className:"shape-fill-contact"})})}),Object(u.jsx)("div",{className:"section-content",id:"contact",children:Object(u.jsxs)("div",{className:"blob-content",children:[Object(u.jsx)("h2",{className:"content-title",children:"Contact"}),Object(u.jsx)("p",{children:"yefcode@gmail.com \ud83d\udc8c"}),Object(u.jsxs)("form",{className:"contact-content",id:"contact-form",onSubmit:function(e){e.preventDefault();var t="mailto:yefcode@gmail.com?subject=Portfolio%20Contact:%20".concat(encodeURIComponent(c),"%20").concat(encodeURIComponent(o),"&body=").concat(encodeURIComponent(d));window.open(t,"_blank")},children:[Object(u.jsx)("label",{className:"contact-input-label",children:"First Name:"}),Object(u.jsx)("input",{className:"contact-input",type:"text",name:"firstName",placeholder:"Write your name \ud83d\ude03",onChange:function(e){return a(e.target.value)},required:!0}),Object(u.jsx)("label",{className:"contact-input-label",children:"Last Name:"}),Object(u.jsx)("input",{className:"contact-input",type:"text",name:"lastName",placeholder:"Write your last Name \ud83d\ude03",onChange:function(e){return l(e.target.value)},required:!0}),Object(u.jsx)("label",{className:"contact-input-label",children:"Subject:"}),Object(u.jsx)("textarea",{className:"contact-input-textarea",name:"subject",placeholder:"What is it about? \ud83d\udcce",onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("input",{className:"contact-submit-button",type:"submit",value:"Send!"})]})]})})]})},w=function(){var e=(new Date).getFullYear();return Object(u.jsx)("div",{className:"footer-container",children:Object(u.jsxs)("footer",{className:"section-content bottom-space",children:[Object(u.jsx)(v.a,{href:"https://github.com/yefcode","data-size":"large","aria-label":"Follow @yefcode on GitHub",children:"Follow @yefcode"}),Object(u.jsx)("small",{className:"text-muted",children:"YEFERSON MARIN :v"}),Object(u.jsx)("small",{className:"text-msuted",id:"timestamp",children:"\xa9 2021 - ".concat(e)})]})})},S=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{className:""}),Object(u.jsx)(f,{className:""}),Object(u.jsx)(g,{className:""}),Object(u.jsx)(y,{className:""}),Object(u.jsx)(w,{className:""})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),C()}},[[22,1,2]]]);
//# sourceMappingURL=main.3146f31b.chunk.js.map