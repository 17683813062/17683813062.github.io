var j=Object.defineProperty,P=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var M=(t,e,l)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,E=(t,e)=>{for(var l in e||(e={}))A.call(e,l)&&M(t,l,e[l]);if(U)for(var l of U(e))G.call(e,l)&&M(t,l,e[l]);return t},O=(t,e)=>P(t,z(e));import{_ as T,D as R,d as W,r as q,o as H,y as K,t as Q,a as n,c as p,f as s,w as i,g as u,F as C,z as S,i as f,n as _,A as N,B as F,C as X,E as Y,I as Z,M as $,G as x,j as r}from"./index.56a3c384.js";import{d as ee,a as te,n as ae,r as oe,b as se,i as le}from"./dot.b586dacc.js";const ie={components:{[R.Component.name]:R.Component},setup(){let t=W(),e=q({show:!1,show1:!1,moreShow:!1,user:JSON.parse(localStorage.getItem("user")),list:[{title:"\u65B0\u5EFA\u6587\u4EF6\u5939",head:"\u65B0\u5EFA"},{title:"\u4E0A\u4F20\u56FE\u7247",head:"\u4E0A\u4F20"}],list1:[{title:"\u5220\u9664",head:"\u5220\u9664"}],dirName:"",image:ee,dotImg:te,dirList:[],fileList1:[],server:"",showViewer:!1,images:[],removeDir:"",flag:!localStorage.getItem("user")}),l=()=>{t.push({path:"/mine"})},d=o=>{e.moreShow=!0,e.removeDir=o},B=o=>{o.length||(o=[o]);var m=new FormData;m.enctype="multipart/form-data",m.append("mypath","public/wp/"+e.user.username+"_code"),o.forEach(function(c){m.append("myfile",c.file)}),Y(m).then(c=>{let v=e.fileList1;c.fileList.forEach(D=>{v.push({url:e.serverUrl+D.filename})}),e.fileList1=v,e.show=!1,g()})},L=o=>{o.split(".")[1]?Z([e.server+o]):t.push({name:"wpdir",params:{dir:o,fullDir:""}})},V=()=>{e.show1=!1,e.dirName=""},h=async()=>{let o=await ae({dir:e.dirName,username:e.user.username});o.code==1&&($.success(o.msg),e.show=!1,e.show1=!1,e.dirName="",g())},g=async(o="public/wp/"+e.user.username+"_code")=>{let c=await oe({dir:o});e.dirList=c.result},w=async o=>{o=="\u65B0\u5EFA\u6587\u4EF6\u5939"&&(e.show1=!0),o=="\u5220\u9664"&&(await se({dirpath:"public/wp/"+e.user.username+"_code/"+e.removeDir}),e.moreShow=!1,g())},b=()=>{e.show=!0},y=async()=>{let o=await x({username:e.user.username});localStorage.setItem("user",JSON.stringify(o.result[0])),o.result[0].wp||await le({username:e.user.username})};return H(()=>{localStorage.getItem("user")&&(e.server=K+"/wp/"+JSON.parse(localStorage.getItem("user")).username+"_code/",y(),g())}),O(E({},Q(e)),{pickEdit:b,pickOprate:w,cancleCreateDir:V,enterCreateDir:h,goDirIn:L,afterRead:B,goMore:d,goLogin:l})}},ne={class:"popBox"},re=["onClick"],de={key:0},ue={key:1},pe={style:{width:"200px",height:"200px",background:"#fff",position:"relative",overflow:"hidden"}},me={style:{width:"100%",display:"flex","justify-content":"space-around",position:"absolute",bottom:"0.4rem"}},ce=f("\u53D6\u6D88"),_e=f("\u786E\u8BA4"),fe={class:"popBox"},ge=["onClick"],he={key:0},we=f("\u89C6\u9891\u6587\u4EF6\u8BF7\u4E0D\u8981\u7528\u4E2D\u6587\u6587\u4EF6\u5939\u5B58\u653E\u3002"),ve=f("\u4E0A\u4F20\u89C6\u9891\u7684\u9009\u9879\u8BF7\u4E0D\u8981\u7528\u6765\u4F20\u56FE\u7247"),ke={class:"dirBox"},ye=["onClick"],Ce=["onClick"],Ve=["src"];function be(t,e,l,d,B,L){const V=r("t-fab"),h=r("t-avatar"),g=r("van-uploader"),w=r("t-popup"),b=r("t-input"),y=r("t-button"),o=r("van-swipe-item"),m=r("van-swipe"),c=r("van-notice-bar"),v=r("t-image"),D=r("t-image-viewer"),J=r("van-dialog");return n(),p(C,null,[s(V,{onClick:d.pickEdit,class:"demo-fab-button editBtn"},null,8,["onClick"]),s(w,{modelValue:t.show,"onUpdate:modelValue":e[0]||(e[0]=a=>t.show=a),placement:"bottom"},{default:i(()=>[u("div",ne,[(n(!0),p(C,null,S(t.list,(a,k)=>(n(),p("div",{onClick:I=>d.pickOprate(a.title),key:k,class:"item"},[a.title=="\u4E0A\u4F20\u56FE\u7247"?(n(),p("div",de,[s(g,{multiple:"","after-read":d.afterRead},{default:i(()=>[s(h,{shape:"circle"},{default:i(()=>[f(_(a.head),1)]),_:2},1024),u("p",null,_(a.title),1)]),_:2},1032,["after-read"])])):N("",!0),a.title!="\u4E0A\u4F20\u56FE\u7247"?(n(),p("div",ue,[s(h,{shape:"circle"},{default:i(()=>[f(_(a.head),1)]),_:2},1024),u("p",null,_(a.title),1)])):N("",!0)],8,re))),128))])]),_:1},8,["modelValue"]),s(w,{modelValue:t.show1,"onUpdate:modelValue":e[2]||(e[2]=a=>t.show1=a),placement:"center"},{default:i(()=>[u("div",pe,[s(b,{modelValue:t.dirName,"onUpdate:modelValue":e[1]||(e[1]=a=>t.dirName=a),style:{"margin-top":"0.4rem"},placeholder:"\u6587\u4EF6\u5939\u540D\u79F0"},null,8,["modelValue"]),u("div",me,[s(y,{onClick:d.cancleCreateDir},{default:i(()=>[ce]),_:1},8,["onClick"]),s(y,{onClick:d.enterCreateDir,theme:"primary"},{default:i(()=>[_e]),_:1},8,["onClick"])])])]),_:1},8,["modelValue"]),s(w,{modelValue:t.moreShow,"onUpdate:modelValue":e[3]||(e[3]=a=>t.moreShow=a),placement:"bottom"},{default:i(()=>[u("div",fe,[(n(!0),p(C,null,S(t.list1,(a,k)=>(n(),p("div",{onClick:I=>d.pickOprate(a.title),key:k,class:"item"},[a.title!="\u4E0A\u4F20\u56FE\u7247"?(n(),p("div",he,[s(h,{shape:"circle"},{default:i(()=>[f(_(a.head),1)]),_:2},1024),u("p",null,_(a.title),1)])):N("",!0)],8,ge))),128))])]),_:1},8,["modelValue"]),s(c,{"left-icon":"volume-o",scrollable:!1},{default:i(()=>[s(m,{vertical:"",class:"notice-swipe",autoplay:6e3,"show-indicators":!1},{default:i(()=>[s(o,null,{default:i(()=>[we]),_:1}),s(o,null,{default:i(()=>[ve]),_:1})]),_:1})]),_:1}),u("ul",ke,[(n(!0),p(C,null,S(t.dirList,(a,k)=>(n(),p("li",{onClick:I=>d.goDirIn(a),key:k+"_dir"},[a.split(".")[1]?(n(),F(v,{key:0,class:"image-container",src:t.server+a,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])):(n(),F(v,{key:1,class:"image-container",src:t.image,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])),u("p",null,_(a),1),u("div",{onClick:X(I=>d.goMore(a),["stop"]),class:"more"},[u("img",{src:t.dotImg,alt:""},null,8,Ve)],8,Ce)],8,ye))),128))]),s(D,{modelValue:t.showViewer,"onUpdate:modelValue":e[4]||(e[4]=a=>t.showViewer=a),images:t.images,"onUpdate:images":e[5]||(e[5]=a=>t.images=a),"initial-index":0},null,8,["modelValue","images"]),s(J,{onConfirm:d.goLogin,title:"\u8BF7\u767B\u5F55\uFF01\uFF01\uFF01",show:t.flag,"onUpdate:show":e[6]||(e[6]=a=>t.flag=a)},null,8,["onConfirm","show"])],64)}var Ne=T(ie,[["render",be],["__scopeId","data-v-a6ad3fa6"]]);export{Ne as default};
