import Vue from 'vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('google-auth', () => import("./components/GoogleAuth.vue"));

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      windowWidth: 0
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth();
    })
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  }

})

window.app = new Vue({
  render: h => h(App)
}).$mount('#app')
