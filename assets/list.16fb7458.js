var j=Object.defineProperty,N=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(e,l,t)=>l in e?j(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,T=(e,l)=>{for(var t in l||(l={}))B.call(l,t)&&k(e,t,l[t]);if(_)for(var t of _(l))S.call(l,t)&&k(e,t,l[t]);return e},L=(e,l)=>N(e,O(l));import{x as D,y as E,n as M,h as R}from"./index.b343909a.js";import{_ as z,r as I,C as P,o as q,t as A,a as C,c as v,d as a,w as f,e as U,F as H,m as J,x as K,M as b,h as G,i as r}from"./index.72e77469.js";const Q={setup(){let e=I({serverUrl:P,show:!1,show1:!1,show2:!1,title:"",desc:"",price:null,type:"",goodType:"",typeObj:{},fileList1:[],typeList:[],customFieldName:{text:"name",value:"_id"}}),l=(o,s)=>{e.typeObj=o,e.type=o.name,e.show2=!1,console.log(e.type)},t=async()=>{(await D({type:e.goodType})).code==1&&(c(),b.success("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B\u6210\u529F"))},n=()=>{e.show2=!1,e.typeObj={},e.type=""},g=()=>{e.show2=!0},V=()=>{e.show1=!0},y=()=>{e.show=!0},d=async()=>{const{title:o,desc:s,price:i,fileList1:u,typeObj:m}=e;if(!o||!s||!i||!m._id){b.error("\u8BF7\u6B63\u786E\u586B\u5199\u5185\u5BB9");return}let F=await E({title:o,desc:s,price:i,fileList1:u,typeId:m._id,typeName:m.name});e.show=!1,F.code==1&&(e.title="",e.fileList1=[],e.desc="",e.typeObj={},e.type="",e.price="",b.success("\u6DFB\u52A0\u5546\u54C1\u6210\u529F"))},w=()=>{e.show=!1,e.title="",e.desc="",e.fileList1=[],e.typeObj={},e.type=""},p=o=>{e.fileList1.splice(o,1)},h=o=>{console.log(o),o.length||(o=[o]);var s=new FormData;s.enctype="multipart/form-data",o.forEach(function(i){s.append("myfile",i.file)}),M(s).then(i=>{let u=e.fileList1;i.fileList.forEach(m=>{u.push({url:e.serverUrl+m.filename})}),e.fileList1=u,console.log("\u4E0A\u4F20\u6210\u529F1",e.fileList1,u)})},c=async()=>{let o=await R();e.typeList=o.result};return q(()=>{c()}),L(T({},A(e)),{onConfirm1:l,onCancel1:n,pickType:g,addGoodType:t,addShopType:V,removeFileList:p,addShop:y,submitGoods:d,onCancel:w,afterRead:h})}},W=G("\u6DFB\u52A0\u5546\u54C1"),X={class:"fileList"},Y=["onClick"],Z=G("\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B");function $(e,l,t,n,g,V){const y=r("t-button"),d=r("t-input"),w=r("van-uploader"),p=r("van-dialog"),h=r("van-field"),c=r("van-picker");return C(),v("div",null,[a(y,{onClick:n.addShop,theme:"primary"},{default:f(()=>[W]),_:1},8,["onClick"]),a(p,{onCancel:n.onCancel,onConfirm:l[4]||(l[4]=o=>n.submitGoods()),show:e.show,"onUpdate:show":l[5]||(l[5]=o=>e.show=o),title:"\u6DFB\u52A0\u5546\u54C1","show-cancel-button":""},{default:f(()=>[a(d,{modelValue:e.title,"onUpdate:modelValue":l[0]||(l[0]=o=>e.title=o),label:"\u6807\u9898",type:"text",clearable:""},null,8,["modelValue"]),a(d,{modelValue:e.desc,"onUpdate:modelValue":l[1]||(l[1]=o=>e.desc=o),label:"\u7B80\u4ECB",type:"text",clearable:""},null,8,["modelValue"]),a(d,{modelValue:e.price,"onUpdate:modelValue":l[2]||(l[2]=o=>e.price=o),label:"\u4EF7\u683C",type:"number",clearable:""},null,8,["modelValue"]),a(d,{onClick:n.pickType,modelValue:e.type,"onUpdate:modelValue":l[3]||(l[3]=o=>e.type=o),label:"\u9009\u62E9\u7C7B\u578B",type:"text"},null,8,["onClick","modelValue"]),U("ul",X,[(C(!0),v(H,null,J(e.fileList1,(o,s)=>(C(),v("li",{onClick:i=>n.removeFileList(s),key:s},[U("div",{style:K("background: url("+o.url+") top center no-repeat;background-size: cover;"),class:"imgBox"},null,4)],8,Y))),128))]),a(w,{multiple:"","after-read":n.afterRead},null,8,["after-read"])]),_:1},8,["onCancel","show"]),a(y,{onClick:n.addShopType,theme:"primary"},{default:f(()=>[Z]),_:1},8,["onClick"]),a(p,{onConfirm:l[7]||(l[7]=o=>n.addGoodType()),show:e.show1,"onUpdate:show":l[8]||(l[8]=o=>e.show1=o),title:"\u6DFB\u52A0\u5546\u54C1\u7C7B\u578B","show-cancel-button":""},{default:f(()=>[a(h,{modelValue:e.goodType,"onUpdate:modelValue":l[6]||(l[6]=o=>e.goodType=o),label:"\u5546\u54C1\u7C7B\u578B",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u7C7B\u578B"},null,8,["modelValue"])]),_:1},8,["show"]),a(p,{showConfirmButton:!1,show:e.show2,"onUpdate:show":l[9]||(l[9]=o=>e.show2=o),title:"\u9009\u62E9\u5546\u54C1\u7C7B\u578B"},{default:f(()=>[a(c,{"columns-field-names":e.customFieldName,title:"\u9009\u62E9",columns:e.typeList,onConfirm:n.onConfirm1,onCancel:n.onCancel1,onChange:e.onChange},null,8,["columns-field-names","columns","onConfirm","onCancel","onChange"])]),_:1},8,["show"])])}var le=z(Q,[["render",$],["__scopeId","data-v-11e519da"]]);export{le as default};
