<template>
    <div>
        <NavBar2/>
        <MindfulBenefits/>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import MindfulBenefits from '../components/MindfulBenefits.vue'
import NavBar2 from '../components/NavBar2.vue'
    export default {
        name : "Benefits",
        components: {
            NavBar2,
            MindfulBenefits,
            Footer,
        },
    }
</script>

<style scoped>

</style>