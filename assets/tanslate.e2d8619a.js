var v=Object.defineProperty,k=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(t,e,a)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))y.call(e,a)&&c(t,a,e[a]);if(u)for(var a of u(e))b.call(e,a)&&c(t,a,e[a]);return t},f=(t,e)=>k(t,V(e));import{_ as C,r as F,b as T,t as x,a as B,c as w,d as s,w as n,e as N,F as R,f as z,M as E,h as _,i}from"./index.72e77469.js";import{F as M}from"./index.b343909a.js";const U={beforeRouteEnter(t,e,a){a(o=>{o.store.commit("changeFooter",!1)})},setup(){let t=z(),e=F({store:t,translate:"",speak:""}),a=()=>{e.translate="",e.speak=""},o=async()=>{if(!e.translate){E.error("\u8BF7\u6B63\u786E\u586B\u5199");return}let l=await M({translate:e.translate});e.speak=l.result.result,console.log(l,"\u7FFB\u8BD1")};return T((l,h)=>{e.translate="",e.speak="",t.commit("changeFooter",!0)}),f(p({},x(e)),{getTranslate:o,removeTranslate:a})}},$=_(" \u7FFB\u8BD1 "),I={class:"main"},L=_("\u7FFB\u8BD1"),P=_("\u6E05\u9664");function S(t,e,a,o,l,h){const g=i("t-navbar"),d=i("t-textarea"),m=i("t-button");return B(),w(R,null,[s(g,null,{default:n(()=>[$]),_:1}),N("div",I,[s(d,{modelValue:t.translate,"onUpdate:modelValue":e[0]||(e[0]=r=>t.translate=r),placeholder:"\u8BF7\u8F93\u5165\u7FFB\u8BD1",autosize:"",style:{"min-height":"4rem"}},null,8,["modelValue"]),s(d,{disabled:"",modelValue:t.speak,"onUpdate:modelValue":e[1]||(e[1]=r=>t.speak=r),placeholder:"",autosize:"",style:{"min-height":"4rem"}},null,8,["modelValue"]),s(m,{onClick:o.getTranslate,style:{float:"right"},theme:"primary"},{default:n(()=>[L]),_:1},8,["onClick"]),s(m,{onClick:o.removeTranslate,style:{float:"right"}},{default:n(()=>[P]),_:1},8,["onClick"])])],64)}var D=C(U,[["render",S],["__scopeId","data-v-50833e30"]]);export{D as default};
