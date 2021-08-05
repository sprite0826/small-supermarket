import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import qs from 'qs'
import echarts from 'echarts'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import 'element-theme-chalk';

Vue.prototype.$video = Video

Vue.prototype.$qs = qs;

Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:3333'
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
global.axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
