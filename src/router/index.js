import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
      component: resolve => require(['@/pages/menu'], resolve),
      children: [
        {
          path: '',
          name: 'menu',
          component: resolve => require(['@/pages/menu/menu'], resolve),
        }, {
          path: 'clicked',
          name: 'clicked',
          component: resolve => require(['@/pages/menu/clicked'], resolve),
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['@/pages/order'], resolve)
    }
  ]
})
