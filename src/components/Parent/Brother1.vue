<template>
    <div>
        <p>Brother 1</p>
        <button @click="clickFn">发送数据给Brother 2</button>
    </div>
</template>
<script>
import event from './event'
export default {
    name: 'brother1',
    data(){
        return{
            
        }
    },
    methods: {
        clickFn(){
            event.$emit('brother2Click','来自brother1的msg')
        }
    }
}
</script>