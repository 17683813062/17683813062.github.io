var G=Object.defineProperty,C=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var y=(e,o,t)=>o in e?G(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,O=(e,o)=>{for(var t in o||(o={}))B.call(o,t)&&y(e,t,o[t]);if(h)for(var t of h(o))D.call(o,t)&&y(e,t,o[t]);return e},j=(e,o)=>C(e,$(o));import{_ as I,h as R,r as S,l as q,o as z,t as F,c as N,a as p,w as n,b as l,q as c,z as w,i as m,v as M,d as V,u as H,e as d,f as i,F as T,m as E,g}from"./index.9e19b5a8.js";import{f as J,d as A}from"./index.b41fe155.js";const K=R({beforeRouteEnter(e,o,t){t(s=>{s.store.commit("changeFooter",!1)})},setup(){const e=M(),o=V(),t=H();let s=S({store:t,user:JSON.parse(localStorage.getItem("user")),goodObj:{_id:"",bannerList:[],title:"",desc:"",price:null,html:"",typeName:"",typeId:""}}),b=async()=>{let a=await J({_id:s.goodObj._id});console.log(a,"\u5220\u9664\u5546\u54C1"),o.push({path:"/shop"})},f=()=>{o.push({path:"/editgood",query:{_id:s.goodObj._id}})},_=async a=>{let r=await A({_id:a});s.goodObj.bannerList=JSON.parse(r.result[0].bannerList),s.goodObj.title=r.result[0].title,s.goodObj.desc=r.result[0].desc,s.goodObj.price=r.result[0].price,s.goodObj.html=r.result[0].html,s.goodObj.typeName=r.result[0].typeName,s.goodObj.typeId=r.result[0].typeId};return q(()=>{s.goodObj._id=e.query._id,_(e.query._id)}),z((a,r)=>{t.commit("changeFooter",!0)}),j(O({},F(s)),{editGoods:f,removeGoods:b})}}),P=g(" \u8BE6\u60C5 "),Q={class:"goodsMsg"},U=g("\u7F16\u8F91\u5546\u54C1"),W=g("\u5220\u9664\u5546\u54C1"),X=["innerHTML"];function Y(e,o,t,s,b,f){const _=d("sound-icon"),a=d("t-navbar"),r=d("van-image"),k=d("van-swipe-item"),L=d("van-swipe"),v=d("t-button");return i(),N("div",null,[p(a,null,{right:n(()=>[p(_)]),default:n(()=>[P]),_:1}),p(L,{autoplay:3e3,"lazy-render":""},{default:n(()=>[(i(!0),N(T,null,E(e.goodObj.bannerList,u=>(i(),c(k,{key:u},{default:n(()=>[p(r,{width:"100%",height:"7rem",fit:"cover",src:u.url},null,8,["src"])]),_:2},1024))),128))]),_:1}),l("div",Q,[e.user&&e.user.username=="111"?(i(),c(v,{key:0,onClick:o[0]||(o[0]=u=>e.editGoods()),theme:"primary",size:"small"},{default:n(()=>[U]),_:1})):w("",!0),e.user&&e.user.username=="111"?(i(),c(v,{key:1,style:{"margin-left":"0.2rem"},onClick:o[1]||(o[1]=u=>e.removeGoods()),theme:"primary",size:"small"},{default:n(()=>[W]),_:1})):w("",!0),l("h6",null,"\uFFE5"+m(e.goodObj.price),1),l("p",null,m(e.goodObj.title),1),l("p",null,"\u7C7B\u578B\uFF1A"+m(e.goodObj.typeName),1),l("p",null,m(e.goodObj.desc),1),l("div",{class:"goodHtml",innerHTML:e.goodObj.html},null,8,X)])])}var oe=I(K,[["render",Y],["__scopeId","data-v-3d3789f8"]]);export{oe as default};
