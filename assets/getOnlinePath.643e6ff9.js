var k=Object.defineProperty,F=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(t,e,o)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,g=(t,e)=>{for(var o in e||(e={}))B.call(e,o)&&y(t,o,e[o]);if(h)for(var o of h(e))E.call(e,o)&&y(t,o,e[o]);return t},b=(t,e)=>F(t,x(e));import{_ as R,r as U,W as $,b as w,t as z,a as c,c as u,d,w as C,e as m,F as D,p as N,C as P,n as S,f as V,M as f,$ as A,i as L,j as p}from"./index.673f173b.js";const M={beforeRouteEnter(t,e,o){o(a=>{a.store.commit("changeFooter",!1)})},setup(){const t=V();let e=U({store:t,fileList1:[],serverUrl:$}),o=()=>{if(!e.fileList1.length){f.error("\u6682\u65E0\u53EF\u590D\u5236\u5185\u5BB9");return}const r=document.createElement("input");document.body.appendChild(r),r.setAttribute("readonly","readonly"),r.setAttribute("value",e.fileList1[0].url),r.select(),document.execCommand("copy")&&(document.execCommand("copy"),f.success("\u590D\u5236\u6210\u529F")),document.body.removeChild(r)},a=r=>{console.log(r),r.length||(r=[r]);var n=new FormData;n.enctype="multipart/form-data",r.forEach(function(s){n.append("myfile",s.file)}),A(n).then(s=>{let l=e.fileList1;s.fileList.forEach(i=>{l.push({url:e.serverUrl+i.filename})}),e.fileList1=l,f.success("\u4E0A\u4F20\u56FE\u7247\u6210\u529F")})};return w((r,n)=>{t.commit("changeFooter",!0)}),b(g({},z(e)),{afterRead:a,copyUrl:o})}},O=L(" \u83B7\u53D6\u5728\u7EBF\u94FE\u63A5 "),j={class:"fileList"},I=["onClick"],T={style:{"text-align":"center"}},W=L("\u70B9\u51FB\u590D\u5236");function q(t,e,o,a,r,n){const s=p("t-navbar"),l=p("van-uploader"),i=p("t-button");return c(),u("div",null,[d(s,null,{default:C(()=>[O]),_:1}),m("ul",j,[(c(!0),u(D,null,N(t.fileList1,(_,v)=>(c(),u("li",{onClick:G=>t.removeFileList(v),key:v},[m("div",{style:P("background: url("+_.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,I))),128))]),d(l,{"after-read":a.afterRead},null,8,["after-read"]),m("p",T,S(t.fileList1.length?t.fileList1[0].url:""),1),d(i,{onClick:e[0]||(e[0]=_=>a.copyUrl()),theme:"primary",size:"large"},{default:C(()=>[W]),_:1})])}var K=R(M,[["render",q],["__scopeId","data-v-664bbcdb"]]);export{K as default};
