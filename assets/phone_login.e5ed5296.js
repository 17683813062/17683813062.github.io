var h=Object.defineProperty,_=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var i=(o,e,t)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,d=(o,e)=>{for(var t in e||(e={}))V.call(e,t)&&i(o,t,e[t]);if(l)for(var t of l(e))b.call(e,t)&&i(o,t,e[t]);return o},p=(o,e)=>_(o,R(e));import{_ as v,r as k,b as w,t as C,a as B,c as F,d as s,w as N,e as m,F as P,f as x,g as y,i as E,j as u}from"./index.ea3e0c12.js";const U={beforeRouteEnter(o,e,t){t(n=>{n.store.commit("changeFooter",!1)})},setup(){let o=x();const e=y();let t=k({store:o}),n=()=>{e.push({path:"/phone_regist"})};return w((c,f)=>{o.commit("changeFooter",!0)}),p(d({},C(t)),{goPhoneRegister:n})}},$=E(" \u624B\u673A\u53F7\u767B\u5F55 "),j=m("p",{style:{"text-indent":"0.3rem",color:"red"}},"\u6682\u4E0D\u652F\u6301\u767B\u5F55",-1);function z(o,e,t,n,c,f){const g=u("t-navbar"),a=u("t-input");return B(),F(P,null,[s(g,{onClickRight:o.submit},{default:N(()=>[$]),_:1},8,["onClickRight"]),s(a,{label:"\u624B\u673A\u53F7",modelValue:o.phone,"onUpdate:modelValue":e[0]||(e[0]=r=>o.phone=r),placeholder:"\u624B\u673A\u53F7"},null,8,["modelValue"]),s(a,{label:"\u5BC6\u7801",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=r=>o.password=r),placeholder:"\u5BC6\u7801"},null,8,["modelValue"]),j,m("p",{onClick:e[2]||(e[2]=(...r)=>n.goPhoneRegister&&n.goPhoneRegister(...r)),style:{color:"green","font-size":"0.3rem","font-weight":"bold","text-indent":"0.3rem"}},"\u624B\u673A\u53F7\u6CE8\u518C")],64)}var T=v(U,[["render",z]]);export{T as default};
