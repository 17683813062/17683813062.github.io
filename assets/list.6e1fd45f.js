var B=Object.defineProperty,F=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var D=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&D(e,n,t[n]);if(I)for(var n of I(t))E.call(t,n)&&D(e,n,t[n]);return e},C=(e,t)=>F(e,W(t));import{_ as J,d as O,V as y,r as Y,o as j,t as q,a as k,c as N,f as m,w as v,g as r,n as o,E as R,F as G,C as P,p as H,M as T,af as K,z as Q,A as X,j as p}from"./index.f6f1b4cd.js";import{b as V}from"./utils.1c13dd23.js";const Z={setup(){const e=O(),t=y([]),n=y(!1),s=y(!1),h=y(!1);let l=Y({user:JSON.parse(localStorage.getItem("user")),page:0,limit:10,totle:"",getToday1:V(),myList:[]}),c=(i,d)=>{i=new Date(i.replace(/-/g,"/")),d=new Date(d.replace(/-/g,"/"));var u=Math.abs(i.getTime()-d.getTime())/1e3/24/60/60,S=Math.floor(u/365);return S},f=i=>{e.push({path:"/nearDetail",query:{username:i}})};const L=()=>{if(localStorage.getItem("user")=="undefined"||localStorage.getItem("user")=="null"||localStorage.getItem("user")==""||localStorage.getItem("user")=="{}"||!localStorage.getItem("user")){localStorage.setItem("user","{}"),T.error("\u8BF7\u767B\u5F55!!!");return}console.log("\u52A0\u8F7D+1"),l.page+=1,a()},_=()=>{s.value=!1,n.value=!0,a()};let a=async()=>{let{page:i,limit:d}=l;h.value&&(h.value=!1);let u=await K({page:i,limit:d});t.value=[];let S=t.value,b=u.reult.filter(g=>g.username!==l.user.username);if(l.myList=u.reult.filter(g=>g.username==l.user.username),l.myList.length==0){T.error("\u8BF7\u5148\u66F4\u65B0\u4F4D\u7F6E\u4FE1\u606F");return}let w=S.concat(b);w.forEach((g,oe)=>{var A=AMap.GeometryUtil.distance([l.myList[0].lng,l.myList[0].lat],[g.lng,g.lat]);let U=Number(A)/1e3;g.distance=U.toFixed(2)}),t.value=w,n.value=!1,(u.reult.length==0||u.reult.length<l.limit)&&(s.value=!0),console.log(t,"\u6240\u6709\u4EBA\u5458")};return j(()=>{}),C(M({list:t,onLoad:L,loading:n,finished:s,onRefresh:_,refreshing:h},q(l)),{goDetail:f,getYear:c,getToday1:V})}},$=e=>(Q("data-v-25c52318"),e=e(),X(),e),x={class:"near"},ee={class:"right"},te={style:{"font-weight":"200","font-size":"0.3rem"}},ae=$(()=>r("span",null,"0.00km",-1)),se=["onClick"],ne={class:"right"},re={style:{"font-weight":"200","font-size":"0.3rem"}};function le(e,t,n,s,h,l){const c=p("van-image"),f=p("van-cell"),L=p("van-list"),_=p("van-pull-refresh");return k(),N("div",x,[m(_,{modelValue:s.refreshing,"onUpdate:modelValue":t[2]||(t[2]=a=>s.refreshing=a),onRefresh:s.onRefresh},{default:v(()=>[m(L,{loading:s.loading,"onUpdate:loading":t[1]||(t[1]=a=>s.loading=a),finished:s.finished,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:s.onLoad},{default:v(()=>[m(f,{center:""},{title:v(()=>[r("div",{onClick:t[0]||(t[0]=R(a=>s.goDetail(e.myList[0]?e.myList[0].username:""),["stop"])),class:"main"},[m(c,{width:"100",height:"100",src:e.myList[0]?JSON.parse(e.myList[0].user).headImg:""},null,8,["src"]),r("div",ee,[r("h6",null,o(e.myList[0]?e.myList[0].nickname?e.myList[0].nickname:e.myList[0].username:""),1),r("h6",te,o(e.myList[0]?e.myList[0].birthday?s.getYear(e.myList[0].birthday,s.getToday1()):"\u6682\u65E0":"")+" \xA0"+o(e.myList[0]?e.myList[0].heightWeight?e.myList[0].heightWeight:"\u6682\u65E0":"")+"\xA0 "+o(e.myList[0]?e.myList[0].attr?e.myList[0].attr:"\u6682\u65E0":""),1),r("p",null,o(e.myList[0]?e.myList[0].sign?e.myList[0].sign:"\u6682\u65E0\u7B7E\u540D":""),1),ae])])]),_:1}),(k(!0),N(G,null,P(s.list,(a,i)=>(k(),H(f,{center:"",key:i},{title:v(()=>[r("div",{onClick:R(d=>s.goDetail(a.username),["stop"]),class:"main"},[m(c,{width:"100",height:"100",src:JSON.parse(a.user).headImg},null,8,["src"]),r("div",ne,[r("h6",null,o(a.nickname?a.nickname:a.username),1),r("h6",re,o(a.birthday?s.getYear(a.birthday,s.getToday1()):"\u6682\u65E0")+" \xA0"+o(a.heightWeight?a.heightWeight:"\u6682\u65E0")+"\xA0 "+o(a.attr?a.attr:"\u6682\u65E0"),1),r("p",null,o(a.sign?a.sign:"\u6682\u65E0\u7B7E\u540D"),1),r("span",null,o(a.distance)+"km",1)])],8,se)]),_:2},1024))),128))]),_:1},8,["loading","finished","onLoad"])]),_:1},8,["modelValue","onRefresh"])])}var ue=J(Z,[["render",le],["__scopeId","data-v-25c52318"]]);export{ue as default};
