import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import message from './plugins/message'
import helpers from './plugins/helpers'
import i18n from './lang'
import crypto from './plugins/crypto'

Vue.use(Antd)

Vue.config.productionTip = false

Vue.prototype.$message = message
Vue.prototype['$helpers'] = helpers
Vue.prototype['$crypto'] = crypto

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
