var h=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))C.call(t,n)&&u(e,n,t[n]);return e},g=(e,t)=>f(e,v(t));import{_ as S,h as $,r as b,t as w,c as N,a as s,w as a,b as o,i as P,F as y,d as B,e as l,f as M,g as V}from"./index.f2877804.js";const j=$({setup(){const e=B();let t=b({user:JSON.parse(localStorage.getItem("user"))}),n=()=>{e.push({path:"/nearMan"})},r=()=>{e.push({path:"/leaveword"})},i=()=>{e.push({path:"/login"})};return g(_({},w(t)),{onLogin:i,goSpeakPage:r,goMapPage:n})}}),F=V("\u767B\u5F55"),L=o("br",null,null,-1),R=o("span",null,"\u9644\u8FD1\u7684\u4EBA",-1),z=o("span",null,"\u7559\u8A00",-1);function D(e,t,n,r,i,E){const m=l("t-button"),d=l("van-image"),p=l("t-cell");return M(),N(y,null,[s(m,{style:{float:"right"},onClick:t[0]||(t[0]=I=>e.onLogin()),theme:"primary",size:"small"},{default:a(()=>[F]),_:1}),L,s(d,{round:"",width:"2rem",height:"2rem",src:"https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"}),o("p",null,P(e.user?e.user.username?"\u767B\u5F55\u6210\u529F":"\u7528\u6237\u540D\u4E0D\u5B58\u5728":"\u672A\u767B\u5F55"),1),o("div",null,[s(p,{onClick:e.goMapPage,note:"\u4EC5\u53EF\u767B\u5F55\u7528\u6237\u67E5\u770B"},{title:a(()=>[R]),_:1},8,["onClick"]),s(p,{onClick:e.goSpeakPage,note:"\u6709\u95EE\u9898\u53EF\u4EE5\u5728\u8FD9\u7559\u8A00"},{title:a(()=>[z]),_:1},8,["onClick"])])],64)}var T=S(j,[["render",D]]);export{T as default};
