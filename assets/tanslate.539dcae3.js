var v=Object.defineProperty,k=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(t,e,a)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))y.call(e,a)&&c(t,a,e[a]);if(m)for(var a of m(e))b.call(e,a)&&c(t,a,e[a]);return t},f=(t,e)=>k(t,V(e));import{_ as C,b as T,r as x,e as B,t as F,a as w,c as N,f as s,w as n,g as R,F as z,M as E,aA as M,i as _,j as i}from"./index.ea3be448.js";const U={beforeRouteEnter(t,e,a){a(o=>{o.store.commit("changeFooter",!1)})},setup(){let t=T(),e=x({store:t,translate:"",speak:""}),a=()=>{e.translate="",e.speak=""},o=async()=>{if(!e.translate){E.error("\u8BF7\u6B63\u786E\u586B\u5199");return}let l=await M({translate:e.translate});e.speak=l.result.result,console.log(l,"\u7FFB\u8BD1")};return B((l,g)=>{e.translate="",e.speak="",t.commit("changeFooter",!0)}),f(p({},F(e)),{getTranslate:o,removeTranslate:a})}},$=_(" \u7FFB\u8BD1 "),j={class:"main"},A=_("\u7FFB\u8BD1"),I=_("\u6E05\u9664");function L(t,e,a,o,l,g){const h=i("t-navbar"),u=i("t-textarea"),d=i("t-button");return w(),N(z,null,[s(h,null,{default:n(()=>[$]),_:1}),R("div",j,[s(u,{modelValue:t.translate,"onUpdate:modelValue":e[0]||(e[0]=r=>t.translate=r),placeholder:"\u8BF7\u8F93\u5165\u7FFB\u8BD1",autosize:"",style:{"min-height":"4rem"}},null,8,["modelValue"]),s(u,{disabled:"",modelValue:t.speak,"onUpdate:modelValue":e[1]||(e[1]=r=>t.speak=r),placeholder:"",autosize:"",style:{"min-height":"4rem"}},null,8,["modelValue"]),s(d,{onClick:o.getTranslate,style:{float:"right"},theme:"primary"},{default:n(()=>[A]),_:1},8,["onClick"]),s(d,{onClick:o.removeTranslate,style:{float:"right"}},{default:n(()=>[I]),_:1},8,["onClick"])])],64)}var q=C(U,[["render",L],["__scopeId","data-v-50833e30"]]);export{q as default};
