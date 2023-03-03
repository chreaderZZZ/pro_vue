// 配置router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
Vue.use(VueRouter)

// 1. 创建路由组件
// 2. 创建路由映射,将路由与组件映射
const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        // 重定向,当页面路由为'/'时,则跳转至'/home'
        redirect: '/home',
        children: [
            // 子路由、嵌套路由
            { path: 'home', component: Home },//首页
            { path: 'user', component: User },//用户管理
            { path: 'mall', component: Mall },//商品管理
            // 也是该类的嵌套路由中
            { path: 'page1', component: PageOne },//页面1
            { path: 'page2', component: PageTwo },//页面2
        ]
    },

]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 将router实例对外暴露
export default router

// 4. 将router挂载到根节点上——>main.js
