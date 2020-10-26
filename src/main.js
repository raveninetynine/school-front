import Vue from 'vue'
import Vuetify from 'vuetify/lib';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './routes';
import store from './store';

Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
