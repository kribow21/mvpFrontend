<template>
    <div>
        <CalendarComp/>
        <Footer/>
    </div>
</template>

<script>
import CalendarComp from '../components/CalendarComp.vue'
import Footer from '../components/Footer.vue'
    export default {
    components: { 
        CalendarComp,
        Footer 
        },
        name : "Calendar"
    }
</script>

<style scoped>

</style>