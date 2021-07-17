// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入初始化样式文件
import './assets/styles/reset.css'
// 引入解决一像素边框问题的文件
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
// 引入fastclick
import fastClick from 'fastclick'
Vue.config.productionTip = false
// 使用fastClick
fastClick.attach = (document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
