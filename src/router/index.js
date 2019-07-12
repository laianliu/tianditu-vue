import Vue from 'vue'
import Router from 'vue-router'
import tianditu from '@/components/tianditu/tianditu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tianditu',
      component: tianditu
    }
  ]
})
