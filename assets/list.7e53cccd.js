var N=Object.defineProperty,x=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var b=(e,s,t)=>s in e?N(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,C=(e,s)=>{for(var t in s||(s={}))J.call(s,t)&&b(e,t,s[t]);if(k)for(var t of k(s))O.call(s,t)&&b(e,t,s[t]);return e},y=(e,s)=>x(e,B(s));import{_ as w,m as $,r as j,o as E,b as F,t as R,a as i,c as l,d as m,w as V,e as r,F as u,q as S,y as z,n as _,E as M,f as H,g as P,I as L,K as q,i as D,j as p}from"./index.e6417789.js";const K=$({beforeRouteEnter(e,s,t){t(c=>{c.store.commit("changeFooter",!1)})},setup(){let e=H(),s=P(),t=j({store:e,list:[{title:"#\u5403\u996D\u5723\u8BDE\u8282\u6495\u5F00"},{title:"#\u62BD\u70B9\u65F6\u95F4\u6570\u636E\u662F"},{title:"#\u4ED8\u6587\u5CF0\u54E5\u54E5\u54E5"},{title:"#\u4ED8\u6587\u5CF0\u54E5\u54E5\u54E5"},{title:"#\u4ED8\u6587\u5CF0\u54E5\u54E5\u54E5"}],manList:[{name:"\u5C0F\u6728\u866B"},{name:"\u9632\u98CE\u7F51"},{name:"\u5927V\u4EBA\u7684"},{name:"\u4F5B\u5C71\u5E02\u5206"}],caseList:[],user:JSON.parse(localStorage.getItem("user"))}),c=(o,n)=>{console.log(o,n);let a=[];o.forEach(g=>{a.push(g.url)}),L({images:a,startPosition:n})},h=o=>{L({images:[o]})},f=()=>{s.push({path:"/addcase"})},d=async()=>{let o=await q();t.caseList=o.result};return E(()=>{d(),console.log(t.user.headImg)}),F((o,n)=>{e.commit("changeFooter",!0)}),y(C({},R(t)),{addcase:f,seeImg:c,seeHeadImg:h})}}),T=D(" \u52A8\u6001\u5E7F\u573A "),A={class:"listBox"},G={class:"top"},Q={class:"headImg"},U={class:"bottom"},W={class:"imgBoxContent"},X=["onClick"],Y={class:"time"};function Z(e,s,t,c,h,f){const d=p("t-navbar"),o=p("t-fab"),n=p("t-avatar");return i(),l(u,null,[m(d,{style:{position:"fixed",top:"0",left:"0",width:"100%","background-color":"#fff","z-index":"5"}},{default:V(()=>[T]),_:1}),m(o,{onClick:e.addcase,style:{position:"fixed",right:"0.1rem",bottom:"30%"}},null,8,["onClick"]),r("ul",A,[(i(!0),l(u,null,S(e.caseList,(a,g)=>(i(),l("li",{key:g},[r("div",G,[r("div",Q,[m(n,{onClick:z(v=>e.seeHeadImg(a.user&&JSON.parse(a.user).headImg?JSON.parse(a.user).headImg:"https://tdesign.gtimg.com/site/avatar.jpg"),["stop"]),class:"imgBox",image:a.user&&JSON.parse(a.user).headImg?JSON.parse(a.user).headImg:"https://tdesign.gtimg.com/site/avatar.jpg","hide-on-load-failed":!1},null,8,["onClick","image"]),r("span",null,_(a.username),1)])]),r("div",U,_(a.text),1),r("div",W,[(i(!0),l(u,null,S(JSON.parse(a.imgList),(v,I)=>(i(),l("div",{onClick:ee=>e.seeImg(JSON.parse(a.imgList),I),class:"box_img",style:M("background:url("+v.url+") no-repeat;background-size:cover;"),key:I+"_img"},null,12,X))),128))]),r("div",Y,_(a.time),1)]))),128))])],64)}var ae=w(K,[["render",Z],["__scopeId","data-v-42c2ca57"]]);export{ae as default};
