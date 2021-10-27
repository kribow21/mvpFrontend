<template>
    <div>
        <v-text-field
        v-model="newQuote"
        label="quote"
        outlined
        clearable
        ></v-text-field>
        <v-btn
            color="secondary"
            @click="postQuote"
            >
            Submit 
        </v-btn>
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
                }).then((response) => {
                    console.log(response);

                }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('failResponse').innerText="Failed to login"
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
                        this.allQuotes = response.data.sort(this.compareTimes)
                }).catch((error) => {
                    console.error("There was an error" +error);
                })
            },
                    //used to sort the quotes to show newest to oldest
            compareTimes(a,b){
                if(a.createdAt > b.createdAt){
                    return -1;
                    //if -1 is returned a is newest
                }else if (a.createdAt < b.createdAt){
                    //if 1 is returned a is oldest
                    return 1
                }
            }
        },
    }
</script>

<style scoped>
sectio{
    width: 70vw;
    margin: 5vh
}
</style>