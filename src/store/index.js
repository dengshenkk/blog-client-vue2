import Vue from 'vue'
import Vuex from 'vuex'
import { loginModule } from '@/store/module/login'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['loginModule']
  })],
  modules: {
    loginModule
  }
})
