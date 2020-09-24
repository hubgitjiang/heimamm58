import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入 uservant
import uservant from '../views/uservant.vue'
// 导入 login
import login from '../views/login'

Vue.use(VueRouter)

const routes = [
  // 使用 vant
  {
    path: '/uservant',
    component: uservant
  },
  // 登录
  {
    path: '/login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
