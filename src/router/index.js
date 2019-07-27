import Vue from 'vue'
import Router from 'vue-router'
import Auth from './modules/auth'
import store from '../store'

Vue.use(Router)

/* Router.beforeEach((from, to, next) => {
  if (to.meta.requireAuth) { // 判断跳转的路由是否需要登录
    if (store.state.token) { // vuex.state判断token是否存在
      next() // 已登录
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
}) */

const RouterConfig = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...Auth,
    {
      path: '/',
      name: 'dashboard',
      meta: { auth: true },
      component: () => import('../views/About')
    }
  ]
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  let routeAuth = to.matched.some(m => m.meta.auth) // 当前路由是否需要认证
  let getUser = Boolean(store.getters.getAuthUser) // true 用户已登录， false 用户未登录
  if (routeAuth && !getUser) {
    next({ name: 'login', query: { redirect: to.path } })
  } else if (!routeAuth && getUser) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router
