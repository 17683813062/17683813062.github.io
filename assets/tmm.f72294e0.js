var m=Object.defineProperty;var s=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var a=(o,e,t)=>e in o?m(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,c=(o,e)=>{for(var t in e||(e={}))n.call(e,t)&&a(o,t,e[t]);if(s)for(var t of s(e))_.call(e,t)&&a(o,t,e[t]);return o};import{_ as f,m as u,b as d,r as i,O as p,e as l,t as v,a as $,c as b,g}from"./index.adfc2d92.js";const h=u({beforeRouteEnter(o,e,t){t(r=>{r.store.commit("changeFooter",!1)})},setup(){const o=d(),e=i({store:o,tmm:p});return l((t,r)=>{o.commit("changeFooter",!0)}),c({},v(e))}}),B=["src"];function x(o,e,t,r,R,k){return $(),b("div",null,[g("iframe",{class:"iframe",src:o.tmm,frameborder:"0"},null,8,B)])}var F=f(h,[["render",x],["__scopeId","data-v-79b1274c"]]);export{F as default};
