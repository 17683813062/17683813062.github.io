var i=Object.defineProperty;var n=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var l=(s,e,a)=>e in s?i(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,c=(s,e)=>{for(var a in e||(e={}))_.call(e,a)&&l(s,a,e[a]);if(n)for(var a of n(e))m.call(e,a)&&l(s,a,e[a]);return s};import{_ as p,r as g,o as h,t as v,a as f,c as j,d as u,e as d,n as b,u as y,aa as w,j as D}from"./index.4dbc2526.js";const I={setup(){let s=y(),e=g({obj:{username:"",user:"",address:"",lat:null,lng:null,sex:"",sign:""}});const a=async o=>{let t=await w({username:o});e.obj=t.reult[0],e.obj.user=JSON.parse(t.reult[0].user),console.log(e.obj)};return h(()=>{a(s.query.username)}),c({},v(e))}},$={class:"neardetail"},x={class:"main"};function B(s,e,a,o,t,N){const r=D("van-image");return f(),j("div",$,[u(r,{fit:"cover","lazy-load":"",width:"100%",height:"4rem",src:"http://101.35.30.21:4399/newImg/dm.jpg"}),d("div",x,[u(r,{class:"headImg",round:"",width:"2rem",height:"2rem",src:s.obj.user.headImg},null,8,["src"]),d("h6",null,b(s.obj.username),1)])])}var S=p(I,[["render",B],["__scopeId","data-v-4ac7a8c1"]]);export{S as default};
