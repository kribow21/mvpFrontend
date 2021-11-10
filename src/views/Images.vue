<template>
    <div>
        <NavBar2/>
        <ImageInspo/>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import ImageInspo from '../components/ImageInspo.vue'
import NavBar2 from '../components/NavBar2.vue'

    export default {
    components: { 
    NavBar2,
    ImageInspo,
    Footer,
    },
        name : "Images"
    }
</script>

<style scoped>

</style>