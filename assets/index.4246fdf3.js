import{j as o}from"./index.12c3182a.js";var e=o.create({baseURL:"http://101.35.30.21:4399","content-type":"application/json"});e.interceptors.request.use(t=>t);e.interceptors.response.use(t=>t.data);const r=t=>e.post("/addStudy",t),n=()=>e.post("/getStudy",{}),p=t=>e.post("/findStudy",t),d=t=>e.post("/removeStudy",t),i=t=>{let s={headers:{"Content-Type":"multipart/form-data"}};return e.post("/upload",t,s)},u=t=>{let s={headers:{"Content-Type":"multipart/form-data"}};return e.post("/upload1",t,s)},c=t=>e({url:"/users/upload_img",method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},data:t}),g=t=>e.post("/addGoods",t),l=()=>e.get("/getGoods"),_=t=>e.post("/getGoodDetail",t),m=t=>e.post("/editgood",t),y=t=>e.post("/editEditor",t),T=t=>e.post("/addGoodType",t),v=()=>e.get("/getGoodType"),G=t=>e.post("/getGoodFilter",t),f=t=>e.post("/login",t),h=t=>e.post("/regist",t),S=t=>e.post("/leaveword",t),x=t=>e.post("/findLeaveword",t),C=t=>e.post("/removeGoods",t),w=t=>e.post("/users/savePeopleMsg",t),P=t=>e.post("/users/getPeopleLocation",t),M=t=>e.post("/users/saveMoveCase",t),k=()=>e.post("/users/getMoveCase"),E=t=>e.post("/users/addTalkText",t),L=t=>e.post("/users/findTalkText",t),j=t=>e.post("/users/getUser",t),H=()=>e({url:"/users/getHospital",method:"POST",headers:{}}),b=()=>e({url:"/users/geterwm",method:"GET",headers:{}}),D=()=>e({url:"/users/getHeadImg",method:"GET"}),F=t=>e({url:"/users/translate",method:"POST",data:t});export{d as A,r as B,p as C,H as D,b as E,F,j as a,k as b,E as c,M as d,u as e,L as f,D as g,v as h,l as i,G as j,y as k,f as l,m,i as n,_ as o,C as p,S as q,h as r,e as s,x as t,c as u,w as v,P as w,T as x,g as y,n as z};
