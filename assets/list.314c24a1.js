var M=Object.defineProperty,N=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var j=(o,e,s)=>e in o?M(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,F=(o,e)=>{for(var s in e||(e={}))B.call(e,s)&&j(o,s,e[s]);if(G)for(var s of G(e))D.call(e,s)&&j(o,s,e[s]);return o},R=(o,e)=>N(o,O(e));import{_ as E,r as q,Y as z,o as P,t as Y,a as T,c as U,d as a,w as p,e as b,F as A,v as H,G as J,g as K,ab as Q,M as y,ac as W,a1 as X,T as Z,ad as $,i as w,j as m}from"./index.c22945cb.js";const x={setup(){let o=K(),e=q({serverUrl:z,show:!1,show1:!1,show2:!1,chatShow:!1,title:"",desc:"",price:null,type:"",goodType:"",typeObj:{},fileList1:[],typeList:[],customFieldName:{text:"name",value:"_id"},chat:{chatId:null,name:"",desc:""}}),s=()=>{o.push({path:"/editMovice"})},n=(t,d)=>{e.typeObj=t,e.type=t.name,e.show2=!1,console.log(e.type)},L=async()=>{(await Q({type:e.goodType})).code==1&&(l(),y.success("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B\u6210\u529F"))},_=()=>{e.show2=!1,e.typeObj={},e.type=""},c=()=>{e.show2=!0},i=()=>{e.show1=!0},V=()=>{e.show=!0},f=async()=>{const{title:t,desc:d,price:r,fileList1:u,typeObj:h}=e;if(!t||!d||!r||!h._id){y.error("\u8BF7\u6B63\u786E\u586B\u5199\u5185\u5BB9");return}let I=await W({title:t,desc:d,price:r,fileList1:u,typeId:h._id,typeName:h.name});e.show=!1,I.code==1&&(e.title="",e.fileList1=[],e.desc="",e.typeObj={},e.type="",e.price="",y.success("\u6DFB\u52A0\u5546\u54C1\u6210\u529F"))},g=()=>{e.show=!1,e.title="",e.desc="",e.fileList1=[],e.typeObj={},e.type=""},k=t=>{e.fileList1.splice(t,1)},C=t=>{console.log(t),t.length||(t=[t]);var d=new FormData;d.enctype="multipart/form-data",t.forEach(function(r){d.append("myfile",r.file)}),X(d).then(r=>{let u=e.fileList1;r.fileList.forEach(h=>{u.push({url:e.serverUrl+h.filename})}),e.fileList1=u,console.log("\u4E0A\u4F20\u6210\u529F1",e.fileList1,u)})},l=async()=>{let t=await Z();e.typeList=t.result},v=()=>{e.chatShow=!0},S=async()=>{const{chatId:t,name:d,desc:r}=e.chat;if(console.log(!t,!d),!t||!d){e.chatShow=!0,y.error("\u8BF7\u6B63\u786E\u8F93\u5165\u4FE1\u606F");return}else{let u=await $({chatId:t,name:d,desc:r});console.log(u,"\u521B\u5EFA\u804A\u5929\u5BA4"),e.chatShow=!1,y.success("\u521B\u5EFA\u804A\u5929\u5BA4\u6210\u529F")}};return P(()=>{l()}),R(F({},Y(e)),{onConfirm1:n,onCancel1:_,pickType:c,addGoodType:L,addShopType:i,removeFileList:k,addShop:V,submitGoods:f,onCancel:g,afterRead:C,createChat:S,createChatRoom:v,addMovice:s})}},ee=w("\u6DFB\u52A0\u5546\u54C1"),oe={class:"fileList"},le=["onClick"],te=w(" \xA0 "),ae=w("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B"),ne=w("\u521B\u5EFA\u804A\u5929\u5BA4"),se=w("\u6DFB\u52A0\u89C6\u9891");function de(o,e,s,n,L,_){const c=m("t-button"),i=m("t-input"),V=m("van-uploader"),f=m("van-dialog"),g=m("van-field"),k=m("van-picker"),C=m("van-divider");return T(),U("div",null,[a(c,{onClick:n.addShop,theme:"primary"},{default:p(()=>[ee]),_:1},8,["onClick"]),a(f,{onCancel:n.onCancel,onConfirm:e[4]||(e[4]=l=>n.submitGoods()),show:o.show,"onUpdate:show":e[5]||(e[5]=l=>o.show=l),title:"\u6DFB\u52A0\u5546\u54C1","show-cancel-button":""},{default:p(()=>[a(i,{modelValue:o.title,"onUpdate:modelValue":e[0]||(e[0]=l=>o.title=l),label:"\u6807\u9898",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:o.desc,"onUpdate:modelValue":e[1]||(e[1]=l=>o.desc=l),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:o.price,"onUpdate:modelValue":e[2]||(e[2]=l=>o.price=l),label:"\u4EF7\u683C",type:"number",clearable:""},null,8,["modelValue"]),a(i,{onClick:n.pickType,modelValue:o.type,"onUpdate:modelValue":e[3]||(e[3]=l=>o.type=l),label:"\u9009\u62E9\u7C7B\u578B",type:"text"},null,8,["onClick","modelValue"]),b("ul",oe,[(T(!0),U(A,null,H(o.fileList1,(l,v)=>(T(),U("li",{onClick:S=>n.removeFileList(v),key:v},[b("div",{style:J("background: url("+l.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,le))),128))]),a(V,{multiple:"","after-read":n.afterRead},null,8,["after-read"])]),_:1},8,["onCancel","show"]),te,a(c,{onClick:n.addShopType,theme:"primary"},{default:p(()=>[ae]),_:1},8,["onClick"]),a(f,{onConfirm:e[7]||(e[7]=l=>n.addGoodType()),show:o.show1,"onUpdate:show":e[8]||(e[8]=l=>o.show1=l),title:"\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B","show-cancel-button":""},{default:p(()=>[a(g,{modelValue:o.goodType,"onUpdate:modelValue":e[6]||(e[6]=l=>o.goodType=l),label:"\u5546\u54C1\u7C7B\u578B",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u7C7B\u578B"},null,8,["modelValue"])]),_:1},8,["show"]),a(f,{showConfirmButton:!1,show:o.show2,"onUpdate:show":e[9]||(e[9]=l=>o.show2=l),title:"\u9009\u62E9\u5546\u54C1\u7C7B\u578B"},{default:p(()=>[a(k,{"columns-field-names":o.customFieldName,title:"\u9009\u62E9",columns:o.typeList,onConfirm:n.onConfirm1,onCancel:n.onCancel1,onChange:o.onChange},null,8,["columns-field-names","columns","onConfirm","onCancel","onChange"])]),_:1},8,["show"]),a(C),b("div",null,[a(c,{onClick:n.createChatRoom,theme:"primary"},{default:p(()=>[ne]),_:1},8,["onClick"]),a(f,{onCancel:o.onCancel2,onConfirm:e[13]||(e[13]=l=>n.createChat()),show:o.chatShow,"onUpdate:show":e[14]||(e[14]=l=>o.chatShow=l),title:"\u521B\u5EFA\u804A\u5929\u5BA4","show-cancel-button":""},{default:p(()=>[a(i,{required:"",modelValue:o.chat.chatId,"onUpdate:modelValue":e[10]||(e[10]=l=>o.chat.chatId=l),label:"\u7FA4\u53F7",type:"number",clearable:""},null,8,["modelValue"]),a(i,{required:"",modelValue:o.chat.name,"onUpdate:modelValue":e[11]||(e[11]=l=>o.chat.name=l),label:"\u7FA4\u540D\u79F0",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:o.chat.desc,"onUpdate:modelValue":e[12]||(e[12]=l=>o.chat.desc=l),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"])]),_:1},8,["onCancel","show"])]),a(C),b("div",null,[a(c,{onClick:n.addMovice,theme:"primary"},{default:p(()=>[se]),_:1},8,["onClick"])])])}var pe=E(x,[["render",de],["__scopeId","data-v-82356b34"]]);export{pe as default};
