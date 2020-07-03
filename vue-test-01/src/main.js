import Vue from 'vue'
import route from './router/index'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  route,
  render: h => h(App),
}).$mount('#app');
