import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from './store/index.js'
import './assets/font/iconfont.css'
import bcgline from "utils/bcg-line"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {parseTime} from './utils/index.js'
let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
if (!flag) bcgline()

library.add(
  faSearch
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.filter('parseTime', (v) => parseTime(v,'{y}-{m}-{d}'))
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
