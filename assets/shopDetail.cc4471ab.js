var q=Object.defineProperty,z=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var E=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&E(e,r,t[r]);if(L)for(var r of L(t))V.call(t,r)&&E(e,r,t[r]);return e},R=(e,t)=>z(e,H(t));import{_ as W,m as X,u as A,d as J,b as U,r as P,o as K,M as m,e as Q,t as Y,a as i,c as y,g as l,f as u,w as g,F as D,C as Z,p,q as c,n as h,E as M,L as x,a6 as ee,a7 as oe,a8 as te,a9 as ae,a4 as se,i as _,j as d}from"./index.ffe2c6e6.js";import{d as $}from"./download.87d370f0.js";const re=X({beforeRouteEnter(e,t,r){r(o=>{o.store.commit("changeFooter",!1)})},setup(){const e=A(),t=J(),r=U();let o=P({store:r,user:JSON.parse(localStorage.getItem("user")),timer:null,goodObj:{_id:"",bannerList:[],title:"",desc:"",price:null,html:"",typeName:"",typeId:"",timestamp:"",time:""},showShare:!1,options:[[{name:"\u590D\u5236\u94FE\u63A5",icon:"link"},{name:"\u5206\u4EAB\u6D77\u62A5",icon:"poster"},{name:"\u4E8C\u7EF4\u7801",icon:"qrcode"}]],erwmFlag:!1,base64:"",load:!0,goodShareFlag:!1,loadShareGood:!0,screenWidth:0,screenHeight:0,shareBase64:""}),F=()=>{o.goodShareFlag=!1},G=()=>{o.erwmFlag=!1},v=()=>{let n=o.goodObj.title+"_good_"+o.goodObj._id;$("data:image/png;base64,"+o.shareBase64,n||"photo","image/png"),m.success("\u4FDD\u5B58\u6210\u529F"),o.goodShareFlag=!1},w=()=>{let n=o.goodObj.title+"_"+o.goodObj._id;new html2canvas(document.getElementById("share_goods"),{allowTaint:!0,useCORS:!0,backgroundColor:"transparent"}).then(s=>{let a=s.toDataURL();console.log(a,"url"),$(a,n||"photo","image/png"),m.success("\u4FDD\u5B58\u6210\u529F"),o.goodShareFlag=!1}).catch(s=>{console.log(s,"err")})},b=(n,s)=>{switch(s){case 0:const a=document.createElement("input");document.body.appendChild(a),a.setAttribute("readonly","readonly"),a.setAttribute("value",location.href),a.select(),document.execCommand("copy")&&(document.execCommand("copy"),m.success("\u590D\u5236\u6210\u529F")),document.body.removeChild(a);break;case 1:o.goodShareFlag=!0,o.screenWidth=window.screen.width/1.2+"px",o.screenHeight=window.screen.height/1.2+"px",oe({text:location.href,size:100}).then(S=>{console.log(S);let B="data:image/png;base64,"+S.base64;console.log(B),o.shareBase64=B,o.loadShareGood=!1});break;case 2:o.erwmFlag=!0,ee({href:location.href,type:3,text:"\u5546\u54C1\u5206\u4EAB",text2:"111",RGB:"0 191 255"}).then(S=>{o.base64=S,o.load=!1});break}o.showShare=!1},k=()=>{o.showShare=!0},O=async()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),m.error("\u8BF7\u767B\u5F55!!!");return}let n=o.goodObj._id;await te({_id:n,username:o.user.username}),m.success("\u52A0\u5165\u8D2D\u7269\u8F66\u6210\u529F")},f=()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),m.error("\u8BF7\u767B\u5F55!!!");return}t.push({path:"/shopcar"})},C=async()=>{let n=await ae({_id:o.goodObj._id});console.log(n,"\u5220\u9664\u5546\u54C1"),t.push({path:"/shop"})},j=()=>{t.push({path:"/editgood",query:{_id:o.goodObj._id}})},I=async n=>{let s=await se({_id:n});o.goodObj.bannerList=JSON.parse(s.result[0].bannerList),o.goodObj.title=s.result[0].title,o.goodObj.desc=s.result[0].desc,o.goodObj.price=s.result[0].price,o.goodObj.html=s.result[0].html,o.goodObj.typeName=s.result[0].typeName,o.goodObj.typeId=s.result[0].typeId};return K(()=>{if(o.goodObj._id=e.query._id,I(e.query._id),localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),m.error("\u8BF7\u767B\u5F55!!!");return}}),Q((n,s)=>{r.commit("changeFooter",!0)}),R(N({},Y(o)),{editGoods:j,removeGoods:C,goShopCar:f,addShopCar:O,goShare:k,goFunc:b,saveShareErwm:w,closeErwmFlag:G,saveGoodShare:v,closeGoodShareFlag:F})}}),le=_(" \u5546\u54C1\u8BE6\u60C5 "),ne={class:"goodsMsg"},ie=_("\u7F16\u8F91\u5546\u54C1 "),de=_("\u5220\u9664\u5546\u54C1"),ue=["innerHTML"],ge=["src"],ce=_("\u4FDD\u5B58\u56FE\u7247"),me={class:"goodsDetail"},pe={class:"left"},he={class:"sl4"},fe={class:"price"},be={class:"right"},_e=_("\u4FDD\u5B58\u56FE\u7247");function Se(e,t,r,o,F,G){const v=d("sound-icon"),w=d("t-navbar"),b=d("van-image"),k=d("van-swipe-item"),O=d("van-swipe"),f=d("t-button"),C=d("van-action-bar-icon"),j=d("van-action-bar-button"),I=d("van-action-bar"),n=d("van-share-sheet"),s=d("van-loading");return i(),y(D,null,[l("div",null,[u(w,{onClickRight:e.goShare},{right:g(()=>[u(v)]),default:g(()=>[le]),_:1},8,["onClickRight"]),u(O,{autoplay:3e3,"lazy-render":""},{default:g(()=>[(i(!0),y(D,null,Z(e.goodObj.bannerList,a=>(i(),p(k,{key:a},{default:g(()=>[u(b,{width:"100%",height:"7rem",fit:"cover",src:a.url},null,8,["src"])]),_:2},1024))),128))]),_:1}),l("div",ne,[e.user&&e.user.username=="admin"?(i(),p(f,{key:0,onClick:t[0]||(t[0]=a=>e.editGoods()),theme:"primary",size:"small"},{default:g(()=>[ie]),_:1})):c("",!0),e.user&&e.user.username=="admin"?(i(),p(f,{key:1,style:{"margin-left":"0.2rem"},onClick:t[1]||(t[1]=a=>e.removeGoods()),theme:"primary",size:"small"},{default:g(()=>[de]),_:1})):c("",!0),l("h6",null,"\uFFE5"+h(e.goodObj.price),1),l("p",null,h(e.goodObj.title),1),l("p",null,"\u7C7B\u578B\uFF1A"+h(e.goodObj.typeName),1),l("p",null,h(e.goodObj.desc),1),l("div",{class:"goodHtml",innerHTML:e.goodObj.html},null,8,ue)]),u(I,null,{default:g(()=>[u(C,{onClick:e.goShopCar,icon:"shop-o",text:"\u8D2D\u7269\u8F66"},null,8,["onClick"]),u(j,{onClick:e.addShopCar,color:"#be99ff",type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"},null,8,["onClick"])]),_:1})]),u(n,{onSelect:e.goFunc,show:e.showShare,"onUpdate:show":t[2]||(t[2]=a=>e.showShare=a),title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",options:e.options},null,8,["onSelect","show","options"]),e.erwmFlag?(i(),y("div",{key:0,onClick:t[3]||(t[3]=(...a)=>e.closeErwmFlag&&e.closeErwmFlag(...a)),class:"shareBox-tc"},[e.load?(i(),p(s,{key:0,style:{position:"fixed",top:"1.1rem",left:"50%",translate:"translateX(-50%)"},type:"spinner",color:"#ffffff"})):c("",!0),l("img",{style:{width:"80%"},src:"data:image/png;base64,"+e.base64,alt:""},null,8,ge),e.load?c("",!0):(i(),p(f,{key:1,onClick:M(e.saveShareErwm,["stop"]),style:{position:"fixed",bottom:"18%"}},{default:g(()=>[ce]),_:1},8,["onClick"]))])):c("",!0),e.goodShareFlag?(i(),y("div",{key:1,onClick:t[4]||(t[4]=(...a)=>e.closeGoodShareFlag&&e.closeGoodShareFlag(...a)),class:"shareBox-tc"},[e.loadShareGood?(i(),p(s,{key:0,style:{position:"fixed",top:"1.1rem",left:"50%",translate:"translateX(-50%)"},type:"spinner",color:"#ffffff"})):c("",!0),l("div",{id:"share_goods",style:x({width:e.screenWidth,"padding-bottom":"0.4rem"})},[u(b,{style:{margin:"auto",display:"block","margin-top":"0.4rem"},width:"90%",height:"8.4rem",fit:"cover",src:e.goodObj.bannerList[2]?e.goodObj.bannerList[2].url:e.goodObj.bannerList[0].url},null,8,["src"]),l("div",me,[l("div",pe,[l("h6",he,h(e.goodObj.title)+" |"+h(e.goodObj.desc),1),l("p",fe,"\uFFE5"+h(e.goodObj.price),1)]),l("div",be,[u(b,{style:{margin:"auto",display:"block","margin-top":"0.2rem"},width:"1rem",height:"1rem",fit:"cover",src:e.shareBase64},null,8,["src"])])]),e.loadShareGood?c("",!0):(i(),p(f,{key:0,onClick:M(e.saveShareErwm,["stop"]),style:{position:"absolute",bottom:"-1rem",left:"50%",transform:"translateX(-50%)"}},{default:g(()=>[_e]),_:1},8,["onClick"]))],4)])):c("",!0)],64)}var ke=W(re,[["render",Se],["__scopeId","data-v-cce22182"]]);export{ke as default};
