var E=Object.defineProperty,R=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(a,l,e)=>l in a?E(a,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[l]=e,L=(a,l)=>{for(var e in l||(l={}))J.call(l,e)&&S(a,e,l[e]);if(I)for(var e of I(l))j.call(l,e)&&S(a,e,l[e]);return a},P=(a,l)=>R(a,U(l));import{_ as q,r as T,s as z,o as B,t as A,a as o,c as n,d as s,w as u,e as p,F as b,p as F,i as w,n as f,q as g,v as O,x as G,u as H,g as K,y as Q,M,I as W,j as _}from"./index.ab6a90ed.js";import{d as X,a as Y,b as Z,n as $,r as x}from"./dot.3c2876fa.js";const ee={setup(){let a=H();const l=K();let e=T({list:[{title:"\u65B0\u5EFA\u6587\u4EF6\u5939",head:"\u65B0\u5EFA"},{title:"\u4E0A\u4F20\u56FE\u7247",head:"\u4E0A\u4F20"}],list1:[{title:"\u5220\u9664",head:"\u5220\u9664"}],parentDir:"",lastDir:"",parentFullDir:"",show:!1,show1:!1,moreShow:!1,dirName:"",dirList:[],fileList1:[],image:X,dotImg:Y,user:JSON.parse(localStorage.getItem("user")),fullDir:"public/wp/"+JSON.parse(localStorage.getItem("user")).username+"_code",uploadPath:"",server:z,removeDir:""});B(()=>{});let i=r=>{const{parentFullDir:d}=e;e.moreShow=!0,e.removeDir=d+"/"+r},V=r=>{r.length||(r=[r]);var d=new FormData;d.enctype="multipart/form-data",d.append("mypath","public/wp/"+e.user.username+"_code/"+e.uploadPath),r.forEach(function(t){d.append("myfile",t.file)}),Q(d).then(t=>{let m=e.fileList1;t.fileList.forEach(D=>{m.push({url:e.serverUrl+D.filename})}),e.fileList1=m,e.show=!1,c()})},N=()=>{e.show=!0},k=async r=>{r=="\u65B0\u5EFA\u6587\u4EF6\u5939"&&(e.show1=!0),r=="\u5220\u9664"&&(await Z({dirpath:"public/wp/"+e.user.username+"_code/"+e.removeDir}),M.success("\u5220\u9664\u6210\u529F"),e.moreShow=!1,c())},y=()=>{e.show1=!1,e.dirName=""},h=async()=>{let r=await $({dir:e.parentFullDir+"/"+e.dirName,username:e.user.username});r.code==1&&(M.success(r.msg),e.show=!1,e.show1=!1,e.dirName="",c())},c=async(r="public/wp/"+e.user.username+"_code/"+e.parentFullDir)=>{let t=await x({dir:r});e.dirList=t.result},v=r=>{r.split(".")[1]?W([e.server+"/wp/"+ +JSON.parse(localStorage.getItem("user")).username+"_code/"+e.uploadPath+"/"+r]):a.params.dir?(e.parentFullDir=e.parentFullDir+"/"+r,e.lastDir=e.parentFullDir,e.parentDir=r,e.uploadPath=e.lastDir,c()):l.push({name:r,params:{dir:r}})},C=()=>{if(e.parentFullDir.indexOf("/")!=-1){e.parentFullDir=e.parentFullDir.replace("/"+e.parentDir,""),e.lastDir=e.parentFullDir;let r=e.lastDir.split("/");e.parentDir=r[r.length-1],c(),e.uploadPath=e.lastDir}else l.go(-1)};return B(()=>{e.parentFullDir=a.params.dir,e.parentDir=a.params.dir,e.uploadPath=e.parentDir,c()}),P(L({},A(e)),{pickEdit:N,pickOprate:k,cancleCreateDir:y,enterCreateDir:h,goDirIn:v,onClickLeft:C,afterRead:V,goMore:i})}},te={class:"popBox"},ae=["onClick"],re={key:0},le={key:1},oe={style:{width:"200px",height:"200px",background:"#fff",position:"relative",overflow:"hidden"}},se={style:{width:"100%",display:"flex","justify-content":"space-around",position:"absolute",bottom:"0.4rem"}},ie=w("\u53D6\u6D88"),ne=w("\u786E\u8BA4"),de={class:"popBox"},pe=["onClick"],ue={key:0},ce={class:"dirBox"},me=["onClick"],_e=["onClick"],fe=["src"];function he(a,l,e,i,V,N){const k=_("van-nav-bar"),y=_("t-fab"),h=_("t-avatar"),c=_("van-uploader"),v=_("t-popup"),C=_("t-input"),r=_("t-button"),d=_("t-image");return o(),n("div",null,[s(k,{title:a.parentFullDir,"left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:i.onClickLeft},null,8,["title","onClickLeft"]),s(y,{onClick:i.pickEdit,class:"demo-fab-button editBtn"},null,8,["onClick"]),s(v,{modelValue:a.show,"onUpdate:modelValue":l[0]||(l[0]=t=>a.show=t),placement:"bottom"},{default:u(()=>[p("div",te,[(o(!0),n(b,null,F(a.list,(t,m)=>(o(),n("div",{onClick:D=>i.pickOprate(t.title),key:m,class:"item"},[t.title=="\u4E0A\u4F20\u56FE\u7247"?(o(),n("div",re,[s(c,{multiple:"","after-read":i.afterRead},{default:u(()=>[s(h,{shape:"circle"},{default:u(()=>[w(f(t.head),1)]),_:2},1024),p("p",null,f(t.title),1)]),_:2},1032,["after-read"])])):g("",!0),t.title!="\u4E0A\u4F20\u56FE\u7247"?(o(),n("div",le,[s(h,{shape:"circle"},{default:u(()=>[w(f(t.head),1)]),_:2},1024),p("p",null,f(t.title),1)])):g("",!0)],8,ae))),128))])]),_:1},8,["modelValue"]),s(v,{modelValue:a.show1,"onUpdate:modelValue":l[2]||(l[2]=t=>a.show1=t),placement:"center"},{default:u(()=>[p("div",oe,[s(C,{modelValue:a.dirName,"onUpdate:modelValue":l[1]||(l[1]=t=>a.dirName=t),style:{"margin-top":"0.4rem"},placeholder:"\u6587\u4EF6\u5939\u540D\u79F0"},null,8,["modelValue"]),p("div",se,[s(r,{onClick:i.cancleCreateDir},{default:u(()=>[ie]),_:1},8,["onClick"]),s(r,{onClick:i.enterCreateDir,theme:"primary"},{default:u(()=>[ne]),_:1},8,["onClick"])])])]),_:1},8,["modelValue"]),s(v,{modelValue:a.moreShow,"onUpdate:modelValue":l[3]||(l[3]=t=>a.moreShow=t),placement:"bottom"},{default:u(()=>[p("div",de,[(o(!0),n(b,null,F(a.list1,(t,m)=>(o(),n("div",{onClick:D=>i.pickOprate(t.title),key:m,class:"item"},[t.title!="\u4E0A\u4F20\u56FE\u7247"?(o(),n("div",ue,[s(h,{shape:"circle"},{default:u(()=>[w(f(t.head),1)]),_:2},1024),p("p",null,f(t.title),1)])):g("",!0)],8,pe))),128))])]),_:1},8,["modelValue"]),p("ul",ce,[(o(!0),n(b,null,F(a.dirList,(t,m)=>(o(),n("li",{onClick:D=>i.goDirIn(t),key:m+"_dir"},[t.split(".")[1]?(o(),O(d,{key:0,fit:"cover",class:"image-container",src:a.server+"/wp/"+a.user.username+"_code/"+a.uploadPath+"/"+t,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])):(o(),O(d,{key:1,class:"image-container",src:a.image,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])),p("p",null,f(t),1),t.split(".")[1]?g("",!0):(o(),n("div",{key:2,onClick:G(D=>i.goMore(t),["stop"]),class:"more"},[p("img",{src:a.dotImg,alt:""},null,8,fe)],8,_e))],8,me))),128))])])}var ge=q(ee,[["render",he],["__scopeId","data-v-265b6e3d"]]);export{ge as default};
