var h=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(o,e,t)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,u=(o,e)=>{for(var t in e||(e={}))V.call(e,t)&&p(o,t,e[t]);if(l)for(var t of l(e))b.call(e,t)&&p(o,t,e[t]);return o},d=(o,e)=>_(o,g(e));import{_ as R,b as v,d as k,r as w,e as B,t as C,a as F,c as $,f as r,w as N,F as E,i as U,g as j,j as i}from"./index.bd460a8a.js";const x={beforeRouteEnter(o,e,t){t(a=>{a.store.commit("changeFooter",!1)})},setup(){let o=v();const e=k();let t=w({store:o}),a=()=>{e.push({path:"/phone_regist"})};return B((m,c)=>{o.commit("changeFooter",!0)}),d(u({},C(t)),{goPhoneRegister:a})}},y=U(" \u624B\u673A\u53F7\u767B\u5F55 "),L=j("p",{style:{"text-indent":"0.3rem",color:"red"}},"\u6682\u4E0D\u652F\u6301\u767B\u5F55",-1);function P(o,e,t,a,m,c){const f=i("t-navbar"),n=i("t-input");return F(),$(E,null,[r(f,{onClickRight:o.submit},{default:N(()=>[y]),_:1},8,["onClickRight"]),r(n,{label:"\u624B\u673A\u53F7",modelValue:o.phone,"onUpdate:modelValue":e[0]||(e[0]=s=>o.phone=s),placeholder:"\u624B\u673A\u53F7"},null,8,["modelValue"]),r(n,{label:"\u5BC6\u7801",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=s=>o.password=s),placeholder:"\u5BC6\u7801"},null,8,["modelValue"]),L],64)}var q=R(x,[["render",P]]);export{q as default};
