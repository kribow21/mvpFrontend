<template>
    <div>
        <h1> 6 Book Limit</h1>
        <v-form class="container">
            <v-text-field
            v-model="title"
            label="title"
            outlined
            clearable
            ></v-text-field>
            <v-text-field
            v-model="author"
            label="author"
            outlined
            clearable
            ></v-text-field>
            <v-text-field
            v-model="imageURL"
            label="image URL"
            outlined
            clearable
            ></v-text-field>
            <v-text-field
            v-model="shopURL"
            label="shop URL"
            outlined
            clearable
            ></v-text-field>
            <v-btn
                color="secondary"
                @click="postBook">
                Submit 
            </v-btn>
        </v-form>
        <div>
            <ViewEditorBooks
            @updatePostEditorBooks="getBooks"
            v-for="book in allBooks"
            v-bind:key="book.bookId"
            :imageURL="book.imageURL"
            :title="book.title"
            :author="book.author"
            :bookId="book.bookId"/>
        </div>
        <h3 id="failResponse"></h3>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
import ViewEditorBooks from './ViewEditorBooks.vue';
    export default {
    components: { ViewEditorBooks },
        name : "PostEditorBooks",
        data() {
            return {
                title: "",
                author : "",
                imageURL : "",
                shopURL : "",
                allBooks : []
            }
        },
        mounted () {
            this.getBooks();
        },
        methods: {
            postBook() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/books`,
                    method : "POST",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data : {
                        editorToken : cookies.get("editorToken"),
                        title : this.title,
                        author : this.author,
                        imageURL : this.imageURL,
                        shopURL : this.shopURL
                    }
                }).then(() => {
                    this.getBooks();

                }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('failResponse').innerText="Failed to post book"
                })
            },
            getBooks() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/books`,
                    method : "GET",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                        this.allBooks = response.data
                }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('failResponse').innerText="Failed to get books"
                })
            },
        },
    }
</script>

<style scoped>
.container{
    margin: 10vw;
}
</style>