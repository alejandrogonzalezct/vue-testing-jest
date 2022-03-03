<template>
    <div>
        Parent
        <Child/>
    </div>
</template>
<script>
import Child from '@/components/parent-child/Child.vue'
export default {
    name:"ParentComponent",
    components:{
        Child
    }
    
}
</script>