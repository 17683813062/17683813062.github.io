var S=Object.defineProperty,V=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var b=(e,o,t)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,F=(e,o)=>{for(var t in o||(o={}))z.call(o,t)&&b(e,t,o[t]);if(C)for(var t of C(o))U.call(o,t)&&b(e,t,o[t]);return e},M=(e,o)=>V(e,B(o));import{_ as E,r as N,s as H,j as O,o as I,t as j,c as h,b as d,a as i,w as c,F as x,k as D,u as A,p as J,d as P,M as p,e as m,f as k,y as Y,i as q,g as _}from"./index.08335e2e.js";import{b as G,c as K,d as Q,f as W}from"./index.1cc9ff52.js";const X=()=>{var e=new Date,o=e.getFullYear(),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,l=e.getDate()<10?"0"+e.getDate():e.getDate(),v=e.getHours()<10?"0"+e.getHours():e.getHours(),y=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),g=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),f=o+"-"+t+"-"+l+" "+v+":"+y+":"+g;return f},R=()=>new Date().getTime();const Z={beforeRouteEnter(e,o,t){t(l=>{l.store.commit("changeFooter",!1)})},setup(){let e=A();J();let o=P(),t=N({store:e,user:JSON.parse(localStorage.getItem("user")),text:"",serverUrl:H+"/movecase/",fileList1:[],talkList:[],talkList1:[],show:!1,addTalkText:""}),l=a=>{t.text=t.text+" #"+a.title+" ",t.show=!1},v=a=>{console.log(a);let n=t.talkList.filter(r=>(console.log(r.title,a,r.title.indexOf(a)!=-1),r.title.indexOf(a)!=-1));t.talkList1=n},y=async()=>{if(!t.addTalkText)p.error("\u8FD8\u672A\u586B\u5199");else{let a={title:t.addTalkText,count:1,timestamp:R()},s=await G(a);s.code==1?(p.success(s.msg),T()):p.error(s.msg)}},g=()=>{t.show=!0},f=async()=>{let{text:a,fileList1:s,talk:n}=t;if(a||s.length){let r={user:t.user,username:t.user.username,text:a,fileList1:s,time:X(),timestamp:R()},w=await K(r);console.log(w,"\u6DFB\u52A0\u52A8\u6001\u6210\u529F"),p.success("\u6DFB\u52A0\u52A8\u6001\u6210\u529F"),o.go(-1)}else p.success("\u8BF7\u81F3\u5C11\u586B\u5199\u4E00\u9879")},u=a=>{t.fileList1.splice(a,1)},L=a=>{console.log(a),a.length||(a=[a]);var s=new FormData;s.enctype="multipart/form-data",a.forEach(function(n){s.append("myfile",n.file)}),Q(s).then(n=>{let r=t.fileList1;n.fileList.forEach(w=>{r.push({url:t.serverUrl+w.filename})}),t.fileList1=r,console.log("\u4E0A\u4F20\u6210\u529F1",t.fileList1,r)})},T=async()=>{let a=await W();t.talkList=a.result,t.talkList1=a.result,console.log(a,"\u67E5\u627E\u6240\u6709\u8BDD\u9898")};return O(()=>{T()}),I((a,s)=>{e.commit("changeFooter",!0)}),M(F({},j(t)),{afterRead:L,removeFileList:u,submit:f,addTalk:g,addTalkFunc:y,filterList:v,addTagList:l})}},$={class:"main"},ee=_(" \u6DFB\u52A0\u52A8\u6001 "),te={class:"content"},ae=_("\u8BF7\u8F93\u5165\u6587\u5B57 "),oe=_("#\u6DFB\u52A0\u8BDD\u9898"),se={class:"fileList"},le=["onClick"],ne={style:{width:"100%"}},re=_("\u53D6\u6D88"),ie=_("\u786E\u8BA4"),de=_("\u6DFB\u52A0"),ce={class:"tagBox"},ue=["onClick"];function me(e,o,t,l,v,y){const g=m("t-navbar"),f=m("t-textarea"),u=m("t-button"),L=m("van-uploader"),T=m("t-input"),a=m("van-dialog");return k(),h(x,null,[d("div",$,[i(g,{onClickRight:l.submit},{default:c(()=>[ee]),_:1},8,["onClickRight"]),d("div",te,[i(f,{style:{"padding-bottom":"0.2rem","max-height":"8rem"},autosize:"",modelValue:e.text,"onUpdate:modelValue":o[0]||(o[0]=s=>e.text=s),maxcharacter:400},{default:c(()=>[ae]),_:1},8,["modelValue"]),i(u,{onClick:l.addTalk,theme:"primary",size:"small"},{default:c(()=>[oe]),_:1},8,["onClick"])]),d("div",null,[d("ul",se,[(k(!0),h(x,null,D(e.fileList1,(s,n)=>(k(),h("li",{onClick:r=>l.removeFileList(n),key:n},[d("div",{style:Y("background: url("+s.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,le))),128))]),i(L,{multiple:"","after-read":l.afterRead},null,8,["after-read"])]),d("div",ne,[i(u,{style:{float:"right","margin-left":"0.2rem"},theme:"ghost"},{default:c(()=>[re]),_:1}),i(u,{onClick:l.submit,style:{float:"right"},theme:"primary"},{default:c(()=>[ie]),_:1},8,["onClick"])])]),i(a,{show:e.show,"onUpdate:show":o[2]||(o[2]=s=>e.show=s),title:"\u6DFB\u52A0\u8BDD\u9898","show-cancel-button":""},{default:c(()=>[i(u,{onClick:l.addTalkFunc,theme:"primary",size:"small"},{default:c(()=>[de]),_:1},8,["onClick"]),i(T,{onChange:l.filterList,modelValue:e.addTalkText,"onUpdate:modelValue":o[1]||(o[1]=s=>e.addTalkText=s),style:{width:"70%",display:"inline-block","margin-left":"5%"},placeholder:"\u8BDD\u9898"},null,8,["onChange","modelValue"]),d("ul",ce,[(k(!0),h(x,null,D(e.talkList1,s=>(k(),h("li",{onClick:n=>l.addTagList(s),key:s},q(s.title),9,ue))),128))])]),_:1},8,["show"])],64)}var he=E(Z,[["render",me],["__scopeId","data-v-48fb2006"]]);export{he as default};
