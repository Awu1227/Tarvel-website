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
// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入轮播图CSS文件
import 'swiper/dist/css/swiper.css'
import store from './vuex/index'
Vue.config.productionTip = false
// 使用fastClick
fastClick.attach = (document.body)
// 使用轮播图插件
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
