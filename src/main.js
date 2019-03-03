// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'
FastClick.attach(document.body)
// 关闭生产提示
Vue.config.productionTip = false

Vue.use(VideoPlayer)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
