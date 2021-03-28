import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './router/premission'
import store from './store'

import './styles/reset.scss'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false


Vue.use(elementUI)
new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
