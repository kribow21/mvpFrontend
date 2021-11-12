<template>
    <div>
        <EditorNav/>
        <PostEditorBooks/>
    </div>
</template>

<script>
import EditorNav from '../components/EditorNav.vue'
import PostEditorBooks from '../components/PostEditorBooks.vue'
    export default {
  components: { EditorNav, PostEditorBooks },
        name : "EditorBooks"
    }
</script>

<style scoped>

</style>