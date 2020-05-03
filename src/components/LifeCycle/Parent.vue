<template>
    <div>
        <h1>父子组件生命周期demo</h1>
        <p>Parent</p>
        <Child :list="list"></Child>
        <Son @pcs="pcsFn"></Son>
    </div>
</template>
<script>
import Child from './Child'
import Son from './Son'
export default {
    name: 'parent',
    data(){
        return{
            son: '',
            list: [
                {
                    id:0,
                    name: 'aaa'
                },
                {
                    id:1,
                    name: 'bbb'
                },
                {
                    id:2,
                    name: 'ccc'
                },
            ]
        }
    },
    components: {
        Child,
        Son,
    },
    methods: {
        pcsFn(msg){
            this.son = msg
        }
        
    },
    beforeCreate () {
        console.log('parent beforeCreate')
    },
    created () {
        console.log('parent created')
    },
    beforeMount () {
        console.log('parent beforeMount')
    },
    mounted () {
        console.log('parent mounted')
    },
    beforeUpdate () {
        console.log('parent beforeUpdate')
    },
    updated () {
        console.log('parent updated')
    },
    beforeDestroy () {
        console.log('parent beforeDestroy')
    },
    destroyed () {
        console.log('parent destroyed')
    }
    
}
</script>