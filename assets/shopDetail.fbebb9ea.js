var k=Object.defineProperty,B=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))D.call(t,o)&&b(e,o,t[o]);if(g)for(var o of g(t))I.call(t,o)&&b(e,o,t[o]);return e},v=(e,t)=>B(e,C(t));import{_ as R,h as S,r as $,l as q,o as F,t as G,c as h,a as i,w as d,b as a,q as y,z as M,i as u,v as V,d as z,u as H,e as r,f as c,F as T,m as E,g as O}from"./index.620e2558.js";import{d as J}from"./index.802ab18f.js";const A=S({beforeRouteEnter(e,t,o){o(s=>{s.store.commit("changeFooter",!1)})},setup(){const e=V(),t=z(),o=H();let s=$({store:o,user:JSON.parse(localStorage.getItem("user")),goodObj:{_id:"",bannerList:[],title:"",desc:"",price:null,html:"",typeName:"",typeId:""}}),_=()=>{t.push({path:"/editgood",query:{_id:s.goodObj._id}})},m=async l=>{let n=await J({_id:l});s.goodObj.bannerList=JSON.parse(n.result[0].bannerList),s.goodObj.title=n.result[0].title,s.goodObj.desc=n.result[0].desc,s.goodObj.price=n.result[0].price,s.goodObj.html=n.result[0].html,s.goodObj.typeName=n.result[0].typeName,s.goodObj.typeId=n.result[0].typeId};return q(()=>{s.goodObj._id=e.query._id,m(e.query._id)}),F((l,n)=>{o.commit("changeFooter",!0)}),v(f({},G(s)),{editGoods:_})}}),K=O(" \u8BE6\u60C5 "),P={class:"goodsMsg"},Q=O("\u7F16\u8F91\u5546\u54C1"),U=["innerHTML"];function W(e,t,o,s,_,m){const l=r("sound-icon"),n=r("t-navbar"),j=r("van-image"),N=r("van-swipe-item"),w=r("van-swipe"),L=r("t-button");return c(),h("div",null,[i(n,null,{right:d(()=>[i(l)]),default:d(()=>[K]),_:1}),i(w,{autoplay:3e3,"lazy-render":""},{default:d(()=>[(c(!0),h(T,null,E(e.goodObj.bannerList,p=>(c(),y(N,{key:p},{default:d(()=>[i(j,{width:"100%",height:"7rem",fit:"cover",src:p.url},null,8,["src"])]),_:2},1024))),128))]),_:1}),a("div",P,[e.user&&e.user.username=="111"?(c(),y(L,{key:0,onClick:t[0]||(t[0]=p=>e.editGoods()),theme:"primary",size:"small"},{default:d(()=>[Q]),_:1})):M("",!0),a("h6",null,"\uFFE5"+u(e.goodObj.price),1),a("p",null,u(e.goodObj.title),1),a("p",null,"\u7C7B\u578B\uFF1A"+u(e.goodObj.typeName),1),a("p",null,u(e.goodObj.desc),1),a("div",{class:"goodHtml",innerHTML:e.goodObj.html},null,8,U)])])}var x=R(A,[["render",W],["__scopeId","data-v-fd16642a"]]);export{x as default};
