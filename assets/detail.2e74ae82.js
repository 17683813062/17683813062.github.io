var f=Object.defineProperty;var n=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(t,o,e)=>o in t?f(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,l=(t,o)=>{for(var e in o||(o={}))m.call(o,e)&&r(t,e,o[e]);if(n)for(var e of n(o))p.call(o,e)&&r(t,e,o[e]);return t};import{_ as g,b as v,u as b,r as h,o as y,ax as F,e as j,t as x,a as B,c as R,f as d,w as S,i as $,n as w,g as H,j as i}from"./index.d81dcf5c.js";const L={beforeRouteEnter(t,o,e){e(a=>{a.store.commit("changeFooter",!1)})},setup(){let t=v(),o=b(),e=h({store:t,obj:{},loadFlag:!0});y(()=>{a()});let a=async()=>{let s=await F({_id:o.query._id});e.obj=s.result[0],e.loadFlag=!1,console.log(s,"\u8BF7\u6C42")};return j((s,c)=>{t.commit("changeFooter",!0)}),l({},x(e))}},M={class:"detail"},N=["innerHTML"];function T(t,o,e,a,s,c){const _=i("t-navbar"),u=i("t-loading");return B(),R("div",M,[d(_,null,{default:S(()=>[$(w(t.obj.title),1)]),_:1}),d(u,{loading:t.loadFlag,theme:"spinner",text:"\u52A0\u8F7D\u4E2D..."},null,8,["loading"]),H("div",{class:"domHtml",innerHTML:t.obj.html},null,8,N)])}var C=g(L,[["render",T],["__scopeId","data-v-49f2d5fd"]]);export{C as default};
