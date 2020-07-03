// main.js
import Vue from 'vue'
import myRoute from './router/index' //引入路由配置文件 route/index
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  router:myRoute,//挂载路由myRoute 可自定义，映射到router
  render: h => h(App),
}).$mount('#app');
