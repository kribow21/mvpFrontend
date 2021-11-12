<template>
    <div>
        <h2>{{content}}</h2>
    </div>
</template>

<script>
    export default {
        name : "QuotePrompt",
    props: {
        content : String
    },
    }
</script>

<style scoped>
h2{
color: #A1887F;
text-align: center;

}
</style>