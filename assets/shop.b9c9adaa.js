var U=Object.defineProperty,V=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(e,s,o)=>s in e?U(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,$=(e,s)=>{for(var o in s||(s={}))M.call(s,o)&&b(e,o,s[o]);if(I)for(var o of I(s))E.call(s,o)&&b(e,o,s[o]);return e},N=(e,s)=>V(e,x(s));import{_ as J,m as O,R as j,r as q,S as P,b as W,o as X,t as A,a as _,c as g,d as i,w as p,F as v,v as T,y as H,e as c,i as w,n as d,f as K,g as Q,T as Y,U as F,V as Z,M as ee,W as te,X as se,j as n}from"./index.4dbc2526.js";const oe=O({beforeRouteEnter(e,s,o){o(t=>{s.path=="/shopdetail"?(t.scroll=localStorage.getItem("scrollTop"),t.isType=localStorage.getItem("isType")):(t.scroll=0,t.isType="all",localStorage.removeItem("scrollTop"),localStorage.removeItem("isType")),console.log(s,"from"),t.store.commit("changeFooter",!1)})},setup(){const e=K(),s=Q();let o=j(null),t=q({listDom:o,store:e,imgUrl:P,goodsList:[],typeList:[],flutureList:[],scroll:null,isType:"all",timer:""}),L=()=>{t.timer=setTimeout(()=>{o._value.scrollTop=0,clearTimeout(t.timer)},100)},S=async()=>{let l=await Y();t.typeList=l.result.filter(r=>r.name!="\u5373\u5C06\u4E0A\u65B0")},f=l=>{s.push({path:"/shopdetail",query:{_id:l}}),localStorage.setItem("scrollTop",o.value.scrollTop)},h=async()=>{if(t.isType=="all"){let l=await F();t.goodsList=l.result}else u(t.isType)},u=async l=>{if(l=="all"){let r=await F();t.goodsList=r.result}else{let r=await Z({type:l});r.code==1&&ee.success("\u7B5B\u9009\u6210\u529F"),console.log(l,r.result),l=="\u5373\u5C06\u4E0A\u65B0"?t.flutureList=r.result:(t.goodsList=r.result,console.log(t.goodsList,"\u7B5B\u9009"))}},y=l=>{t.isType=l,u(l)};return W((l,r)=>{l.path=="/shopdetail"&&localStorage.setItem("isType",t.isType),e.commit("changeFooter",!0)}),X(()=>{h(),S(),u("\u5373\u5C06\u4E0A\u65B0"),t.timer=setTimeout(()=>{o._value.scrollTop=t.scroll,clearTimeout(t.timer)},100)}),N($({},A(t)),{listDom:o,goDetail:f,filterData:y,returnTop:L})}}),k=e=>(te("data-v-37e9d7e2"),e=e(),se(),e),le={ref:"listDom",id:"shoplist1",class:"shopList"},ae=w(" \u5546\u57CE "),ie=k(()=>c("img",{src:"https://tdesign.gtimg.com/site/swiper/02.png",alt:""},null,-1)),re=k(()=>c("p",{style:{"font-size":"0.3rem","font-weight":"bold","text-indent":"0.2rem","line-height":"1rem"}},"\u5373\u5C06\u4E0A\u65B0",-1)),ne={class:"list"},ce=["onClick"],pe={class:"price"},de=k(()=>c("p",{style:{"font-size":"0.3rem","font-weight":"bold","text-indent":"0.2rem","line-height":"1rem"}},"\u5168\u90E8\u5546\u54C1",-1)),_e={class:"list list1"},ue=["onClick"],ge={class:"price"};function me(e,s,o,t,L,S){const f=n("t-navbar"),h=n("van-sticky"),u=n("t-swiper-item"),y=n("t-image"),l=n("t-swiper"),r=n("t-grid-item"),G=n("t-grid"),z=n("t-tag"),D=n("van-image"),B=n("t-divider"),R=n("van-tag");return _(),g("div",le,[i(h,{"offset-top":0},{default:p(()=>[i(f,{onClickText:e.returnTop},{default:p(()=>[ae]),_:1},8,["onClickText"])]),_:1}),i(l,{class:"my-swiper",autoplay:!1,height:180,direction:"horizontal",navigation:{type:"fraction"}},{default:p(()=>[i(u,{class:"swiper-item--demo"},{default:p(()=>[ie]),_:1}),i(u,{class:"swiper-item--demo"},{default:p(()=>[i(y,{fit:"contain",lazy:"",class:"image-container",src:"https://tdesign.gtimg.com/site/swiper/02.png",alt:"\u4E00\u5F20\u56FE\u7247"})]),_:1})]),_:1}),i(G,null,{default:p(()=>[i(r,{onClick:s[0]||(s[0]=a=>e.filterData("all")),text:"\u5168\u90E8",image:e.imgUrl},null,8,["image"]),(_(!0),g(v,null,T(e.typeList,(a,m)=>(_(),H(r,{onClick:C=>e.filterData(a.name),key:m,text:a.name,image:e.imgUrl},null,8,["onClick","text","image"]))),128))]),_:1}),re,c("ul",ne,[(_(!0),g(v,null,T(e.flutureList,(a,m)=>(_(),g("li",{onClick:C=>e.goDetail(a._id),key:m},[i(z,{size:"small",class:"tag",theme:"primary",variant:"light-outline"},{default:p(()=>[w(d(a.typeName),1)]),_:2},1024),i(D,{width:"86%",height:"3rem",fit:"cover",src:JSON.parse(a.bannerList)[0].url},null,8,["src"]),c("p",pe,"\uFFE5"+d(a.price),1),c("p",null,d(a.title),1),c("p",null,d(a.desc),1)],8,ce))),128))]),i(B),de,c("ul",_e,[(_(!0),g(v,null,T(e.goodsList,(a,m)=>(_(),g("li",{onClick:C=>e.goDetail(a._id),key:m},[i(R,{class:"tag",plain:"",type:"primary"},{default:p(()=>[w(d(a.typeName),1)]),_:2},1024),i(D,{width:"86%",height:"3rem",fit:"cover",src:JSON.parse(a.bannerList)[0].url},null,8,["src"]),c("p",ge,"\uFFE5"+d(a.price),1),c("p",null,d(a.title),1),c("p",null,d(a.desc),1)],8,ue))),128))])],512)}var ye=J(oe,[["render",me],["__scopeId","data-v-37e9d7e2"]]);export{ye as default};
