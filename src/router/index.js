import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Parent from '../components/Parent/Parent'

Vue.use(Router)

let routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/parent', // 组件通信演示
        name: 'parent',
        component: Parent
    }
]

export default new Router({
    routes
})