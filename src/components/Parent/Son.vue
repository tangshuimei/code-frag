<template>
    <div>
        <p>Son</p>
        <button @click="clickson('son to parent')">son click</button>
    </div>
</template>
<script>
export default {
    name: 'son',
    data(){
        return{

        }
    },
    methods: {
        clickson(msg){
            this.$emit('pcs',msg)
        }
    }
    
}
</script>