var k=Object.defineProperty,F=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var h=(t,e,o)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,y=(t,e)=>{for(var o in e||(e={}))B.call(e,o)&&h(t,o,e[o]);if(g)for(var o of g(e))E.call(e,o)&&h(t,o,e[o]);return t},b=(t,e)=>F(t,x(e));import{_ as R,b as U,r as $,$ as w,e as z,t as D,a as c,c as u,f as d,w as C,g as m,F as N,C as P,L as S,n as V,M as f,a3 as A,i as L,j as _}from"./index.99279141.js";const M={beforeRouteEnter(t,e,o){o(a=>{a.store.commit("changeFooter",!1)})},setup(){const t=U();let e=$({store:t,fileList1:[],serverUrl:w}),o=()=>{if(!e.fileList1.length){f.error("\u6682\u65E0\u53EF\u590D\u5236\u5185\u5BB9");return}const r=document.createElement("input");document.body.appendChild(r),r.setAttribute("readonly","readonly"),r.setAttribute("value",e.fileList1[0].url),r.select(),document.execCommand("copy")&&(document.execCommand("copy"),f.success("\u590D\u5236\u6210\u529F")),document.body.removeChild(r)},a=r=>{console.log(r),r.length||(r=[r]);var n=new FormData;n.enctype="multipart/form-data",r.forEach(function(s){n.append("myfile",s.file)}),A(n).then(s=>{let l=e.fileList1;s.fileList.forEach(i=>{l.push({url:e.serverUrl+i.filename})}),e.fileList1=l,f.success("\u4E0A\u4F20\u56FE\u7247\u6210\u529F")})};return z((r,n)=>{t.commit("changeFooter",!0)}),b(y({},D(e)),{afterRead:a,copyUrl:o})}},O=L(" \u83B7\u53D6\u5728\u7EBF\u94FE\u63A5 "),j={class:"fileList"},I=["onClick"],T={style:{"text-align":"center"}},q=L("\u70B9\u51FB\u590D\u5236");function G(t,e,o,a,r,n){const s=_("t-navbar"),l=_("van-uploader"),i=_("t-button");return c(),u("div",null,[d(s,null,{default:C(()=>[O]),_:1}),m("ul",j,[(c(!0),u(N,null,P(t.fileList1,(p,v)=>(c(),u("li",{onClick:H=>t.removeFileList(v),key:v},[m("div",{style:S("background: url("+p.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,I))),128))]),d(l,{"after-read":a.afterRead},null,8,["after-read"]),m("p",T,V(t.fileList1.length?t.fileList1[0].url:""),1),d(i,{onClick:e[0]||(e[0]=p=>a.copyUrl()),theme:"primary",size:"large"},{default:C(()=>[q]),_:1})])}var Q=R(M,[["render",G],["__scopeId","data-v-664bbcdb"]]);export{Q as default};
