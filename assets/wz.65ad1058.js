var y=Object.defineProperty,z=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var c=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))w.call(e,o)&&c(t,o,e[o]);if(p)for(var o of p(e))E.call(e,o)&&c(t,o,e[o]);return t},f=(t,e)=>z(t,C(e));import{_ as F,b as Q,r as $,e as B,t as D,a as k,c as N,f as l,w as d,g as i,F as U,M as q,i as b,j as r}from"./index.7ae61b15.js";const x={beforeRouteEnter(t,e,o){o(n=>{n.store.commit("changeFooter",!1)})},setup(){let t=Q(),e=$({store:t,active:0,zoneid:null,n:null,u:null}),o=()=>{let{zoneid:n,n:s,u}=e;if(!n||!s||!u){q.error("\u8BF7\u6B63\u786E\u586B\u5199\uFF01\uFF01\uFF01");return}location.href=`
      https://pay.qq.com/h5/index.shtml?m=buy&c=game&dialog=0&midasApiVersion=5&transactionid=CC8E5656-EEC9-4ADD-865E-D4D81C258D691558348901265&dh=1&pf=mds_storeopen_qb-_mds_default_v1_0_0.navgame_v1.0-android&appid=1450002258&zoneid=${1010+Number(n)}&n=${s}&as=1&aid=''&wxAppid2=wx1d5858390bbb31e6&u=${u}
      `};return B((n,s)=>{t.commit("changeFooter",!0)}),f(_({},D(e)),{goPayFor:o})}},A=b(" \u5145\u503C "),P={class:"navBox"},R=i("p",{style:{"line-height":"0.6rem","font-size":"0.28rem","font-weight":"bold",color:"red",padding:"0",pading:"0","text-indent":"0.3rem"}}," \u738B\u8005\u8363\u8000 \u5B89\u5353QQ\u533A \u70B9\u5238\u5145\u503C",-1),M=i("p",{style:{"line-height":"0.3rem","font-size":"0.28rem",color:"#ccc",padding:"0",pading:"0","text-indent":"0.3rem"}}," \u6700\u4F4E\u514510\u70B9\u5238",-1),j=b("\u5145\u503C");function L(t,e,o,n,s,u){const v=r("t-navbar"),m=r("t-input"),g=r("t-button"),h=r("van-tab"),V=r("van-tabs");return k(),N(U,null,[l(v,null,{default:d(()=>[A]),_:1}),l(V,{active:t.active,"onUpdate:active":e[3]||(e[3]=a=>t.active=a)},{default:d(()=>[l(h,{title:"\u738B\u8005\u70B9\u5238\u5145\u503C"},{default:d(()=>[i("div",P,[R,M,i("div",null,[l(m,{type:"number",placeholder:"\u8BF7\u8F93\u5165\u533A\u57DF\u53F7",modelValue:t.zoneid,"onUpdate:modelValue":e[0]||(e[0]=a=>t.zoneid=a),label:"\u5927\u533A"},null,8,["modelValue"]),l(m,{type:"number",placeholder:"\u8BF7\u8F93\u5165\u70B9\u5238\u6570",modelValue:t.n,"onUpdate:modelValue":e[1]||(e[1]=a=>t.n=a),label:"\u70B9\u5238\u6570"},null,8,["modelValue"]),l(m,{type:"number",placeholder:"\u8BF7\u8F93\u5165QQ\u53F7",modelValue:t.u,"onUpdate:modelValue":e[2]||(e[2]=a=>t.u=a),label:"QQ\u53F7"},null,8,["modelValue"]),l(g,{onClick:n.goPayFor,size:"large",theme:"primary"},{default:d(()=>[j]),_:1},8,["onClick"])])])]),_:1})]),_:1},8,["active"])],64)}var G=F(x,[["render",L]]);export{G as default};
