var T=Object.defineProperty,J=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,j=(e,t)=>{for(var o in t||(t={}))E.call(t,o)&&w(e,o,t[o]);if(A)for(var o of A(t))G.call(t,o)&&w(e,o,t[o]);return e},P=(e,t)=>J(e,R(t));import{_ as q,m as H,d as W,r as K,o as Q,t as U,a as p,c as X,f as s,w as n,g as a,n as v,p as C,q as y,F as Y,M as l,s as Z,v as x,x as ee,y as D,i as F,z as te,A as oe,j as g}from"./index.f6f1b4cd.js";const ae=H({setup(){const e=W();let t=K({role:"admin",timer:null,user:JSON.parse(localStorage.getItem("user")),address:"",obj:{address:"",attr:"",birthday:"",heightWeight:"",lat:"",lng:"",nickname:"",sign:"",user:"",username:""},flag:!0,admin:null}),o=()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),l.error("\u8BF7\u767B\u5F55!!!");return}e.push({path:"/leaveList"})},b=()=>{e.push({path:"/diction_list"})},L=()=>{e.push({path:"/personvideo"})},M=()=>{e.push({path:"/func_list"})},c=()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),l.error("\u8BF7\u767B\u5F55!!!");return}e.push({path:"/orderlist"})},h=()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),l.error("\u8BF7\u767B\u5F55!!!");return}e.push({path:"/shopcar"})},m=async()=>{let r=await Z();console.log(r,"admin"),t.admin=r.result[0].admin},f=()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),l.error("\u8BF7\u767B\u5F55!!!");return}t.flag?(t.flag=!1,AMap.plugin("AMap.Geolocation",function(){var r=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0,buttonPosition:"RB"});r.getCurrentPosition(),AMap.event.addListener(r,"complete",V),AMap.event.addListener(r,"error",$);function V(d){let S=d.position.lng,I=d.position.lat;localStorage.setItem("lng",S),localStorage.setItem("lat",I),x({lng:S,lat:I}).then(k=>{t.address=k.address,console.log(k,"\u5B9A\u4F4D\u4FE1\u606F"),ee({user:t.user,address:k.address,lng:S,lat:I}).then(z=>{D(),console.log(z,"\u66F4\u65B0\u4F4D\u7F6E\u6210\u529F"),l.success("\u66F4\u65B0\u4F4D\u7F6E\u6210\u529F"),t.flag=!0})})}function $(d){console.log(JSON.stringify(d,"error")),l.error("\u66F4\u65B0\u5931\u8D25\uFF01\u63A8\u8350\u6362\u4E00\u4E2A\u6D4F\u89C8\u5668\u8BD5\u8BD5"),t.flag=!0}})):l.error("\u4E0D\u8981\u8FDE\u7EED\u70B9\u51FB\uFF01\uFF01\uFF01"),t.timer=setTimeout(()=>{location.reload(),l.success("\u66F4\u65B0\u4F4D\u7F6E\u6210\u529F"),clearTimeout(t.timer)},2e3)},i=async()=>{let r=await D({username:t.user.username});if(r.reult.length==0){l.error("\u8BF7\u66F4\u65B0\u5B9A\u4F4D\u4FE1\u606F");return}t.obj=r.reult[0],console.log(r,"\u7528\u6237\u5B9A\u4F4D\u4FE1\u606F")};Q(()=>{i(),m()});let _=()=>{!t.user||!t.user.username||e.push({path:"/nearMan"})},N=()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),l.error("\u8BF7\u767B\u5F55!!!");return}e.push({path:"/leaveword"})},B=()=>{e.push({path:"/login"})},O=()=>{e.push({path:"/share"})};return P(j({},U(t)),{onLogin:B,goSpeakPage:N,goMapPage:_,goshare:O,getLocationFunc:f,goMyOrder:c,goShopCart:h,goFunc:M,goPersionVideo:L,goDictionList:b,goLeaveList:o})}}),u=e=>(te("data-v-495b75f5"),e=e(),oe(),e),re=F("\u767B\u5F55"),le=u(()=>a("br",null,null,-1)),se={class:"nicknameBox"},ne={style:{height:"0.6rem",display:"flex","align-items":"center"}},ie=F("\u66F4\u65B0\u4F4D\u7F6E "),ue={style:{width:"100%",padding:"0.1rem 0.2rem","box-sizing":"border-box"}},ge=u(()=>a("span",null,"\u8D44\u6E90",-1)),ce=u(()=>a("span",null,"\u5B57\u5178",-1)),me=u(()=>a("span",null,"\u7559\u8A00\u5217\u8868",-1)),de=u(()=>a("span",null,"\u529F\u80FD",-1)),pe=u(()=>a("span",null,"\u7559\u8A00",-1)),he=u(()=>a("span",null,"\u63A8\u5E7F",-1));function fe(e,t,o,b,L,M){const c=g("t-button"),h=g("van-image"),m=g("van-grid-item"),f=g("van-grid"),i=g("t-cell");return p(),X(Y,null,[s(c,{style:{float:"right",margin:"0.2rem 0.3rem"},onClick:t[0]||(t[0]=_=>e.onLogin()),theme:"primary",size:"small"},{default:n(()=>[re]),_:1}),le,s(h,{style:{"margin-left":"0.2rem"},round:"",width:"2rem",height:"2rem",src:e.obj.user?JSON.parse(e.obj.user).headImg:e.user?e.user.headImg:""},null,8,["src"]),a("span",se,v(e.obj?e.obj.nickname:""),1),a("p",null,"\xA0\xA0\xA0\xA0"+v(e.user?e.user.username?"\u767B\u5F55\u6210\u529F\uFF01\uFF01\uFF01 \u6B22\u8FCE\u767B\u5F55\uFF1A "+e.user.username:"\u7528\u6237\u540D\u4E0D\u5B58\u5728":" \u672A\u767B\u5F55"),1),a("div",ne,[s(c,{style:{float:"left","margin-left":"0.3rem"},onClick:t[1]||(t[1]=_=>e.getLocationFunc()),theme:"primary",size:"small"},{default:n(()=>[ie]),_:1})]),a("p",ue,v(e.obj.address?e.obj.address:""),1),s(f,null,{default:n(()=>[s(m,{onClick:e.goMyOrder,icon:"friends",text:"\u6211\u7684\u8BA2\u5355"},null,8,["onClick"]),s(m,{onClick:e.goShopCart,icon:"cart",text:"\u8D2D\u7269\u8F66"},null,8,["onClick"])]),_:1}),a("div",null,[e.admin?(p(),C(i,{key:0,onClick:e.goPersionVideo},{title:n(()=>[ge]),_:1},8,["onClick"])):y("",!0),e.user&&e.user.username=="admin"?(p(),C(i,{key:1,onClick:e.goDictionList},{title:n(()=>[ce]),_:1},8,["onClick"])):y("",!0),e.user&&e.user.username=="admin"?(p(),C(i,{key:2,onClick:e.goLeaveList},{title:n(()=>[me]),_:1},8,["onClick"])):y("",!0),s(i,{onClick:e.goFunc},{title:n(()=>[de]),_:1},8,["onClick"]),s(i,{onClick:e.goSpeakPage,note:"\u6709\u95EE\u9898\u53EF\u4EE5\u5728\u8FD9\u7559\u8A00"},{title:n(()=>[pe]),_:1},8,["onClick"]),s(i,{onClick:e.goshare},{title:n(()=>[he]),_:1},8,["onClick"])])],64)}var Ie=q(ae,[["render",fe],["__scopeId","data-v-495b75f5"]]);export{Ie as default};
