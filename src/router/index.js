import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Parent from '../components/Parent/Parent'
import LifeCycle from '../components/LifeCycle/Parent'
import VModel from '../components/VModel/index'

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
    },
    {
        path: '/vModel', // 自定义v-model
        name: 'vModel',
        component: VModel
    }
]

export default new Router({
    routes
})