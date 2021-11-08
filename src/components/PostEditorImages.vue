<template>
    <div>
        <v-text-field
        class="qInput"
        v-model="newImage"
        label="image URL"
        outlined
        clearable
        ></v-text-field>
        <v-btn
            color="secondary"
            @click="postImage"
            >
            Submit 
        </v-btn>
        <ViewEditorImages
        @updateEditorImages="getImages"
        v-for="img in allImages"
        v-bind:key="img.imageId"
        :imageURL="img.imageURL"
        :imageId="img.imageId"/>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
import ViewEditorImages from './ViewEditorImages.vue';
    export default {
        name : "PostEditorImages",
        data() {
            return {
                newImage: "",
                allImages : ""
            }
        },
        components: {
            ViewEditorImages,
        },
        mounted () {
            this.getImages();
        },
        methods: {
            postImage() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
                    method : "POST",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data : {
                        editorToken : cookies.get("editorToken"),
                        imageURL : this.newImage
                    }
                }).then((response) => {
                    console.log(response);
                    this.getImages()

                }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('failResponse').innerText="Failed to login"
                })
            },
            getImages() {
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
sectio{
    width: 70vw;
    margin: 5vh
}
</style>