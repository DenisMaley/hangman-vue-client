import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.prototype.$http = Axios;

const access_token = localStorage.getItem('access_token')
if (access_token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = access_token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
