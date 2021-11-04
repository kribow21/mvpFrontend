<template>
    <section>
        <v-card
            class="mx-auto"
            max-width="100%"
            color="accent"
            
        >
            <v-card-text>
            <p class="text-h4 text--secondary">
                {{dateOfWeek}}
            </p>
            <div class="text--primary">
                {{content}} 
            </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    text
                    color="primary"
                    @click="deleteEntry"
                >
                    Delete Entry
                </v-btn>
            </v-card-actions>
        </v-card>
    </section>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name : "EntryPost",
        data() {
            return {
                stringDate: ""
            }
        },
        computed: {
            dateOfWeek() {
                let date = new Date(this.dateStamp)
                return date.toDateString()
            }
        },
        props : {
            //entry response from log//
            content : String,
            dateStamp: String,
            entryId : Number,
            userId: Number
    },
    methods: {
        deleteEntry() {
            axios.request({
                url : `${process.env.VUE_APP_BASE_DOMAIN}/api/entry`,
                method : "Delete",
                headers : {
                    'Content-Type': 'application/json'
                },
                data: {
                    "loginToken" : cookies.get('loginToken'),
                    "entryId": this.entryId,
                }
            }).then((response) => {
                console.log(response)
                
            }).catch((error) => {
                console.error("There was an error" +error);
            })
            },
    },
    }
</script>

<style scoped>
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
section{
    margin-bottom: 4vh;
}

</style>