<template>
    <div>
        <v-btn color="secondary" rounded @click="getQuote">
            Click for a reflection prompt
        </v-btn>
        <h2>{{quote}}</h2>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name : "QuotePrompt",
        data() {
            return {
                quote: "",
            }
        },
        methods: {
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
                    })
            },
        quoteGenerator(){
            return Math.floor(Math.random() * 30 + 1)
        }
        },

    }
</script>

<style scoped>
h2{
color: #A1887F;
}
</style>