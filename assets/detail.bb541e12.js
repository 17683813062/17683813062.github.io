var V=Object.defineProperty,M=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var I=(e,t,s)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,w=(e,t)=>{for(var s in t||(t={}))O.call(t,s)&&I(e,s,t[s]);if(S)for(var s of S(t))R.call(t,s)&&I(e,s,t[s]);return e},j=(e,t)=>M(e,F(t));import{_ as x,u as J,b as $,r as E,o as T,e as q,t as A,a as m,c,f as n,w as f,g as o,i as b,n as l,E as D,F as L,C,L as P,q as U,M as k,aR as G,aO as H,z as K,A as Q,j as p}from"./index.99279141.js";import{a as W,g as X}from"./utils.5cf54832.js";const Y={beforeRouteEnter(e,t,s){s(d=>{d.store.commit("changeFooter",!1)})},setup(){let e=J(),t=$(),s=E({store:t,user:JSON.parse(localStorage.getItem("user")),obj:{content:"",imgList:"[]",tag:"",tagId:"",time:"",timestamp:"",user:"",username:""},text:"",commitList:[]}),d=async()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),k.error("\u8BF7\u767B\u5F55!!!");return}let{text:u,obj:g,user:i}=s,r=await G({text:u,caseId:g._id,user:i,time:W(),timestamp:X()});console.log(r,"\u63D0\u4EA4"),r.code==1&&(k.success("\u8BC4\u8BBA\u6210\u529F"),s.text="",y())},y=async()=>{let u={_id:e.query._id},i=(await H(u)).result[0];i.imgList=JSON.parse(i.imgList),i.user=JSON.parse(i.user),s.obj=i;let r=JSON.parse(i.commit);function h(a){return function(_,z){var B=_[a],N=z[a];return N-B}}let v=r.sort(h("timestamp"));console.log(v),s.commitList=v};return T(()=>{y()}),q((u,g)=>{t.commit("changeFooter",!0)}),j(w({},A(s)),{submit:d})}},Z=e=>(K("data-v-d352d3ca"),e=e(),Q(),e),ee={class:"detail"},te=b(" \u8BE6\u60C5 "),se={class:"main"},oe={class:"moveCaseBox"},ae={class:"caseBox"},ie={class:"left"},re={style:{"font-size":"0.48rem",margin:"0","margin-left":"0.3rem"}},ne={key:0,class:"imgList"},le={style:{"font-size":"0.26rem",color:"#b7b7b7","margin-top":"0.2rem"}},me={class:"commit"},ce=Z(()=>o("div",{class:"p"},"\u8BC4\u8BBA \xB7",-1)),de=b("\u5199\u4E0B\u4F60\u60F3\u8BC4\u8BBA\u7684\u8BDD\u5427"),ue={class:"writeCommit"},ge=b("\u53D1\u9001"),_e={class:"moveCaseBox"},pe={class:"left"},he={style:{"font-size":"0.36rem",margin:"0","margin-left":"0.3rem"}},ve={class:"right"},fe={style:{"font-size":"0.26rem",color:"#b7b7b7","margin-top":"0.2rem"}};function be(e,t,s,d,y,u){const g=p("t-navbar"),i=p("van-tag"),r=p("van-image"),h=p("van-button"),v=p("van-field");return m(),c("div",ee,[n(g,{style:{position:"fixed",top:"0",left:"0",width:"100%","background-color":"#fff","z-index":"15"}},{default:f(()=>[te]),_:1}),o("div",se,[o("div",oe,[o("div",ae,[n(i,{class:"tag",plain:"",type:"primary"},{default:f(()=>[b(l(e.obj.tag),1)]),_:1}),o("div",ie,[n(r,{fit:"cover",width:"1rem",height:"1rem",src:e.obj.user.headImg?e.obj.user.headImg:"http://101.35.30.21:4399/newImg/dm.jpg"},null,8,["src"]),o("h6",re,l(e.obj.username),1)]),o("div",{onClick:t[0]||(t[0]=D(a=>e.goDetail(e.obj._id),["stop"])),class:"right"},[o("p",null,l(e.obj.content),1),e.obj.imgList.length?(m(),c("div",ne,[(m(!0),c(L,null,C(e.imgList,(a,_)=>(m(),c("div",{style:P(e.imgList.length==1?"width:100%;height:3.5rem":e.imgList.length==2?"width:calc(100% / 2);height:2.2rem":"width:calc(100% / 3);height:1.6rem"),key:"img_"+_,class:"img-obj"},[n(r,{width:"100%",height:"100%",fit:"cover",src:a},null,8,["src"])],4))),128))])):U("",!0),o("p",le,l(e.obj.time),1)])])]),o("div",me,[ce,n(h,{class:"btn",size:"mini",plain:"",type:"primary"},{default:f(()=>[de]),_:1})]),o("div",ue,[n(v,{class:"inputBox",modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=a=>e.text=a),placeholder:"\u8BF7\u8F93\u5165\u8BC4\u8BBA"},null,8,["modelValue"]),n(h,{onClick:d.submit,class:"btn",size:"small",type:"primary"},{default:f(()=>[ge]),_:1},8,["onClick"])]),o("div",_e,[(m(!0),c(L,null,C(e.commitList,(a,_)=>(m(),c("div",{key:"case"+_,class:"caseBox"},[o("div",pe,[n(r,{round:"",fit:"cover",width:"0.8rem",height:"0.8rem",src:a.user.headImg?a.user.headImg:"http://101.35.30.21:4399/newImg/dm.jpg"},null,8,["src"]),o("h6",he,l(a.username),1)]),o("div",ve,[o("p",null,l(a.text),1),o("p",fe,l(a.time),1)])]))),128))])])])}var we=x(Y,[["render",be],["__scopeId","data-v-d352d3ca"]]);export{we as default};
