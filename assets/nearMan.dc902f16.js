var _=Object.defineProperty;var m=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var u=(n,e,o)=>e in n?_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,f=(n,e)=>{for(var o in e||(e={}))M.call(e,o)&&u(n,o,e[o]);if(m)for(var o of m(e))O.call(e,o)&&u(n,o,e[o]);return n};import{_ as j,b as A,r as y,o as v,$,a8 as L,a9 as k,e as S,t as x,a as I,c as P,v as N,x as W,g as z}from"./index.ee240181.js";const B={beforeRouteEnter(n,e,o){o(s=>{s.store.commit("changeFooter",!1)})},setup(){const n=A();let e=y({store:n,localObj:{lng:"",lat:"",address:""},timer:null,user:JSON.parse(localStorage.getItem("user")),peopleList:[]}),o=null,s=null;v(()=>{$(()=>{g()})});const g=()=>{o=new AMap.Map("mapContainer",{zoom:12,pitch:45,viewMode:"3D"}),s=new AMap.Marker({position:new AMap.LngLat(116.401337,39.907886),title:"\u5317\u4EAC",offset:new AMap.Pixel(-8,-3)});let a=["<h6 style='font-size:0.34rem;padding:0;margin:0;line-height:0.8rem;margin-top:0.5rem'>\u672A\u53D1\u8D27\u5371\u5E9F\u95F4</h6>","<p style='padding:0;margin:0;'>222</p>",'<button onclick="goGDmap(116.401337, 39.907886})" >\u5BFC\u822A</button>'],t=new AMap.InfoWindow({content:a.join("")});d(),t.open(o,[116.401337,39.907886]),s.on("click",()=>{t.open(o,[116.401337,39.907886])}),o.add(s)},d=()=>{AMap.plugin("AMap.Geolocation",function(){var a=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,offset:[10,20],zoomToAccuracy:!0,position:"RB"});a.getCurrentPosition(function(l,r){l=="complete"?t(r):i(r)});function t(l){e.localObj.lng=l.position.lng,e.localObj.lat=l.position.lat,e.localObj.address=l.formattedAddress,console.log(JSON.stringify(e.localObj)),w(l),b(),s=new AMap.Marker({position:new AMap.LngLat(e.localObj.lng,e.localObj.lat),title:"\u6211\u7684",offset:new AMap.Pixel(-8,-3)});let r=[`<h6 style='font-size:0.3rem;padding:0;margin:0;line-height:0.5rem;margin-top:0.8rem'>${e.localObj.address}</h6>`,"<p style='padding:0;margin:0;'>\u60A8\u5F53\u524D\u4F4D\u7F6E</p>"],c=new AMap.InfoWindow({content:r.join("")});s.on("click",()=>{c.open(o,[e.localObj.lng,e.localObj.lat])}),c.open(o,[e.localObj.lng,e.localObj.lat]),o.add(s),o.setCenter(new AMap.LngLat(e.localObj.lng,e.localObj.lat))}function i(l){console.log(l,"\u5B9A\u4F4D\u51FA\u9519")}})},w=async a=>{let t={lng:a.position.lng,lat:a.position.lat,address:a.formattedAddress,user:e.user};console.log(JSON.stringify(t)),console.log("\u4FDD\u5B58\u7528\u6237\u4FE1\u606F1");let i=await L(t);console.log(JSON.stringify(i),"\u4FDD\u5B58\u7528\u6237\u4FE1\u606F2")},b=async()=>{let a=await k({user:e.user});e.peopleList=a.result,alert(JSON.stringify(e.peopleList)),e.peopleList.forEach(t=>{let i=new AMap.Marker({position:new AMap.LngLat(t.lng,t.lat),title:t.username,offset:new AMap.Pixel(-8,-3)}),l=[`<h6 style='font-size:0.34rem;padding:0;margin:0;line-height:0.5rem;margin-top:0.5rem'>${t.username}</h6>`,`<p style='padding:0;margin:0;line-height:0.6rem;margin-top:0.2rem'>${t.address}</p>`,`<button style='float:left' disabled >\u79C1\u804A</button><button style='float:right' onclick="goGDmap(${t.lng+","+t.lat+","+t.address})" >\u5BFC\u822A</button>`],r=new AMap.InfoWindow({content:l.join("")});i.on("click",()=>{r.open(o,[t.lng,t.lat])}),window.goGDmap=function(c,p,h){alert(c+";"+p+`;https://uri.amap.com/navigation?from=${e.localObj.lng},${e.localObj.lat},${localObj.address}&to=${c},${p},${h}&mode=walk&callnative=1&coordinate=wgs84&src=mypage`),e.timer=setTimeout(()=>{window.location.href=`https://uri.amap.com/navigation?from=${e.localObj.lng},${e.localObj.lat}&to=${c},${p}&mode=walk&callnative=1&coordinate=wgs84&src=mypage`,clearTimeout(e.timer)},1e3)},o.add(i)}),console.log(a,"\u4EBA\u5458\u5B9A\u4F4D\u4FE1\u606F",e.peopleList)};return S((a,t)=>{n.commit("changeFooter",!0)}),f({},x(e))}},C=n=>(N("data-v-53902073"),n=n(),W(),n),G={class:"main"},J=C(()=>z("div",{class:"map",id:"mapContainer"},null,-1)),D=[J];function E(n,e,o,s,g,d){return I(),P("div",G,D)}var F=j(B,[["render",E],["__scopeId","data-v-53902073"]]);export{F as default};
