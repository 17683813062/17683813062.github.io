var B=Object.defineProperty,T=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,$=(e,t)=>{for(var o in t||(t={}))M.call(t,o)&&C(e,o,t[o]);if(R)for(var o of R(t))q.call(t,o)&&C(e,o,t[o]);return e},F=(e,t)=>T(e,L(t));import{_ as E,k as N,r as z,o as A,b as H,t as I,a as S,c as D,d as i,w as l,F as V,m as U,p as Y,h as g,l as b,f as j,g as G,i as u}from"./index.aa338e25.js";import{y as J,z as K}from"./index.1fb92cbc.js";const O=N({beforeRouteEnter(e,t,o){o(p=>{p.store.commit("changeFooter",!1)})},setup(){let e=j();const t=G();let o=z({store:e,list:[],refreshing:!1,loading:!1}),p=s=>{t.push({path:"/studydetail",query:{_id:s}})},k=()=>{t.push({path:"/studyAdd"})};A(()=>{c()});const w=s=>{let a=new Date(s*1),m=a.getFullYear(),n=a.getMonth()+1,r=a.getDate(),d=a.getHours(),_=a.getMinutes(),f=a.getSeconds();return console.log(m,n),n=n<10?"0"+n:n,r=r<10?"0"+r:r,d=d<10?"0"+d:d,_=_<10?"0"+_:_,f=f<10?"0"+f:f,m+"-"+n+"-"+r+" "+d+":"+_+":"+f},h=()=>{o.refreshing=!0,y()},y=s=>{o.loading=!0,c(),setTimeout(()=>{o.loading=!1,o.refreshing=!1},800)};let c=async()=>{let s=await J();o.list=s.result},v=async s=>{let a=await K({_id:s});console.log(a,"\u5220\u9664"),c()};return H((s,a)=>{e.commit("changeFooter",!0)}),F($({},I(o)),{add:k,onRefresh:h,getTime:w,removeStudy:v,goDetail:p})}}),P=g(" \u77E5\u8BC6\u6E05\u5355 "),Q=g("\u5220\u9664");function W(e,t,o,p,k,w){const h=u("t-navbar"),y=u("t-fab"),c=u("t-cell"),v=u("t-button"),s=u("t-swipe-cell"),a=u("t-list"),m=u("t-pull-down-refresh");return S(),D(V,null,[i(h,null,{default:l(()=>[P]),_:1}),i(y,{onClick:t[0]||(t[0]=n=>e.add()),class:"demo-fab-button"}),i(m,{modelValue:e.refreshing,"onUpdate:modelValue":t[2]||(t[2]=n=>e.refreshing=n),onRefresh:e.onRefresh},{default:l(()=>[i(a,{"async-loading":e.pullloading,onScroll:t[1]||(t[1]=n=>e.onScroll(n,2))},{default:l(()=>[(S(!0),D(V,null,U(e.list,(n,r)=>(S(),Y(s,{key:r},{right:l(()=>[i(v,{theme:"danger",shape:"square",onClick:d=>e.removeStudy(n._id)},{default:l(()=>[Q]),_:2},1032,["onClick"])]),default:l(()=>[i(c,{onClick:d=>e.goDetail(n._id),align:"top"},{title:l(()=>[g(b(n.title),1)]),description:l(()=>[g(" \u521B\u5EFA\u4EBA\uFF1A"+b(n.creator.name)+" \xA0\xA0 \u65F6\u95F4\uFF1A"+b(e.getTime(n.timestamp)),1)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1},8,["async-loading"])]),_:1},8,["modelValue","onRefresh"])],64)}var ee=E(O,[["render",W],["__scopeId","data-v-b2ff5912"]]);export{ee as default};
