import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//引入一级路由 主面板
import MainPanel from './../views/MainPanel'

//引入二级路由
import Home from './../views/home/Home'
import News from './../views/news/News'
import YuLe from './../views/yule/YuLe'

//引入三级路由
import HGuoJi from './../views/home/components/GuoJi'
import HGuoNei from './../views/home/components/GuoNei'
import HZuiXin from './../views/home/components/ZuiXin'

import NGuoJi from './../views/news/components/GuoJi'
import NGuoNei from './../views/news/components/GuoNei'
import NZuiXin from './../views/news/components/ZuiXin'

import YGuoJi from './../views/yule/components/GuoJi'
import YGuoNei from './../views/yule/components/GuoNei'
import YZuiXin from './../views/yule/components/ZuiXin'


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
                    component: Home,
                    children: [
                        {
                            path: "hGuoJi",
                            name:"hGuoJi",
                            component: HGuoJi,
                        },
                        {
                            path: "hGuoNei",
                            name:"hGuoNei",
                            component: HGuoNei,
                        },
                        {
                            path: "hZuiXin",
                            name:"hZuiXin",
                            component: HZuiXin,
                        },
                    ]
                },
                {
                    path: "/news",
                    name:"news",
                    component: News,
                    children: [
                        {
                            path: "nGuoJi",
                            name:"nGuoJi",
                            component: NGuoJi,
                        },
                        {
                            path: "nGuoNei",
                            name:"nGuoNei",
                            component: NGuoNei,
                        },
                        {
                            path: "nZuiXin",
                            name:"nZuiXin",
                            component: NZuiXin,
                        },
                    ]
                },
                {
                    path: "/yule",
                    name:"yule",
                    component: YuLe,
                    children: [
                        {
                            path: "yGuoJi",
                            name:"yGuoJi",
                            component: YGuoJi,
                        },
                        {
                            path: "yGuoNei",
                            name:"yGuoNei",
                            component: YGuoNei,
                        },
                        {
                            path: "yZuiXin",
                            name:"ytZuiXin",
                            component: YZuiXin,
                        },
                    ]
                },
            ]
        }
    ]
});
