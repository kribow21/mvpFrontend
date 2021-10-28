<template>
    <div>
        <v-btn
        color="secondary"
        @click="overlay = !overlay"
        >
        Login
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
                        </v-container>
                    </v-form>
                    <v-btn
                        color="secondary"
                        @click="makeLoginRequest"
                        >
                        Login 
                    </v-btn>
            <h3 id="failResponse"></h3>
            </v-overlay>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name : "LoginOverlay",
        data() {
        return {
            absolute: true,
            overlay: false,
            userEmail : "",
            userPassword : "",
        }
        },
            methods : {
                    makeLoginRequest : function() {
                    axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/userlogin`,
                    method : "POST",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data : {
                        email : this.userEmail,
                        password : this.userPassword,
                    }
                }).then((response) => {
                    console.log(response);
                    cookies.set('loginToken', response.data.loginToken);
                    cookies.set('userId', response.data.userId);
                    this.$router.push('/log');

                }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('failResponse').innerText="Failed to login"
                })
            }
            
        }
    }
</script>

<style scoped>
div{
    padding: 5px;
}
</style>