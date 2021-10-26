<template>
    <main>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Junge&display=swap" rel="stylesheet">

        <section>
            <v-container>
                <v-row>
                    <v-col>

                        <v-img src="../assets/seastheday.jpg"></v-img>
                    </v-col>
                    <v-col>
                        <LoginOverlay/>
                        <SignupOverlay/>
                        <h1>Lost at sea? Enjoy the waves as you type away whatevers on your mind in this beautiful mindful journal</h1>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </main>
</template>

<script>
import LoginOverlay from './LoginOverlay.vue'
import SignupOverlay from './SignupOverlay.vue'

    export default {
        name : "HomePage",
        components: {
                SignupOverlay,
                LoginOverlay
            
        }
    }
</script>

<style scoped>
h1{
font-family: 'Junge', serif;
color: #1f98a8;
font-size: 2.6em;
padding: 20px;
}

section{
    background-color: rgb(235, 208, 168);
}
</style>