var U=Object.defineProperty,z=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var E=(t,o,e)=>o in t?U(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,R=(t,o)=>{for(var e in o||(o={}))K.call(o,e)&&E(t,e,o[e]);if(O)for(var e of O(o))q.call(o,e)&&E(t,e,o[e]);return t},M=(t,o)=>z(t,A(o));import{_ as G,J as H,u as Q,d as W,r as X,y as Y,o as J,t as Z,a as i,c as u,f as r,w as n,g as f,F as N,z as I,i as v,n as _,A as w,K as $,B as b,L as x,C as ee,E as te,N as ae,M as j,I as le,j as p}from"./index.d81dcf5c.js";import{d as oe,a as re,b as se,n as ie,r as ne}from"./dot.255c2f3a.js";import{g as pe}from"./utils.5cf54832.js";const de={components:{vue3videoPlay:H},setup(){let t=Q();const o=W();let e=X({list:[{title:"\u65B0\u5EFA\u6587\u4EF6\u5939",head:"\u6587\u4EF6\u5939"},{title:"\u4E0A\u4F20\u56FE\u7247",head:"\u56FE\u7247"},{title:"\u4E0A\u4F20\u89C6\u9891",head:"\u89C6\u9891"}],list1:[{title:"\u5220\u9664",head:"\u5220\u9664"}],parentDir:"",lastDir:"",parentFullDir:"",show:!1,show1:!1,moreShow:!1,loadShow:!1,dirName:"",dirList:[],fileList1:[],image:oe,dotImg:re,user:JSON.parse(localStorage.getItem("user")),fullDir:"public/wp/"+JSON.parse(localStorage.getItem("user")).username+"_code",uploadPath:"",server:Y,options:{width:"100%",height:"3.5rem",color:"#409eff",muted:!1,webFullScreen:!1,speedRate:["0.75","1.0","1.25","1.5","2.0"],autoPlay:!1,loop:!1,mirror:!1,ligthOff:!1,volume:.3,control:TextTrackCue,title:"",poster:""},removeDir:""});J(()=>{});let d=l=>{const{parentFullDir:s}=e;e.moreShow=!0,e.removeDir=s+"/"+l},L=l=>{l.length||(l=[l]);var s=new FormData;s.enctype="multipart/form-data",s.append("mypath","public/wp/"+e.user.username+"_code/"+e.uploadPath),l.forEach(function(m){s.append("myfile",m.file)}),te(s).then(m=>{let h=e.fileList1;m.fileList.forEach(y=>{h.push({url:e.server+y.filename})}),e.fileList1=h,e.show=!1,c()})},B=l=>{e.loadShow=!0,l.length||(l=[l]);var s=new FormData;s.enctype="multipart/form-data",s.append("user",JSON.stringify(e.user)),s.append("timestamp",pe()),s.append("mypath","public/wp/"+e.user.username+"_code/"+e.uploadPath),s.append("mypath1","/wp/"+e.user.username+"_code/"+e.uploadPath),l.forEach(function(m){s.append("myfile",m.file)}),ae(s).then(m=>{let h=e.fileList1;m.fileList.forEach(y=>{h.push({url:e.server+y.filename})}),e.fileList1=h,e.show=!1,e.loadShow=!1,c()})},S=()=>{e.show=!0},F=async l=>{l=="\u65B0\u5EFA\u6587\u4EF6\u5939"&&(e.show1=!0),l=="\u5220\u9664"&&(await se({dirpath:"public/wp/"+e.user.username+"_code/"+e.removeDir}),j.success("\u5220\u9664\u6210\u529F"),e.moreShow=!1,c())},g=()=>{e.show1=!1,e.dirName=""},k=async()=>{let l=await ie({dir:e.parentFullDir+"/"+e.dirName,username:e.user.username});l.code==1&&(j.success(l.msg),e.show=!1,e.show1=!1,e.dirName="",c())},c=async(l="public/wp/"+e.user.username+"_code/"+e.parentFullDir)=>{let m=await ne({dir:l});e.dirList=m.result},P=l=>{l.split(".")[1]?le([e.server+"/wp/"+ +JSON.parse(localStorage.getItem("user")).username+"_code/"+e.uploadPath+"/"+l]):t.params.dir?(e.parentFullDir=e.parentFullDir+"/"+l,e.lastDir=e.parentFullDir,e.parentDir=l,e.uploadPath=e.lastDir,c()):o.push({name:l,params:{dir:l}})},C=()=>{if(e.parentFullDir.indexOf("/")!=-1){e.parentFullDir=e.parentFullDir.replace("/"+e.parentDir,""),e.lastDir=e.parentFullDir;let l=e.lastDir.split("/");e.parentDir=l[l.length-1],c(),e.uploadPath=e.lastDir}else o.go(-1)};return J(()=>{e.parentFullDir=t.params.dir,e.parentDir=t.params.dir,e.uploadPath=e.parentDir,c()}),M(R({},Z(e)),{pickEdit:S,pickOprate:F,cancleCreateDir:g,enterCreateDir:k,goDirIn:P,onClickLeft:C,afterRead:L,afterRead1:B,goMore:d})}},ue={class:"popBox"},ce=["onClick"],me={key:0},fe={key:1},_e={key:2},he={style:{width:"200px",height:"200px",background:"#fff",position:"relative",overflow:"hidden"}},ve={style:{width:"100%",display:"flex","justify-content":"space-around",position:"absolute",bottom:"0.4rem"}},we=v("\u53D6\u6D88"),ge=v("\u786E\u8BA4"),ye={class:"popBox"},De=["onClick"],ke={key:0},Ce=v("\u89C6\u9891\u6587\u4EF6\u8BF7\u4E0D\u8981\u7528\u4E2D\u6587\u6587\u4EF6\u5939\u5B58\u653E\u3002"),be=v("\u4E0A\u4F20\u89C6\u9891\u7684\u9009\u9879\u8BF7\u4E0D\u8981\u7528\u6765\u4F20\u56FE\u7247"),Se={class:"dirBox"},Fe=["onClick"],Pe=["onClick"],Ve=["src"];function Ne(t,o,e,d,L,B){const S=p("van-nav-bar"),F=p("t-fab"),g=p("t-avatar"),k=p("van-uploader"),c=p("t-popup"),P=p("t-input"),C=p("t-button"),l=p("van-swipe-item"),s=p("van-swipe"),m=p("van-notice-bar"),h=p("t-image"),y=p("vue3videoPlay"),T=p("t-loading");return i(),u("div",null,[r(S,{title:t.parentFullDir,"left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:d.onClickLeft},null,8,["title","onClickLeft"]),r(F,{onClick:d.pickEdit,class:"demo-fab-button editBtn"},null,8,["onClick"]),r(c,{modelValue:t.show,"onUpdate:modelValue":o[0]||(o[0]=a=>t.show=a),placement:"bottom"},{default:n(()=>[f("div",ue,[(i(!0),u(N,null,I(t.list,(a,D)=>(i(),u("div",{onClick:V=>d.pickOprate(a.title),key:D,class:"item"},[a.title=="\u4E0A\u4F20\u56FE\u7247"?(i(),u("div",me,[r(k,{accept:".png,.jpg",multiple:"","after-read":d.afterRead},{default:n(()=>[r(g,{shape:"circle"},{default:n(()=>[v(_(a.head),1)]),_:2},1024),f("p",null,_(a.title),1)]),_:2},1032,["after-read"])])):w("",!0),a.title=="\u4E0A\u4F20\u89C6\u9891"?(i(),u("div",fe,[r(k,{accept:".mp4,.m3u8",multiple:"","after-read":d.afterRead1},{default:n(()=>[r(g,{shape:"circle"},{default:n(()=>[v(_(a.head),1)]),_:2},1024),f("p",null,_(a.title),1)]),_:2},1032,["after-read"])])):w("",!0),a.title!="\u4E0A\u4F20\u56FE\u7247"&&a.title!="\u4E0A\u4F20\u89C6\u9891"?(i(),u("div",_e,[r(g,{shape:"circle"},{default:n(()=>[v(_(a.head),1)]),_:2},1024),f("p",null,_(a.title),1)])):w("",!0)],8,ce))),128))])]),_:1},8,["modelValue"]),r(c,{modelValue:t.show1,"onUpdate:modelValue":o[2]||(o[2]=a=>t.show1=a),placement:"center"},{default:n(()=>[f("div",he,[r(P,{modelValue:t.dirName,"onUpdate:modelValue":o[1]||(o[1]=a=>t.dirName=a),style:{"margin-top":"0.4rem"},placeholder:"\u6587\u4EF6\u5939\u540D\u79F0"},null,8,["modelValue"]),f("div",ve,[r(C,{onClick:d.cancleCreateDir},{default:n(()=>[we]),_:1},8,["onClick"]),r(C,{onClick:d.enterCreateDir,theme:"primary"},{default:n(()=>[ge]),_:1},8,["onClick"])])])]),_:1},8,["modelValue"]),r(c,{modelValue:t.moreShow,"onUpdate:modelValue":o[3]||(o[3]=a=>t.moreShow=a),placement:"bottom"},{default:n(()=>[f("div",ye,[(i(!0),u(N,null,I(t.list1,(a,D)=>(i(),u("div",{onClick:V=>d.pickOprate(a.title),key:D,class:"item"},[a.title!="\u4E0A\u4F20\u56FE\u7247"?(i(),u("div",ke,[r(g,{shape:"circle"},{default:n(()=>[v(_(a.head),1)]),_:2},1024),f("p",null,_(a.title),1)])):w("",!0)],8,De))),128))])]),_:1},8,["modelValue"]),r(m,{"left-icon":"volume-o",scrollable:!1},{default:n(()=>[r(s,{vertical:"",class:"notice-swipe",autoplay:6e3,"show-indicators":!1},{default:n(()=>[r(l,null,{default:n(()=>[Ce]),_:1}),r(l,null,{default:n(()=>[be]),_:1})]),_:1})]),_:1}),f("ul",Se,[(i(!0),u(N,null,I(t.dirList,(a,D)=>(i(),u("li",{style:$(a.split(".")[1]=="mp4"?"width:100%":"calc(100% / 3 - 0.2rem)"),onClick:V=>d.goDirIn(a),key:D+"_dir"},[a.split(".")[1]=="jpg"||a.split(".")[1]=="png"?(i(),b(h,{key:0,fit:"cover",class:"image-container",src:t.server+"/wp/"+t.user.username+"_code/"+t.uploadPath+"/"+a,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])):w("",!0),a.split(".")[1]=="mp4"||a.split(".")[1]=="m3u8"?(i(),b(y,x({key:1,src:t.server+"/wp/"+t.user.username+"_code/"+t.uploadPath+"/"+a,style:{width:"100%",height:"3.5rem"}},t.options),null,16,["src"])):(i(),b(h,{key:2,class:"image-container",src:t.image,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])),f("p",null,_(a),1),a.split(".")[1]?w("",!0):(i(),u("div",{key:3,onClick:ee(V=>d.goMore(a),["stop"]),class:"more"},[f("img",{src:t.dotImg,alt:""},null,8,Ve)],8,Pe))],12,Fe))),128))]),t.loadShow?(i(),b(T,{key:0,text:"\u52A0\u8F7D\u4E2D",layout:"vertical"})):w("",!0)])}var Ee=G(de,[["render",Ne],["__scopeId","data-v-26d0d914"]]);export{Ee as default};
