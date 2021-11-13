<template>
    <div>
        <v-card
        class="mx-auto"
        width="350">
            <v-card-text>
                <p class="text-h5 text--primary">
                    {{title}}
                </p>
                <div>{{author}}</div>
                <v-img :src="imageURL"  height="300"></v-img>
            </v-card-text>
            <v-card-actions>
                <v-list-item class="grow">
                    <v-row
                    align="center" 
                    justify="end">
                        <v-btn
                        @click="deleteBook"
                        class="mx-2"
                        fab
                        dark
                        small
                        color="primary">
                            <v-icon dark>
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </v-row>
                    <h3 id="failResponse"></h3>
                </v-list-item>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name : "ViewEditorBooks",
        props: {
            bookId : Number,
            title : String,
            author : String,
            imageURL : String,
            shopURL : String
        },
        methods: {
            deleteBook(){
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/books`,
                    method : "Delete",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        "editorToken" : cookies.get('editorToken'),
                        "bookId": this.bookId,
                    }
                }).then(() => {
                    this.$emit('updatePostEditorBooks');
                    
                }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('failResponse').innerText="Failed to delete book"
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