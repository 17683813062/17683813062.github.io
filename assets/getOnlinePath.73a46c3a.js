var k=Object.defineProperty,x=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var h=(t,e,o)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,y=(t,e)=>{for(var o in e||(e={}))B.call(e,o)&&h(t,o,e[o]);if(g)for(var o of g(e))E.call(e,o)&&h(t,o,e[o]);return t},b=(t,e)=>x(t,F(e));import{_ as R,r as U,o as $,t as w,c,a as u,w as C,b as d,F as z,m as D,i as N,u as P,x as S,M as m,e as f,f as p,s as V,g as L}from"./index.96ff8ea8.js";import{u as A}from"./index.b41fe155.js";const M={beforeRouteEnter(t,e,o){o(a=>{a.store.commit("changeFooter",!1)})},setup(){const t=P();let e=U({store:t,fileList1:[],serverUrl:S}),o=()=>{if(!e.fileList1.length){m.error("\u6682\u65E0\u53EF\u590D\u5236\u5185\u5BB9");return}const r=document.createElement("input");document.body.appendChild(r),r.setAttribute("readonly","readonly"),r.setAttribute("value",e.fileList1[0].url),r.select(),document.execCommand("copy")&&(document.execCommand("copy"),m.success("\u590D\u5236\u6210\u529F")),document.body.removeChild(r)},a=r=>{console.log(r),r.length||(r=[r]);var n=new FormData;n.enctype="multipart/form-data",r.forEach(function(s){n.append("myfile",s.file)}),A(n).then(s=>{let l=e.fileList1;s.fileList.forEach(i=>{l.push({url:e.serverUrl+i.filename})}),e.fileList1=l,m.success("\u4E0A\u4F20\u56FE\u7247\u6210\u529F")})};return $((r,n)=>{t.commit("changeFooter",!0)}),b(y({},w(e)),{afterRead:a,copyUrl:o})}},O=L(" \u83B7\u53D6\u5728\u7EBF\u94FE\u63A5 "),I={class:"fileList"},T=["onClick"],j={style:{"text-align":"center"}},q=L("\u70B9\u51FB\u590D\u5236");function G(t,e,o,a,r,n){const s=f("t-navbar"),l=f("van-uploader"),i=f("t-button");return p(),c("div",null,[u(s,null,{default:C(()=>[O]),_:1}),d("ul",I,[(p(!0),c(z,null,D(t.fileList1,(_,v)=>(p(),c("li",{onClick:H=>t.removeFileList(v),key:v},[d("div",{style:V("background: url("+_.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,T))),128))]),u(l,{"after-read":a.afterRead},null,8,["after-read"]),d("p",j,N(t.fileList1.length?t.fileList1[0].url:""),1),u(i,{onClick:e[0]||(e[0]=_=>a.copyUrl()),theme:"primary",size:"large"},{default:C(()=>[q]),_:1})])}var W=R(M,[["render",G],["__scopeId","data-v-664bbcdb"]]);export{W as default};
