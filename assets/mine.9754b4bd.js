var j=Object.defineProperty,P=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,M=(e,t)=>{for(var o in t||(t={}))B.call(t,o)&&C(e,o,t[o]);if(k)for(var o of k(t))N.call(t,o)&&C(e,o,t[o]);return e},S=(e,t)=>P(e,$(t));import{_ as z,m as F,d as D,r as O,o as R,t as V,a as E,c as G,f as n,w as i,g as a,n as m,F as J,p as T,s as q,q as w,M as h,i as L,v as H,x as W,j as _}from"./index.ee240181.js";const K=F({setup(){const e=D();let t=O({user:JSON.parse(localStorage.getItem("user")),address:"",obj:{address:"",attr:"",birthday:"",heightWeight:"",lat:"",lng:"",nickname:"",sign:"",user:"",username:""},flag:!0}),o=()=>{t.flag?(t.flag=!1,AMap.plugin("AMap.Geolocation",function(){var s=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0,buttonPosition:"RB"});s.getCurrentPosition(),AMap.event.addListener(s,"complete",c),AMap.event.addListener(s,"error",A);function c(l){let p=l.position.lng,d=l.position.lat;localStorage.setItem("lng",p),localStorage.setItem("lat",d),T({lng:p,lat:d}).then(g=>{t.address=g.address,console.log(g,"\u5B9A\u4F4D\u4FE1\u606F"),q({user:t.user,address:g.address,lng:p,lat:d}).then(I=>{w(),console.log(I,"\u66F4\u65B0\u4F4D\u7F6E\u6210\u529F"),h.success("\u66F4\u65B0\u4F4D\u7F6E\u6210\u529F"),t.flag=!0})})}function A(l){console.log(JSON.stringify(l,"error")),h.error("\u66F4\u65B0\u5931\u8D25\uFF01\u63A8\u8350\u6362\u4E00\u4E2A\u6D4F\u89C8\u5668\u8BD5\u8BD5"),t.flag=!0}})):h.error("\u4E0D\u8981\u8FDE\u7EED\u70B9\u51FB\uFF01\uFF01\uFF01")},v=async()=>{let s=await w({username:t.user.username});t.obj=s.reult[0],console.log(s,"\u7528\u6237\u5B9A\u4F4D\u4FE1\u606F")};R(()=>{v()});let b=()=>{!t.user||!t.user.username||e.push({path:"/nearMan"})},y=()=>{e.push({path:"/leaveword"})},r=()=>{e.push({path:"/login"})},u=()=>{e.push({path:"/share"})};return S(M({},V(t)),{onLogin:r,goSpeakPage:y,goMapPage:b,goshare:u,getLocationFunc:o})}}),f=e=>(H("data-v-b098c37e"),e=e(),W(),e),Q=L("\u767B\u5F55"),U=f(()=>a("br",null,null,-1)),X={class:"nicknameBox"},Y={style:{height:"0.6rem",display:"flex","align-items":"center"}},Z=L("\u66F4\u65B0\u4F4D\u7F6E "),x={style:{width:"100%",padding:"0.1rem 0.2rem","box-sizing":"border-box"}},ee=f(()=>a("span",null,"\u7559\u8A00",-1)),te=f(()=>a("span",null,"\u63A8\u5E7F",-1));function oe(e,t,o,v,b,y){const r=_("t-button"),u=_("van-image"),s=_("t-cell");return E(),G(J,null,[n(r,{style:{float:"right",margin:"0.2rem 0.3rem"},onClick:t[0]||(t[0]=c=>e.onLogin()),theme:"primary",size:"small"},{default:i(()=>[Q]),_:1}),U,n(u,{style:{"margin-left":"0.2rem"},round:"",width:"2rem",height:"2rem",src:e.user?e.user.headImg:""},null,8,["src"]),a("span",X,m(e.obj.nickname?e.obj.nickname:""),1),a("p",null,"\xA0\xA0\xA0\xA0"+m(e.user?e.user.username?"\u767B\u5F55\u6210\u529F\uFF01\uFF01\uFF01 \u6B22\u8FCE\u767B\u5F55\uFF1A "+e.user.username:"\u7528\u6237\u540D\u4E0D\u5B58\u5728":" \u672A\u767B\u5F55"),1),a("div",Y,[n(r,{style:{float:"left","margin-left":"0.3rem"},onClick:t[1]||(t[1]=c=>e.getLocationFunc()),theme:"primary",size:"small"},{default:i(()=>[Z]),_:1})]),a("p",x,m(e.obj.address?e.obj.address:""),1),a("div",null,[n(s,{onClick:e.goSpeakPage,note:"\u6709\u95EE\u9898\u53EF\u4EE5\u5728\u8FD9\u7559\u8A00"},{title:i(()=>[ee]),_:1},8,["onClick"]),n(s,{onClick:e.goshare},{title:i(()=>[te]),_:1},8,["onClick"])])],64)}var ne=z(K,[["render",oe],["__scopeId","data-v-b098c37e"]]);export{ne as default};
