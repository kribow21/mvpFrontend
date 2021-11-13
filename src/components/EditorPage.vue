<template>
    <div>
        <h1>Have 30 Prompts Available</h1>
        <v-text-field
        class="qInput"
        v-model="newQuote"
        label="quote"
        outlined
        clearable
        ></v-text-field>
        <v-btn
        color="secondary"
        @click="postQuote">
            Submit 
        </v-btn>
        <h3 id="failResponse"></h3>
        <EditorQuotes 
        @UpdateEditorPage="getQuotes"
        v-for="quote in allQuotes"
        v-bind:key="quote.quoteId"
        :content="quote.content"
        :quoteId="quote.quoteId"/>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
import EditorQuotes from './EditorQuotes.vue'
    export default {
        name : "EditorDash",
        data() {
            return {
                newQuote: "",
                allQuotes : ""
            }
        },
        components: {
            EditorQuotes,
        },
        mounted () {
            this.getQuotes();
        },
        methods: {
            postQuote() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/quotes`,
                    method : "POST",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data : {
                        editorToken : cookies.get("editorToken"),
                        content : this.newQuote
                    }
                }).then(() => {
                    this.getQuotes();

                }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('failResponse').innerText="Failed to Post"
                })
            },
            getQuotes() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/quotes`,
                    method : "GET",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                        this.allQuotes = response.data
                }).catch((error) => {
                    console.error("There was an error" +error);
                })
            },
        },
    }
</script>

<style scoped>
sectio{
    width: 70vw;
    margin: 5vh
}
#qInput{
    width: 60vw;
}
</style>