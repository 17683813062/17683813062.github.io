import axios from "./axios"

export const initCode_api = (params) => {
  return axios.post('/users/initCode', params) // 初始化
}

export const newDir_api = (params) => { // 新建文件夹
  return axios.post('/users/newDir', params)
}


export const readDirList_api = (params) => {
  return axios.post('/users/readDirList', params)
}


export const removeDir_api = (params) => {
  return axios.post('/users/removeDir', params)
}