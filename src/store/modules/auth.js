import Auth from '../../apis/auth'
import Cookies from 'js-cookie'
import _ from 'lodash'
import crypto from '../../plugins/crypto'

const authUser = Cookies.get('user')
const authRemember = localStorage.getItem('remember')

const state = {
  user: authUser ? crypto.decrypt(authUser) : null,
  isMailSend: false,
  isPasswordReset: false
}

const mutations = {
  LOGIN_SUCCESS (state, data) {
    const user = _.pick(data.data.user, ['id', 'name', 'email'])
    state.user = user
    Cookies.set('user', crypto.encrypt(user))
    this.commit('AUTH_SET_TOKEN', { ...data, remember: data.remember })
  },
  AUTH_SET_TOKEN (state, data) {
    const token = data.data.token_type + ' ' + data.data.access_token
    const secret = crypto.encrypt(token)
    if (data.remember) {
      state.remember = token
    }
    Cookies.set('token', secret)
  },
  AUTH_LOGOUT (state) {
    state.user = null
    localStorage.removeItem('user')
    Cookies.remove('token')
  },
  SEND_RESET_MAIL_SUCCESS (state) {
    state.isMailSend = true
  },
  RESET_PASSWORD_SUCCESS (state) {
    state.isPasswordReset = true
  }
}

const actions = {
  async register ({ commit }, params) {
    await Auth.register(params)
  },
  async login ({ commit }, params) {
    const { data } = await Auth.login(params)
    commit('LOGIN_SUCCESS', { data: data, remember: params.remember })
  },
  async logout ({ commit }) {
    await Auth.logout()
    commit('AUTH_LOGOUT')
  },
  async refresh ({ commit }) {
    const { data } = await Auth.refresh()
    commit('AUTH_SET_TOKEN', { data: data, remember: true })
    return data
  },
  async sendResetEmail ({ commit }, params) {
    await Auth.passwordEmail(params)
    commit('SEND_RESET_MAIL_SUCCESS')
  },
  async resetPassword ({ commit }, params) {
    await Auth.passwordReset(params)
    commit('RESET_PASSWORD_SUCCESS')
  },
  async home () {
    return Auth.home()
  }
}

const getters = {
  getAuthUser: state => state.user
}

export default {
  state,
  mutations,
  actions,
  getters
}
