var f=Object.defineProperty;var p=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(t,a,i)=>a in t?f(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,O=(t,a)=>{for(var i in a||(a={}))T.call(a,i)&&m(t,i,a[i]);if(p)for(var i of p(a))g.call(a,i)&&m(t,i,a[i]);return t};import{_ as w,r as y,o as L,as as S,t as U,a as I,c as x,e,i as D,n as o,W as N,X as $}from"./index.c22945cb.js";const k={setup(){let t=y({wuhanObj:{},hubeiObj:{},chinaObj:{},list:[],lastUpdateTime:"",overseaLastUpdateTime:""});L(()=>{a()});let a=async()=>{let u=new Date().getMinutes();if(localStorage.getItem("minute")==u){localStorage.setItem("minute",u);let l=JSON.parse(localStorage.getItem("res")),d=l.result.areaTree;l.result.chinaDayList,l.result.chinaTotal;let n=d.filter(c=>c.name=="\u4E2D\u56FD")[0];t.chinaObj=n;let h=n.children.filter(c=>c.name=="\u6E56\u5317")[0];t.hubeiObj=h;let _=h.children.filter(c=>c.name=="\u6B66\u6C49")[0];t.wuhanObj=_,t.lastUpdateTime=l.result.lastUpdateTime,t.overseaLastUpdateTime=l.result.overseaLastUpdateTime}else{let d=new Date().getMinutes();if(d!=localStorage.getItem("minute")){let n=await S();console.log(n,"\u75AB\u60C5"),localStorage.setItem("minute",d),localStorage.setItem("res",JSON.stringify(n));let b=n.result.areaTree;n.result.chinaDayList,n.result.chinaTotal;let h=b.filter(r=>r.name=="\u4E2D\u56FD")[0];t.chinaObj=h;let _=h.children.filter(r=>r.name=="\u6E56\u5317")[0];t.hubeiObj=_;let v=_.children.filter(r=>r.name=="\u6B66\u6C49")[0];t.wuhanObj=v,t.lastUpdateTime=n.result.lastUpdateTime,t.overseaLastUpdateTime=n.result.overseaLastUpdateTime}}};return O({},U(t))}},s=t=>(N("data-v-c7db6a12"),t=t(),$(),t),B={class:"main"},M={style:{color:"red","font-size":"0.28rem","text-indent":"0.7rem"}},J=s(()=>e("span",{style:{color:"black"}},"\u66F4\u65B0\u65F6\u95F4\uFF1A",-1)),V=s(()=>e("div",{class:"title"},"\u6B66\u6C49",-1)),z={class:"box"},E={class:"box-item"},H={class:"count"},R=s(()=>e("span",{class:"text"},"\u65B0\u589E\u786E\u8BCA",-1)),W={class:"box-item"},X={class:"count"},q=s(()=>e("span",{class:"text"},"\u7D2F\u8BA1\u6CBB\u6108",-1)),A={class:"box-item"},C={class:"count"},F=s(()=>e("span",{class:"text"},"\u7D2F\u8BA1\u786E\u8BCA",-1)),G={class:"box-item"},K={class:"count"},P=s(()=>e("span",{class:"text"},"\u7D2F\u8BA1\u6B7B\u4EA1",-1)),Q=s(()=>e("div",{class:"title"},"\u6E56\u5317",-1)),Y={class:"box"},Z={class:"box-item"},tt={class:"count"},et=s(()=>e("span",{class:"text"},"\u65B0\u589E\u786E\u8BCA",-1)),st={class:"box-item"},at={class:"count"},ot=s(()=>e("span",{class:"text"},"\u7D2F\u8BA1\u6CBB\u6108",-1)),it={class:"box-item"},nt={class:"count"},lt=s(()=>e("span",{class:"text"},"\u7D2F\u8BA1\u786E\u8BCA",-1)),ct={class:"box-item"},dt={class:"count"},ht=s(()=>e("span",{class:"text"},"\u7D2F\u8BA1\u6B7B\u4EA1",-1)),rt=s(()=>e("div",{class:"title"},"\u4E2D\u56FD",-1)),_t={class:"box"},ut={class:"box-item"},bt={class:"count"},pt=s(()=>e("span",{class:"text"},"\u65B0\u589E\u786E\u8BCA",-1)),mt={class:"box-item"},Ot={class:"count"},jt=s(()=>e("span",{class:"text"},"\u7D2F\u8BA1\u6CBB\u6108",-1)),vt={class:"box-item"},ft={class:"count"},Tt=s(()=>e("span",{class:"text"},"\u7D2F\u8BA1\u786E\u8BCA",-1)),gt={class:"box-item"},wt={class:"count"},yt=s(()=>e("span",{class:"text"},"\u7D2F\u8BA1\u6B7B\u4EA1",-1));function Lt(t,a,i,u,l,d){return I(),x("div",B,[e("p",M,[J,D(o(t.lastUpdateTime),1)]),V,e("div",z,[e("div",E,[e("span",H,o(t.wuhanObj.today?t.wuhanObj.today.confirm:""),1),R]),e("div",W,[e("span",X,o(t.wuhanObj.total?t.wuhanObj.total.heal:""),1),q]),e("div",A,[e("span",C,o(t.wuhanObj.total?t.wuhanObj.total.confirm:""),1),F]),e("div",G,[e("span",K,o(t.wuhanObj.total?t.wuhanObj.total.dead:""),1),P])]),Q,e("div",Y,[e("div",Z,[e("span",tt,o(t.hubeiObj.today?t.hubeiObj.today.confirm:""),1),et]),e("div",st,[e("span",at,o(t.hubeiObj.total?t.hubeiObj.total.heal:""),1),ot]),e("div",it,[e("span",nt,o(t.hubeiObj.total?t.hubeiObj.total.confirm:""),1),lt]),e("div",ct,[e("span",dt,o(t.hubeiObj.total?t.hubeiObj.total.dead:""),1),ht])]),rt,e("div",_t,[e("div",ut,[e("span",bt,o(t.chinaObj.today?t.chinaObj.today.confirm:""),1),pt]),e("div",mt,[e("span",Ot,o(t.chinaObj.total?t.chinaObj.total.heal:""),1),jt]),e("div",vt,[e("span",ft,o(t.chinaObj.total?t.chinaObj.total.confirm:""),1),Tt]),e("div",gt,[e("span",wt,o(t.chinaObj.total?t.chinaObj.total.dead:""),1),yt])])])}var It=w(k,[["render",Lt],["__scopeId","data-v-c7db6a12"]]);export{It as default};
