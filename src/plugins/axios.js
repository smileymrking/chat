import axios from 'axios'
import store from '../store'
import router from '../router'
import Cookies from 'js-cookie'
import Qs from 'qs'
import crypto from './crypto'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 100000
})

instance.interceptors.request.use((config) => {
  config.headers['Authorization'] = Cookies.get('token') ? crypto.decrypt(Cookies.get('token')) : null
  config.headers['Accept-Language'] = localStorage.getItem('language') || 'zh-CN'
  config.transformRequest = [data => Qs.stringify(data)]
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((res) => {
  return res.data
}, (error) => {
  if (error.response && error.response.status === 401) {
    store.commit('AUTH_LOGOUT')
    router.push({ name: 'login' })
  } else {
    return Promise.reject(error)
  }
})

export default instance
