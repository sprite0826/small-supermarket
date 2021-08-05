import axios from 'axios' // 引入axios
import qs from 'qs' // 序列化字符串
import store from './store/index' // 引入全局状态管理

// 请求超时时间
axios.defaults.timeout = 10000

const Base = 'http://localhost:3000'
// const Base = '/api'
function headerUrl (url) {
  // console.log('base: ' + Base)
  url = Base + url
  // console.log('url: ' + url)
  return url
}
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// request 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token,如果存在，则统一在http请求的header都加上token,不用每次请求都手动添加
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  })
// response 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  }
)
export default {
  /**
   * get方法对应get请求
   * @param {String}url 请求地址
   * @param {Object}params携带参数
   * @returns {Promise}
   */
  get (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(headerUrl(url), {
        params: params
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
  /**
   * post方法对应post请求
   * @param {String} url 请求地址
   * @param {Object} params 携带参数
   * @returns {Promise}
   */
  post (url, params) {
    return new Promise((resolve, reject) => {
      // console.log(headerUrl(url))
      axios.post(headerUrl(url), qs.stringify(params))
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  }
}
