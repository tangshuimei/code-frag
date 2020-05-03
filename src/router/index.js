import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Parent from '../components/Parent/Parent'
import LifeCycle from '../components/LifeCycle/Parent'

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
    },
    {
        path: '/lifeCycle', // 父子组件生命周期演示
        name: 'lifeCycle',
        component: LifeCycle
    }
]

export default new Router({
    routes
})