var f=Object.defineProperty,k=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var m=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))S.call(t,n)&&m(e,n,t[n]);return e},h=(e,t)=>k(e,C(t));import{_ as $,m as w,r as N,t as P,a as b,c as y,d as s,w as a,e as o,n as B,F as M,g as V,i as F,j as l}from"./index.9cc7f150.js";const I=w({setup(){const e=V();let t=N({user:JSON.parse(localStorage.getItem("user"))}),n=()=>{!t.user||!t.user.username||e.push({path:"/nearMan"})},u=()=>{e.push({path:"/leaveword"})},i=()=>{e.push({path:"/login"})},p=()=>{e.push({path:"/share"})};return h(g({},P(t)),{onLogin:i,goSpeakPage:u,goMapPage:n,goshare:p})}}),L=F("\u767B\u5F55"),R=o("br",null,null,-1),j=o("span",null,"\u9644\u8FD1\u7684\u4EBA",-1),z=o("span",null,"\u7559\u8A00",-1),D=o("span",null,"\u63A8\u5E7F",-1);function E(e,t,n,u,i,p){const _=l("t-button"),d=l("van-image"),r=l("t-cell");return b(),y(M,null,[s(_,{style:{float:"right"},onClick:t[0]||(t[0]=J=>e.onLogin()),theme:"primary",size:"small"},{default:a(()=>[L]),_:1}),R,s(d,{round:"",width:"2rem",height:"2rem",src:e.user?e.user.headImg:""},null,8,["src"]),o("p",null,"\xA0\xA0\xA0\xA0"+B(e.user?e.user.username?"\u767B\u5F55\u6210\u529F\uFF01\uFF01\uFF01 \u6B22\u8FCE\u767B\u5F55\uFF1A "+e.user.username:"\u7528\u6237\u540D\u4E0D\u5B58\u5728":" \u672A\u767B\u5F55"),1),o("div",null,[s(r,{onClick:e.goMapPage,note:"\u4EC5\u53EF\u767B\u5F55\u7528\u6237\u67E5\u770B"},{title:a(()=>[j]),_:1},8,["onClick"]),s(r,{onClick:e.goSpeakPage,note:"\u6709\u95EE\u9898\u53EF\u4EE5\u5728\u8FD9\u7559\u8A00"},{title:a(()=>[z]),_:1},8,["onClick"]),s(r,{onClick:e.goshare},{title:a(()=>[D]),_:1},8,["onClick"])])],64)}var q=$(I,[["render",E]]);export{q as default};
