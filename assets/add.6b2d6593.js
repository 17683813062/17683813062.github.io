var z=Object.defineProperty,B=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var b=(o,s,e)=>s in o?z(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,R=(o,s)=>{for(var e in s||(s={}))E.call(s,e)&&b(o,e,s[e]);if(C)for(var e of C(s))M.call(s,e)&&b(o,e,s[e]);return o},F=(o,s)=>B(o,U(s));import{_ as N,r as D,y as O,o as I,b as j,t as A,a as f,c as p,e as d,d as r,w as c,F as L,z as V,K as J,n as K,f as P,u as Q,g as q,M as g,Q as G,R as H,S as W,T as X,i as _,j as m}from"./index.6a902164.js";import{g as S,a as Y}from"./utils.95e6bb58.js";const Z={beforeRouteEnter(o,s,e){e(l=>{l.store.commit("changeFooter",!1)})},setup(){let o=P();Q();let s=q(),e=D({store:o,user:JSON.parse(localStorage.getItem("user")),text:"",serverUrl:O+"/movecase/",fileList1:[],talkList:[],talkList1:[],show:!1,addTalkText:""}),l=t=>{e.text=e.text+" #"+t.title+" ",e.show=!1},x=t=>{console.log(t);let n=e.talkList.filter(i=>(console.log(i.title,t,i.title.indexOf(t)!=-1),i.title.indexOf(t)!=-1));e.talkList1=n},w=async()=>{if(!e.addTalkText)g.error("\u8FD8\u672A\u586B\u5199");else{let t={title:e.addTalkText,count:1,timestamp:S()},a=await G(t);a.code==1?(g.success(a.msg),h()):g.error(a.msg)}},k=()=>{e.show=!0},v=async()=>{let{text:t,fileList1:a,talk:n}=e;if(t||a.length){let i={user:e.user,username:e.user.username,text:t,fileList1:a,time:Y(),timestamp:S()},y=await H(i);console.log(y,"\u6DFB\u52A0\u52A8\u6001\u6210\u529F"),g.success("\u6DFB\u52A0\u52A8\u6001\u6210\u529F"),s.go(-1)}else g.success("\u8BF7\u81F3\u5C11\u586B\u5199\u4E00\u9879")},u=t=>{e.fileList1.splice(t,1)},T=t=>{console.log(t),t.length||(t=[t]);var a=new FormData;a.enctype="multipart/form-data",t.forEach(function(n){a.append("myfile",n.file)}),W(a).then(n=>{let i=e.fileList1;n.fileList.forEach(y=>{i.push({url:e.serverUrl+y.filename})}),e.fileList1=i,console.log("\u4E0A\u4F20\u6210\u529F1",e.fileList1,i)})},h=async()=>{let t=await X();e.talkList=t.result,e.talkList1=t.result,console.log(t,"\u67E5\u627E\u6240\u6709\u8BDD\u9898")};return I(()=>{h()}),j((t,a)=>{o.commit("changeFooter",!0)}),F(R({},A(e)),{afterRead:T,removeFileList:u,submit:v,addTalk:k,addTalkFunc:w,filterList:x,addTagList:l})}},$={class:"main"},ee=_(" \u6DFB\u52A0\u52A8\u6001 "),te={class:"content"},ae=_("\u8BF7\u8F93\u5165\u6587\u5B57 "),oe=_("#\u6DFB\u52A0\u8BDD\u9898"),se={class:"fileList"},le=["onClick"],ne={style:{width:"100%"}},ie=_("\u53D6\u6D88"),re=_("\u786E\u8BA4"),de=_("\u6DFB\u52A0"),ce={class:"tagBox"},ue=["onClick"];function me(o,s,e,l,x,w){const k=m("t-navbar"),v=m("t-textarea"),u=m("t-button"),T=m("van-uploader"),h=m("t-input"),t=m("van-dialog");return f(),p(L,null,[d("div",$,[r(k,{onClickRight:l.submit},{default:c(()=>[ee]),_:1},8,["onClickRight"]),d("div",te,[r(v,{style:{"padding-bottom":"0.2rem","max-height":"8rem"},autosize:"",modelValue:o.text,"onUpdate:modelValue":s[0]||(s[0]=a=>o.text=a),maxcharacter:400},{default:c(()=>[ae]),_:1},8,["modelValue"]),r(u,{onClick:l.addTalk,theme:"primary",size:"small"},{default:c(()=>[oe]),_:1},8,["onClick"])]),d("div",null,[d("ul",se,[(f(!0),p(L,null,V(o.fileList1,(a,n)=>(f(),p("li",{onClick:i=>l.removeFileList(n),key:n},[d("div",{style:J("background: url("+a.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,le))),128))]),r(T,{multiple:"","after-read":l.afterRead},null,8,["after-read"])]),d("div",ne,[r(u,{style:{float:"right","margin-left":"0.2rem"},theme:"ghost"},{default:c(()=>[ie]),_:1}),r(u,{onClick:l.submit,style:{float:"right"},theme:"primary"},{default:c(()=>[re]),_:1},8,["onClick"])])]),r(t,{show:o.show,"onUpdate:show":s[2]||(s[2]=a=>o.show=a),title:"\u6DFB\u52A0\u8BDD\u9898","show-cancel-button":""},{default:c(()=>[r(u,{onClick:l.addTalkFunc,theme:"primary",size:"small"},{default:c(()=>[de]),_:1},8,["onClick"]),r(h,{onChange:l.filterList,modelValue:o.addTalkText,"onUpdate:modelValue":s[1]||(s[1]=a=>o.addTalkText=a),style:{width:"70%",display:"inline-block","margin-left":"5%"},placeholder:"\u8BDD\u9898"},null,8,["onChange","modelValue"]),d("ul",ce,[(f(!0),p(L,null,V(o.talkList1,a=>(f(),p("li",{onClick:n=>l.addTagList(a),key:a},K(a.title),9,ue))),128))])]),_:1},8,["show"])],64)}var ge=N(Z,[["render",me],["__scopeId","data-v-48fb2006"]]);export{ge as default};
