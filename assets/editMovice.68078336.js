var k=Object.defineProperty,U=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(e,o,t)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,y=(e,o)=>{for(var t in o||(o={}))h.call(o,t)&&v(e,t,o[t]);if(V)for(var t of V(o))N.call(o,t)&&v(e,t,o[t]);return e},_=(e,o)=>U(e,L(o));import{_ as O,r as $,o as j,ab as z,t as B,a as E,c as I,d as s,w as d,ac as P,M as p,ad as R,i as f,j as u}from"./index.f7c8250a.js";const T={setup(){let e=$({title:"",num:null,count:null,src:"",show:!1,city:["\u5317\u4EAC"],cityOptions:["\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733","\u676D\u5DDE","\u6210\u90FD","\u957F\u6C99"],moviceList:[]}),o=a=>{console.log(a),e.city=a,e.show=!1},t=async()=>{let{count:a,src:i,city:n}=e,r=await P({num:a,src:i,title:n[0]});r.code==1?(e.count="",e.src="",p.success(r.msg)):p.error(r.msg)},m=async()=>{let{title:a,num:i}=e,n=await R({title:a,num:i});n.code==1?p.success(n.msg):p.error(n.msg),e.title="",e.num="",c()};j(()=>{c()});let c=async()=>{let a=await z();e.moviceList=a.result;let i=[];a.result.forEach(n=>{i.push(n.title)}),e.city=[i[0]],e.cityOptions=i,console.log(a,"\u5F71\u89C6\u5217\u8868")};return _(y({},B(e)),{onCityConfirm:o,addMovice:m,addMoviceCount:t})}},q=f(" \u7F16\u8F91\u5F71\u89C6 "),A=f("\u6DFB\u52A0"),D=f("\u6DFB\u52A0");function F(e,o,t,m,c,a){const i=u("t-navbar"),n=u("t-input"),r=u("t-button"),C=u("t-cell"),g=u("t-cell-group"),w=u("t-picker-item"),M=u("t-picker"),b=u("t-popup");return E(),I("div",null,[s(i,null,{default:d(()=>[q]),_:1}),s(n,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=l=>e.title=l),label:"\u540D\u79F0",placeholder:"\u540D\u79F0"},null,8,["modelValue"]),s(n,{modelValue:e.num,"onUpdate:modelValue":o[1]||(o[1]=l=>e.num=l),label:"\u603B\u96C6\u6570",placeholder:"\u603B\u96C6\u6570"},null,8,["modelValue"]),s(r,{size:"large",onClick:m.addMovice,theme:"primary"},{default:d(()=>[A]),_:1},8,["onClick"]),s(g,null,{default:d(()=>[s(C,{arrow:"",title:"\u5F71\u89C6",note:e.city.join(",")||"\u9009\u62E9\u57CE\u5E02",onClick:o[2]||(o[2]=l=>e.show=!0)},null,8,["note"])]),_:1}),s(b,{modelValue:e.show,"onUpdate:modelValue":o[5]||(o[5]=l=>e.show=l),placement:"bottom"},{default:d(()=>[s(M,{modelValue:e.city,"onUpdate:modelValue":o[3]||(o[3]=l=>e.city=l),onConfirm:m.onCityConfirm,onCancel:o[4]||(o[4]=l=>e.show=!1)},{default:d(()=>[s(w,{options:e.cityOptions},null,8,["options"])]),_:1},8,["modelValue","onConfirm"])]),_:1},8,["modelValue"]),s(n,{modelValue:e.count,"onUpdate:modelValue":o[6]||(o[6]=l=>e.count=l),type:"number",label:"\u5355\u96C6\u6570",placeholder:"\u5355\u96C6\u6570"},null,8,["modelValue"]),s(n,{modelValue:e.src,"onUpdate:modelValue":o[7]||(o[7]=l=>e.src=l),label:"\u94FE\u63A5",placeholder:"\u94FE\u63A5"},null,8,["modelValue"]),s(r,{size:"large",onClick:m.addMoviceCount,theme:"primary"},{default:d(()=>[D]),_:1},8,["onClick"])])}var J=O(T,[["render",F]]);export{J as default};
