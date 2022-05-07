import axios from "axios";
// import store from "@/store"
var service=axios.create({
    baseURL:"http://localhost:4399",//所有的请求带上api
    // baseURL:"http://101.35.30.21:4399",//所有的请求带上api
    // baseURL:"/api",//所有的请求带上api
    "content-type":"application/json"
})

service.interceptors.request.use((config)=>{
    // console.log('发请求')
    // config.header['token']=''
    return config;
})

service.interceptors.response.use((res)=>{
    //token验证失败跳转登录
    return res.data;
})

export default service;