import 'buefy/lib/buefy.css';
import Vue from 'vue';
import Buefy from 'buefy';
import firebase from './firebase';

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
