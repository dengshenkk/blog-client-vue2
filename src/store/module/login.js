import { login } from '@/api/user'
import router from '@/router'

const loginModule = {
  state: {
    userInfo: {
      phone: '',
      password: '',
      token: '',
      id: ''
    }
  },
  mutations: {
    LOGIN (state, userInfo) {
      state.userInfo = userInfo
    },
    LOGOUT () {
      router.push('/login')
      setTimeout(() => {
        localStorage.clear()
      }, 16)
    }
  },
  actions: {
    COMMIT_LOGIN ({ commit }, userInfo) {
      login({
        phone: userInfo.phone,
        password: userInfo.password
      }).then(async r => {
        await commit('LOGIN', r.data)
        router.push({ path: '/' })
      })
    }
  }
}

export { loginModule }
