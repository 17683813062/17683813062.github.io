var V=Object.defineProperty,B=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,$=(e,t)=>{for(var o in t||(t={}))L.call(t,o)&&C(e,o,t[o]);if(R)for(var o of R(t))M.call(t,o)&&C(e,o,t[o]);return e},F=(e,t)=>B(e,q(t));import{_ as E,m as N,r as j,o as A,ae as H,b as I,t as U,a as S,c as D,d as i,w as l,F as T,q as Y,x as z,i as g,n as b,f as G,g as J,af as K,j as u}from"./index.8bbebd18.js";const O=N({beforeRouteEnter(e,t,o){o(p=>{p.store.commit("changeFooter",!1)})},setup(){let e=G();const t=J();let o=j({store:e,list:[],refreshing:!1,loading:!1}),p=a=>{t.push({path:"/studydetail",query:{_id:a}})},k=()=>{t.push({path:"/studyAdd"})};A(()=>{c()});const w=a=>{let s=new Date(a*1),m=s.getFullYear(),n=s.getMonth()+1,r=s.getDate(),d=s.getHours(),_=s.getMinutes(),f=s.getSeconds();return console.log(m,n),n=n<10?"0"+n:n,r=r<10?"0"+r:r,d=d<10?"0"+d:d,_=_<10?"0"+_:_,f=f<10?"0"+f:f,m+"-"+n+"-"+r+" "+d+":"+_+":"+f},h=()=>{o.refreshing=!0,y()},y=a=>{o.loading=!0,c();let s=setTimeout(()=>{o.loading=!1,o.refreshing=!1,clearTimeout(s)},800)};let c=async()=>{let a=await H();o.list=a.result},v=async a=>{let s=await K({_id:a});console.log(s,"\u5220\u9664"),c()};return I((a,s)=>{e.commit("changeFooter",!0)}),F($({},U(o)),{add:k,onRefresh:h,getTime:w,removeStudy:v,goDetail:p})}}),P=g(" \u77E5\u8BC6\u6E05\u5355 "),Q=g("\u5220\u9664");function W(e,t,o,p,k,w){const h=u("t-navbar"),y=u("t-fab"),c=u("t-cell"),v=u("t-button"),a=u("t-swipe-cell"),s=u("t-list"),m=u("t-pull-down-refresh");return S(),D(T,null,[i(h,null,{default:l(()=>[P]),_:1}),i(y,{onClick:t[0]||(t[0]=n=>e.add()),class:"demo-fab-button"}),i(m,{modelValue:e.refreshing,"onUpdate:modelValue":t[2]||(t[2]=n=>e.refreshing=n),onRefresh:e.onRefresh},{default:l(()=>[i(s,{"async-loading":e.pullloading,onScroll:t[1]||(t[1]=n=>e.onScroll(n,2))},{default:l(()=>[(S(!0),D(T,null,Y(e.list,(n,r)=>(S(),z(a,{key:r},{right:l(()=>[i(v,{theme:"danger",shape:"square",onClick:d=>e.removeStudy(n._id)},{default:l(()=>[Q]),_:2},1032,["onClick"])]),default:l(()=>[i(c,{onClick:d=>e.goDetail(n._id),align:"top"},{title:l(()=>[g(b(n.title),1)]),description:l(()=>[g(" \u521B\u5EFA\u4EBA\uFF1A"+b(n.creator.name)+" \xA0\xA0 \u65F6\u95F4\uFF1A"+b(e.getTime(n.timestamp)),1)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1},8,["async-loading"])]),_:1},8,["modelValue","onRefresh"])],64)}var x=E(O,[["render",W],["__scopeId","data-v-4d4168b7"]]);export{x as default};
