var G=Object.defineProperty,C=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var y=(e,o,t)=>o in e?G(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,O=(e,o)=>{for(var t in o||(o={}))B.call(o,t)&&y(e,t,o[t]);if(h)for(var t of h(o))D.call(o,t)&&y(e,t,o[t]);return e},j=(e,o)=>C(e,$(o));import{_ as I,m as R,r as S,o as q,b as F,t as M,a as i,c as N,d as p,w as r,F as V,q as z,x as c,e as l,v as w,n as m,u as H,g as T,f as E,a3 as J,a1 as A,i as g,j as d}from"./index.f7c8250a.js";const K=R({beforeRouteEnter(e,o,t){t(s=>{s.store.commit("changeFooter",!1)})},setup(){const e=H(),o=T(),t=E();let s=S({store:t,user:JSON.parse(localStorage.getItem("user")),goodObj:{_id:"",bannerList:[],title:"",desc:"",price:null,html:"",typeName:"",typeId:""}}),b=async()=>{let n=await J({_id:s.goodObj._id});console.log(n,"\u5220\u9664\u5546\u54C1"),o.push({path:"/shop"})},v=()=>{o.push({path:"/editgood",query:{_id:s.goodObj._id}})},_=async n=>{let a=await A({_id:n});s.goodObj.bannerList=JSON.parse(a.result[0].bannerList),s.goodObj.title=a.result[0].title,s.goodObj.desc=a.result[0].desc,s.goodObj.price=a.result[0].price,s.goodObj.html=a.result[0].html,s.goodObj.typeName=a.result[0].typeName,s.goodObj.typeId=a.result[0].typeId};return q(()=>{s.goodObj._id=e.query._id,_(e.query._id)}),F((n,a)=>{t.commit("changeFooter",!0)}),j(O({},M(s)),{editGoods:v,removeGoods:b})}}),P=g(" \u8BE6\u60C5 "),Q={class:"goodsMsg"},U=g("\u7F16\u8F91\u5546\u54C1"),W=g("\u5220\u9664\u5546\u54C1"),X=["innerHTML"];function Y(e,o,t,s,b,v){const _=d("sound-icon"),n=d("t-navbar"),a=d("van-image"),k=d("van-swipe-item"),L=d("van-swipe"),f=d("t-button");return i(),N("div",null,[p(n,null,{right:r(()=>[p(_)]),default:r(()=>[P]),_:1}),p(L,{autoplay:3e3,"lazy-render":""},{default:r(()=>[(i(!0),N(V,null,z(e.goodObj.bannerList,u=>(i(),c(k,{key:u},{default:r(()=>[p(a,{width:"100%",height:"7rem",fit:"cover",src:u.url},null,8,["src"])]),_:2},1024))),128))]),_:1}),l("div",Q,[e.user&&e.user.username=="111"?(i(),c(f,{key:0,onClick:o[0]||(o[0]=u=>e.editGoods()),theme:"primary",size:"small"},{default:r(()=>[U]),_:1})):w("",!0),e.user&&e.user.username=="111"?(i(),c(f,{key:1,style:{"margin-left":"0.2rem"},onClick:o[1]||(o[1]=u=>e.removeGoods()),theme:"primary",size:"small"},{default:r(()=>[W]),_:1})):w("",!0),l("h6",null,"\uFFE5"+m(e.goodObj.price),1),l("p",null,m(e.goodObj.title),1),l("p",null,"\u7C7B\u578B\uFF1A"+m(e.goodObj.typeName),1),l("p",null,m(e.goodObj.desc),1),l("div",{class:"goodHtml",innerHTML:e.goodObj.html},null,8,X)])])}var ee=I(K,[["render",Y],["__scopeId","data-v-3d3789f8"]]);export{ee as default};
