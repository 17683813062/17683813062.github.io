var F=Object.defineProperty,j=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var k=(e,o,l)=>o in e?F(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,V=(e,o)=>{for(var l in o||(o={}))O.call(o,l)&&k(e,l,o[l]);if(_)for(var l of _(o))B.call(o,l)&&k(e,l,o[l]);return e},T=(e,o)=>j(e,N(o));import{f as S,h as D,u as E,g as M}from"./index.1aebecf9.js";import{_ as R,r as z,l as I,t as P,c as C,a,w as u,x as q,M as L,e as r,f as v,b as U,F as A,m as H,s as J,g as G}from"./index.6af7fc65.js";const K={setup(){let e=z({serverUrl:q,show:!1,show1:!1,show2:!1,title:"",desc:"",type:"",goodType:"",typeObj:{},fileList1:[],typeList:[],customFieldName:{text:"name",value:"_id"}}),o=(t,s)=>{e.typeObj=t,e.type=t.name,e.show2=!1,console.log(e.type)},l=async()=>{(await S({type:e.goodType})).code==1&&(y(),L.success("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B\u6210\u529F"))},n=()=>{e.show2=!1,e.typeObj={},e.type=""},g=()=>{e.show2=!0},b=()=>{e.show1=!0},f=()=>{e.show=!0},p=async()=>{const{title:t,desc:s,fileList1:i,typeObj:d}=e;let h=await D({title:t,desc:s,fileList1:i,typeId:d._id,typeName:d.name});e.show=!1,h.code==1&&(e.title="",e.fileList1=[],e.desc="",e.typeObj={},e.type="",L.success("\u6DFB\u52A0\u5546\u54C1\u6210\u529F"))},c=()=>{e.show=!1,e.title="",e.desc="",e.fileList1=[],e.typeObj={},e.type=""},m=t=>{e.fileList1.splice(t,1)},w=t=>{console.log(t),t.length||(t=[t]);var s=new FormData;s.enctype="multipart/form-data",t.forEach(function(i){s.append("myfile",i.file)}),E(s).then(i=>{let d=e.fileList1;i.fileList.forEach(h=>{d.push({url:e.serverUrl+h.filename})}),e.fileList1=d,console.log("\u4E0A\u4F20\u6210\u529F1",e.fileList1,d)})},y=async()=>{let t=await M();e.typeList=t.result};return I(()=>{y()}),T(V({},P(e)),{onConfirm1:o,onCancel1:n,pickType:g,addGoodType:l,addShopType:b,removeFileList:m,addShop:f,submitGoods:p,onCancel:c,afterRead:w})}},Q=G("\u6DFB\u52A0\u5546\u54C1"),W={class:"fileList"},X=["onClick"],Y=G("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B");function Z(e,o,l,n,g,b){const f=r("t-button"),p=r("t-input"),c=r("van-uploader"),m=r("van-dialog"),w=r("van-field"),y=r("van-picker");return v(),C("div",null,[a(f,{onClick:n.addShop,theme:"primary"},{default:u(()=>[Q]),_:1},8,["onClick"]),a(m,{onCancel:n.onCancel,onConfirm:o[3]||(o[3]=t=>n.submitGoods()),show:e.show,"onUpdate:show":o[4]||(o[4]=t=>e.show=t),title:"\u6DFB\u52A0\u5546\u54C1","show-cancel-button":""},{default:u(()=>[a(p,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=t=>e.title=t),label:"\u6807\u9898",type:"text",clearable:""},null,8,["modelValue"]),a(p,{modelValue:e.desc,"onUpdate:modelValue":o[1]||(o[1]=t=>e.desc=t),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"]),a(p,{onClick:n.pickType,modelValue:e.type,"onUpdate:modelValue":o[2]||(o[2]=t=>e.type=t),label:"\u9009\u62E9\u7C7B\u578B",type:"text"},null,8,["onClick","modelValue"]),U("ul",W,[(v(!0),C(A,null,H(e.fileList1,(t,s)=>(v(),C("li",{onClick:i=>n.removeFileList(s),key:s},[U("div",{style:J("background: url("+t.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,X))),128))]),a(c,{multiple:"","after-read":n.afterRead},null,8,["after-read"])]),_:1},8,["onCancel","show"]),a(f,{onClick:n.addShopType,theme:"primary"},{default:u(()=>[Y]),_:1},8,["onClick"]),a(m,{onConfirm:o[6]||(o[6]=t=>n.addGoodType()),show:e.show1,"onUpdate:show":o[7]||(o[7]=t=>e.show1=t),title:"\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B","show-cancel-button":""},{default:u(()=>[a(w,{modelValue:e.goodType,"onUpdate:modelValue":o[5]||(o[5]=t=>e.goodType=t),label:"\u5546\u54C1\u7C7B\u578B",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u7C7B\u578B"},null,8,["modelValue"])]),_:1},8,["show"]),a(m,{showConfirmButton:!1,show:e.show2,"onUpdate:show":o[8]||(o[8]=t=>e.show2=t),title:"\u9009\u62E9\u5546\u54C1\u7C7B\u578B"},{default:u(()=>[a(y,{"columns-field-names":e.customFieldName,title:"\u9009\u62E9",columns:e.typeList,onConfirm:n.onConfirm1,onCancel:n.onCancel1,onChange:e.onChange},null,8,["columns-field-names","columns","onConfirm","onCancel","onChange"])]),_:1},8,["show"])])}var oe=R(K,[["render",Z],["__scopeId","data-v-14baf046"]]);export{oe as default};
