<template>
    <section>
        <v-card
            class="mx-auto"
            max-width="100%"
            color="accent"
            
        >
            <v-card-text>
            <p class="text-h4 text--primary">
                {{dateStamp}}
            </p>
            <div class="text--primary">
                {{content}} 
            </div>
            </v-card-text>
            <v-card-actions>
            <v-btn
                text
                color="primary"
                @click="reveal = true"
            >
                Edit Entry
            </v-btn>
            <v-btn
                text
                color="primary"
                @click="deleteEntry"
            >
                Delete Entry
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%;"
            >
                <v-card-text>
                    <v-textarea
                        background-color="primary"
                        color="secondary"
                        v-model="editedEntry"
                        counter="1000"
                        rounded
                    ></v-textarea>
                </v-card-text>
                <v-card-actions class="pt-0">
                <v-btn
                    text
                    color="teal accent-4"
                    @click="reveal = false"
                >
                    Close
                </v-btn>
                <v-btn
                    text
                    color="teal accent-4"
                    @click="reveal = false"
                >
                    Submit
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-expand-transition>
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
                reveal: false,
                editedEntry : ""
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
        editEntry(){
            axios.request({
                url : `${process.env.VUE_APP_BASE_DOMAIN}/api/entry`,
                method : "PATCH",
                headers : {
                    'Content-Type': 'application/json'
                },
                data: {
                    "loginToken" : cookies.get('loginToken'),
                    "entryId": this.entryId,
                    "content": this.editedEntry
                }
            }).then((response) => {
                console.log(response);
                this.$emit('UpdateLog');


            }).catch((error) => {
                console.error("There was an error" +error);
            })
        }
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
    margin-bottom: 2vh;
}

</style>