var w=Object.defineProperty,V=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var c=(o,e,t)=>e in o?w(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,f=(o,e)=>{for(var t in e||(e={}))R.call(e,t)&&c(o,t,e[t]);if(d)for(var t of d(e))k.call(e,t)&&c(o,t,e[t]);return o},g=(o,e)=>V(o,v(e));import{_ as C,r as y,o as B,t as N,c as S,a as r,w as _,b as x,u as E,d as F,M as u,e as i,f as M,g as b}from"./index.620e2558.js";import{l as U}from"./index.802ab18f.js";const $={beforeRouteEnter(o,e,t){t(s=>{s.store.commit("changeFooter",!1)})},setup(){const o=E(),e=F();let t=y({store:o,username:"",password:""}),s=()=>{e.push({path:"/regist"})},m=async()=>{if(!t.username||!t.password)u.error("\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF");else{let n={username:t.username,password:t.password},a=await U(n);a.code==1?(u.success("\u767B\u5F55\u6210\u529F"),e.push({path:"/home"}),localStorage.setItem("user",JSON.stringify(a.result[0]))):u.error(a.msg)}};return B((n,a)=>{o.commit("changeFooter",!0)}),g(f({},N(t)),{submit:m,goRegister:s})}},z=b(" \u767B\u5F55 "),I=b("\u53BB\u6CE8\u518C");function J(o,e,t,s,m,n){const a=i("t-navbar"),p=i("t-input"),h=i("t-button");return M(),S("div",null,[r(a,{onClickRight:s.submit},{default:_(()=>[z]),_:1},8,["onClickRight"]),x("div",null,[r(p,{modelValue:o.username,"onUpdate:modelValue":e[0]||(e[0]=l=>o.username=l),label:"\u7528\u6237\u540D",type:"text",clearable:""},null,8,["modelValue"]),r(p,{modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=l=>o.password=l),label:"\u5BC6\u7801",type:"password",clearable:""},null,8,["modelValue"])]),r(h,{onClick:s.goRegister,theme:"primary",size:"small"},{default:_(()=>[I]),_:1},8,["onClick"])])}var T=C($,[["render",J]]);export{T as default};
