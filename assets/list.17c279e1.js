var L=Object.defineProperty,C=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var f=(t,o,e)=>o in t?L(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,_=(t,o)=>{for(var e in o||(o={}))k.call(o,e)&&f(t,e,o[e]);if(u)for(var e of u(o))R.call(o,e)&&f(t,e,o[e]);return t},h=(t,o)=>C(t,b(o));import{_ as B,b as F,d as w,r as y,o as $,e as x,t as D,a as l,c as p,f as g,w as m,F as E,C as N,p as V,aJ as j,i as q,j as r}from"./index.ffe2c6e6.js";const J={beforeRouteEnter(t,o,e){e(a=>{a.store.commit("changeFooter",!1)})},setup(){let t=F(),o=w(),e=y({store:t,loading:!0,finished:!1,chatList:[]}),a=async()=>{let n=await j();e.chatList=n.result,e.loading=!1,e.finished=!0,console.log(e.chatList,"\u83B7\u53D6\u804A\u5929\u5BA4\u5217\u8868")},i=()=>{},d=n=>{o.push({path:"/chat_detail",query:{_id:n}})};return $(()=>{a()}),x((n,c)=>{t.commit("changeFooter",!0)}),h(_({},D(e)),{onLoad:i,goDetail:d})}},M=q(" \u804A\u5929\u5BA4\u5217\u8868 ");function S(t,o,e,a,i,d){const n=r("t-navbar"),c=r("van-cell"),v=r("van-list");return l(),p("div",null,[g(n,null,{default:m(()=>[M]),_:1}),g(v,{loading:t.loading,"onUpdate:loading":o[0]||(o[0]=s=>t.loading=s),finished:t.finished,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:a.onLoad},{default:m(()=>[(l(!0),p(E,null,N(t.chatList,s=>(l(),V(c,{onClick:T=>a.goDetail(s._id),key:s._id,title:s.name,label:s.desc},null,8,["onClick","title","label"]))),128))]),_:1},8,["loading","finished","onLoad"])])}var A=B(J,[["render",S]]);export{A as default};
