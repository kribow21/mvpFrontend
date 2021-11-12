<template>
    <v-carousel-item id="bookItem">
        <v-card
            id="card"
            class="mx-auto"
            width="400">
            <v-card-text >
                <h1>
                    Title: {{title}}
                </h1>
                <v-img :src="imageURL"  height="300"></v-img>
                <h2>Author: {{author}}</h2>
                <a :href="shopURL" target="_blank">Buy Here</a>
            </v-card-text>
        </v-card>
    </v-carousel-item>
</template>

<script>
    export default {
        name : "BookInspoPost",
        props: {
            bookId : Number,
            title : String,
            author : String,
            imageURL : String,
            shopURL : String
        },
    }
</script>

<style scoped>
h1, h2{
color: #A1887F;
padding: 10px;
margin-left: 4vw;
}
#card{
    border-radius: 30px;
}
</style>