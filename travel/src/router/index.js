import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'// @表示在src目录下寻找
import List from '@/pages/list/List.vue'// @表示在src目录下寻找

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
