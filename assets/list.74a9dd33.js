var R=Object.defineProperty,B=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var O=(o,e,d)=>e in o?R(o,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[e]=d,j=(o,e)=>{for(var d in e||(e={}))z.call(e,d)&&O(o,d,e[d]);if(N)for(var d of N(e))A.call(e,d)&&O(o,d,e[d]);return o},G=(o,e)=>B(o,M(e));import{_ as D,d as E,r as J,Z as q,o as K,t as P,a as U,c as _,f as a,w as m,g as w,F as W,z as Z,K as H,ah as Q,M as h,ai as X,aj as Y,a2 as $,W as x,ak as ee,i as C,v as oe,x as le,j as u}from"./index.e752eb38.js";const te={setup(){let o=E(),e=J({serverUrl:q,user:JSON.parse(localStorage.getItem("user")),checked:!0,show:!1,show1:!1,show2:!1,chatShow:!1,title:"",desc:"",price:null,type:"",goodType:"",typeObj:{},fileList1:[],typeList:[],customFieldName:{text:"name",value:"_id"},chat:{chatId:null,name:"",desc:""}}),d=async()=>{let t=await Q({username:e.user.username,admin:e.user.admin}),s=JSON.parse(localStorage.getItem("user"));s.admin=e.user.admin,localStorage.setItem("user",JSON.stringify(s)),h.success(t.msg)},n=()=>{o.push({path:"/editMovice"})},T=(t,s)=>{e.typeObj=t,e.type=t.name,e.show2=!1,console.log(e.type)},L=async()=>{(await X({type:e.goodType})).code==1&&(l(),h.success("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B\u6210\u529F"))},f=()=>{e.show2=!1,e.typeObj={},e.type=""},i=()=>{e.show2=!0},b=()=>{e.show1=!0},c=()=>{e.show=!0},V=async()=>{const{title:t,desc:s,price:r,fileList1:p,typeObj:y}=e;if(!t||!s||!r||!y._id){h.error("\u8BF7\u6B63\u786E\u586B\u5199\u5185\u5BB9");return}let F=await Y({title:t,desc:s,price:r,fileList1:p,typeId:y._id,typeName:y.name});e.show=!1,F.code==1&&(e.title="",e.fileList1=[],e.desc="",e.typeObj={},e.type="",e.price="",h.success("\u6DFB\u52A0\u5546\u54C1\u6210\u529F"))},k=()=>{e.show=!1,e.title="",e.desc="",e.fileList1=[],e.typeObj={},e.type=""},v=t=>{e.fileList1.splice(t,1)},S=t=>{console.log(t),t.length||(t=[t]);var s=new FormData;s.enctype="multipart/form-data",t.forEach(function(r){s.append("myfile",r.file)}),$(s).then(r=>{let p=e.fileList1;r.fileList.forEach(y=>{p.push({url:e.serverUrl+y.filename})}),e.fileList1=p,console.log("\u4E0A\u4F20\u6210\u529F1",e.fileList1,p)})},l=async()=>{let t=await x();e.typeList=t.result},g=()=>{e.chatShow=!0},I=async()=>{const{chatId:t,name:s,desc:r}=e.chat;if(console.log(!t,!s),!t||!s){e.chatShow=!0,h.error("\u8BF7\u6B63\u786E\u8F93\u5165\u4FE1\u606F");return}else{let p=await ee({chatId:t,name:s,desc:r});console.log(p,"\u521B\u5EFA\u804A\u5929\u5BA4"),e.chatShow=!1,h.success("\u521B\u5EFA\u804A\u5929\u5BA4\u6210\u529F")}};return K(()=>{l()}),G(j({},P(e)),{onConfirm1:T,onCancel1:f,pickType:i,addGoodType:L,addShopType:b,removeFileList:v,addShop:c,submitGoods:V,onCancel:k,afterRead:S,createChat:I,createChatRoom:g,addMovice:n,changeAdmin:d})}},ae=o=>(oe("data-v-ee93232c"),o=o(),le(),o),ne=C("\u6DFB\u52A0\u5546\u54C1"),se={class:"fileList"},de=["onClick"],ie=C(" \xA0 "),re=C("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B"),ue=C("\u521B\u5EFA\u804A\u5929\u5BA4"),pe={style:{width:"100%",height:"1rem",display:"flex","align-items":"center"}},me=ae(()=>w("span",{style:{"font-size":"0.3rem",display:"inline-block"}},"\u8D44\u6E90\u5F00\u542F\uFF1A",-1)),ce=C();function he(o,e,d,n,T,L){const f=u("t-button"),i=u("t-input"),b=u("van-uploader"),c=u("van-dialog"),V=u("van-field"),k=u("van-picker"),v=u("van-divider"),S=u("van-switch");return U(),_("div",null,[a(f,{onClick:n.addShop,theme:"primary"},{default:m(()=>[ne]),_:1},8,["onClick"]),a(c,{onCancel:n.onCancel,onConfirm:e[4]||(e[4]=l=>n.submitGoods()),show:o.show,"onUpdate:show":e[5]||(e[5]=l=>o.show=l),title:"\u6DFB\u52A0\u5546\u54C1","show-cancel-button":""},{default:m(()=>[a(i,{modelValue:o.title,"onUpdate:modelValue":e[0]||(e[0]=l=>o.title=l),label:"\u6807\u9898",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:o.desc,"onUpdate:modelValue":e[1]||(e[1]=l=>o.desc=l),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:o.price,"onUpdate:modelValue":e[2]||(e[2]=l=>o.price=l),label:"\u4EF7\u683C",type:"number",clearable:""},null,8,["modelValue"]),a(i,{onClick:n.pickType,modelValue:o.type,"onUpdate:modelValue":e[3]||(e[3]=l=>o.type=l),label:"\u9009\u62E9\u7C7B\u578B",type:"text"},null,8,["onClick","modelValue"]),w("ul",se,[(U(!0),_(W,null,Z(o.fileList1,(l,g)=>(U(),_("li",{onClick:I=>n.removeFileList(g),key:g},[w("div",{style:H("background: url("+l.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,de))),128))]),a(b,{multiple:"","after-read":n.afterRead},null,8,["after-read"])]),_:1},8,["onCancel","show"]),ie,a(f,{onClick:n.addShopType,theme:"primary"},{default:m(()=>[re]),_:1},8,["onClick"]),a(c,{onConfirm:e[7]||(e[7]=l=>n.addGoodType()),show:o.show1,"onUpdate:show":e[8]||(e[8]=l=>o.show1=l),title:"\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B","show-cancel-button":""},{default:m(()=>[a(V,{modelValue:o.goodType,"onUpdate:modelValue":e[6]||(e[6]=l=>o.goodType=l),label:"\u5546\u54C1\u7C7B\u578B",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u7C7B\u578B"},null,8,["modelValue"])]),_:1},8,["show"]),a(c,{showConfirmButton:!1,show:o.show2,"onUpdate:show":e[9]||(e[9]=l=>o.show2=l),title:"\u9009\u62E9\u5546\u54C1\u7C7B\u578B"},{default:m(()=>[a(k,{"columns-field-names":o.customFieldName,title:"\u9009\u62E9",columns:o.typeList,onConfirm:n.onConfirm1,onCancel:n.onCancel1,onChange:o.onChange},null,8,["columns-field-names","columns","onConfirm","onCancel","onChange"])]),_:1},8,["show"]),a(v),w("div",null,[a(f,{onClick:n.createChatRoom,theme:"primary"},{default:m(()=>[ue]),_:1},8,["onClick"]),a(c,{onCancel:o.onCancel2,onConfirm:e[13]||(e[13]=l=>n.createChat()),show:o.chatShow,"onUpdate:show":e[14]||(e[14]=l=>o.chatShow=l),title:"\u521B\u5EFA\u804A\u5929\u5BA4","show-cancel-button":""},{default:m(()=>[a(i,{required:"",modelValue:o.chat.chatId,"onUpdate:modelValue":e[10]||(e[10]=l=>o.chat.chatId=l),label:"\u7FA4\u53F7",type:"number",clearable:""},null,8,["modelValue"]),a(i,{required:"",modelValue:o.chat.name,"onUpdate:modelValue":e[11]||(e[11]=l=>o.chat.name=l),label:"\u7FA4\u540D\u79F0",type:"text",clearable:""},null,8,["modelValue"]),a(i,{modelValue:o.chat.desc,"onUpdate:modelValue":e[12]||(e[12]=l=>o.chat.desc=l),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"])]),_:1},8,["onCancel","show"])]),a(v),w("div",pe,[me,ce,a(S,{onChange:n.changeAdmin,modelValue:o.user.admin,"onUpdate:modelValue":e[15]||(e[15]=l=>o.user.admin=l)},null,8,["onChange","modelValue"])])])}var we=D(te,[["render",he],["__scopeId","data-v-ee93232c"]]);export{we as default};
