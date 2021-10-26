<template>
    <main>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Junge&display=swap" rel="stylesheet">

        <section>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                        <LoginOverlay/>
                        <SignupOverlay/>
                </v-row>
                <v-row>
                    <v-col>
                        <v-img src="../assets/seastheday.jpg"></v-img>
                    </v-col>
                    <v-col>
                        <h1>Lost at sea? Enjoy the waves as you type away whatevers on your mind in this beautiful mindful journal</h1>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section>
            <v-container>
                <v-row>
                    <v-col>
                    <h2>Digitize your private diary </h2>
                    <h4>Your private & secure journal - available 24/7 from any device</h4>
                    </v-col>
                </v-row>
        </v-container>
        </section>
        <Footer/>
    </main>
</template>

<script>
import LoginOverlay from './LoginOverlay.vue'
import SignupOverlay from './SignupOverlay.vue'
import Footer from './Footer.vue'

    export default {
        name : "HomePage",
        components: {
                SignupOverlay,
                LoginOverlay,
                Footer
            
        }
    }
</script>

<style scoped>
h1,h2{
font-family: 'Junge', serif;
color: #1f98a8;
font-size: 2.6em;
padding: 20px;
}
h4{
font-family: 'Junge', serif;
color: #A1887F
}
section{
    background-color: rgb(224, 191, 120);
}
</style>