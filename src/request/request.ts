import axios from "axios"

const instance = axios.create({
  baseURL: 'http://localhost:8080/', // 基础URL
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  timeout: 5000 // 请求超时时间
})

// // 请求拦截器
// instance.interceptors.request.use(
//   config => {
//     return config
//   },
//   error => {
//     console.error('Request Error:', error)
//     return Promise.reject(error)
//   }
// )

// // 响应拦截器
// instance.interceptors.response.use(
//   response => {
//     return response.data
//   },
//   error => {
//     // 处理响应错误
//     // if (error.response) {
//     //   // 请求已发出，但服务器响应的状态码不在 2xx 范围内
//     //   console.error('Response Error:', error.response.data, error.response.status, error.response.headers);
//     //   return Promise.reject(error.response);
//     // } else if (error.request) {
//     //   // 请求已发出，但没有收到响应
//     //   console.error('Request Timeout or Network Error:', error.request);
//     //   return Promise.reject(error.request);
//     // } else {
//     //   // 发生了其他情况（如设置请求时发生错误）
//     //   console.error('Error:', error.message);
//     //   return Promise.reject(error.message);
//     // }
//     console.error('Response Error:', error)
//     return Promise.reject(error)
//   }
// )

export default instance