import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//引入一级路由 主面板
import MainPanel from './../views/MainPanel'

//引入二级路由
import Home from './../views/home/Home'
import News from './../views/news/News'
import YuLe from './../views/yule/YuLe'


export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            name:"mainPanel",
            component:MainPanel,
            children:[
                {
                    path: "/home",
                    name:"home",
                    component: Home
                },
                {
                    path: "/news",
                    name:"news",
                    component: News
                },
                {
                    path: "/yule",
                    name:"yule",
                    component: YuLe
                },
            ]
        }
    ]
});
