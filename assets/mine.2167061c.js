var m=Object.defineProperty,d=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var o=(t,e,s)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,a=(t,e)=>{for(var s in e||(e={}))g.call(e,s)&&o(t,s,e[s]);if(n)for(var s of n(e))f.call(e,s)&&o(t,s,e[s]);return t},r=(t,e)=>d(t,_(e));import{_ as h,h as v,r as $,t as b,c as C,a as i,w as N,b as u,i as k,F as w,d as B,e as l,f as S,g as V}from"./index.620e2558.js";const j=v({setup(){const t=B();let e=$({user:JSON.parse(localStorage.getItem("user"))}),s=()=>{t.push({path:"/login"})};return r(a({},b(e)),{onLogin:s})}}),x=V("\u767B\u5F55"),y=u("br",null,null,-1);function F(t,e,s,L,R,z){const p=l("t-button"),c=l("van-image");return S(),C(w,null,[i(p,{onClick:e[0]||(e[0]=D=>t.onLogin()),theme:"primary",size:"small"},{default:N(()=>[x]),_:1}),y,i(c,{round:"",width:"2rem",height:"2rem",src:"https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"}),u("p",null,k(t.user?t.user.username?"\u767B\u5F55\u6210\u529F":"\u7528\u6237\u540D\u4E0D\u5B58\u5728":"\u672A\u767B\u5F55"),1)],64)}var J=h(j,[["render",F]]);export{J as default};
