<template>
    <div>
        <p>model</p>
        <input type="text"
            :value="name"
            @input="$emit('change1',$event.target.value)"
        >
    </div>
</template>
<script>
export default {
    name: 'model',
    model:{
        props: 'name',
        event: 'change1'
    },
    props: {
        name: {
            type: String,
            default(){
                return ''
            }
        }
    },
    data(){
        return{
            
        }
    }
    
}
</script>