var C=Object.defineProperty,b=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))F.call(t,o)&&f(e,o,t[o]);if(d)for(var o of d(t))Q.call(t,o)&&f(e,o,t[o]);return e},m=(e,t)=>b(e,B(t));import{_ as R,b as $,d as w,r as E,e as N,t as P,a as i,c as _,f as h,w as g,F as v,C as V,p as j,i as y,j as u}from"./index.f6f1b4cd.js";const z={beforeRouteEnter(e,t,o){o(a=>{a.store.commit("changeFooter",!1)})},setup(){let e=$(),t=w(),o=E({store:e,list:["\u738B\u8005\u8363\u8000 \u5B89\u5353QQ\u533A \u70B9\u5238\u5145\u503C","\u7FFB\u8BD1"],routeList:[{path:"/wz",name:"\u738B\u8005\u8363\u8000 \u5B89\u5353QQ\u533A \u70B9\u5238\u5145\u503C"},{path:"/tanslate",name:"\u7FFB\u8BD1"}]}),a=s=>{let r=o.routeList.filter(l=>l.name==s);t.push({path:r[0].path})};return N((s,r)=>{e.commit("changeFooter",!0)}),m(p({},P(o)),{goPage:a})}},S=y(" \u529F\u80FD\u5217\u8868 ");function T(e,t,o,a,s,r){const l=u("t-navbar"),L=u("van-cell"),k=u("van-list");return i(),_(v,null,[h(l,null,{default:g(()=>[S]),_:1}),h(k,{loading:e.loading,"onUpdate:loading":t[0]||(t[0]=n=>e.loading=n),finished:e.finished,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:e.onLoad},{default:g(()=>[(i(!0),_(v,null,V(e.list,(n,c)=>(i(),j(L,{onClick:U=>a.goPage(n),key:c,title:c+1+". "+n},null,8,["onClick","title"]))),128))]),_:1},8,["loading","finished","onLoad"])],64)}var A=R(z,[["render",T]]);export{A as default};
