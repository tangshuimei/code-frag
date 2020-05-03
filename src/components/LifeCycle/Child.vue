<template>
    <div>
        <p>Child</p>
        <ul>
            <li v-for="item in list" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'child',
    props:{
        list: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{

        }
    },
    beforeCreate () {
        console.log('child beforeCreate')
    },
    created () {
        console.log('child created')
    },
    beforeMount () {
        console.log('child beforeMount')
    },
    mounted () {
        console.log('child mounted')
    },
    beforeUpdate () {
        console.log('child beforeUpdate')
    },
    updated () {
        console.log('child updated')
    },
    beforeDestroy () {
        console.log('child beforeDestroy')
    },
    destroyed () {
        console.log('child destroyed')
    }
    
}
</script>