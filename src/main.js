import Vue from 'vue'
import App from './App.vue'
import GoogleAuth from'./components/GoogleAuth.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('google-auth', GoogleAuth);

import { Navbar } from 'bootstrap-vue/es/components';
Vue.use(Navbar);
import bContainer from 'bootstrap-vue/es/components/layout/container';
Vue.component('b-container', bContainer);

Vue.config.productionTip = false


window.app = new Vue({
  render: h => h(App)
}).$mount('#app')
