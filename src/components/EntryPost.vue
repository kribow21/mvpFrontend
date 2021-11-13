<template>
    <section>
        <!--Users view of their entries. can only delete -->
        <v-card
        id="entryCard"
        class="mx-auto"
        max-width="100%"
        color="accent">
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
                rounded
                text
                color="primary"
                @click="deleteEntry">
                    Delete Entry
                </v-btn>
            <h3 id="failResponse"></h3>
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
            //converting the date format to a string that looks better on the entry card
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
                this.$emit('updateLog');

            }).catch(() => {
                document.getElementById('failResponse').innerText="Oh No, something went wrong deleting your entry"
            })
            },
    },
    }
</script>

<style scoped>
#entryCard{
    bottom: 0;
    opacity: 1 !important;
    width: 100%;
    border-radius: 30px;
}
section{
    margin-bottom: 4vh;
}
</style>