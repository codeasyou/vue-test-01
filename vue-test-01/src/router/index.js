import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//引入一级路由 主面板
import MainPanel from './../views/MainPanel'


export default new VueRouter({
    routes:[
        {
            path:"/",
            name:"mainPanel",
            component:MainPanel
        }
    ]
});
