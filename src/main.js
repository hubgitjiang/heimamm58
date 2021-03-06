import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入 vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入 flexible
import 'amfe-flexible'
// 导入 normalize.css
import 'normalize.css'
// 导入字体图标
import './style/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
