var R=Object.defineProperty,M=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var $=(t,s,l)=>s in t?R(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,N=(t,s)=>{for(var l in s||(s={}))j.call(s,l)&&$(t,l,s[l]);if(I)for(var l of I(s))q.call(s,l)&&$(t,l,s[l]);return t},F=(t,s)=>M(t,U(s));import{_ as E,m as J,b as O,d as A,V as P,r as W,W as X,e as Y,o as Z,t as H,a as p,c as d,f as r,w as g,F as w,C as L,p as K,g as c,i as b,n as m,q as G,X as k,Y as Q,Z as ee,M as te,z as oe,A as se,j as n}from"./index.f6f1b4cd.js";const le=J({beforeRouteEnter(t,s,l){l(e=>{s.path=="/shopdetail"?(e.scroll=localStorage.getItem("scrollTop"),e.isType=localStorage.getItem("isType")):(e.scroll=0,e.isType="all",localStorage.removeItem("scrollTop"),localStorage.removeItem("isType")),console.log(s,"from"),e.store.commit("changeFooter",!1)})},setup(){const t=O(),s=A();let l=P(null),e=W({store:t,imgUrl:X,goodsList:[],typeList:[],flutureList:[],scroll:null,isType:"all",timer:"",page:1,limit:6,total:null}),C=async()=>{e.page=e.page+1;let o=await k({page:e.page,limit:e.limit}),T=e.goodsList.concat(o.result);e.total=o.total,e.goodsList=T},z=()=>{e.timer=setTimeout(()=>{l._value.scrollTop=0,clearTimeout(e.timer)},100)},h=async()=>{let o=await Q();e.typeList=o.result.filter(i=>i.name!="\u5373\u5C06\u4E0A\u65B0")},y=o=>{s.push({path:"/shopdetail",query:{id:o}}),localStorage.setItem("scrollTop",l.value.scrollTop)},f=async()=>{if(e.isType=="all"){let o=await k({page:e.page,limit:e.limit});e.goodsList=o.result,o.total&&(e.total=o.total)}else u(e.isType)},u=async o=>{if(o=="all"){let i=await k({page:e.page,limit:e.limit});e.goodsList=i.result,i.total&&(e.total=i.total)}else{let i=await ee({type:o});i.code==1&&te.success("\u7B5B\u9009\u6210\u529F"),console.log(o,i.result),o=="\u5373\u5C06\u4E0A\u65B0"?e.flutureList=i.result:(e.goodsList=i.result,console.log(e.goodsList,"\u7B5B\u9009"))}},v=o=>{e.isType=o,u(o)};return Y((o,i)=>{o.path=="/shopdetail"&&localStorage.setItem("isType",e.isType),t.commit("changeFooter",!0)}),Z(()=>{f(),h(),u("\u5373\u5C06\u4E0A\u65B0"),e.timer=setTimeout(()=>{l._value.scrollTop=e.scroll,clearTimeout(e.timer)},100)}),F(N({},H(e)),{listDom:l,goDetail:y,filterData:v,returnTop:z,loadData:C})}}),B=t=>(oe("data-v-f38e779e"),t=t(),se(),t),ae={ref:"listDom",id:"shoplist1",class:"shopList"},ie=b(" \u5546\u57CE "),re=B(()=>c("p",{style:{"font-size":"0.3rem","font-weight":"bold","text-indent":"0.2rem","line-height":"1rem"}},"\u5373\u5C06\u4E0A\u65B0",-1)),ne={class:"list"},ce=["onClick"],pe={class:"price"},de=B(()=>c("p",{style:{"font-size":"0.3rem","font-weight":"bold","text-indent":"0.2rem","line-height":"1rem"}},"\u5168\u90E8\u5546\u54C1",-1)),ge={class:"list list1"},me=["onClick"],ue={class:"price"},_e={key:1,style:{"padding-bottom":"1rem","box-sizing":"border-box","text-align":"center","font-size":"0.3rem"}};function fe(t,s,l,e,C,z){const h=n("t-navbar"),y=n("van-sticky"),f=n("t-image"),u=n("t-swiper-item"),v=n("t-swiper"),o=n("t-grid-item"),i=n("t-grid"),T=n("t-tag"),D=n("van-image"),V=n("t-divider"),x=n("van-tag");return p(),d("div",ae,[r(y,{"offset-top":0},{default:g(()=>[r(h,{onClickText:t.returnTop},{default:g(()=>[ie]),_:1},8,["onClickText"])]),_:1}),r(v,{class:"my-swiper",autoplay:!1,height:200,direction:"horizontal",navigation:{type:"fraction"}},{default:g(()=>[r(u,{class:"swiper-item--demo"},{default:g(()=>[r(f,{width:"100%",height:"4rem",fit:"cover",lazy:"",class:"image-container",src:"http://101.35.30.21:4399/newImg/dm.jpg",alt:"\u4E00\u5F20\u56FE\u7247"})]),_:1}),r(u,{class:"swiper-item--demo"},{default:g(()=>[r(f,{width:"100%",height:"4rem",fit:"cover",lazy:"",class:"image-container",src:"http://101.35.30.21:4399/newImg/mdzs.png",alt:"\u4E00\u5F20\u56FE\u7247"})]),_:1})]),_:1}),r(i,null,{default:g(()=>[r(o,{onClick:s[0]||(s[0]=a=>t.filterData("all")),text:"\u5168\u90E8",image:t.imgUrl},null,8,["image"]),(p(!0),d(w,null,L(t.typeList,(a,_)=>(p(),K(o,{onClick:S=>t.filterData(a.name),key:_,text:a.name,image:t.imgUrl},null,8,["onClick","text","image"]))),128))]),_:1}),re,c("ul",ne,[(p(!0),d(w,null,L(t.flutureList,(a,_)=>(p(),d("li",{onClick:S=>t.goDetail(a._id),key:_},[r(T,{size:"small",class:"tag",theme:"primary",variant:"light-outline"},{default:g(()=>[b(m(a.typeName),1)]),_:2},1024),r(D,{"lazy-load":"",width:"86%",height:"3rem",fit:"cover",src:JSON.parse(a.bannerList)[0].url},null,8,["src"]),c("p",pe,"\uFFE5"+m(a.price),1),c("p",null,m(a.title),1),c("p",null,m(a.desc),1)],8,ce))),128))]),r(V),de,c("ul",ge,[(p(!0),d(w,null,L(t.goodsList,(a,_)=>(p(),d("li",{onClick:S=>t.goDetail(a._id),key:_},[r(x,{class:"tag",plain:"",type:"primary"},{default:g(()=>[b(m(a.typeName),1)]),_:2},1024),r(D,{"lazy-load":"",width:"86%",height:"3rem",fit:"cover",src:JSON.parse(a.bannerList)[0].url},null,8,["src"]),c("p",ue,"\uFFE5"+m(a.price),1),c("p",null,m(a.title),1),c("p",null,m(a.desc),1)],8,me))),128))]),t.goodsList.length<t.total?(p(),d("p",{key:0,onClick:s[1]||(s[1]=a=>t.loadData()),style:{"padding-bottom":"1rem","box-sizing":"border-box","text-align":"center","font-size":"0.3rem"}}," \u67E5\u770B\u66F4\u591A")):G("",!0),t.goodsList.length>=t.total?(p(),d("p",_e," \u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86")):G("",!0)],512)}var ve=E(le,[["render",fe],["__scopeId","data-v-f38e779e"]]);export{ve as default};
