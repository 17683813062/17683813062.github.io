var R=Object.defineProperty,V=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,h=(t,e)=>{for(var o in e||(e={}))v.call(e,o)&&f(t,o,e[o]);if(c)for(var o of c(e))C.call(e,o)&&f(t,o,e[o]);return t},b=(t,e)=>V(t,k(e));import{_ as y,r as x,b as B,t as N,a as P,c as z,d as i,w as _,e as m,f as I,g as S,M as u,h as E,l as F,i as w,j as d}from"./index.e6417789.js";const M={beforeRouteEnter(t,e,o){o(s=>{s.store.commit("changeFooter",!1)})},setup(){const t=I(),e=S();let o=x({store:t,username:"",password:""}),s=()=>{e.push({path:"/phone_login"})},g=()=>{e.push({path:"/regist"})},p=async()=>{if(!o.username||!o.password)u.error("\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF");else{let a=await E();if(a.code==1){console.log(a,"\u5934\u50CF");let l={username:o.username,password:o.password,headImg:a.result.imgurl},n=await F(l);u.success("\u767B\u5F55\u6210\u529F"),n.code==1?(e.push({path:"/home"}),console.log(n,"\u767B\u5F55\u6210\u529F"),localStorage.setItem("user",JSON.stringify(n.result[0]))):u.error(n.msg)}}};return B((a,l)=>{t.commit("changeFooter",!0)}),b(h({},N(o)),{submit:p,goRegister:g,goPhoneRegister:s})}},U=w(" \u767B\u5F55 "),j=w("\u767B\u5F55");function H(t,e,o,s,g,p){const a=d("t-navbar"),l=d("t-input"),n=d("t-button");return P(),z("div",null,[i(a,{onClickRight:s.submit},{default:_(()=>[U]),_:1},8,["onClickRight"]),m("div",null,[i(l,{modelValue:t.username,"onUpdate:modelValue":e[0]||(e[0]=r=>t.username=r),label:"\u7528\u6237\u540D",type:"text",clearable:""},null,8,["modelValue"]),i(l,{modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=r=>t.password=r),label:"\u5BC6\u7801",type:"password",clearable:""},null,8,["modelValue"])]),m("p",{onClick:e[2]||(e[2]=(...r)=>s.goRegister&&s.goRegister(...r)),style:{color:"green","font-size":"0.3rem","font-weight":"bold","text-indent":"0.3rem"}},"\u53BB\u6CE8\u518C"),m("p",{onClick:e[3]||(e[3]=(...r)=>s.goPhoneRegister&&s.goPhoneRegister(...r)),style:{color:"green","font-size":"0.3rem","font-weight":"bold","text-indent":"0.3rem"}},"\u624B\u673A\u53F7\u767B\u5F55"),i(n,{onClick:s.submit,theme:"primary",size:"large"},{default:_(()=>[j]),_:1},8,["onClick"])])}var O=y(M,[["render",H]]);export{O as default};
