<template>
    <v-carousel-item>
        <v-card
            class="mx-auto"
            width="350">
            <v-card-text>
                <p class="text-h5 text--primary">
                    {{title}}
                </p>
                <v-img :src="imageURL"  height="300"></v-img>
                <h2>{{author}}</h2>
            </v-card-text>
            <v-card-actions>
                <v-list-item class="grow">
                <v-row
                    align="center" 
                    justify="end"
                >
                </v-row>
                </v-list-item>
            </v-card-actions>
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

<style lang="scss" scoped>

</style>