<template>
    <div>
        <v-btn
        elevation="10"
        rounded
        color="secondary"
        @click="overlay = !overlay">
        Sign Up
        </v-btn>
            <v-overlay
            :absolute="absolute"
            :value="overlay"
            opacity="1"
            color="secondary">
                <v-btn
                class="mx-2"
                fab
                small
                color="primary"
                @click="overlay = false">
                    <v-icon dark>
                        mdi-close-outline
                    </v-icon>
                </v-btn>
                <v-form >
                    <v-col
                    cols="12">
                        <v-text-field
                            label="Email"
                            v-model="userEmail"
                            :rules="emailRules"
                            outlined
                            clearable
                        ></v-text-field>
                        <v-text-field
                            label="Password"
                            v-model="userPassword"
                            :type="'password'"
                            :rules="[passwordRules.min]"
                            hint="At least 8 characters"
                            outlined
                            clearable
                        ></v-text-field>
                        <v-text-field
                            label="First Name"
                            v-model="firstName"
                            hint="15 character limit"
                            outlined
                            clearable
                        ></v-text-field>
                    </v-col>
                </v-form>
                <v-btn
                rounded
                color="secondary"
                @click="makeSignupCall">
                    Login 
                </v-btn>
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
            firstName : "",
            emailRules: [
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules : {
                min: v => v.length >= 8 || 'Min 8 characters',
            }
        }
        },
        methods: {
            makeSignupCall() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/users`,
                    method : "POST",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data : 
                        { 
                        "email": this.userEmail,
                        "password": this.userPassword,
                        "firstName" : this.firstName
                        }
                    }).then((response) => {
                    cookies.set('loginToken', response.data.loginToken)
                    cookies.set('userId', response.data.userId);
                    this.$router.push('/log');
                    }).catch((error) => {
                    console.error("There was an error" +error);
                    document.getElementById('failResponse').innerText="Failed to signup"

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