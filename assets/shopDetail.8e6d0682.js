var z=Object.defineProperty,W=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var R=(e,t,s)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,D=(e,t)=>{for(var s in t||(t={}))T.call(t,s)&&R(e,s,t[s]);if(N)for(var s of N(t))V.call(t,s)&&R(e,s,t[s]);return e},H=(e,t)=>W(e,q(t));import{_ as X,m as A,u as J,d as U,b as P,r as Y,o as K,M as b,e as Q,t as Z,a as l,c as v,g as n,f as d,w as g,F as M,C as x,p as m,q as c,n as h,E as $,L as ee,a6 as oe,a7 as te,a8 as ae,a9 as se,a4 as re,i as _,j as i}from"./index.f6f1b4cd.js";import{d as G}from"./download.ca5b0d2c.js";const ne=A({beforeRouteEnter(e,t,s){s(o=>{o.store.commit("changeFooter",!1)})},setup(){const e=J(),t=U(),s=P();let o=Y({store:s,user:JSON.parse(localStorage.getItem("user")),timer:null,goodObj:{_id:"",bannerList:[],title:"",desc:"",price:null,html:"",typeName:"",typeId:"",timestamp:"",time:""},showShare:!1,options:[[{name:"\u590D\u5236\u94FE\u63A5",icon:"link"},{name:"\u5206\u4EAB\u6D77\u62A5",icon:"poster"},{name:"\u4E8C\u7EF4\u7801",icon:"qrcode"}]],erwmFlag:!1,base64:"",load:!0,goodShareFlag:!1,loadShareGood:!0,screenWidth:0,screenHeight:0,screenWidth1:0,screenHeight1:0,shareBase64:""}),B=()=>{o.goodShareFlag=!1},E=()=>{o.erwmFlag=!1},y=()=>{let r=o.goodObj.title+"_good_"+o.goodObj._id;G("data:image/png;base64,"+o.shareBase64,r||"photo","image/png"),o.goodShareFlag=!1},w=r=>{G(r,fileName||"photo","image/png")},f=()=>{let r=o.goodObj.title+"_"+o.goodObj._id;new html2canvas(document.getElementById("share_goods"),{allowTaint:!0,useCORS:!0,backgroundColor:"transparent",scrollY:0}).then(a=>{let u=a.toDataURL();console.log(u,"url"),G(u,r||"photo","image/jpg"),o.goodShareFlag=!1}).catch(a=>{console.log(a,"err")})},k=(r,a)=>{switch(a){case 0:const u=document.createElement("input");document.body.appendChild(u),u.setAttribute("readonly","readonly"),u.setAttribute("value",location.href),u.select(),document.execCommand("copy")&&(document.execCommand("copy"),b.success("\u590D\u5236\u6210\u529F")),document.body.removeChild(u);break;case 1:o.goodShareFlag=!0,o.screenWidth=window.screen.width/1.2+"px",o.screenHeight=window.screen.height/1.2+"px",o.screenWidth1=window.screen.width/1.2,o.screenHeight1=window.screen.height/1.2,te({text:location.href,size:100}).then(S=>{console.log(S);let L="data:image/png;base64,"+S.base64;console.log(L),o.shareBase64=L,o.loadShareGood=!1,console.log(location.href)});break;case 2:o.erwmFlag=!0,oe({href:location.href,type:3,text:"\u5546\u54C1\u5206\u4EAB",text2:"111",RGB:"0 191 255"}).then(S=>{o.base64=S,o.load=!1});break}o.showShare=!1},O=()=>{o.showShare=!0},p=async()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),b.error("\u8BF7\u767B\u5F55!!!");return}let r=o.goodObj._id;await ae({_id:r,username:o.user.username}),b.success("\u52A0\u5165\u8D2D\u7269\u8F66\u6210\u529F")},j=()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),b.error("\u8BF7\u767B\u5F55!!!");return}t.push({path:"/shopcar"})},C=async()=>{let r=await se({_id:o.goodObj._id});console.log(r,"\u5220\u9664\u5546\u54C1"),t.push({path:"/shop"})},I=()=>{t.push({path:"/editgood",query:{_id:o.goodObj._id}})},F=async r=>{let a=await re({_id:r});o.goodObj.bannerList=JSON.parse(a.result[0].bannerList),o.goodObj.title=a.result[0].title,o.goodObj.desc=a.result[0].desc,o.goodObj.price=a.result[0].price,o.goodObj.html=a.result[0].html,o.goodObj.typeName=a.result[0].typeName,o.goodObj.typeId=a.result[0].typeId};return K(()=>{if(o.goodObj._id=e.query.id,F(e.query.id),localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),b.error("\u8BF7\u767B\u5F55!!!");return}}),Q((r,a)=>{s.commit("changeFooter",!0)}),H(D({},Z(o)),{editGoods:I,removeGoods:C,goShopCar:j,addShopCar:p,goShare:O,goFunc:k,saveShareErwm:f,saveShareErwm1:w,closeErwmFlag:E,saveGoodShare:y,closeGoodShareFlag:B})}}),le=_(" \u5546\u54C1\u8BE6\u60C5 "),ie={class:"goodsMsg"},de=_("\u7F16\u8F91\u5546\u54C1 "),ge=_("\u5220\u9664\u5546\u54C1"),ue=["innerHTML"],ce=["src"],me=_("\u4FDD\u5B58\u56FE\u7247"),he={class:"goodsDetail"},pe={class:"left"},fe={class:"sl4"},be={class:"price"},_e={class:"right"},Se=_("\u4FDD\u5B58\u56FE\u7247");function ve(e,t,s,o,B,E){const y=i("sound-icon"),w=i("t-navbar"),f=i("van-image"),k=i("van-swipe-item"),O=i("van-swipe"),p=i("t-button"),j=i("van-action-bar-icon"),C=i("van-action-bar-button"),I=i("van-action-bar"),F=i("van-share-sheet"),r=i("van-loading");return l(),v(M,null,[n("div",null,[d(w,{onClickRight:e.goShare},{right:g(()=>[d(y)]),default:g(()=>[le]),_:1},8,["onClickRight"]),d(O,{autoplay:3e3,"lazy-render":""},{default:g(()=>[(l(!0),v(M,null,x(e.goodObj.bannerList,a=>(l(),m(k,{key:a},{default:g(()=>[d(f,{width:"100%",height:"7rem",fit:"cover",src:a.url},null,8,["src"])]),_:2},1024))),128))]),_:1}),n("div",ie,[e.user&&e.user.username=="admin"?(l(),m(p,{key:0,onClick:t[0]||(t[0]=a=>e.editGoods()),theme:"primary",size:"small"},{default:g(()=>[de]),_:1})):c("",!0),e.user&&e.user.username=="admin"?(l(),m(p,{key:1,style:{"margin-left":"0.2rem"},onClick:t[1]||(t[1]=a=>e.removeGoods()),theme:"primary",size:"small"},{default:g(()=>[ge]),_:1})):c("",!0),n("h6",null,"\uFFE5"+h(e.goodObj.price),1),n("p",null,h(e.goodObj.title),1),n("p",null,"\u7C7B\u578B\uFF1A"+h(e.goodObj.typeName),1),n("p",null,h(e.goodObj.desc),1),n("div",{class:"goodHtml",innerHTML:e.goodObj.html},null,8,ue)]),d(I,null,{default:g(()=>[d(j,{onClick:e.goShopCar,icon:"shop-o",text:"\u8D2D\u7269\u8F66"},null,8,["onClick"]),d(C,{onClick:e.addShopCar,color:"#be99ff",type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"},null,8,["onClick"])]),_:1})]),d(F,{onSelect:e.goFunc,show:e.showShare,"onUpdate:show":t[2]||(t[2]=a=>e.showShare=a),title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",options:e.options},null,8,["onSelect","show","options"]),e.erwmFlag?(l(),v("div",{key:0,onClick:t[4]||(t[4]=(...a)=>e.closeErwmFlag&&e.closeErwmFlag(...a)),class:"shareBox-tc"},[e.load?(l(),m(r,{key:0,style:{position:"fixed",top:"1.1rem",left:"50%",translate:"translateX(-50%)"},type:"spinner",color:"#ffffff"})):c("",!0),n("img",{style:{width:"80%"},src:"data:image/png;base64,"+e.base64,alt:""},null,8,ce),e.load?c("",!0):(l(),m(p,{key:1,onClick:t[3]||(t[3]=$(a=>{e.saveShareErwm1("data:image/png;base64,"+e.base64)},["stop"])),style:{position:"fixed",bottom:"18%"}},{default:g(()=>[me]),_:1}))])):c("",!0),e.goodShareFlag?(l(),v("div",{key:1,onClick:t[5]||(t[5]=(...a)=>e.closeGoodShareFlag&&e.closeGoodShareFlag(...a)),class:"shareBox-tc"},[e.loadShareGood?(l(),m(r,{key:0,style:{position:"fixed",top:"1.1rem",left:"50%",translate:"translateX(-50%)"},type:"spinner",color:"#ffffff"})):c("",!0),n("div",{id:"share_goods",style:ee({width:e.screenWidth,"padding-bottom":"0.4rem","box-sizing":"border-box"})},[d(f,{style:{margin:"auto",display:"block","margin-top":"0.4rem"},width:"90%",height:"8.4rem",fit:"cover",src:e.goodObj.bannerList[2]?e.goodObj.bannerList[2].url:e.goodObj.bannerList[0].url},null,8,["src"]),n("div",he,[n("div",pe,[n("h6",fe,h(e.goodObj.title)+" |"+h(e.goodObj.desc),1),n("p",be,"\uFFE5"+h(e.goodObj.price),1)]),n("div",_e,[d(f,{style:{margin:"auto",display:"block","margin-top":"0.2rem"},width:"1rem",height:"1rem",fit:"cover",src:e.shareBase64},null,8,["src"])])]),e.loadShareGood?c("",!0):(l(),m(p,{key:0,onClick:$(e.saveShareErwm,["stop"]),style:{position:"absolute",bottom:"-1rem",left:"50%",transform:"translateX(-50%)"}},{default:g(()=>[Se]),_:1},8,["onClick"]))],4)])):c("",!0)],64)}var Oe=X(ne,[["render",ve],["__scopeId","data-v-58edefe5"]]);export{Oe as default};
