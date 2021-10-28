<template>
    <div>
        <v-navigation-drawer
            absolute
            permanent
            left
            color="primary"
            >
            <template v-slot:prepend>
                <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>{{firstName}}</v-list-item-title>
                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </template>
                <v-list-item>
                    <v-img
                    max-height="150"
                    max-width="150"
                    src="../assets/seastheday.jpg"
                    ></v-img>
                </v-list-item>
            <v-list dense>
                <v-list-item
                v-for="item in items"
                :key="item.title"
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>

            </v-list>
                <v-btn
                plain
                >Log Out</v-btn>
                <v-btn
                plain
                >Settings</v-btn>
            </v-navigation-drawer>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name : "SideNav",
            data () {
                return {
                    firstName : "",
                    items: [
                    { title: 'Log', icon: 'mdi-text-box-plus-outline' },
                    { title: 'Calendar', icon: 'mdi-calendar-range' },
                    { title: 'Inspiration', icon: 'mdi-lightbulb-outline' },
                    { title: 'Mindful Benefits', icon: 'mdi-creation' }
                    ],
                }
                },
            mounted () {
                this.getUser();
            },
            methods: {
                getUser() {
                    axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/users`,
                        method : "GET",
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        params : {
                            userId : cookies.get('userId')
                        }
                    }).then((response) => {
                        console.log(response)
                        this.firstName = response.data.firstName;
                        //passes to data to use in template

                    }).catch((error) => {
                        console.error("There was an error" +error);
                    })
                }
            },
    }
</script>

<style scoped>

</style>