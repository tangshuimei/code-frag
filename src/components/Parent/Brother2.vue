<template>
    <div>
        <p>Brother 2</p>
        <p>{{msg}}</p>
    </div>
</template>
<script>
import event from './event'
export default {
    name: 'brother2',
    data(){
        return{
            msg: ''
        }
    },
    mounted () {
        let that = this
        event.$on('brother2Click',function(msg){
            that.msg = msg
        })
    }
}
</script>