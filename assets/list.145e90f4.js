var S=Object.defineProperty,w=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var v=(t,s,o)=>s in t?S(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,b=(t,s)=>{for(var o in s||(s={}))z.call(s,o)&&v(t,o,s[o]);if(f)for(var o of f(s))F.call(s,o)&&v(t,o,s[o]);return t},y=(t,s)=>w(t,I(s));import{_ as N,k as R,r as V,o as $,b as E,t as M,a as n,c as l,d as m,w as j,e,F as i,m as _,l as r,x as D,f as J,g as O,h as T,y as q,z as A,i as p}from"./index.aa338e25.js";import{a as G}from"./index.1fb92cbc.js";const H=R({beforeRouteEnter(t,s,o){o(c=>{c.store.commit("changeFooter",!1)})},setup(){let t=J(),s=O(),o=V({store:t,list:[{title:"#\u5403\u996D\u5723\u8BDE\u8282\u6495\u5F00"},{title:"#\u62BD\u70B9\u65F6\u95F4\u6570\u636E\u662F"},{title:"#\u4ED8\u6587\u5CF0\u54E5\u54E5\u54E5"},{title:"#\u4ED8\u6587\u5CF0\u54E5\u54E5\u54E5"},{title:"#\u4ED8\u6587\u5CF0\u54E5\u54E5\u54E5"}],manList:[{name:"\u5C0F\u6728\u866B"},{name:"\u9632\u98CE\u7F51"},{name:"\u5927V\u4EBA\u7684"},{name:"\u4F5B\u5C71\u5E02\u5206"}],caseList:[]}),c=()=>{s.push({path:"/addcase"})},h=async()=>{let d=await G();console.log(d,"\u52A8\u6001\u5217\u8868"),o.caseList=d.result};return $(()=>{h()}),E((d,g)=>{t.commit("changeFooter",!0)}),y(b({},M(o)),{addcase:c})}}),u=t=>(q("data-v-b5a75eb6"),t=t(),A(),t),K=T(" \u52A8\u6001\u5E7F\u573A "),P={class:"box"},Q={class:"talkBox"},U=u(()=>e("h6",null,"\u4ECA\u65E5\u70ED\u95E8\u8BDD\u9898",-1)),W=u(()=>e("li",{style:{position:"absolute",right:"0",bottom:"0rem",padding:"0.1rem 0.2rem"}},"\u67E5\u770B\u66F4\u591A",-1)),X={class:"manBox"},Y=u(()=>e("h6",null,"\u4ECA\u65E5\u6D3B\u8DC3\u6210\u5458",-1)),Z=u(()=>e("li",{style:{position:"absolute",right:"0",bottom:"0rem",padding:"0.1rem 0.2rem"}},"\u67E5\u770B\u66F4\u591A",-1)),tt={class:"listBox"},et={class:"top"},st={class:"headImg"},ot={class:"bottom"},at={class:"imgBoxContent"},nt={class:"time"};function lt(t,s,o,c,h,d){const g=p("t-navbar"),x=p("t-fab"),k=p("t-avatar");return n(),l(i,null,[m(g,{style:{position:"fixed",top:"0",left:"0",width:"100%","background-color":"#fff","z-index":"5"}},{default:j(()=>[K]),_:1}),e("div",P,[e("div",Q,[U,e("ul",null,[(n(!0),l(i,null,_(t.list,a=>(n(),l("li",{key:a},[e("span",null,r(a.title),1)]))),128)),W])]),e("div",X,[Y,e("ul",null,[(n(!0),l(i,null,_(t.manList,a=>(n(),l("li",{key:a},[e("span",null,r(a.name),1)]))),128)),Z])])]),m(x,{onClick:t.addcase,style:{position:"fixed",right:"0.1rem",bottom:"30%"}},null,8,["onClick"]),e("ul",tt,[(n(!0),l(i,null,_(t.caseList,(a,B)=>(n(),l("li",{key:B},[e("div",et,[e("div",st,[m(k,{class:"imgBox",image:"https://tdesign.gtimg.com/site/avatar.jpg","hide-on-load-failed":!1}),e("span",null,r(a.username),1)])]),e("div",ot,r(a.text),1),e("div",at,[(n(!0),l(i,null,_(JSON.parse(a.imgList),(L,C)=>(n(),l("div",{class:"box_img",style:D("background:url("+L.url+") no-repeat;background-size:cover;"),key:C+"_img"},null,4))),128))]),e("div",nt,r(a.time),1)]))),128))])],64)}var dt=N(H,[["render",lt],["__scopeId","data-v-b5a75eb6"]]);export{dt as default};
