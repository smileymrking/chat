import axios from '../plugins/axios'

/**
 * ==========================
 * 所有有关请求用户鉴权 API 的方法
 * ==========================
 */
export default {
  // 用户登录
  register: (params) => {
    return axios.post('auth/register', params)
  },
  // 用户登录
  login: (params) => {
    return axios.post('auth/login', params)
  },
  // 刷新令牌
  refresh: () => {
    return axios.post('auth/refresh')
  },
  // 用户登出
  logout: () => {
    return axios.get('auth/logout')
  },
  // 发送重置密码邮件
  passwordEmail: (params) => {
    return axios.post('auth/password/email', params)
  },
  // 用户密码重置
  passwordReset: (params) => {
    return axios.post('auth/password/reset', params)
  },
  home: () => {
    return axios.get('auth/home')
  }
}
