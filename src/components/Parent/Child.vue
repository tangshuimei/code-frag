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
    
}
</script>