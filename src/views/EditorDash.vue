<template>
    <div>
        <EditorNav/>
        <EditorPage/>
    </div>
</template>

<script>
import EditorPage from "../components/EditorPage.vue"
import EditorNav from "../components/EditorNav.vue"


    export default {
        name : "EditorDash",
        components: {
            EditorPage,
            EditorNav

        },
    }
</script>

<style scoped>

</style>