import axios from "./axios"

export const submitStudy = (param)=>{
    return axios.post('/addStudy',param);
}

export const getStudy = () =>{
    return axios.post('/getStudy',{});
}

export const findStudy = (param) =>{
    return axios.post('/findStudy',param)
}

export const removeStudy_api = (param) =>{ // 删除知识清单
    return axios.post('/removeStudy',param)
}   

export const upload_dictionary = (param) =>{
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
    return axios.post('/upload',param, config)
    // return axios({url:'/upload', method:'POST',headers: {'Content-Type': 'multipart/form-data'}, data: param})
}


export const upload_dictionary1 = (param) =>{
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
    return axios.post('/upload1',param, config)
    // return axios({url:'/upload', method:'POST',headers: {'Content-Type': 'multipart/form-data'}, data: param})
}

export const upload_dictionary_img = (param) =>{
    // let config = {
    //     headers: {'Content-Type': 'multipart/form-data'}
    //   }
      return axios({url:'/users/upload_img', method:'POST', headers: {'Content-Type': 'application/json;charset=utf-8'},data:param})
    // return axios.post('/users/upload_img',param, config)
}


export const addGoods_api = (param) =>{
    return axios.post('/addGoods',param)
}
export const getGoods_api = () =>{
    return axios.get('/getGoods')
}
export const getGoodDetail_api = (param) =>{
    return axios.post('/getGoodDetail',param)
}


export const editGood_api = (param) =>{
    return axios.post('/editgood',param)
}

export const editEditor_api = (param) =>{ // 编辑富文本
    return axios.post('/editEditor',param)
}

export const addGoodType_api = (param) =>{ // 添加商品类型
    return axios.post('/addGoodType',param)
}

export const getGoodType_api = () =>{ // 获取商品类型
    return axios.get('/getGoodType')
}

export const getGoodFilter_api = (param) =>{
    return axios.post('/getGoodFilter',param)
}

export const login_api = (param) =>{ // 登录
    return axios.post('/login',param)
}

export const regist_api = (param) =>{ // 注册
    return axios.post('/regist',param)
}

export const leaveword_api = (param) => { // 添加留言
    return axios.post('/leaveword',param)
}

export const findLeaveword_api = (param) => { // 留言列表
    return axios.post('/findLeaveword',param)
}


export const removeGoods_api = (param) => { // 删除商品
    return axios.post('/removeGoods',param);
}

export const savePeopleMsg_api = (param) => { // 保存用户信息
    return axios.post('/users/savePeopleMsg', param);
}

export const getPeopleLocation_api = (param) => {
    return axios.post('/users/getPeopleLocation', param);
}


export const saveMoveCase_api = (param) => { // 添加动态
    return axios.post('/users/saveMoveCase', param);
}

export const getMoveCase_api = () => {
    return axios.post('/users/getMoveCase');
}

export const addTalkText_api = (param) => { // 添加话题
    return axios.post('/users/addTalkText', param);
}


export const findTalkText_api = (param) => { // 查找所有话题
    return axios.post('/users/findTalkText', param); 
}

export const getUser_api = (param) =>{
    return axios.post('/users/getUser', param); 
}



// 王者荣耀 点券充值
export const wzPayFor_api = (param) => {
    // return axios.post('/users/wzPayFor', param); 
    return axios({
        url:'/users/wzPayFor',
        method:'POST',
        data:{
            html:param
        }
    }); 
}