<template>
    <div>
        <v-card
            class="mx-auto"
            color="primary"
            dark
            max-width="40%">
        <v-img :src="imageURL"></v-img>
        <v-card-actions>
        <v-list-item class="grow">
            <v-row
                align="center" 
                justify="end"
            >
            <v-btn
            @click="deleteImage"
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
        name : "ViewEditorImages",
        props : {
            imageId : Number,
            imageURL : String
        },
        methods: {
            deleteImage(){
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
                    method : "Delete",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        "editorToken" : cookies.get('editorToken'),
                        "imageId": this.imageId,
                    }
                }).then(() => {
                    this.$emit('UpdateEditorImages');
                    
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