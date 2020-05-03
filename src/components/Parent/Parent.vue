<template>
    <div>
        <h1>组件通信demo</h1>
        <p>Parent</p>
        <p>parent click son : {{son}}</p>
        <Child :list="list"></Child>
        <Son @pcs="pcsFn"></Son>
        <Brother1></Brother1>
        <Brother2></Brother2>
    </div>
</template>
<script>
import Child from './Child'
import Son from './Son'
import Brother1 from './Brother1'
import Brother2 from './Brother2'
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
        Brother1,
        Brother2
    },
    methods: {
        pcsFn(msg){
            this.son = msg
        }
    }
    
}
</script>