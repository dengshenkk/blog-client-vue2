import Axios from 'axios'
import { Message } from 'element-ui'

console.log('运行模式: ', process.env.NODE_ENV)
console.log('接口地址', process.env.VUE_APP_BASE_API)
const request = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((response) => {
  if (!response.data.success) {
    Message.error(response.data.message)
    return Promise.reject(response)
  }
  return response.data
})

export { request }


