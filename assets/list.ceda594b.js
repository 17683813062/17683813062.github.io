var N=Object.defineProperty,x=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var b=(e,s,t)=>s in e?N(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,k=(e,s)=>{for(var t in s||(s={}))J.call(s,t)&&b(e,t,s[t]);if(S)for(var t of S(s))O.call(s,t)&&b(e,t,s[t]);return e},C=(e,s)=>x(e,B(s));import{_ as w,m as $,b as j,d as M,r as E,o as F,e as R,t as V,a as l,c as i,f as u,w as z,g as r,F as m,C as L,E as P,n as _,L as H,I as y,M as D,Q,i as T,j as p}from"./index.3803a45c.js";const q=$({beforeRouteEnter(e,s,t){t(c=>{c.store.commit("changeFooter",!1)})},setup(){let e=j(),s=M(),t=E({store:e,list:[{title:"#\u5403\u996D\u5723\u8BDE\u8282\u6495\u5F00"},{title:"#\u62BD\u70B9\u65F6\u95F4\u6570\u636E\u662F"},{title:"#\u4ED8\u6587\u5CF0\u54E5\u54E5\u54E5"},{title:"#\u4ED8\u6587\u5CF0\u54E5\u54E5\u54E5"},{title:"#\u4ED8\u6587\u5CF0\u54E5\u54E5\u54E5"}],manList:[{name:"\u5C0F\u6728\u866B"},{name:"\u9632\u98CE\u7F51"},{name:"\u5927V\u4EBA\u7684"},{name:"\u4F5B\u5C71\u5E02\u5206"}],caseList:[],user:JSON.parse(localStorage.getItem("user"))}),c=(o,n)=>{console.log(o,n);let a=[];o.forEach(d=>{a.push(d.url)}),y({images:a,startPosition:n})},h=o=>{y({images:[o]})},f=()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),D.error("\u8BF7\u767B\u5F55!!!");return}s.push({path:"/addcase"})},g=async()=>{let o=await Q();t.caseList=o.result};return F(()=>{g(),console.log(t.user.headImg)}),R((o,n)=>{e.commit("changeFooter",!0)}),C(k({},V(t)),{addcase:f,seeImg:c,seeHeadImg:h})}}),A=T(" \u52A8\u6001\u5E7F\u573A "),G={class:"listBox"},K={class:"top"},U={class:"headImg"},W={class:"bottom"},X={class:"imgBoxContent"},Y=["onClick"],Z={class:"time"};function ee(e,s,t,c,h,f){const g=p("t-navbar"),o=p("t-fab"),n=p("t-avatar");return l(),i(m,null,[u(g,{style:{position:"fixed",top:"0",left:"0",width:"100%","background-color":"#fff","z-index":"5"}},{default:z(()=>[A]),_:1}),u(o,{onClick:e.addcase,style:{position:"fixed",right:"0.1rem",bottom:"30%"}},null,8,["onClick"]),r("ul",G,[(l(!0),i(m,null,L(e.caseList,(a,d)=>(l(),i("li",{key:d},[r("div",K,[r("div",U,[u(n,{onClick:P(v=>e.seeHeadImg(a.user&&JSON.parse(a.user).headImg?JSON.parse(a.user).headImg:"https://tdesign.gtimg.com/site/avatar.jpg"),["stop"]),class:"imgBox",image:a.user&&JSON.parse(a.user).headImg?JSON.parse(a.user).headImg:"https://tdesign.gtimg.com/site/avatar.jpg","hide-on-load-failed":!1},null,8,["onClick","image"]),r("span",null,_(a.username),1)])]),r("div",W,_(a.text),1),r("div",X,[(l(!0),i(m,null,L(JSON.parse(a.imgList),(v,I)=>(l(),i("div",{onClick:te=>e.seeImg(JSON.parse(a.imgList),I),class:"box_img",style:H("background:url("+v.url+") no-repeat;background-size:cover;"),key:I+"_img"},null,12,Y))),128))]),r("div",Z,_(a.time),1)]))),128))])],64)}var oe=w(q,[["render",ee],["__scopeId","data-v-eebbdca0"]]);export{oe as default};
