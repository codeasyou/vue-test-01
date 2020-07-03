import Vue from 'vue'
import myRoute from './router/index'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  router:myRoute,
  render: h => h(App),
}).$mount('#app');
