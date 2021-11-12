<template>
    <v-carousel-item>
        <v-img
        id="inspoImgs"
        :src="imageURL">
        </v-img>
    </v-carousel-item>
</template>

<script>
    export default {
        name : "Test",
        props: {
            imageId : Number,
            imageURL : String
        },
    }
</script>

<style scoped>
#inspoImgs{
    border-radius: 30px;
    width: 70vw;
    margin-left: 15vw;
}
</style>