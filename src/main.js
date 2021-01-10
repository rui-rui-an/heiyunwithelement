import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 使用饿了么组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入全局的axios
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = "https://autumnfish.cn/"

// 使用全局过滤器
Vue.filter('qjsongerfilter',(arr)=>{
  return arr.map(item=>item.name).join('&')
})
import moment from 'moment'
Vue.filter('dateFormat',(time)=>{
  return moment(time).format('mm:ss')
})

import router from './router/index'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
