var R=Object.defineProperty,B=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var O=(o,e,d)=>e in o?R(o,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[e]=d,G=(o,e)=>{for(var d in e||(e={}))z.call(e,d)&&O(o,d,e[d]);if(N)for(var d of N(e))A.call(e,d)&&O(o,d,e[d]);return o},j=(o,e)=>B(o,M(e));import{_ as D,d as E,r as J,$ as q,o as P,t as Y,a as T,c as U,f as a,w as u,g as w,F as H,C as K,L as Q,am as W,M as h,an as X,ao as Z,a3 as $,Y as x,ap as ee,i as C,z as oe,A as le,j as m}from"./index.f6f1b4cd.js";import{g as te,a as ae}from"./utils.1c13dd23.js";const ne={setup(){let o=E(),e=J({serverUrl:q,user:JSON.parse(localStorage.getItem("user")),checked:!0,show:!1,show1:!1,show2:!1,chatShow:!1,title:"",desc:"",price:null,type:"",goodType:"",typeObj:{},fileList1:[],typeList:[],customFieldName:{text:"name",value:"_id"},chat:{chatId:null,name:"",desc:""}}),d=async()=>{let t=await W({username:e.user.username,admin:e.user.admin}),s=JSON.parse(localStorage.getItem("user"));s.admin=e.user.admin,localStorage.setItem("user",JSON.stringify(s)),h.success(t.msg)},n=()=>{o.push({path:"/editMovice"})},_=(t,s)=>{e.typeObj=t,e.type=t.name,e.show2=!1,console.log(e.type)},L=async()=>{(await X({type:e.goodType})).code==1&&(l(),h.success("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B\u6210\u529F"))},f=()=>{e.show2=!1,e.typeObj={},e.type=""},i=()=>{e.show2=!0},b=()=>{e.show1=!0},c=()=>{e.show=!0},V=async()=>{const{title:t,desc:s,price:r,fileList1:p,typeObj:y}=e;if(!t||!s||!r||!y._id){h.error("\u8BF7\u6B63\u786E\u586B\u5199\u5185\u5BB9");return}let F=await Z({title:t,desc:s,price:r,fileList1:p,typeId:y._id,typeName:y.name,timestamp:te(),time:ae()});e.show=!1,F.code==1&&(e.title="",e.fileList1=[],e.desc="",e.typeObj={},e.type="",e.price="",h.success("\u6DFB\u52A0\u5546\u54C1\u6210\u529F"))},k=()=>{e.show=!1,e.title="",e.desc="",e.fileList1=[],e.typeObj={},e.type=""},g=t=>{e.fileList1.splice(t,1)},S=t=>{console.log(t),t.length||(t=[t]);var s=new FormData;s.enctype="multipart/form-data",t.forEach(function(r){s.append("myfile",r.file)}),$(s).then(r=>{let p=e.fileList1;r.fileList.forEach(y=>{p.push({url:e.serverUrl+y.filename})}),e.fileList1=p,console.log("\u4E0A\u4F20\u6210\u529F1",e.fileList1,p)})},l=async()=>{let t=await x();e.typeList=t.result},v=()=>{e.chatShow=!0},I=async()=>{const{chatId:t,name:s,desc:r}=e.chat;if(console.log(!t,!s),!t||!s){e.chatShow=!0,h.error("\u8BF7\u6B63\u786E\u8F93\u5165\u4FE1\u606F");return}else{let p=await ee({chatId:t,name:s,desc:r});console.log(p,"\u521B\u5EFA\u804A\u5929\u5BA4"),e.chatShow=!1,h.success("\u521B\u5EFA\u804A\u5929\u5BA4\u6210\u529F")}};return P(()=>{l()}),j(G({},Y(e)),{onConfirm1:_,onCancel1:f,pickType:i,addGoodType:L,addShopType:b,removeFileList:g,addShop:c,submitGoods:V,onCancel:k,afterRead:S,createChat:I,createChatRoom:v,addMovice:n,changeAdmin:d})}},se=o=>(oe("data-v-0a214590"),o=o(),le(),o),de=C("\u6DFB\u52A0\u5546\u54C1"),ie={class:"fileList"},re=["onClick"],me=C(" \xA0 "),pe=C("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B"),ue=C("\u521B\u5EFA\u804A\u5929\u5BA4"),ce={style:{width:"100%",height:"1rem",display:"flex","align-items":"center"}},he=se(()=>w("span",{style:{"font-size":"0.3rem",display:"inline-block"}},"\u8D44\u6E90\u5F00\u542F\uFF1A",-1)),fe=C();function ye(o,e,d,n,_,L){const f=m("t-button"),i=m("t-input"),b=m("van-uploader"),c=m("van-dialog"),V=m("van-field"),k=m("van-picker"),g=m("van-divider"),S=m("van-switch");return T(),U("div",null,[a(f,{onClick:n.addShop,theme:"primary"},{default:u(()=>[de]),_:1},8,["onClick"]),a(c,{onCancel:n.onCancel,onConfirm:e[4]||(e[4]=l=>n.submitGoods()),show:o.show,"onUpdate:show":e[5]||(e[5]=l=>o.show=l),title:"\u6DFB\u52A0\u5546\u54C1","show-cancel-button":""},{default:u(()=>[a(i,{modelValue:o.title,"onUpdate:modelValue":e[0]||(e[0]=l=>o.title=l),label:"\u6807\u9898",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:o.desc,"onUpdate:modelValue":e[1]||(e[1]=l=>o.desc=l),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:o.price,"onUpdate:modelValue":e[2]||(e[2]=l=>o.price=l),label:"\u4EF7\u683C",type:"number",clearable:""},null,8,["modelValue"]),a(i,{onClick:n.pickType,modelValue:o.type,"onUpdate:modelValue":e[3]||(e[3]=l=>o.type=l),label:"\u9009\u62E9\u7C7B\u578B",type:"text"},null,8,["onClick","modelValue"]),w("ul",ie,[(T(!0),U(H,null,K(o.fileList1,(l,v)=>(T(),U("li",{onClick:I=>n.removeFileList(v),key:v},[w("div",{style:Q("background: url("+l.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,re))),128))]),a(b,{multiple:"","after-read":n.afterRead},null,8,["after-read"])]),_:1},8,["onCancel","show"]),me,a(f,{onClick:n.addShopType,theme:"primary"},{default:u(()=>[pe]),_:1},8,["onClick"]),a(c,{onConfirm:e[7]||(e[7]=l=>n.addGoodType()),show:o.show1,"onUpdate:show":e[8]||(e[8]=l=>o.show1=l),title:"\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B","show-cancel-button":""},{default:u(()=>[a(V,{modelValue:o.goodType,"onUpdate:modelValue":e[6]||(e[6]=l=>o.goodType=l),label:"\u5546\u54C1\u7C7B\u578B",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u7C7B\u578B"},null,8,["modelValue"])]),_:1},8,["show"]),a(c,{showConfirmButton:!1,show:o.show2,"onUpdate:show":e[9]||(e[9]=l=>o.show2=l),title:"\u9009\u62E9\u5546\u54C1\u7C7B\u578B"},{default:u(()=>[a(k,{"columns-field-names":o.customFieldName,title:"\u9009\u62E9",columns:o.typeList,onConfirm:n.onConfirm1,onCancel:n.onCancel1,onChange:o.onChange},null,8,["columns-field-names","columns","onConfirm","onCancel","onChange"])]),_:1},8,["show"]),a(g),w("div",null,[a(f,{onClick:n.createChatRoom,theme:"primary"},{default:u(()=>[ue]),_:1},8,["onClick"]),a(c,{onCancel:o.onCancel2,onConfirm:e[13]||(e[13]=l=>n.createChat()),show:o.chatShow,"onUpdate:show":e[14]||(e[14]=l=>o.chatShow=l),title:"\u521B\u5EFA\u804A\u5929\u5BA4","show-cancel-button":""},{default:u(()=>[a(i,{required:"",modelValue:o.chat.chatId,"onUpdate:modelValue":e[10]||(e[10]=l=>o.chat.chatId=l),label:"\u7FA4\u53F7",type:"number",clearable:""},null,8,["modelValue"]),a(i,{required:"",modelValue:o.chat.name,"onUpdate:modelValue":e[11]||(e[11]=l=>o.chat.name=l),label:"\u7FA4\u540D\u79F0",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:o.chat.desc,"onUpdate:modelValue":e[12]||(e[12]=l=>o.chat.desc=l),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"])]),_:1},8,["onCancel","show"])]),a(g),w("div",ce,[he,fe,a(S,{onChange:n.changeAdmin,modelValue:o.user.admin,"onUpdate:modelValue":e[15]||(e[15]=l=>o.user.admin=l)},null,8,["onChange","modelValue"])])])}var ve=D(ne,[["render",ye],["__scopeId","data-v-0a214590"]]);export{ve as default};
