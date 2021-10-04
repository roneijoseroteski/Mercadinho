import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';

import { routes } from "./routes/routes"
import App from './App.vue'

Vue.use(axios);
Vue.prototype.$http = axios
Vue.use(VueRouter);

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
