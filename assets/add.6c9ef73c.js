var S=Object.defineProperty,C=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var _=(e,o,t)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,g=(e,o)=>{for(var t in o||(o={}))P.call(o,t)&&_(e,t,o[t]);if(f)for(var t of f(o))j.call(o,t)&&_(e,t,o[t]);return e},h=(e,o)=>C(e,x(o));import{m as O,as as s,at as z,au as M,av as k,_ as V,b as H,d as D,r as I,o as R,e as T,t as B,a as $,c as E,f as i,w as b,ac as F,g as m,K as N,aw as K,M as L,i as A,v as U,x as q,j as l,ad as G}from"./index.d81dcf5c.js";import{w as J}from"./wangEditor.2ae34553.js";function y(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function w(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?y(Object(t),!0).forEach(function(a){k(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Q={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 11l4.24 2.55a.5.5 0 00.76-.43V2.88a.5.5 0 00-.76-.43L4 5H2.1a.6.6 0 00-.6.6v4.8c0 .33.27.6.6.6H4zm1-5.43l3-1.8v8.46l-3-1.8V5.57zM4 10H2.5V6H4v4zM13.52 5.73a6 6 0 00-1.4-1.95l.68-.73c.7.65 1.25 1.42 1.63 2.27a6.6 6.6 0 01-1.63 7.63l-.68-.73a6 6 0 001.4-1.95 5.6 5.6 0 000-4.54z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M11.5 8c0-.87-.36-1.75-1.07-2.45l.7-.72c.9.88 1.37 2.02 1.37 3.17 0 1.16-.48 2.29-1.38 3.17l-.7-.72A3.44 3.44 0 0011.5 8z",fillOpacity:.9}}]},W=O({name:"SoundIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,o){var{attrs:t}=o,a=s(()=>e.size),{className:n,style:c}=z(a),d=s(()=>["t-icon","t-icon-sound",n.value]),u=s(()=>w(w({},c.value),t.style)),p=s(()=>({class:d.value,style:u.value,onClick:v=>{var r;return(r=e.onClick)===null||r===void 0?void 0:r.call(e,{e:v})}}));return()=>M(Q,p.value)}});const X=O({beforeRouteEnter(e,o,t){t(a=>{a.store.commit("changeFooter",!1)})},setup(){const e=H(),o=D();let t=I({store:e,title:"",user:{},editor:null,editorMaxHeight:null,editorContent:""});R(()=>{t.editorMaxHeight=window.innerHeight-300,t.editor=new J("#toolbar-container","#text-container"),t.editor.config.onchange=function(n){t.editorContent=n},t.editor.create()});let a=async()=>{let n=await K({user:{name:"\u4F5C\u8005"},html:t.editor.txt.html(),title:t.title});console.log(n,"\u6DFB\u52A0\u6210\u529F"),L.success("\u6DFB\u52A0\u77E5\u8BC6\u6E05\u5355\u6210\u529F"),o.go(-1)};return T((n,c)=>{e.commit("changeFooter",!0)}),h(g({},B(t)),{SoundIcon:W,submit:a})}}),Y=e=>(U("data-v-03cdf593"),e=e(),q(),e),Z={class:"add"},ee=A(" \u6DFB\u52A0\u77E5\u8BC6\u6E05\u5355 "),te=Y(()=>m("div",{id:"toolbar-container",class:"toolbar"},null,-1));function oe(e,o,t,a,n,c){const d=l("sound-icon"),u=l("t-navbar"),p=l("t-back-top"),v=l("t-input");return $(),E("div",Z,[i(u,{onClickRight:e.submit},{right:b(()=>[i(d)]),default:b(()=>[ee]),_:1},8,["onClickRight"]),F(i(p,{style:{"z-index":"999"},text:"\u9876\u90E8",onToTop:e.submit,target:e.myDOMTarget},null,8,["onToTop","target"]),[[G,!0]]),m("div",null,[i(v,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=r=>e.title=r),label:"\u6807\u9898",clearable:"",placeholder:"\u6807\u9898"},null,8,["modelValue"]),te,m("div",{id:"text-container",style:N("max-height:"+e.editorMaxHeight+"px"),class:"text"},null,4)])])}var se=V(X,[["render",oe],["__scopeId","data-v-03cdf593"]]);export{se as default};
