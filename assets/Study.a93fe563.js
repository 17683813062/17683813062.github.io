var B=Object.defineProperty,T=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,F=(e,t)=>{for(var o in t||(t={}))L.call(t,o)&&C(e,o,t[o]);if(w)for(var o of w(t))M.call(t,o)&&C(e,o,t[o]);return e},$=(e,t)=>T(e,q(t));import{_ as E,h as N,r as A,l as H,o as I,t as U,c as D,a as i,w as a,F as V,u as Y,d as j,e as u,f as S,m as z,q as G,g,i as b}from"./index.f2877804.js";import{n as J}from"./index.b41fe155.js";const K=N({beforeRouteEnter(e,t,o){o(f=>{f.store.commit("changeFooter",!1)})},setup(){let e=Y();const t=j();let o=A({store:e,list:[],refreshing:!1,loading:!1}),f=s=>{t.push({path:"/studydetail",query:{_id:s}})},k=()=>{t.push({path:"/studyAdd"})};H(()=>{p()});const R=s=>{let l=new Date(s*1),m=l.getFullYear(),n=l.getMonth()+1,r=l.getDate(),d=l.getHours(),c=l.getMinutes(),_=l.getSeconds();return console.log(m,n),n=n<10?"0"+n:n,r=r<10?"0"+r:r,d=d<10?"0"+d:d,c=c<10?"0"+c:c,_=_<10?"0"+_:_,m+"-"+n+"-"+r+" "+d+":"+c+":"+_},h=()=>{o.refreshing=!0,y()},y=s=>{o.loading=!0,p(),setTimeout(()=>{o.loading=!1,o.refreshing=!1},800)};let p=async()=>{let s=await J();o.list=s.result},v=()=>{};return I((s,l)=>{e.commit("changeFooter",!0)}),$(F({},U(o)),{add:k,onRefresh:h,getTime:R,removeStudy:v,goDetail:f})}}),O=g(" \u77E5\u8BC6\u6E05\u5355 "),P=g("\u5220\u9664");function Q(e,t,o,f,k,R){const h=u("t-navbar"),y=u("t-fab"),p=u("t-cell"),v=u("t-button"),s=u("t-swipe-cell"),l=u("t-list"),m=u("t-pull-down-refresh");return S(),D(V,null,[i(h,null,{default:a(()=>[O]),_:1}),i(y,{onClick:t[0]||(t[0]=n=>e.add()),class:"demo-fab-button"}),i(m,{modelValue:e.refreshing,"onUpdate:modelValue":t[2]||(t[2]=n=>e.refreshing=n),onRefresh:e.onRefresh},{default:a(()=>[i(l,{"async-loading":e.pullloading,onScroll:t[1]||(t[1]=n=>e.onScroll(n,2))},{default:a(()=>[i(s,null,{right:a(()=>[i(v,{theme:"danger",shape:"square",onClick:e.removeStudy},{default:a(()=>[P]),_:1},8,["onClick"])]),default:a(()=>[(S(!0),D(V,null,z(e.list,(n,r)=>(S(),G(p,{onClick:d=>e.goDetail(n._id),key:r,align:"top"},{title:a(()=>[g(b(n.title),1)]),description:a(()=>[g(" \u521B\u5EFA\u4EBA\uFF1A"+b(n.creator.name)+" \xA0\xA0 \u65F6\u95F4\uFF1A"+b(e.getTime(n.timestamp)),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["async-loading"])]),_:1},8,["modelValue","onRefresh"])],64)}var x=E(K,[["render",Q],["__scopeId","data-v-e716bc3e"]]);export{x as default};
