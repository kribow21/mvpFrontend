<template>
    <div>
        <NavBar2/>
        <BooksInspo/>
        <Footer/>
    </div>
</template>

<script>
import BooksInspo from '../components/BooksInspo.vue'
import Footer from '../components/Footer.vue'
import NavBar2 from '../components/NavBar2.vue'
    export default {
        name : "Books",
        components: {
            NavBar2,
                Footer,
                BooksInspo,
        },
    }
</script>

<style scoped>

</style>