var E=Object.defineProperty,F=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var V=(o,l,a)=>l in o?E(o,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[l]=a,x=(o,l)=>{for(var a in l||(l={}))D.call(l,a)&&V(o,a,l[a]);if(C)for(var a of C(l))M.call(l,a)&&V(o,a,l[a]);return o},L=(o,l)=>F(o,G(l));import{_ as S,r as U,l as B,o as N,t as H,c as v,a as r,w as d,b as u,F as I,m as O,s as R,u as P,v as $,d as q,x as J,M as g,p as T,n as j,e as c,f as y,g as m}from"./index.ee34a8a8.js";import{e as A,c as K,u as Q,d as W}from"./index.fe380fca.js";import{w as X}from"./wangEditor.cda7eb86.js";const Y={beforeRouteEnter(o,l,a){a(e=>{e.store.commit("changeFooter",!1)})},setup(){const o=P(),l=$(),a=q();let e=U({store:o,serverUrl:J,_id:"",title:"",desc:"",price:null,html:"",fileList1:[],editor:null,editorMaxHeight:null,editorContent:""}),b=()=>{a.push({path:"/getOnlinePath"})},w=async()=>{let t={_id:e._id,html:e.editor.txt.html()};(await A(t)).code==1&&g.success("\u5BCC\u6587\u672C\u7F16\u8F91\u6210\u529F")},_=async()=>{let t={_id:e._id,title:e.title,desc:e.desc,price:Number(e.price),bannerList:e.fileList1};(await K(t)).code==1&&g.success("\u7F16\u8F91\u5546\u54C1\u6210\u529F")},s=t=>{e.fileList1.splice(t,1)},f=t=>{console.log(t),t.length||(t=[t]);var i=new FormData;i.enctype="multipart/form-data",t.forEach(function(p){i.append("myfile",p.file)}),Q(i).then(p=>{let k=e.fileList1;p.fileList.forEach(z=>{k.push({url:e.serverUrl+z.filename})}),e.fileList1=k,g.success("\u4E0A\u4F20\u56FE\u7247\u6210\u529F")})},n=()=>{e.editorMaxHeight=window.innerHeight-300,e.editor=new X("#toolbar-container","#text-container"),e.editor.config.onchange=function(t){e.editorContent=t},e.editor.create()},h=async()=>{let t=await W({_id:e._id});e.title=t.result[0].title,e.desc=t.result[0].desc,e.price=t.result[0].price,e.html=t.result[0].html,e.fileList1=JSON.parse(t.result[0].bannerList),e.editor.txt.html(e.html)};return B(()=>{e._id=l.query._id,h(),n()}),N((t,i)=>{o.commit("changeFooter",!0)}),L(x({},H(e)),{getOnlinePath:b,editGood:_,afterRead:f,removeFileList:s,editEditorData:w})}},Z=o=>(T("data-v-f944c6ec"),o=o(),j(),o),ee=m(" \u7F16\u8F91\u5546\u54C1 "),te={class:"fileList"},oe=["onClick"],le=m("\u7F16\u8F91\u5546\u54C1"),ae=m("\u7F16\u8F91\u5BCC\u6587\u672C"),ie=m("\u4E0A\u4F20\u5BCC\u6587\u672C"),re=m("\u83B7\u53D6\u56FE\u7247\u5728\u7EBF\u94FE\u63A5"),se=Z(()=>u("div",{id:"toolbar-container",class:"toolbar"},null,-1));function ne(o,l,a,e,b,w){const _=c("t-navbar"),s=c("van-field"),f=c("van-uploader"),n=c("t-button"),h=c("t-divider");return y(),v("div",null,[r(_,{onClickRight:o.submit},{default:d(()=>[ee]),_:1},8,["onClickRight"]),r(s,{modelValue:o.title,"onUpdate:modelValue":l[0]||(l[0]=t=>o.title=t),rows:"1",autosize:"",label:"\u5546\u54C1\u540D\u79F0",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"},null,8,["modelValue"]),r(s,{modelValue:o.desc,"onUpdate:modelValue":l[1]||(l[1]=t=>o.desc=t),rows:"1",autosize:"",label:"\u5546\u54C1\u7B80\u4ECB",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u7B80\u4ECB"},null,8,["modelValue"]),r(s,{modelValue:o.price,"onUpdate:modelValue":l[2]||(l[2]=t=>o.price=t),rows:"1",autosize:"",label:"\u5546\u54C1\u4EF7\u683C",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C"},null,8,["modelValue"]),u("ul",te,[(y(!0),v(I,null,O(o.fileList1,(t,i)=>(y(),v("li",{onClick:p=>e.removeFileList(i),key:i},[u("div",{style:R("background: url("+t.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,oe))),128))]),r(f,{multiple:"","after-read":e.afterRead},null,8,["after-read"]),r(n,{onClick:l[3]||(l[3]=t=>e.editGood()),theme:"primary",size:"large"},{default:d(()=>[le]),_:1}),u("div",null,[r(h,null,{default:d(()=>[ae]),_:1}),r(n,{onClick:l[4]||(l[4]=t=>e.editEditorData()),theme:"primary",size:"small"},{default:d(()=>[ie]),_:1}),r(n,{onClick:e.getOnlinePath,style:{"margin-left":"0.2rem"},theme:"primary",size:"small"},{default:d(()=>[re]),_:1},8,["onClick"]),se,u("div",{id:"text-container",style:R("max-height:"+o.editorMaxHeight+"px"),class:"text"},null,4)])])}var pe=S(Y,[["render",ne],["__scopeId","data-v-f944c6ec"]]);export{pe as default};
