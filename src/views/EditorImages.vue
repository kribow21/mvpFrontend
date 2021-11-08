<template>
    <div>
        <EditorNav/>
        <PostEditorImages/>
    </div>
</template>

<script>
import EditorNav from '../components/EditorNav.vue'
import PostEditorImages from '../components/PostEditorImages.vue'
    export default {
  components: {     
        EditorNav,
        PostEditorImages
        },
        name : "EditorImages"
    }
</script>

<style scoped>

</style>