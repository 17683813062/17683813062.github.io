var m=Object.defineProperty;var s=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var a=(o,e,t)=>e in o?m(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,c=(o,e)=>{for(var t in e||(e={}))n.call(e,t)&&a(o,t,e[t]);if(s)for(var t of s(e))_.call(e,t)&&a(o,t,e[t]);return o};import{_ as f,m as u,r as d,J as i,b as p,t as l,a as v,c as $,e as b,f as h}from"./index.8bbebd18.js";const B=u({beforeRouteEnter(o,e,t){t(r=>{r.store.commit("changeFooter",!1)})},setup(){const o=h(),e=d({store:o,tmm:i});return p((t,r)=>{o.commit("changeFooter",!0)}),c({},l(e))}}),g=["src"];function x(o,e,t,r,R,k){return v(),$("div",null,[b("iframe",{class:"iframe",src:o.tmm,frameborder:"0"},null,8,g)])}var F=f(B,[["render",x],["__scopeId","data-v-79b1274c"]]);export{F as default};
