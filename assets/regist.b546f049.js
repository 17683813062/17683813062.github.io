var g=Object.defineProperty,k=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(t,e,a)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))C.call(e,a)&&c(t,a,e[a]);if(m)for(var a of m(e))y.call(e,a)&&c(t,a,e[a]);return t},f=(t,e)=>k(t,v(e));import{_ as R,d as B,r as N,t as U,a as M,c as $,f as l,w,g as h,M as d,k as j,i as _,j as p}from"./index.ac95d662.js";const z={setup(){const t=B();let e=N({username:"",pwd:"",password:""}),a=async()=>{let{username:s,pwd:u,password:r}=e;if(!s||!u||!r)d.error("\u8FD8\u6709\u672A\u586B\u5199");else if(u!=r)d.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4");else{let n=await j({username:s,password:r});n.code==1?(d.success("\u6CE8\u518C\u6210\u529F"),t.go(-1)):d.error(n.msg)}};return f(b({},U(e)),{submit:a})}},E=_(" \u6CE8\u518C "),P=_("\u6CE8\u518C");function T(t,e,a,s,u,r){const n=p("t-navbar"),i=p("t-input"),V=p("t-button");return M(),$("div",null,[l(n,{onClickRight:s.submit},{default:w(()=>[E]),_:1},8,["onClickRight"]),h("div",null,[l(i,{modelValue:t.username,"onUpdate:modelValue":e[0]||(e[0]=o=>t.username=o),label:"\u7528\u6237\u540D",type:"text",clearable:""},null,8,["modelValue"]),l(i,{modelValue:t.pwd,"onUpdate:modelValue":e[1]||(e[1]=o=>t.pwd=o),label:"\u5BC6\u7801",type:"password",clearable:""},null,8,["modelValue"]),l(i,{modelValue:t.password,"onUpdate:modelValue":e[2]||(e[2]=o=>t.password=o),label:"\u786E\u8BA4\u5BC6\u7801",type:"password",clearable:""},null,8,["modelValue"])]),l(V,{onClick:s.submit,theme:"primary",size:"large"},{default:w(()=>[P]),_:1},8,["onClick"])])}var A=R(z,[["render",T]]);export{A as default};
