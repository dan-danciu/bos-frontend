import Vue from 'vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('google-auth', () => import("./components/GoogleAuth.vue"));

import { Layout } from 'bootstrap-vue/es/components';
Vue.use(Layout);

Vue.config.productionTip = false


window.app = new Vue({
  render: h => h(App)
}).$mount('#app')
