var E=Object.defineProperty,F=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var V=(o,a,l)=>a in o?E(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l,x=(o,a)=>{for(var l in a||(a={}))U.call(a,l)&&V(o,l,a[l]);if(C)for(var l of C(a))D.call(a,l)&&V(o,l,a[l]);return o},L=(o,a)=>F(o,G(a));import{_ as M,r as S,W as B,o as N,X as H,b as I,t as O,a as v,c as g,d as r,w as d,e as u,F as P,p as $,C as R,f as T,u as j,g as q,Y as J,M as b,Z as W,$ as X,a0 as Y,i as m,U as Z,V as A,j as c}from"./index.673f173b.js";import{w as K}from"./wangEditor.be212f99.js";const Q={beforeRouteEnter(o,a,l){l(e=>{e.store.commit("changeFooter",!1)})},setup(){const o=T(),a=j(),l=q();let e=S({store:o,serverUrl:B,_id:"",title:"",desc:"",price:null,html:"",fileList1:[],editor:null,editorMaxHeight:null,editorContent:""}),y=()=>{l.push({path:"/getOnlinePath"})},w=async()=>{let t={_id:e._id,html:e.editor.txt.html()};(await J(t)).code==1&&b.success("\u5BCC\u6587\u672C\u7F16\u8F91\u6210\u529F")},_=async()=>{let t={_id:e._id,title:e.title,desc:e.desc,price:Number(e.price),bannerList:e.fileList1};(await W(t)).code==1&&b.success("\u7F16\u8F91\u5546\u54C1\u6210\u529F")},s=t=>{e.fileList1.splice(t,1)},f=t=>{console.log(t),t.length||(t=[t]);var i=new FormData;i.enctype="multipart/form-data",t.forEach(function(p){i.append("myfile",p.file)}),X(i).then(p=>{let k=e.fileList1;p.fileList.forEach(z=>{k.push({url:e.serverUrl+z.filename})}),e.fileList1=k,b.success("\u4E0A\u4F20\u56FE\u7247\u6210\u529F")})},n=()=>{e.editorMaxHeight=window.innerHeight-300,e.editor=new K("#toolbar-container","#text-container"),e.editor.config.onchange=function(t){e.editorContent=t},e.editor.create()},h=async()=>{let t=await Y({_id:e._id});e.title=t.result[0].title,e.desc=t.result[0].desc,e.price=t.result[0].price,e.html=t.result[0].html,e.fileList1=JSON.parse(t.result[0].bannerList),e.editor.txt.html(e.html)};return N(()=>{e._id=a.query._id,h(),H(()=>{n()})}),I((t,i)=>{o.commit("changeFooter",!0)}),L(x({},O(e)),{getOnlinePath:y,editGood:_,afterRead:f,removeFileList:s,editEditorData:w})}},ee=o=>(Z("data-v-53b479bc"),o=o(),A(),o),te=m(" \u7F16\u8F91\u5546\u54C1 "),oe={class:"fileList"},ae=["onClick"],le=m("\u7F16\u8F91\u5546\u54C1"),ie=m("\u7F16\u8F91\u5BCC\u6587\u672C"),re=m("\u4E0A\u4F20\u5BCC\u6587\u672C"),se=m("\u83B7\u53D6\u56FE\u7247\u5728\u7EBF\u94FE\u63A5"),ne=ee(()=>u("div",{id:"toolbar-container",class:"toolbar"},null,-1));function de(o,a,l,e,y,w){const _=c("t-navbar"),s=c("van-field"),f=c("van-uploader"),n=c("t-button"),h=c("t-divider");return v(),g("div",null,[r(_,{onClickRight:o.submit},{default:d(()=>[te]),_:1},8,["onClickRight"]),r(s,{modelValue:o.title,"onUpdate:modelValue":a[0]||(a[0]=t=>o.title=t),rows:"1",autosize:"",label:"\u5546\u54C1\u540D\u79F0",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"},null,8,["modelValue"]),r(s,{modelValue:o.desc,"onUpdate:modelValue":a[1]||(a[1]=t=>o.desc=t),rows:"1",autosize:"",label:"\u5546\u54C1\u7B80\u4ECB",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u7B80\u4ECB"},null,8,["modelValue"]),r(s,{modelValue:o.price,"onUpdate:modelValue":a[2]||(a[2]=t=>o.price=t),rows:"1",autosize:"",label:"\u5546\u54C1\u4EF7\u683C",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C"},null,8,["modelValue"]),u("ul",oe,[(v(!0),g(P,null,$(o.fileList1,(t,i)=>(v(),g("li",{onClick:p=>e.removeFileList(i),key:i},[u("div",{style:R("background: url("+t.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,ae))),128))]),r(f,{multiple:"","after-read":e.afterRead},null,8,["after-read"]),r(n,{onClick:a[3]||(a[3]=t=>e.editGood()),theme:"primary",size:"large"},{default:d(()=>[le]),_:1}),u("div",null,[r(h,null,{default:d(()=>[ie]),_:1}),r(n,{onClick:a[4]||(a[4]=t=>e.editEditorData()),theme:"primary",size:"small"},{default:d(()=>[re]),_:1}),r(n,{onClick:e.getOnlinePath,style:{"margin-left":"0.2rem"},theme:"primary",size:"small"},{default:d(()=>[se]),_:1},8,["onClick"]),ne,u("div",{id:"text-container",style:R("max-height:"+o.editorMaxHeight+"px"),class:"text"},null,4)])])}var pe=M(Q,[["render",de],["__scopeId","data-v-53b479bc"]]);export{pe as default};
