var O=Object.defineProperty,I=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(e,o,s)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,G=(e,o)=>{for(var s in o||(o={}))R.call(o,s)&&_(e,s,o[s]);if(S)for(var s of S(o))B.call(o,s)&&_(e,s,o[s]);return e},j=(e,o)=>I(e,N(o));import{_ as D,r as E,T as M,o as q,t as z,a as g,c as k,d as a,w as u,e as T,F as P,p as X,C as A,a4 as H,M as y,a5 as J,X as K,O as Q,a6 as W,i as C,j as m}from"./index.c7734519.js";const Y={setup(){let e=E({serverUrl:M,show:!1,show1:!1,show2:!1,chatShow:!0,title:"",desc:"",price:null,type:"",goodType:"",typeObj:{},fileList1:[],typeList:[],customFieldName:{text:"name",value:"_id"},chat:{chatId:null,name:"",desc:""}}),o=(t,d)=>{e.typeObj=t,e.type=t.name,e.show2=!1,console.log(e.type)},s=async()=>{(await H({type:e.goodType})).code==1&&(w(),y.success("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B\u6210\u529F"))},n=()=>{e.show2=!1,e.typeObj={},e.type=""},U=()=>{e.show2=!0},L=()=>{e.show1=!0},f=()=>{e.show=!0},i=async()=>{const{title:t,desc:d,price:r,fileList1:p,typeObj:h}=e;if(!t||!d||!r||!h._id){y.error("\u8BF7\u6B63\u786E\u586B\u5199\u5185\u5BB9");return}let F=await J({title:t,desc:d,price:r,fileList1:p,typeId:h._id,typeName:h.name});e.show=!1,F.code==1&&(e.title="",e.fileList1=[],e.desc="",e.typeObj={},e.type="",e.price="",y.success("\u6DFB\u52A0\u5546\u54C1\u6210\u529F"))},v=()=>{e.show=!1,e.title="",e.desc="",e.fileList1=[],e.typeObj={},e.type=""},c=t=>{e.fileList1.splice(t,1)},b=t=>{console.log(t),t.length||(t=[t]);var d=new FormData;d.enctype="multipart/form-data",t.forEach(function(r){d.append("myfile",r.file)}),K(d).then(r=>{let p=e.fileList1;r.fileList.forEach(h=>{p.push({url:e.serverUrl+h.filename})}),e.fileList1=p,console.log("\u4E0A\u4F20\u6210\u529F1",e.fileList1,p)})},w=async()=>{let t=await Q();e.typeList=t.result},V=()=>{e.chatShow=!0},l=async()=>{const{chatId:t,name:d,desc:r}=e.chat;if(console.log(!t,!d),!t||!d){e.chatShow=!0,y.error("\u8BF7\u6B63\u786E\u8F93\u5165\u4FE1\u606F");return}else{let p=await W({chatId:t,name:d,desc:r});console.log(p,"\u521B\u5EFA\u804A\u5929\u5BA4"),e.chatShow=!1,y.success("\u521B\u5EFA\u804A\u5929\u5BA4\u6210\u529F")}};return q(()=>{w()}),j(G({},z(e)),{onConfirm1:o,onCancel1:n,pickType:U,addGoodType:s,addShopType:L,removeFileList:c,addShop:f,submitGoods:i,onCancel:v,afterRead:b,createChat:l,createChatRoom:V})}},Z=C("\u6DFB\u52A0\u5546\u54C1"),$={class:"fileList"},x=["onClick"],ee=C(" \xA0 "),oe=C("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B"),le=C("\u521B\u5EFA\u804A\u5929\u5BA4");function te(e,o,s,n,U,L){const f=m("t-button"),i=m("t-input"),v=m("van-uploader"),c=m("van-dialog"),b=m("van-field"),w=m("van-picker"),V=m("van-divider");return g(),k("div",null,[a(f,{onClick:n.addShop,theme:"primary"},{default:u(()=>[Z]),_:1},8,["onClick"]),a(c,{onCancel:n.onCancel,onConfirm:o[4]||(o[4]=l=>n.submitGoods()),show:e.show,"onUpdate:show":o[5]||(o[5]=l=>e.show=l),title:"\u6DFB\u52A0\u5546\u54C1","show-cancel-button":""},{default:u(()=>[a(i,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=l=>e.title=l),label:"\u6807\u9898",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:e.desc,"onUpdate:modelValue":o[1]||(o[1]=l=>e.desc=l),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:e.price,"onUpdate:modelValue":o[2]||(o[2]=l=>e.price=l),label:"\u4EF7\u683C",type:"number",clearable:""},null,8,["modelValue"]),a(i,{onClick:n.pickType,modelValue:e.type,"onUpdate:modelValue":o[3]||(o[3]=l=>e.type=l),label:"\u9009\u62E9\u7C7B\u578B",type:"text"},null,8,["onClick","modelValue"]),T("ul",$,[(g(!0),k(P,null,X(e.fileList1,(l,t)=>(g(),k("li",{onClick:d=>n.removeFileList(t),key:t},[T("div",{style:A("background: url("+l.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,x))),128))]),a(v,{multiple:"","after-read":n.afterRead},null,8,["after-read"])]),_:1},8,["onCancel","show"]),ee,a(f,{onClick:n.addShopType,theme:"primary"},{default:u(()=>[oe]),_:1},8,["onClick"]),a(c,{onConfirm:o[7]||(o[7]=l=>n.addGoodType()),show:e.show1,"onUpdate:show":o[8]||(o[8]=l=>e.show1=l),title:"\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B","show-cancel-button":""},{default:u(()=>[a(b,{modelValue:e.goodType,"onUpdate:modelValue":o[6]||(o[6]=l=>e.goodType=l),label:"\u5546\u54C1\u7C7B\u578B",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u7C7B\u578B"},null,8,["modelValue"])]),_:1},8,["show"]),a(c,{showConfirmButton:!1,show:e.show2,"onUpdate:show":o[9]||(o[9]=l=>e.show2=l),title:"\u9009\u62E9\u5546\u54C1\u7C7B\u578B"},{default:u(()=>[a(w,{"columns-field-names":e.customFieldName,title:"\u9009\u62E9",columns:e.typeList,onConfirm:n.onConfirm1,onCancel:n.onCancel1,onChange:e.onChange},null,8,["columns-field-names","columns","onConfirm","onCancel","onChange"])]),_:1},8,["show"]),a(V),T("div",null,[a(f,{onClick:n.createChatRoom,theme:"primary"},{default:u(()=>[le]),_:1},8,["onClick"]),a(c,{onCancel:e.onCancel2,onConfirm:o[13]||(o[13]=l=>n.createChat()),show:e.chatShow,"onUpdate:show":o[14]||(o[14]=l=>e.chatShow=l),title:"\u521B\u5EFA\u804A\u5929\u5BA4","show-cancel-button":""},{default:u(()=>[a(i,{required:"",modelValue:e.chat.chatId,"onUpdate:modelValue":o[10]||(o[10]=l=>e.chat.chatId=l),label:"\u7FA4\u53F7",type:"number",clearable:""},null,8,["modelValue"]),a(i,{required:"",modelValue:e.chat.name,"onUpdate:modelValue":o[11]||(o[11]=l=>e.chat.name=l),label:"\u7FA4\u540D\u79F0",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:e.chat.desc,"onUpdate:modelValue":o[12]||(o[12]=l=>e.chat.desc=l),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"])]),_:1},8,["onCancel","show"])])])}var se=D(Y,[["render",te],["__scopeId","data-v-3c6c7f8e"]]);export{se as default};
