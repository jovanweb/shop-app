<template>
    <p>{{data.description}}</p>
</template>
<script>
export default {
    name: "Description",
    props: {
        data: {
            type: Object,
            required: false
        }
    }
}
</script>
<style lang="">
    
</style>