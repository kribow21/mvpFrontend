<template>
    <div>
        <h1>Head stuck in the Sand? Grab a Recommended Book</h1>
        <v-carousel hide-delimiters >
            <BooksInspoPost
            v-for="book in allBooks"
            v-bind:key="book.bookId"
            :imageURL="book.imageURL"
            :title="book.title"
            :author="book.author"
            :bookId="book.bookId"
            :shopURL="book.shopURL"/>
        </v-carousel>
    </div>
</template>

<script>
import axios from "axios";
import BooksInspoPost from './BooksInspoPost.vue'
    export default {
    components: { BooksInspoPost },
        name : "BooksInspo",
        data() {
            return {
                allBooks : []
            }
        },
        mounted () {
            this.getBooks();
        },
        methods: {
            getBooks() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/books`,
                    method : "GET",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                        console.log(response)
                        this.allBooks = response.data
                }).catch((error) => {
                    console.error("There was an error" +error);
                })
            },
        },
    }
</script>

<style scoped>
div{
    background-image: linear-gradient(to bottom left, #86e9f7, #FFECB3);
    height: 100vh;
}
h1{
display: grid;
justify-content: center;
padding: 20px;
color: #A1887F;
}
</style>