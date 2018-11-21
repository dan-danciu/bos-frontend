import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/index'

import App from './App.vue'
import Unsupported from './Unsupported.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})


Vue.component('google-auth', () => import("./components/GoogleAuth.vue"));
Vue.component('Loading', () => import("./components/Loading.vue"));

Vue.config.productionTip = true

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
});


const { detect } = require('detect-browser');
const browser = detect();

// handle the case where we don't detect the browser
switch (browser && browser.name) {
  case 'ie':
    window.app = new Vue({
      render: h => h(Unsupported)
    }).$mount('#app')
    break;

  default:
    window.app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
}
