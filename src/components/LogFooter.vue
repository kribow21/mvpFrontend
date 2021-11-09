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
                href='https://www.facebook.com'
                target="_blank"
                class="mx-4"
                dark
                icon
                >
                <v-icon size="24px">
                    mdi-facebook
                </v-icon>
                </v-btn>
                <v-btn
                href='https://www.twitter.com'
                target="_blank"
                class="mx-4"
                dark
                icon
                >
                <v-icon size="24px">
                    mdi-twitter
                </v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <p >Icons made by <a class="iconLinks" href="https://www.freepik.com" title="Freepik">Freepik</a></p>
                <p >Icons made by <a class="iconLinks" href="https://www.flaticon.com/authors/andy-horvath" title="Andy Horvath">Andy Horvath</a> from <a  class="iconLinks" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p >Icons made by <a class="iconLinks" href="" title="Ubaid El-Ahyar Alyafizi">Ubaid El-Ahyar Alyafizi</a> from <a  class="iconLinks" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                <p >Icons made by <a class="iconLinks" href="https://www.flaticon.com/authors/nawicon" title="nawicon">nawicon</a> from <a  class="iconLinks" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>

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
    }
</script>

<style scoped>
.iconLinks{
    color: white;
}
</style>