import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListTab',
      component: resolve => require(['@/views/listTab/index'], resolve)
    }
  ]
})
