var h=Object.defineProperty,V=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var g=(o,e,t)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))C.call(e,t)&&g(o,t,e[t]);if(f)for(var t of f(e))k.call(e,t)&&g(o,t,e[t]);return o},_=(o,e)=>V(o,v(e));import{_ as w,b as R,r as B,e as F,t as y,a as N,c as S,f as a,w as r,i as p,n as U,F as $,aB as E,g as I,j as m}from"./index.9ec2ea3d.js";const T={beforeRouteEnter(o,e,t){t(n=>{n.store.commit("changeFooter",!1)})},setup(){let o=R(),e=B({store:o,timer:null,count:60,phone:null,code:null,password:"",sendCode:null,flag:!0}),t=()=>{e.count==60&&e.flag&&(e.flag=!1,e.timer=setInterval(()=>{e.count--,e.count==0&&(e.flag=!0,e.count=60,clearInterval(e.timer))},1e3),E({url:"https://business.sms.musicwall.top/sms/send",method:"POST",phone:e.phone,secret:"57048cbf5a176cb559b725fd1f90862af04954447a3fa2e6cd2bae56534d0cbe",content:"\u3010\u7F8E\u56E2\u5916\u5356\u3011\u60A8\u7684\u6CE8\u518C\u9A8C\u8BC1\u7801\u4E3A\uFF1A"}).then(s=>{console.log(s,"\u9A8C\u8BC1\u7801")}))},n=()=>{let{phone:s,code:d,password:u}=e;console.log(s,d,u)};return F((s,d)=>{o.commit("changeFooter",!0)}),_(b({},y(e)),{goRegister:n,sendCode:t})}},j=p(" \u624B\u673A\u53F7\u6CE8\u518C "),z=I("p",{style:{"text-indent":"0.3rem",color:"red"}},"\u6682\u4E0D\u652F\u6301\u6CE8\u518C",-1),D=p("\u6CE8\u518C");function L(o,e,t,n,s,d){const u=m("t-navbar"),c=m("t-button"),i=m("t-input");return N(),S($,null,[a(u,{onClickRight:o.submit},{default:r(()=>[j]),_:1},8,["onClickRight"]),a(i,{modelValue:o.phone,"onUpdate:modelValue":e[0]||(e[0]=l=>o.phone=l),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"},{suffix:r(()=>[a(c,{disabled:o.count!=60,onClick:n.sendCode,variant:"text"},{default:r(()=>[p(U(o.count==60?"\u53D1\u9001\u9A8C\u8BC1\u7801":o.count),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["modelValue"]),a(i,{modelValue:o.code,"onUpdate:modelValue":e[1]||(e[1]=l=>o.code=l),label:"\u9A8C\u8BC1\u7801",placeholder:"\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),a(i,{label:"\u5BC6\u7801",modelValue:o.password,"onUpdate:modelValue":e[2]||(e[2]=l=>o.password=l),placeholder:"\u5BC6\u7801"},null,8,["modelValue"]),z,a(c,{onClick:e[3]||(e[3]=l=>n.goRegister()),size:"large",theme:"primary"},{default:r(()=>[D]),_:1})],64)}var q=w(T,[["render",L]]);export{q as default};
