import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { routes } from "./routes/routes"
import App from './App.vue'
// import { use } from 'vue/types/umd';

Vue.use(axios);
Vue.prototype.$http = axios
Vue.use(VueRouter);
Vue.use(BootstrapVue);
// Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({
  mode: 'history',
  routes,
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#App')
