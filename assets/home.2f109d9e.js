var L=Object.defineProperty,B=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var u=(t,e,n)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))Q.call(e,n)&&u(t,n,e[n]);if(p)for(var n of p(e))$.call(e,n)&&u(t,n,e[n]);return t},f=(t,e)=>B(t,C(e));import{_ as w,d as b,r as z,t as F,a as s,c as _,f as m,w as P,F as v,z as R,B as j,j as l}from"./index.d81dcf5c.js";const y={setup(){let t=b(),e=z({list:["\u738B\u8005\u8363\u8000 \u5B89\u5353QQ\u533A \u70B9\u5238\u5145\u503C","\u7FFB\u8BD1"],routeList:[{path:"/wz",name:"\u738B\u8005\u8363\u8000 \u5B89\u5353QQ\u533A \u70B9\u5238\u5145\u503C"},{path:"/tanslate",name:"\u7FFB\u8BD1"}]}),n=o=>{let r=e.routeList.filter(i=>i.name==o);t.push({path:r[0].path})};return f(c({},F(e)),{goPage:n})}};function E(t,e,n,o,r,i){const g=l("van-nav-bar"),h=l("van-cell"),k=l("van-list");return s(),_(v,null,[m(g,{title:"\u529F\u80FD"}),m(k,{loading:t.loading,"onUpdate:loading":e[0]||(e[0]=a=>t.loading=a),finished:t.finished,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:t.onLoad},{default:P(()=>[(s(!0),_(v,null,R(t.list,(a,d)=>(s(),j(h,{onClick:N=>o.goPage(a),key:d,title:d+1+". "+a},null,8,["onClick","title"]))),128))]),_:1},8,["loading","finished","onLoad"])],64)}var q=w(y,[["render",E]]);export{q as default};
