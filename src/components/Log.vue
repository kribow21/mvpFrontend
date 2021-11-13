<template>
    <main>
        <NavBar2/>
        <a id="top"></a>
        <v-container fluid>
            <v-row>
                    <v-col cols="12">
                    <v-img
                    id="mainImg"
                    alt="mindful quote"
                    src="../assets/journal.png"
                    height="450"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-btn color="secondary" rounded @click="getQuote">
                Click for a reflection prompt
            </v-btn>
            <h3 id="failResp"></h3>
            </v-row>
            <v-row>
                <QuotePrompt
                :content="quote"/>
            </v-row>
            <v-row align="center"> 
                <v-textarea
                    background-color="primary"
                    color="secondary"
                    v-model="entry"
                    label="Keep calm and type on..."
                    counter="1000"
                    rounded
                ></v-textarea>
                <p id="errorResp"></p>
                <v-btn rounded color="secondary"
                @click="postEntry">
                    Submit entry
                </v-btn>
            </v-row>
            <v-row>
                <MoodPicker/>
            </v-row>
            <v-row>
                <h1>Your Previous Entries:</h1>
                <h3 id="failResponse"></h3>
                <EntryPost
                @updateLog="getEntry"
                v-for="entry in myEntries"
                v-bind:key="entry.entryId"
                :entryId="entry.entryId"
                :content="entry.content"
                :dateStamp="entry.dateStamp"
                :userId="entry.userId"/>
            </v-row>
            <a href="#top">Back to top</a>
        </v-container>
        <LogFooter/>
    </main>
</template>

<script>
import NavBar2 from './NavBar2.vue'
import QuotePrompt from './QuotePrompt.vue'
import axios from "axios";
import cookies from "vue-cookies"
import MoodPicker from './MoodPicker.vue';
import LogFooter from './LogFooter.vue';
import EntryPost from './EntryPost.vue';
    export default {
        name : "Log",
    components: { 
        NavBar2,
        QuotePrompt,
        MoodPicker,
        LogFooter,
        EntryPost
        },
    data() {
        return {
            entry : "",
            myQuotes: [],
            entryDate : "",
            myEntries : [],
            quote : ""
        }
    },
    mounted () {
        this.getEntry();
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
                        "content" : this.entry,
                        "date" : this.userEntryDate()
                    }
                }).then((response) => {
                    console.log(response)
                    this.myQuotes = response.data
                    this.getEntry()
                }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('errorResp').innerText="Oh no, exceeded entry character limit"
                })
        },
        //passes the date stamp to be inputed into the db with the post entry request
        userEntryDate(){
            this.entryDate = new Date().toISOString();
            console.log(this.entryDate);
            return this.entryDate
        },
        getEntry() {
            axios.request({
                url : `${process.env.VUE_APP_BASE_DOMAIN}/api/entry`,
                    method : "GET",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    params : {
                        "userId" : cookies.get("userId"),
                    }
                }).then((response) => {
                    this.myEntries = response.data
                }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('failResponse').innerText="Oh No, something went wrong fetching your entries"
                })
        },
            getQuote() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/quotes`,
                        method : "GET",
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        params : {
                            quoteId : this.quoteGenerator()
                        }
                    }).then((response) => {
                        console.log(response)
                        this.quote = response.data.content


                    }).catch((error) => {
                        console.error("There was an error" +error);
                        document.getElementById('failResp').innerText="Oh No, something went wrong fetching a reflection prompt"

                    })
            },
        quoteGenerator(){
            return Math.floor(Math.random() * 30 + 1)
        }
    },
    }
</script>

<style scoped>
div{
    background-image: linear-gradient(to bottom left, #86e9f7, #FFECB3);
    padding: 10px;
    justify-content: center;
}
h1, h2{
color: #A1887F;
}
#mainImg{
    border-radius: 30px;
}
#top{
    scroll-behavior: smooth;
}
</style>