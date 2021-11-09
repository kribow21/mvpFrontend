<template>
    <div>
        <v-container fluid>
            <PostImageInspo
            v-for="img in allImages"
            v-bind:key="img.imageId"
            :imageURL="img.imageURL"
            :imageId="img.imageId"/>
        </v-container>
    </div> 
</template>

<script>
import axios from "axios";
import PostImageInspo from './PostImageInspo.vue';
    export default {
    components: { 
        PostImageInspo
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
                        console.log(response)
                        this.allImages = response.data
                }).catch((error) => {
                    console.error("There was an error" +error);
                })
            },
        },
    }
</script>

<style scoped>
div{
background-image: linear-gradient(to top left, #86e9f7, #FFECB3);

}
</style>