<template>
    <div>
        <v-app-bar
            color="primary"
            dark
            rounded
            >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                <v-list-item two-line>
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

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                </v-list>

                <v-btn
                plain
                @click="logOutEditor"
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
                            v-model="eEmail"
                            label="Email"
                            outlined
                            clearable
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            >
                            <v-text-field
                            v-model="ePassword"
                            label="Password"
                            :type="'password'"
                            outlined
                            clearable
                            ></v-text-field>
                        </v-col>
                        </v-container>
                    </v-form>
                    <v-btn
                        color="secondary"
                        @click="editEditor"
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
                    @click="deleteEditor"
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
        name : "EditorNav",
            data: () => ({
                drawer: false,
                group: null,
                absolute: true,
                overlay: false,
                eEmail : "",
                ePassword : "",
                delPassword : "",
                items: [
                { title: 'Quotes',route: '/editordash'},
                { title: 'Images',route: '/editorimages' },
                { title: 'Books', route: '/editorbooks' }
                ]
    }),

            methods: {
                logOutEditor() {
                    axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/editorlogin`,
                        method : "DELETE",
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        data : {
                            editorToken : cookies.get('editorToken')
                        }
                    }).then((response) => {
                        console.log(response)
                        cookies.remove('editorToken');
                        cookies.remove('editorId')
                        this.$router.push('/');

                    }).catch((error) => {
                        console.error("There was an error" +error);
                    })
                },
                editEditor() {
                    axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/editors`,
                        method : "PATCH",
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        data : {
                            "editorToken" : cookies.get('editorToken'),
                            "email" : this.eEmail,
                            "password" : this.ePassword
                        }
                    }).then((response) => {
                        console.log(response)
                        document.getElementById('confirmResponse').innerText="Edit sucessful"


                    }).catch((error) => {
                        console.error("There was an error" +error);
                        document.getElementById('failResponse').innerText="Failed to edit"

                    })
                },
                deleteEditor() {
                    axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/editors`,
                        method : "DELETE",
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        data : {
                            editorToken : cookies.get('editorToken'),
                            password : this.delPassword
                        }
                    }).then((response) => {
                        console.log(response)
                        cookies.remove('editorToken');
                        cookies.remove('editorId')
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