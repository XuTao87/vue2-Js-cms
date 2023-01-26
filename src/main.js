import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.scss'
import 'normalize.css'

import {
  setupStore
} from './store/index'
Vue.use(ElementUI);
setupStore()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')