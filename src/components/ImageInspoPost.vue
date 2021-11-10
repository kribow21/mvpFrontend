<template>
    <div>
        <v-img
            id="inspoImgs"
            :src="imageURL"
            class="grey lighten-2"
        >
        </v-img>
    </div>
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
    margin-bottom: 2vh;
    border-radius: 30px;
    width: 80vw;
}
</style>