// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'


Vue.prototype.siteUrl = "http://ntpush.cn:3999"

Vue.use(MuseUI)
Vue.use(AlloyFingerVue);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
