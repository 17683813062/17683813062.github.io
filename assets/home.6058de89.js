var L=Object.defineProperty,C=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(t,e,n)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))B.call(e,n)&&c(t,n,e[n]);if(u)for(var n of u(e))b.call(e,n)&&c(t,n,e[n]);return t},f=(t,e)=>C(t,$(e));import{_ as w,r as y,t as F,a as s,c as v,d as _,w as P,F as g,v as R,y as j,g as E,j as l}from"./index.4dbc2526.js";const N={setup(){let t=E(),e=y({list:["\u7FFB\u8BD1"],routeList:[{path:"/tanslate",name:"\u7FFB\u8BD1"}]}),n=o=>{let r=e.routeList.filter(i=>i.name==o);t.push({path:r[0].path})};return f(p({},F(e)),{goPage:n})}};function U(t,e,n,o,r,i){const m=l("van-nav-bar"),h=l("van-cell"),k=l("van-list");return s(),v(g,null,[_(m,{title:"\u529F\u80FD"}),_(k,{loading:t.loading,"onUpdate:loading":e[0]||(e[0]=a=>t.loading=a),finished:t.finished,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:t.onLoad},{default:P(()=>[(s(!0),v(g,null,R(t.list,(a,d)=>(s(),j(h,{onClick:V=>o.goPage(a),key:d,title:d+1+". "+a},null,8,["onClick","title"]))),128))]),_:1},8,["loading","finished","onLoad"])],64)}var A=w(N,[["render",U]]);export{A as default};
