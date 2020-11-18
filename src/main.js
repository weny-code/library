import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import qs from 'qs'
// import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';


// Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
Vue.use(ElementUI);

axios.defaults.baseURL = '/api'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')