var x=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var v=(s,e,t)=>e in s?x(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,g=(s,e)=>{for(var t in e||(e={}))j.call(e,t)&&v(s,t,e[t]);if(h)for(var t of h(e))B.call(e,t)&&v(s,t,e[t]);return s},f=(s,e)=>F(s,N(e));import{_ as S,b as w,d as C,r as R,o as $,e as D,t as E,a as i,c as d,f as m,w as J,g as o,F as b,z as O,n as l,aF as V,i as q,j as y}from"./index.d81dcf5c.js";const z={beforeRouteEnter(s,e,t){t(c=>{c.store.commit("changeFooter",!1)})},setup(){let s=w(),e=C(),t=R({store:s,orderList:[]}),c=_=>{e.push({path:"/orderdetail",query:{_id:_}})},p=async()=>{let r=(await V()).result;r.length&&r.forEach((u,a)=>{r[a].user=JSON.parse(u.user),r[a].list=JSON.parse(u.list)}),t.orderList=r,console.log(r,"\u8BA2\u5355\u5217\u8868")};return $(()=>{p()}),D((_,r)=>{s.commit("changeFooter",!0)}),f(g({},E(t)),{goOrderDetail:c})}},A={class:"order-main"},I=q(" \u8BA2\u5355\u5217\u8868 "),M={class:"orderBox"},T=["onClick"],G={class:"main"},H={class:"top"},K={class:"bottom"},P={class:"detail"},Q={class:"sl"},U={style:{"margin-top":"0.2rem"}},W={style:{float:"right",color:"#282828"}},X={class:"allArice"};function Y(s,e,t,c,p,_){const r=y("t-navbar"),u=y("van-image");return i(),d("div",A,[m(r,null,{default:J(()=>[I]),_:1}),o("ul",M,[(i(!0),d(b,null,O(s.orderList,(a,L)=>(i(),d("li",{onClick:n=>c.goOrderDetail(a._id),key:L},[o("div",G,[o("div",H," \u8BA2\u5355\u53F7\uFF1A"+l(a._id),1),o("div",K,[(i(!0),d(b,null,O(a.list,(n,k)=>(i(),d("div",{class:"content",key:"detail"+k},[m(u,{fit:"cover",width:"100",height:"100",src:JSON.parse(n.goodsObj.bannerList)[0].url},null,8,["src"]),o("div",P,[o("h6",null,l(n.goodsObj.title),1),o("p",Q,l(n.goodsObj.desc),1),o("p",U,[o("span",null,"x"+l(n.count),1),o("span",W,"\uFFE5"+l(n.goodsObj.price),1)])])]))),128)),o("div",X,[o("span",null,"\u5408\u8BA1\uFF1A\uFFE5"+l(a.price/100),1)])])])],8,T))),128))])])}var te=S(z,[["render",Y],["__scopeId","data-v-16a72713"]]);export{te as default};
