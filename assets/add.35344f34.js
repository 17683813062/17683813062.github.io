var S=Object.defineProperty,C=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var _=(e,o,t)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,g=(e,o)=>{for(var t in o||(o={}))P.call(o,t)&&_(e,t,o[t]);if(f)for(var t of f(o))j.call(o,t)&&_(e,t,o[t]);return e},h=(e,o)=>C(e,x(o));import{h as O,E as s,G as z,H as M,J as k,_ as H,r as V,j as D,o as I,t as R,c as T,a as i,w as y,K as B,b as v,y as E,u as $,d as F,M as N,v as L,x as A,e as l,f as K,g as G,L as J}from"./index.7e280280.js";import{w as U}from"./wangEditor.f5f5fbeb.js";import{A as q}from"./index.1c12ac1b.js";function b(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function w(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?b(Object(t),!0).forEach(function(n){k(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var Q={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 11l4.24 2.55a.5.5 0 00.76-.43V2.88a.5.5 0 00-.76-.43L4 5H2.1a.6.6 0 00-.6.6v4.8c0 .33.27.6.6.6H4zm1-5.43l3-1.8v8.46l-3-1.8V5.57zM4 10H2.5V6H4v4zM13.52 5.73a6 6 0 00-1.4-1.95l.68-.73c.7.65 1.25 1.42 1.63 2.27a6.6 6.6 0 01-1.63 7.63l-.68-.73a6 6 0 001.4-1.95 5.6 5.6 0 000-4.54z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M11.5 8c0-.87-.36-1.75-1.07-2.45l.7-.72c.9.88 1.37 2.02 1.37 3.17 0 1.16-.48 2.29-1.38 3.17l-.7-.72A3.44 3.44 0 0011.5 8z",fillOpacity:.9}}]},W=O({name:"SoundIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,o){var{attrs:t}=o,n=s(()=>e.size),{className:r,style:c}=z(n),d=s(()=>["t-icon","t-icon-sound",r.value]),u=s(()=>w(w({},c.value),t.style)),p=s(()=>({class:d.value,style:u.value,onClick:m=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:m})}}));return()=>M(Q,p.value)}});const X=O({beforeRouteEnter(e,o,t){t(n=>{n.store.commit("changeFooter",!1)})},setup(){const e=$(),o=F();let t=V({store:e,title:"",user:{},editor:null,editorMaxHeight:null,editorContent:""});D(()=>{t.editorMaxHeight=window.innerHeight-300,t.editor=new U("#toolbar-container","#text-container"),t.editor.config.onchange=function(r){t.editorContent=r},t.editor.create()});let n=async()=>{let r=await q({user:{name:"\u4F5C\u8005"},html:t.editor.txt.html(),title:t.title});console.log(r,"\u6DFB\u52A0\u6210\u529F"),N.success("\u6DFB\u52A0\u77E5\u8BC6\u6E05\u5355\u6210\u529F"),o.go(-1)};return I((r,c)=>{e.commit("changeFooter",!0)}),h(g({},R(t)),{SoundIcon:W,submit:n})}}),Y=e=>(L("data-v-03cdf593"),e=e(),A(),e),Z={class:"add"},ee=G(" \u6DFB\u52A0\u77E5\u8BC6\u6E05\u5355 "),te=Y(()=>v("div",{id:"toolbar-container",class:"toolbar"},null,-1));function oe(e,o,t,n,r,c){const d=l("sound-icon"),u=l("t-navbar"),p=l("t-back-top"),m=l("t-input");return K(),T("div",Z,[i(u,{onClickRight:e.submit},{right:y(()=>[i(d)]),default:y(()=>[ee]),_:1},8,["onClickRight"]),B(i(p,{style:{"z-index":"999"},text:"\u9876\u90E8",onToTop:e.submit,target:e.myDOMTarget},null,8,["onToTop","target"]),[[J,!0]]),v("div",null,[i(m,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=a=>e.title=a),label:"\u6807\u9898",clearable:"",placeholder:"\u6807\u9898"},null,8,["modelValue"]),te,v("div",{id:"text-container",style:E("max-height:"+e.editorMaxHeight+"px"),class:"text"},null,4)])])}var ie=H(X,[["render",oe],["__scopeId","data-v-03cdf593"]]);export{ie as default};
