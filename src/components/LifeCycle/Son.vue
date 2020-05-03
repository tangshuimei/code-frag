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
    },
    beforeCreate () {
        console.log('son beforeCreate')
    },
    created () {
        console.log('son created')
    },
    beforeMount () {
        console.log('son beforeMount')
    },
    mounted () {
        console.log('son mounted')
    },
    beforeUpdate () {
        console.log('son beforeUpdate')
    },
    updated () {
        console.log('son updated')
    },
    beforeDestroy () {
        console.log('son beforeDestroy')
    },
    destroyed () {
        console.log('son destroyed')
    }
    
}
</script>