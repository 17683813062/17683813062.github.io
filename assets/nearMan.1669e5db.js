var M=Object.defineProperty;var m=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,u=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&f(t,o,e[o]);if(m)for(var o of m(e))A.call(e,o)&&f(t,o,e[o]);return t};import{_ as b,r as j,l as O,A as y,o as L,t as v,c as k,u as S,f as $,p as x,n as I,b as P}from"./index.9e19b5a8.js";import{s as N,j as W}from"./index.b41fe155.js";const z={beforeRouteEnter(t,e,o){o(i=>{i.store.commit("changeFooter",!1)})},setup(){const t=S();let e=j({store:t,localObj:{},user:JSON.parse(localStorage.getItem("user")),peopleList:[]}),o=null,i=null;O(()=>{y(()=>{c()})});const c=()=>{o=new AMap.Map("mapContainer",{zoom:12,pitch:45,viewMode:"3D"}),i=new AMap.Marker({position:new AMap.LngLat(116.401337,39.907886),title:"\u5317\u4EAC",offset:new AMap.Pixel(-8,-3)});let a=["<h6 style='font-size:0.34rem;padding:0;margin:0;line-height:0.8rem;margin-top:0.5rem'>\u672A\u53D1\u8D27\u5371\u5E9F\u95F4</h6>","<p style='padding:0;margin:0;'>222</p>",'<button onclick="goGDmap(116.401337,39.907886})" >\u5BFC\u822A</button>'],n=new AMap.InfoWindow({content:a.join("")});g(),_(),n.open(o,[116.401337,39.907886]),i.on("click",()=>{n.open(o,[116.401337,39.907886])}),o.add(i)},g=()=>{AMap.plugin("AMap.Geolocation",function(){var a=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,offset:[10,20],zoomToAccuracy:!0,position:"RB"});a.getCurrentPosition(function(l,r){l=="complete"?n(r):s(r)});function n(l){e.localObj.lng=l.position.lng,e.localObj.lat=l.position.lat,e.localObj.address=l.formattedAddress,console.log(JSON.stringify(e.localObj)),w(l),i=new AMap.Marker({position:new AMap.LngLat(e.localObj.lng,e.localObj.lat),title:"\u6211\u7684",offset:new AMap.Pixel(-8,-3)});let r=[`<h6 style='font-size:0.3rem;padding:0;margin:0;line-height:0.5rem;margin-top:0.8rem'>${e.localObj.address}</h6>`,"<p style='padding:0;margin:0;'>\u60A8\u5F53\u524D\u4F4D\u7F6E</p>"],p=new AMap.InfoWindow({content:r.join("")});i.on("click",()=>{p.open(o,[e.localObj.lng,e.localObj.lat])}),p.open(o,[e.localObj.lng,e.localObj.lat]),o.add(i),o.setCenter(new AMap.LngLat(e.localObj.lng,e.localObj.lat))}function s(l){console.log(l,"\u5B9A\u4F4D\u51FA\u9519")}})},w=async a=>{let n={lng:a.position.lng,lat:a.position.lat,address:a.formattedAddress,user:e.user};console.log(JSON.stringify(n)),console.log("\u4FDD\u5B58\u7528\u6237\u4FE1\u606F1");let s=await N(n);console.log(JSON.stringify(s),"\u4FDD\u5B58\u7528\u6237\u4FE1\u606F2")},_=async()=>{let a=await W({user:e.user});e.peopleList=a.result,alert(JSON.stringify(e.peopleList)),e.peopleList.forEach(n=>{let s=new AMap.Marker({position:new AMap.LngLat(n.lng,n.lat),title:n.username,offset:new AMap.Pixel(-8,-3)}),l=[`<h6 style='font-size:0.34rem;padding:0;margin:0;line-height:0.5rem;margin-top:0.5rem'>${n.username}</h6>`,`<p style='padding:0;margin:0;line-height:0.6rem;margin-top:0.2rem'>${n.address}</p>`,`<button onclick="goGDmap(${n.lng+","+n.lat})" >\u5BFC\u822A</button>`],r=new AMap.InfoWindow({content:l.join("")});s.on("click",()=>{r.open(o,[n.lng,n.lat])}),window.goGDmap=function(p,d){alert(p+";"+d),setTimeout(()=>{window.location.href=`androidamap://navi?sourceApplication=appname&amp;poiname=fangheng&amp;lat=${d}&amp;lon=${p}&amp;dev=1&amp;style=2`},1200)},o.add(s)}),console.log(a,"\u4EBA\u5458\u5B9A\u4F4D\u4FE1\u606F",e.peopleList)};return L((a,n)=>{t.commit("changeFooter",!0)}),u({},v(e))}},B=t=>(x("data-v-ff4d191c"),t=t(),I(),t),C={class:"main"},G=B(()=>P("div",{class:"map",id:"mapContainer"},null,-1)),J=[G];function D(t,e,o,i,c,g){return $(),k("div",C,J)}var F=b(z,[["render",D],["__scopeId","data-v-ff4d191c"]]);export{F as default};
