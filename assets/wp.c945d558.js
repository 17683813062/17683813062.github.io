var R=Object.defineProperty,F=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var L=(a,e,s)=>e in a?R(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,U=(a,e)=>{for(var s in e||(e={}))j.call(e,s)&&L(a,s,e[s]);if(B)for(var s of B(e))P.call(e,s)&&L(a,s,e[s]);return a},M=(a,e)=>F(a,J(e));import{_ as z,D as E,d as A,r as G,o as T,y as W,t as q,a as r,c as d,f as l,w as u,g as n,F as y,z as b,i as v,n as _,A as I,B as O,C as H,E as K,I as Q,M as X,G as Y,j as p}from"./index.5b1e4078.js";import{d as Z,a as $,n as x,r as ee,b as te,i as ae}from"./dot.c04f75f1.js";const oe={components:{[E.Component.name]:E.Component},setup(){let a=A(),e=G({show:!1,show1:!1,moreShow:!1,user:JSON.parse(localStorage.getItem("user")),list:[{title:"\u65B0\u5EFA\u6587\u4EF6\u5939",head:"\u65B0\u5EFA"},{title:"\u4E0A\u4F20\u56FE\u7247",head:"\u4E0A\u4F20"}],list1:[{title:"\u5220\u9664",head:"\u5220\u9664"}],dirName:"",image:Z,dotImg:$,dirList:[],fileList1:[],server:"",showViewer:!1,images:[],removeDir:"",flag:!localStorage.getItem("user")}),s=()=>{a.push({path:"/mine"})},i=o=>{e.moreShow=!0,e.removeDir=o},S=o=>{o.length||(o=[o]);var m=new FormData;m.enctype="multipart/form-data",m.append("mypath","public/wp/"+e.user.username+"_code"),o.forEach(function(c){m.append("myfile",c.file)}),K(m).then(c=>{let t=e.fileList1;c.fileList.forEach(f=>{t.push({url:e.serverUrl+f.filename})}),e.fileList1=t,e.show=!1,g()})},N=o=>{o.split(".")[1]?Q([e.server+o]):a.push({name:"wpdir",params:{dir:o,fullDir:""}})},C=()=>{e.show1=!1,e.dirName=""},h=async()=>{let o=await x({dir:e.dirName,username:e.user.username});o.code==1&&(X.success(o.msg),e.show=!1,e.show1=!1,e.dirName="",g())},g=async(o="public/wp/"+e.user.username+"_code")=>{let c=await ee({dir:o});e.dirList=c.result},w=async o=>{o=="\u65B0\u5EFA\u6587\u4EF6\u5939"&&(e.show1=!0),o=="\u5220\u9664"&&(await te({dirpath:"public/wp/"+e.user.username+"_code/"+e.removeDir}),e.moreShow=!1,g())},V=()=>{e.show=!0},k=async()=>{let o=await Y({username:e.user.username});localStorage.setItem("user",JSON.stringify(o.result[0])),o.result[0].wp||await ae({username:e.user.username})};return T(()=>{localStorage.getItem("user")&&(e.server=W+"/wp/"+JSON.parse(localStorage.getItem("user")).username+"_code/",k(),g())}),M(U({},q(e)),{pickEdit:V,pickOprate:w,cancleCreateDir:C,enterCreateDir:h,goDirIn:N,afterRead:S,goMore:i,goLogin:s})}},se={class:"popBox"},le=["onClick"],re={key:0},ie={key:1},ne={style:{width:"200px",height:"200px",background:"#fff",position:"relative",overflow:"hidden"}},de={style:{width:"100%",display:"flex","justify-content":"space-around",position:"absolute",bottom:"0.4rem"}},ue=v("\u53D6\u6D88"),pe=v("\u786E\u8BA4"),me={class:"popBox"},ce=["onClick"],fe={key:0},_e={class:"dirBox"},ge=["onClick"],he=["onClick"],we=["src"];function ve(a,e,s,i,S,N){const C=p("t-fab"),h=p("t-avatar"),g=p("van-uploader"),w=p("t-popup"),V=p("t-input"),k=p("t-button"),o=p("t-image"),m=p("t-image-viewer"),c=p("van-dialog");return r(),d(y,null,[l(C,{onClick:i.pickEdit,class:"demo-fab-button editBtn"},null,8,["onClick"]),l(w,{modelValue:a.show,"onUpdate:modelValue":e[0]||(e[0]=t=>a.show=t),placement:"bottom"},{default:u(()=>[n("div",se,[(r(!0),d(y,null,b(a.list,(t,f)=>(r(),d("div",{onClick:D=>i.pickOprate(t.title),key:f,class:"item"},[t.title=="\u4E0A\u4F20\u56FE\u7247"?(r(),d("div",re,[l(g,{multiple:"","after-read":i.afterRead},{default:u(()=>[l(h,{shape:"circle"},{default:u(()=>[v(_(t.head),1)]),_:2},1024),n("p",null,_(t.title),1)]),_:2},1032,["after-read"])])):I("",!0),t.title!="\u4E0A\u4F20\u56FE\u7247"?(r(),d("div",ie,[l(h,{shape:"circle"},{default:u(()=>[v(_(t.head),1)]),_:2},1024),n("p",null,_(t.title),1)])):I("",!0)],8,le))),128))])]),_:1},8,["modelValue"]),l(w,{modelValue:a.show1,"onUpdate:modelValue":e[2]||(e[2]=t=>a.show1=t),placement:"center"},{default:u(()=>[n("div",ne,[l(V,{modelValue:a.dirName,"onUpdate:modelValue":e[1]||(e[1]=t=>a.dirName=t),style:{"margin-top":"0.4rem"},placeholder:"\u6587\u4EF6\u5939\u540D\u79F0"},null,8,["modelValue"]),n("div",de,[l(k,{onClick:i.cancleCreateDir},{default:u(()=>[ue]),_:1},8,["onClick"]),l(k,{onClick:i.enterCreateDir,theme:"primary"},{default:u(()=>[pe]),_:1},8,["onClick"])])])]),_:1},8,["modelValue"]),l(w,{modelValue:a.moreShow,"onUpdate:modelValue":e[3]||(e[3]=t=>a.moreShow=t),placement:"bottom"},{default:u(()=>[n("div",me,[(r(!0),d(y,null,b(a.list1,(t,f)=>(r(),d("div",{onClick:D=>i.pickOprate(t.title),key:f,class:"item"},[t.title!="\u4E0A\u4F20\u56FE\u7247"?(r(),d("div",fe,[l(h,{shape:"circle"},{default:u(()=>[v(_(t.head),1)]),_:2},1024),n("p",null,_(t.title),1)])):I("",!0)],8,ce))),128))])]),_:1},8,["modelValue"]),n("ul",_e,[(r(!0),d(y,null,b(a.dirList,(t,f)=>(r(),d("li",{onClick:D=>i.goDirIn(t),key:f+"_dir"},[t.split(".")[1]?(r(),O(o,{key:0,class:"image-container",src:a.server+t,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])):(r(),O(o,{key:1,class:"image-container",src:a.image,alt:"\u4E00\u5F20\u56FE\u7247"},null,8,["src"])),n("p",null,_(t),1),n("div",{onClick:H(D=>i.goMore(t),["stop"]),class:"more"},[n("img",{src:a.dotImg,alt:""},null,8,we)],8,he)],8,ge))),128))]),l(m,{modelValue:a.showViewer,"onUpdate:modelValue":e[4]||(e[4]=t=>a.showViewer=t),images:a.images,"onUpdate:images":e[5]||(e[5]=t=>a.images=t),"initial-index":0},null,8,["modelValue","images"]),l(c,{onConfirm:i.goLogin,title:"\u8BF7\u767B\u5F55\uFF01\uFF01\uFF01",show:a.flag,"onUpdate:show":e[6]||(e[6]=t=>a.flag=t)},null,8,["onConfirm","show"])],64)}var Ve=z(oe,[["render",ve],["__scopeId","data-v-26f140dc"]]);export{Ve as default};
