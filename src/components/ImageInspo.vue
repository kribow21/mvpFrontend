<template>
    <div>
        <h1>Get Inspired</h1>
        <v-carousel hide-delimiters height="70vh">
            <ImageInspoPost
            v-for="img in allImages"
            v-bind:key="img.imageId"
            :imageURL="img.imageURL"
            :imageId="img.imageId"/>
        </v-carousel>
        <h3 id="failResponse"></h3>
    </div> 
</template>

<script>
import axios from "axios";
import ImageInspoPost from './ImageInspoPost.vue'
    export default {
    components: { 
        ImageInspoPost
        },
        name : "ImageInspo",
        data() {
            return {
                allImages: []
            }
        },
        mounted () {
            this.getAllImages();
        },
        methods: {
            getAllImages() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
                    method : "GET",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                    this.allImages = response.data
                }).catch(() => {
                    document.getElementById('failResponse').innerText="Oh No, image loader hit an unexpected interuption"
                })
            },
        },
    }
</script>

<style scoped>
div{
background-image: linear-gradient(to top left, #86e9f7, #FFECB3);
height: 100vh;
}
h1{
display: grid;
justify-content: center;
padding: 20px;
color: #A1887F;
}
</style>