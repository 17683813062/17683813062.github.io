var b=Object.defineProperty,g=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var m=(s,e,a)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,c=(s,e)=>{for(var a in e||(e={}))v.call(e,a)&&m(s,a,e[a]);if(i)for(var a of i(e))y.call(e,a)&&m(s,a,e[a]);return s},f=(s,e)=>g(s,_(e));import{r as k}from"./index.b41fe155.js";import{_ as C,r as R,t as B,c as N,a as n,w as U,b as V,d as $,M as d,e as w,f as M,g as z}from"./index.96ff8ea8.js";const E={setup(){const s=$();let e=R({username:"",pwd:"",password:""}),a=async()=>{let{username:t,pwd:u,password:l}=e;if(!t||!u||!l)d.error("\u8FD8\u6709\u672A\u586B\u5199");else if(u!=l)d.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4");else{let r=await k({username:t,password:l});r.code==1?(d.success("\u6CE8\u518C\u6210\u529F"),s.go(-1)):d.error(r.msg)}};return f(c({},B(e)),{submit:a})}},P=z(" \u767B\u5F55 "),T=V("p",{style:{"font-size":"0.24rem",color:"red"}},"\u76EE\u524D\u672A\u5F00\u653E\u6CE8\u518C",-1);function h(s,e,a,t,u,l){const r=w("t-navbar"),p=w("t-input");return M(),N("div",null,[n(r,{onClickRight:t.submit},{default:U(()=>[P]),_:1},8,["onClickRight"]),V("div",null,[n(p,{modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=o=>s.username=o),label:"\u7528\u6237\u540D",type:"text",clearable:""},null,8,["modelValue"]),n(p,{modelValue:s.pwd,"onUpdate:modelValue":e[1]||(e[1]=o=>s.pwd=o),label:"\u5BC6\u7801",type:"password",clearable:""},null,8,["modelValue"]),n(p,{modelValue:s.password,"onUpdate:modelValue":e[2]||(e[2]=o=>s.password=o),label:"\u786E\u8BA4\u5BC6\u7801",type:"password",clearable:""},null,8,["modelValue"])]),T])}var A=C(E,[["render",h]]);export{A as default};
