var w=Object.defineProperty;var m=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var O=(e,s,o)=>s in e?w(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,j=(e,s)=>{for(var o in s||(s={}))T.call(s,o)&&O(e,o,s[o]);if(m)for(var o of m(s))L.call(s,o)&&O(e,o,s[o]);return e};import{_ as y,b as S,r as U,o as I,aC as x,e as D,t as N,a as B,c as $,f as k,w as C,g as t,i as v,n as i,z as M,A as R,j as V}from"./index.3803a45c.js";const z={beforeRouteEnter(e,s,o){o(_=>{_.store.commit("changeFooter",!1)})},setup(){let e=S(),s=U({store:e,wuhanObj:{},hubeiObj:{},chinaObj:{},list:[],lastUpdateTime:"",overseaLastUpdateTime:""});I(()=>{o()});let o=async()=>{let u=new Date().getMinutes();if(localStorage.getItem("minute")==u){localStorage.setItem("minute",u);let l=JSON.parse(localStorage.getItem("res")),c=l.result.areaTree;l.result.chinaDayList,l.result.chinaTotal;let n=c.filter(d=>d.name=="\u4E2D\u56FD")[0];s.chinaObj=n;let r=n.children.filter(d=>d.name=="\u6E56\u5317")[0];s.hubeiObj=r;let b=r.children.filter(d=>d.name=="\u6B66\u6C49")[0];s.wuhanObj=b,s.lastUpdateTime=l.result.lastUpdateTime,s.overseaLastUpdateTime=l.result.overseaLastUpdateTime}else{let c=new Date().getMinutes();if(c!=localStorage.getItem("minute")){let n=await x();console.log(n,"\u75AB\u60C5"),localStorage.setItem("minute",c),localStorage.setItem("res",JSON.stringify(n));let p=n.result.areaTree;n.result.chinaDayList,n.result.chinaTotal;let r=p.filter(h=>h.name=="\u4E2D\u56FD")[0];s.chinaObj=r;let b=r.children.filter(h=>h.name=="\u6E56\u5317")[0];s.hubeiObj=b;let g=b.children.filter(h=>h.name=="\u6B66\u6C49")[0];s.wuhanObj=g,s.lastUpdateTime=n.result.lastUpdateTime,s.overseaLastUpdateTime=n.result.overseaLastUpdateTime}}};return D((_,u)=>{e.commit("changeFooter",!0)}),j({},N(s))}},a=e=>(M("data-v-1ba1021b"),e=e(),R(),e),E={class:"main"},F=v(" \u75AB\u60C5 "),J={style:{color:"red","font-size":"0.28rem","text-indent":"0.7rem"}},A=a(()=>t("span",{style:{color:"black"}},"\u66F4\u65B0\u65F6\u95F4\uFF1A",-1)),H=a(()=>t("div",{class:"title"},"\u6B66\u6C49",-1)),q={class:"box"},G={class:"box-item"},K={class:"count"},P=a(()=>t("span",{class:"text"},"\u65B0\u589E\u786E\u8BCA",-1)),Q={class:"box-item"},W={class:"count"},X=a(()=>t("span",{class:"text"},"\u7D2F\u8BA1\u6CBB\u6108",-1)),Y={class:"box-item"},Z={class:"count"},tt=a(()=>t("span",{class:"text"},"\u7D2F\u8BA1\u786E\u8BCA",-1)),et={class:"box-item"},st={class:"count"},at=a(()=>t("span",{class:"text"},"\u7D2F\u8BA1\u6B7B\u4EA1",-1)),ot=a(()=>t("div",{class:"title"},"\u6E56\u5317",-1)),it={class:"box"},nt={class:"box-item"},lt={class:"count"},ct=a(()=>t("span",{class:"text"},"\u65B0\u589E\u786E\u8BCA",-1)),dt={class:"box-item"},rt={class:"count"},ht=a(()=>t("span",{class:"text"},"\u7D2F\u8BA1\u6CBB\u6108",-1)),_t={class:"box-item"},ut={class:"count"},bt=a(()=>t("span",{class:"text"},"\u7D2F\u8BA1\u786E\u8BCA",-1)),pt={class:"box-item"},mt={class:"count"},Ot=a(()=>t("span",{class:"text"},"\u7D2F\u8BA1\u6B7B\u4EA1",-1)),jt=a(()=>t("div",{class:"title"},"\u4E2D\u56FD",-1)),vt={class:"box"},ft={class:"box-item"},gt={class:"count"},wt=a(()=>t("span",{class:"text"},"\u65B0\u589E\u786E\u8BCA",-1)),Tt={class:"box-item"},Lt={class:"count"},yt=a(()=>t("span",{class:"text"},"\u7D2F\u8BA1\u6CBB\u6108",-1)),St={class:"box-item"},Ut={class:"count"},It=a(()=>t("span",{class:"text"},"\u7D2F\u8BA1\u786E\u8BCA",-1)),xt={class:"box-item"},Dt={class:"count"},Nt=a(()=>t("span",{class:"text"},"\u7D2F\u8BA1\u6B7B\u4EA1",-1));function Bt(e,s,o,_,u,l){const c=V("t-navbar");return B(),$("div",E,[k(c,null,{default:C(()=>[F]),_:1}),t("p",J,[A,v(i(e.lastUpdateTime),1)]),H,t("div",q,[t("div",G,[t("span",K,i(e.wuhanObj.today?e.wuhanObj.today.confirm:""),1),P]),t("div",Q,[t("span",W,i(e.wuhanObj.total?e.wuhanObj.total.heal:""),1),X]),t("div",Y,[t("span",Z,i(e.wuhanObj.total?e.wuhanObj.total.confirm:""),1),tt]),t("div",et,[t("span",st,i(e.wuhanObj.total?e.wuhanObj.total.dead:""),1),at])]),ot,t("div",it,[t("div",nt,[t("span",lt,i(e.hubeiObj.today?e.hubeiObj.today.confirm:""),1),ct]),t("div",dt,[t("span",rt,i(e.hubeiObj.total?e.hubeiObj.total.heal:""),1),ht]),t("div",_t,[t("span",ut,i(e.hubeiObj.total?e.hubeiObj.total.confirm:""),1),bt]),t("div",pt,[t("span",mt,i(e.hubeiObj.total?e.hubeiObj.total.dead:""),1),Ot])]),jt,t("div",vt,[t("div",ft,[t("span",gt,i(e.chinaObj.today?e.chinaObj.today.confirm:""),1),wt]),t("div",Tt,[t("span",Lt,i(e.chinaObj.total?e.chinaObj.total.heal:""),1),yt]),t("div",St,[t("span",Ut,i(e.chinaObj.total?e.chinaObj.total.confirm:""),1),It]),t("div",xt,[t("span",Dt,i(e.chinaObj.total?e.chinaObj.total.dead:""),1),Nt])])])}var Ct=y(z,[["render",Bt],["__scopeId","data-v-1ba1021b"]]);export{Ct as default};
