var y=Object.defineProperty;var _=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var m=(e,o,t)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,p=(e,o)=>{for(var t in o||(o={}))O.call(o,t)&&m(e,t,o[t]);if(_)for(var t of _(o))j.call(o,t)&&m(e,t,o[t]);return e};import{_ as w,u as D,b as S,r as F,o as I,e as N,t as k,a as n,c as d,f as u,w as z,g as r,F as B,C as R,n as a,aI as $,i as C,z as V,A as E,j as h}from"./index.3f80cc32.js";const J={beforeRouteEnter(e,o,t){t(i=>{i.store.commit("changeFooter",!1)})},setup(){let e=D(),o=S(),t=F({store:o,orderObj:{erwm:"",list:[],price:"",time:"",timestamp:"",user:{},username:""}}),i=async()=>{let s=(await $({_id:e.query._id})).result[0];s.list=JSON.parse(s.list),s.user=JSON.parse(s.user),t.orderObj=s,console.log(t.orderObj,"\u8BA2\u5355\u8BE6\u60C5")};return I(()=>{i()}),N((l,s)=>{o.commit("changeFooter",!0)}),p({},k(t))}},b=e=>(V("data-v-b300e380"),e=e(),E(),e),L={class:"order"},q=C(" \u8BA2\u5355\u8BE6\u60C5 "),x={class:"orderDetail"},A={style:{"border-bottom":"0.01rem solid #e5e5e5","padding-bottom":"0.2rem"}},M=b(()=>r("p",{style:{color:"#9e9e9e","text-align":"center","margin-bottom":"0.3rem"}},"\u8BF7\u52A0\u5FAE\u4FE1\u8BE6\u804A",-1)),T={class:"orderDetail"},G={style:{"line-height":"0.8rem",height:"0.8rem"}},H=b(()=>r("span",{style:{float:"left"}},"\u8BA2\u5355\u603B\u4EF7\uFF1A",-1)),K={style:{color:"red",float:"right"}},P={style:{"line-height":"0.6rem","font-size":"0.26rem"}},Q={style:{"line-height":"0.6rem","font-size":"0.26rem"}},U={style:{"line-height":"0.6rem","font-size":"0.26rem"}};function W(e,o,t,i,l,s){const g=h("t-navbar"),f=h("van-image");return n(),d("div",L,[u(g,null,{default:z(()=>[q]),_:1}),r("div",x,[(n(!0),d(B,null,R(e.orderObj.list,(c,v)=>(n(),d("div",{key:v},[r("h6",null,"\u3010"+a(c.goodsObj.title)+"\u3011",1),r("p",A,a(c.goodsObj.desc),1)]))),128)),u(f,{style:{margin:"0.2rem auto 0.1rem auto",display:"block"},width:"3rem",height:"3rem",fit:"cover",src:e.orderObj.erwm},null,8,["src"]),M]),r("div",T,[r("p",G,[H,r("span",K,"\uFFE5"+a(e.orderObj.price/100),1)]),r("p",P,"\u59D3\u540D\uFF1A"+a(e.orderObj.username),1),r("p",Q,"\u652F\u4ED8\u65F6\u95F4\uFF1A"+a(e.orderObj.time),1),r("p",U,"\u8BA2\u5355\u53F7\uFF1A"+a(e.orderObj._id),1)])])}var Z=w(J,[["render",W],["__scopeId","data-v-b300e380"]]);export{Z as default};
