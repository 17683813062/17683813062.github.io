var l=Object.defineProperty;var s=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var o=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&o(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&o(e,a,t[a]);return e};import{_ as f,r as u,o as m,aA as v,t as g,a as r,c as h,f as b,w as x,B as y,A as k,g as B,i as w,j as c}from"./index.bd460a8a.js";const N={setup(){let e=u({base64:"",load:!0});m(()=>{t()});let t=()=>{v().then(a=>{e.base64=a,e.load=!1})};return n({},g(e))}},V={class:"main"},$=w(" \u63A8\u5E7F "),C=["src"];function A(e,t,a,I,j,z){const _=c("t-navbar"),d=c("van-loading");return r(),h("div",V,[b(_,{style:{position:"fixed",top:"0",left:"0",width:"100%","background-color":"#fff","z-index":"5"}},{default:x(()=>[$]),_:1}),e.load?(r(),y(d,{key:0,style:{position:"fixed",top:"1.1rem",left:"50%",translate:"translateX(-50%)"},type:"spinner",color:"#1989fa"})):k("",!0),B("img",{src:"data:image/png;base64,"+e.base64,alt:""},null,8,C)])}var M=f(N,[["render",A],["__scopeId","data-v-c5875618"]]);export{M as default};
