import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from './store/index.js'
import './assets/font/iconfont.css'
import "utils/bcg-line"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(
  faSearch
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
