<template>
    <div>
        <v-footer
        dark
        padless
        >
            <v-card
            class="flex"
            flat
            tile
            color="primary"
            >
            <v-card-title>
                <strong class="subheading">Get connected with us on social networks!</strong>
                <v-spacer></v-spacer>

                <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                dark
                icon
                >
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <p>Icons made by <a href="https://www.flaticon.com/authors/andy-horvath" title="Andy Horvath">Andy Horvath</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p>Icons made by <a href="" title="Ubaid El-Ahyar Alyafizi">Ubaid El-Ahyar Alyafizi</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p>Icons made by <a href="https://www.flaticon.com/authors/nawicon" title="nawicon">nawicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p>Icons made by <a href="" title="fjstudio">fjstudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p>Icons made by <a href="" title="justicon">justicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </v-card-text>
            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>Seastheday</strong>
            </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name : "LogFooter",
        data: () => ({
            icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
        ],
    }),
    }
</script>

<style scoped>

</style>