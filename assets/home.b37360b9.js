var L=Object.defineProperty,C=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(t,e,n)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))B.call(e,n)&&c(t,n,e[n]);if(u)for(var n of u(e))b.call(e,n)&&c(t,n,e[n]);return t},f=(t,e)=>C(t,$(e));import{_ as w,r as F,t as P,a as s,c as _,d as v,w as R,F as g,q as j,x as q,g as y,j as l}from"./index.e6417789.js";const E={setup(){let t=y(),e=F({list:["\u7FFB\u8BD1"],routeList:[{path:"/tanslate",name:"\u7FFB\u8BD1"}]}),n=o=>{let r=e.routeList.filter(i=>i.name==o);t.push({path:r[0].path})};return f(p({},P(e)),{goPage:n})}};function N(t,e,n,o,r,i){const m=l("van-nav-bar"),h=l("van-cell"),k=l("van-list");return s(),_(g,null,[v(m,{title:"\u529F\u80FD"}),v(k,{loading:t.loading,"onUpdate:loading":e[0]||(e[0]=a=>t.loading=a),finished:t.finished,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:t.onLoad},{default:R(()=>[(s(!0),_(g,null,j(t.list,(a,d)=>(s(),q(h,{onClick:U=>o.goPage(a),key:d,title:d+1+". "+a},null,8,["onClick","title"]))),128))]),_:1},8,["loading","finished","onLoad"])],64)}var z=w(E,[["render",N]]);export{z as default};
