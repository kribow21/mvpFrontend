<template>
    <div>
        <v-app-bar
            color="primary"
            dark
            rounded
            >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    <v-list-item-title>{{firstName}}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-spacer></v-spacer>
                    <v-icon> mdi-turtle</v-icon>
                    <h2>Seas the Day</h2>
                </v-list-item>
        </v-app-bar>

        <v-navigation-drawer
            color="primary"
            v-model="drawer"
            absolute
            temporary
    >
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
                :to="item.route"
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
                @click="logOutUser"
                >Log Out</v-btn>
                <v-btn
                plain
                @click="overlay = !overlay"
                >
                Setting
                </v-btn>
            <v-overlay
                :absolute="absolute"
                :value="overlay"
                opacity="1"
                color="secondary"
                >
                <v-btn
                    class="mx-2"
                    fab
                    small
                    color="primary"
                    @click="overlay = false"
                    >
                    <v-icon dark>
                        mdi-close-outline
                    </v-icon>
                </v-btn>
                    <v-form >
                        <v-container>
                        <v-col
                        cols="12">
                        </v-col>
                    <p>Edit your profile settings:</p>
                            <v-col
                            cols="12"
                            >
                            <v-text-field
                            v-model="userEmail"
                            label="Email"
                            outlined
                            clearable
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            >
                            <v-text-field
                            v-model="userPassword"
                            label="Password"
                            :type="'password'"
                            outlined
                            clearable
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            >
                            <v-text-field
                            v-model="fName"
                            label="First Name"
                            outlined
                            clearable
                            ></v-text-field>
                        </v-col>
                        </v-container>
                    </v-form>
                    <v-btn
                        color="secondary"
                        @click="editUser"
                        >
                        Submit 
                    </v-btn>
                    <h3 id="failResponse"></h3>
                    <h3 id="confirmResponse"></h3>
                    <v-form>
                        <v-container>
                            <v-col
                            cols="12"
                            >
                            <p>To delete your profile enter your password:</p>
                            <v-text-field
                            v-model="delPassword"
                            label="Password"
                            :type="'password'"
                            outlined
                            clearable
                            ></v-text-field>
                            </v-col>
                        </v-container>
                    <v-btn
                    @click="deleteUser"
                        color="secondary"
                        >
                        Delete Profile
                    </v-btn>
                    </v-form>
            <h3 id="failResponse"></h3>
            </v-overlay>
            </v-navigation-drawer>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name : "NavBar",
            data: () => ({
                drawer: false,
                group: null,
                firstName : "",
                absolute: true,
                overlay: false,
                userEmail : "",
                userPassword : "",
                delPassword : "",
                fName : "",
                items: [
                { title: 'Log', icon: 'mdi-text-box-plus-outline',route: '/log' },
                { title: 'Calendar', icon: 'mdi-calendar-range', route: '/calendar' },
                { title: 'Inspiration', icon: 'mdi-lightbulb-outline' },
                { title: 'Mindful Benefits', icon: 'mdi-creation' }
                ]
    }),
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
                },
                logOutUser() {
                    axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/userlogin`,
                        method : "DELETE",
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        data : {
                            loginToken : cookies.get('loginToken')
                        }
                    }).then((response) => {
                        console.log(response)
                        cookies.remove('loginToken');
                        cookies.remove('userId')
                        this.$router.push('/');

                    }).catch((error) => {
                        console.error("There was an error" +error);
                    })
                },
                editUser() {
                    axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/users`,
                        method : "PATCH",
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        data : {
                            "loginToken" : cookies.get('loginToken'),
                            "email" : this.userEmail,
                            "password" : this.userPassword,
                            "firstName" : this.fName,
                        }
                    }).then((response) => {
                        console.log(response)
                        document.getElementById('confirmResponse').innerText="Edit sucessful"


                    }).catch((error) => {
                        console.error("There was an error" +error);
                        document.getElementById('failResponse').innerText="Failed to edit"

                    })
                },
                deleteUser() {
                    axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/users`,
                        method : "DELETE",
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        data : {
                            loginToken : cookies.get('loginToken'),
                            password : this.delPassword
                        }
                    }).then((response) => {
                        console.log(response)
                        cookies.remove('loginToken');
                        cookies.remove('userId')
                        this.$router.push('/');

                    }).catch((error) => {
                        console.error("There was an error" +error);
                        document.getElementById('failResponse').innerText="Failed to delete profile"
                    })
                },
            },
    }
</script>

<style scoped>

</style>