import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/pages/home'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/login'], resolve)
    },
    {
      path: '/menu',
      name: 'menu',
      component: resolve => require(['@/pages/menu'], resolve)
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['@/pages/order'], resolve)
    }
  ]
})
