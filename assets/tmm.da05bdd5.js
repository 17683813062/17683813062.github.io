var n=Object.defineProperty;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var a=(o,e,t)=>e in o?n(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,c=(o,e)=>{for(var t in e||(e={}))m.call(e,t)&&a(o,t,e[t]);if(s)for(var t of s(e))_.call(e,t)&&a(o,t,e[t]);return o};import{_ as f,h as u,r as d,o as i,t as p,c as l,b as v,u as h,j as $,f as b}from"./index.a42fd56c.js";const B=u({beforeRouteEnter(o,e,t){t(r=>{r.store.commit("changeFooter",!1)})},setup(){const o=h(),e=d({store:o,tmm:$});return i((t,r)=>{o.commit("changeFooter",!0)}),c({},p(e))}}),g=["src"];function x(o,e,t,r,R,k){return b(),l("div",null,[v("iframe",{class:"iframe",src:o.tmm,frameborder:"0"},null,8,g)])}var F=f(B,[["render",x],["__scopeId","data-v-79b1274c"]]);export{F as default};
