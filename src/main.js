import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.prototype.$http = Axios;

Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_API_BASE;
const access_token = localStorage.getItem('access_token');
if (access_token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
}

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
