var j=Object.defineProperty,J=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var O=(t,r,e)=>r in t?j(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,B=(t,r)=>{for(var e in r||(r={}))U.call(r,e)&&O(t,e,r[e]);if(L)for(var e of L(r))z.call(r,e)&&O(t,e,r[e]);return t},E=(t,r)=>J(t,T(r));import{_ as q,C as G,r as H,s as A,o as R,t as K,a as s,c as p,d as i,w as c,e as m,F as P,q as V,i as w,n as _,v,E as Q,x as k,G as W,y as X,u as Y,g as Z,z as $,H as x,M,I as ee,j as f}from"./index.f7c8250a.js";import{d as ae,a as te,b as le,n as re,r as oe}from"./dot.f841c114.js";import{g as se}from"./utils.25dbed4f.js";const ie={components:{vue3videoPlay:G},setup(){let t=Y();const r=Z();let e=H({list:[{title:"\u65B0\u5EFA\u6587\u4EF6\u5939",head:"\u6587\u4EF6\u5939"},{title:"\u4E0A\u4F20\u56FE\u7247",head:"\u56FE\u7247"},{title:"\u4E0A\u4F20\u89C6\u9891",head:"\u89C6\u9891"}],list1:[{title:"\u5220\u9664",head:"\u5220\u9664"}],parentDir:"",lastDir:"",parentFullDir:"",show:!1,show1:!1,moreShow:!1,loadShow:!1,dirName:"",dirList:[],fileList1:[],image:ae,dotImg:te,user:JSON.parse(localStorage.getItem("user")),fullDir:"public/wp/"+JSON.parse(localStorage.getItem("user")).username+"_code",uploadPath:"",server:A,options:{width:"100%",height:"3.5rem",color:"#409eff",muted:!1,webFullScreen:!1,speedRate:["0.75","1.0","1.25","1.5","2.0"],autoPlay:!1,loop:!1,mirror:!1,ligthOff:!1,volume:.3,control:TextTrackCue,title:"",poster:""},removeDir:""});R(()=>{});let n=l=>{const{parentFullDir:o}=e;e.moreShow=!0,e.removeDir=o+"/"+l},N=l=>{l.length||(l=[l]);var o=new FormData;o.enctype="multipart/form-data",o.append("mypath","public/wp/"+e.user.username+"_code/"+e.uploadPath),l.forEach(function(u){o.append("myfile",u.file)}),$(o).then(u=>{let a=e.fileList1;u.fileList.forEach(h=>{a.push({url:e.server+h.filename})}),e.fileList1=a,e.show=!1,d()})},I=l=>{e.loadShow=!0,l.length||(l=[l]);var o=new FormData;o.enctype="multipart/form-data",o.append("user",JSON.stringify(e.user)),o.append("timestamp",se()),o.append("mypath","public/wp/"+e.user.username+"_code/"+e.uploadPath),o.append("mypath1","/wp/"+e.user.username+"_code/"+e.uploadPath),l.forEach(function(u){o.append("myfile",u.file)}),x(o).then(u=>{let a=e.fileList1;u.fileList.forEach(h=>{a.push({url:e.server+h.filename})}),e.fileList1=a,e.show=!1,e.loadShow=!1,d()})},C=()=>{e.show=!0},b=async l=>{l=="\u65B0\u5EFA\u6587\u4EF6\u5939"&&(e.show1=!0),l=="\u5220\u9664"&&(await le({dirpath:"public/wp/"+e.user.username+"_code/"+e.removeDir}),M.success("\u5220\u9664\u6210\u529F"),e.moreShow=!1,d())},g=()=>{e.show1=!1,e.dirName=""},y=async()=>{let l=await re({dir:e.parentFullDir+"/"+e.dirName,username:e.user.username});l.code==1&&(M.success(l.msg),e.show=!1,e.show1=!1,e.dirName="",d())},d=async(l="public/wp/"+e.user.username+"_code/"+e.parentFullDir)=>{let u=await oe({dir:l});e.dirList=u.result},S=l=>{l.split(".")[1]?ee([e.server+"/wp/"+ +JSON.parse(localStorage.getItem("user")).username+"_code/"+e.uploadPath+"/"+l]):t.params.dir?(e.parentFullDir=e.parentFullDir+"/"+l,e.lastDir=e.parentFullDir,e.parentDir=l,e.uploadPath=e.lastDir,d()):r.push({name:l,params:{dir:l}})},D=()=>{if(e.parentFullDir.indexOf("/")!=-1){e.parentFullDir=e.parentFullDir.replace("/"+e.parentDir,""),e.lastDir=e.parentFullDir;let l=e.lastDir.split("/");e.parentDir=l[l.length-1],d(),e.uploadPath=e.lastDir}else r.go(-1)};return R(()=>{e.parentFullDir=t.params.dir,e.parentDir=t.params.dir,e.uploadPath=e.parentDir,d()}),E(B({},K(e)),{pickEdit:C,pickOprate:b,cancleCreateDir:g,enterCreateDir:y,goDirIn:S,onClickLeft:D,afterRead:N,afterRead1:I,goMore:n})}},ne={class:"popBox"},pe=["onClick"],de={key:0},ue={key:1},ce={key:2},me={style:{width:"200px",height:"200px",background:"#fff",position:"relative",overflow:"hidden"}},fe={style:{width:"100%",display:"flex","justify-content":"space-around",position:"absolute",bottom:"0.4rem"}},he=w("\u53D6\u6D88"),_e=w("\u786E\u8BA4"),ve={class:"popBox"},ge=["onClick"],we={key:0},ye={class:"dirBox"},De=["onClick"],ke=["onClick"],Ce=["src"];function be(t,r,e,n,N,I){const C=f("van-nav-bar"),b=f("t-fab"),g=f("t-avatar"),y=f("van-uploader"),d=f("t-popup"),S=f("t-input"),D=f("t-button"),l=f("t-image"),o=f("vue3videoPlay"),u=f("t-loading");return s(),p("div",null,[i(C,{title:t.parentFullDir,"left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:n.onClickLeft},null,8,["title","onClickLeft"]),i(b,{onClick:n.pickEdit,class:"demo-fab-button editBtn"},null,8,["onClick"]),i(d,{modelValue:t.show,"onUpdate:modelValue":r[0]||(r[0]=a=>t.show=a),placement:"bottom"},{default:c(()=>[m("div",ne,[(s(!0),p(P,null,V(t.list,(a,h)=>(s(),p("div",{onClick:F=>n.pickOprate(a.title),key:h,class:"item"},[a.title=="\u4E0A\u4F20\u56FE\u7247"?(s(),p("div",de,[i(y,{accept:".png,.jpg",multiple:"","after-read":n.afterRead},{default:c(()=>[i(g,{shape:"circle"},{default:c(()=>[w(_(a.head),1)]),_:2},1024),m("p",null,_(a.title),1)]),_:2},1032,["after-read"])])):v("",!0),a.title=="\u4E0A\u4F20\u89C6\u9891"?(s(),p("div",ue,[i(y,{accept:".mp4,.m3u8",multiple:"","after-read":n.afterRead1},{default:c(()=>[i(g,{shape:"circle"},{default:c(()=>[w(_(a.head),1)]),_:2},1024),m("p",null,_(a.title),1)]),_:2},1032,["after-read"])])):v("",!0),a.title!="\u4E0A\u4F20\u56FE\u7247"&&a.title!="\u4E0A\u4F20\u89C6\u9891"?(s(),p("div",ce,[i(g,{shape:"circle"},{default:c(()=>[w(_(a.head),1)]),_:2},1024),m("p",null,_(a.title),1)])):v("",!0)],8,pe))),128))])]),_:1},8,["modelValue"]),i(d,{modelValue:t.show1,"onUpdate:modelValue":r[2]||(r[2]=a=>t.show1=a),placement:"center"},{default:c(()=>[m("div",me,[i(S,{modelValue:t.dirName,"onUpdate:modelValue":r[1]||(r[1]=a=>t.dirName=a),style:{"margin-top":"0.4rem"},placeholder:"\u6587\u4EF6\u5939\u540D\u79F0"},null,8,["modelValue"]),m("div",fe,[i(D,{onClick:n.cancleCreateDir},{default:c(()=>[he]),_:1},8,["onClick"]),i(D,{onClick:n.enterCreateDir,theme:"primary"},{default:c(()=>[_e]),_:1},8,["onClick"])])])]),_:1},8,["modelValue"]),i(d,{modelValue:t.moreShow,"onUpdate:modelValue":r[3]||(r[3]=a=>t.moreShow=a),placement:"bottom"},{default:c(()=>[m("div",ve,[(s(!0),p(P,null,V(t.list1,(a,h)=>(s(),p("div",{onClick:F=>n.pickOprate(a.title),key:h,class:"item"},[a.title!="\u4E0A\u4F20\u56FE\u7247"?(s(),p("div",we,[i(g,{shape:"circle"},{default:c(()=>[w(_(a.head),1)]),_:2},1024),m("p",null,_(a.title),1)])):v("",!0)],8,ge))),128))])]),_:1},8,["modelValue"]),m("ul",ye,[(s(!0),p(P,null,V(t.dirList,(a,h)=>(s(),p("li",{style:Q(a.split(".")[1]=="mp4"?"width:100%":"calc(100% / 3 - 0.2rem)"),onClick:F=>n.goDirIn(a),key:h+"_dir"},[a.split(".")[1]=="jpg"||a.split(".")[1]=="png"?(s(),k(l,{key:0,fit:"cover",class:"image-container",src:t.server+"/wp/"+t.user.username+"_code/"+t.uploadPath+"/"+a,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])):v("",!0),a.split(".")[1]=="mp4"||a.split(".")[1]=="m3u8"?(s(),k(o,W({key:1,src:t.server+"/wp/"+t.user.username+"_code/"+t.uploadPath+"/"+a,style:{width:"100%",height:"3.5rem"}},t.options),null,16,["src"])):(s(),k(l,{key:2,class:"image-container",src:t.image,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])),m("p",null,_(a),1),a.split(".")[1]?v("",!0):(s(),p("div",{key:3,onClick:X(F=>n.goMore(a),["stop"]),class:"more"},[m("img",{src:t.dotImg,alt:""},null,8,Ce)],8,ke))],12,De))),128))]),t.loadShow?(s(),k(u,{key:0,text:"\u52A0\u8F7D\u4E2D",layout:"vertical"})):v("",!0)])}var Ne=q(ie,[["render",be],["__scopeId","data-v-3c94ca7a"]]);export{Ne as default};
