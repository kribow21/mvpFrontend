<template>
    <div>
        <v-app-bar
        color="primary"
        dark
        rounded>
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
                <h3>Seas the Day</h3>
            </v-list-item>
        </v-app-bar>
        <v-navigation-drawer
        color="primary"
        v-model="drawer"
        absolute
        temporary>
            <v-list-item>
                <v-img
                id="navImg"
                max-height="150"
                max-width="150"
                src="../assets/seastheday.jpg"
                ></v-img>
            </v-list-item>
            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-text-box-plus-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        <router-link class="navLinks" to="/log">Log</router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-calendar-range</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        <router-link class="navLinks" to="/calendar">Calendar</router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-group
                :value="false"
                no-action
                sub-group>
                    <template v-slot:activator>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-lightbulb-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                Inspiration
                            </v-list-item-title>
                        </v-list-item>
                    </template>
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        :to="item.route"
                        link
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-creation</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        <router-link class="navLinks" to="/benefits">Benefits</router-link>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
                <v-btn
                plain
                @click="logOutUser">
                    Log Out
                </v-btn>
                <v-row
                align="center"
                justify="center">
                <v-card
                id="setCard"
                height="450"
                width="250"
                color="primary"
                >
                    <v-row justify="center">
                    <v-btn
                        plain
                        class="mt-12"
                        @click="overlay = !overlay"
                        >
                        Settings
                    </v-btn>

                        <v-overlay
                            :absolute="absolute"
                            :opacity="1"
                            :value="overlay"
                            color="secondary">
                        <v-btn
                            class="mx-2"
                            fab
                            x-small
                            color="primary"
                            @click="overlay = false">
                            <v-icon dark>
                                mdi-close-outline
                            </v-icon>
                        </v-btn>
                        <v-form >
                            <v-container>
                                <p>Edit your profile settings:</p>
                                <v-row>
                                    <v-text-field
                                    v-model="userEmail"
                                    label="Email"
                                    :rules="emailRules"
                                    outlined
                                    clearable
                                    ></v-text-field>
                                </v-row>
                                <v-row>
                                    <v-text-field
                                    v-model="userPassword"
                                    label="Password"
                                    :type="'password'"
                                    :rules="[passwordRules.min]"
                                    hint="At least 8 characters"
                                    outlined
                                    clearable
                                    ></v-text-field>
                                </v-row>
                            </v-container>
                        </v-form>
                    <v-btn
                    small
                    rounded
                    color="secondary"
                    @click="editUser">
                        Submit 
                    </v-btn>
                    <h3 id="failResponse"></h3>
                    <h3 id="confirmResponse"></h3>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <p>To delete your profile enter your password:</p>
                                        <v-text-field
                                        v-model="delPassword"
                                        label="Password"
                                        :type="'password'"
                                        outlined
                                        clearable
                                        ></v-text-field>
                                    </v-row>
                                </v-container>
                                <v-btn
                                small
                                rounded
                                @click="deleteUser"
                                color="secondary">
                                    Delete Profile
                                </v-btn>
                            </v-form>
                            <h3 id="failResponse"></h3>
                        </v-overlay>
                    </v-row>
                </v-card>
            </v-row>
        </v-navigation-drawer>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name : "NavBar2",
        data() {
            return {
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
                { title: 'Images', icon: 'mdi-image-filter-none', route: '/images' },
                { title: 'Books', icon: 'mdi-bookshelf', route: '/books' },
                ],
                emailRules: [
                v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules : {
                    min: v => v.length >= 8 || 'Min 8 characters',
                }
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
.navLinks{
    color: black;
}
#navImg{
    border-radius: 30px;
    margin-left: 30px;
    margin-top: 20px;
}
#setCard{
    margin-top: 5px;
}
</style>