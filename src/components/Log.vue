<template>
    <main>
        <NavBar/>
        <v-container>
                <v-row>
                        <v-col cols="12">
                        <v-img
                        alt="mindful quote"
                        src="https://lh6.googleusercontent.com/jteC_JceOvHNt29wT6sHU6sgUZJ_d52K3iZ21zgG5oYtjepaajWT9O5bVihlxlI_9pcZUbuii3b1uwWi_fxeVN70XgkNGAyzYp2z6S4lw0ICpuEojWxMlGYbNk_FORGbqOswPMp0"
                        height="400"
                        ></v-img>
                    </v-col>
                </v-row>
            <v-row>
                <QuotePrompt/>
            </v-row>
            <v-row>
                    <v-textarea
                        background-color="primary"
                        color="secondary"
                        v-model="entry"
                        label="Keep calm and type on..."
                        counter="400"
                        rounded
                    ></v-textarea>
            </v-row>
            <v-row>
                <v-btn rounded color="secondary"
                @click="postEntry">
                    Submit entry
                </v-btn>
            </v-row>
            <v-row>
                <MoodPicker/>
            </v-row>
        </v-container>
        <LogFooter/>
    </main>
</template>

<script>
import NavBar from './NavBar.vue'
import QuotePrompt from './QuotePrompt.vue'
import axios from "axios";
import cookies from "vue-cookies"
import MoodPicker from './MoodPicker.vue';
import LogFooter from './LogFooter.vue';
    export default {
        name : "Log",
    components: { 
        NavBar,
        QuotePrompt,
        MoodPicker,
        LogFooter
        },
        data() {
            return {
                entry : "",
                myQuotes: []
            }
        },
    methods: {
        postEntry() {
            axios.request({
                url : `${process.env.VUE_APP_BASE_DOMAIN}/api/entry`,
                    method : "POST",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data : {
                        "loginToken" : cookies.get("loginToken"),
                        "content" : this.entry
                    }
                }).then((response) => {
                    console.log(response)
                    this.myQuotes = response.data


                }).catch((error) => {
                    console.error("There was an error" +error);
                })
        }
    },
    }
</script>

<style scoped>
div{
    background-image: linear-gradient(to top left, #86e9f7, #FFECB3);
    padding: 10px;
}
h1, h2{
color: #A1887F;
}

</style>