import Vue from 'vue'
import { router } from './router'
import { store } from './store/index'
import axios from 'axios'

import App from './App.vue'
import Unsupported from './Unsupported.vue'

axios.defaults.baseURL = 'https://hzyo7y0ukj.execute-api.eu-west-1.amazonaws.com/dev'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.auth.id_token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

Vue.component('google-auth', () => import("./components/GoogleAuth.vue"))
Vue.component('Loading', () => import("./components/Loading.vue"))

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
})


const { detect } = require('detect-browser')
const browser = detect()

// handle the case where we don't detect the browser
switch (browser && browser.name) {
  case 'ie':
    window.app = new Vue({
      render: h => h(Unsupported)
    }).$mount('#app')
    break

  default:
    window.app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
}
