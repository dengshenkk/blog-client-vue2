import router from './index'
import store from '../store'


const whiteListForLogin = ['/login', '/register']
router.beforeEach((to, from, next) => {
  // 有token或者是在白名单
  if (store.state.loginModule.userInfo.token || whiteListForLogin.includes(to.path)) {
    next()
  } else {
    next({
      path: '/login',
      replace: true
    })
  }

})
