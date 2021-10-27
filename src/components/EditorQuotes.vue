<template>
    <div>
        <v-card
            class="mx-auto"
            color="primary"
            dark
            max-width="60%">
                <v-card-text class="text-h5 font-weight-bold">
                    {{content}}
                </v-card-text>
        <v-card-actions>
        <v-list-item class="grow">
            <v-row
                align="center" 
                justify="end"
            >
            <!-- <v-icon>
                <v-icon @click="clickToEdit" class="mr-1"
                color="accent">
                mdi-comment-edit-outline
            </v-icon>
                <div :class="{EditForm : isForm}">
                        <v-col
                            cols="12"
                            sm="10"
                        >
                        <v-text-field
                            label="edited tweet"
                            v-model="editedContent"
                            outlined
                        ></v-text-field>
                        <v-btn
                                @click="editTweet"
                                color="primary"
                                elevation="2"
                                raised
                            >Apply</v-btn>
                            
                        </v-col>
                        </div> -->
                    <v-btn
                    @click="deleteQuote"
                        class="mx-2"
                        fab
                        dark
                        small
                        color="primary"
                    >
                        <v-icon dark>
                            mdi-delete
                        </v-icon>
                    </v-btn>
            </v-row>
        </v-list-item>
        </v-card-actions>
    </v-card>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name : "EditorQuotes",
        props : {
            quoteId : Number,
            content : String
        },
        methods: {
            deleteQuote(){
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/quotes`,
                    method : "Delete",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        "editorToken" : cookies.get('editorToken'),
                        "quoteId": this.quoteId,
                    }
                }).then(() => {
                    this.$emit('UpdateEditorPage');
                    
                }).catch((error) => {
                    console.error("There was an error" +error);
                })
            },
        },
    }
</script>

<style scoped>
div{
    margin-bottom: 1vh;
}
</style>