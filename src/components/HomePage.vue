<template>
    <main>
        <section>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                        <LoginOverlay/>
                        <SignupOverlay/>
                </v-row>
                <v-row>
                    <v-col>
                        <v-img src="../assets/seastheday.jpg" id="logo"></v-img>
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
                <v-row>
                    <v-spacer></v-spacer>
                    <EditorLogin/>
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
import EditorLogin from './EditorLogin.vue'

    export default {
        name : "HomePage",
        components: {
                SignupOverlay,
                LoginOverlay,
                Footer,
                EditorLogin
            
        }
    }
</script>

<style scoped>
h1,h2{
color: #A1887F;
font-size: 2.6em;
padding: 20px;
}
h4{
color: #A1887F;
}
/* section{
    background-color: rgb(224, 191, 120);
} */
section {
    background-image: linear-gradient(to bottom right, #86e9f7, #FFECB3);
}
#logo{
    border-radius: 30px;
}
</style>