<template>
    <div>
        <h1>双向数据绑定v-model的实现原理</h1>
        <p>v-model</p>
        {{name}}
        <model v-model="name"></model>
    </div>
</template>
<script>
import model from './Model'
export default {
    name: 'index',
    data(){
        return{
           name: '鹅'
        }
    },
    components: {
        model,
    },
    
}
</script>