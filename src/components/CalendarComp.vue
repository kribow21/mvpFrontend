<template>
    <div>
        <v-toolbar
            flat
            color="accent"
        >
            <v-btn
            fab
            text
            small
            color="blue darken-2"
            @click="prev"
            >
            <v-icon small>
                mdi-chevron-left
            </v-icon>
            </v-btn>
            <v-btn
            fab
            text
            small
            color="blue darken-2"
            @click="next"
            >
            <v-icon small>
                mdi-chevron-right
            </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
            </v-toolbar-title>
        </v-toolbar>
        <v-row>
        <v-col>
            <v-sheet height="500">
            <v-calendar
                ref="calendar"
                :value="today"
                color="primary"
            >
                <template v-slot:day="{date }">
                <v-row justify="center">
                    <div v-if="mood[date]">
                    <h2>{{mood[date]}}</h2>
                    </div>
                </v-row>
                </template>
            </v-calendar>
            </v-sheet>
        </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name : 'CalendarComp',
        mounted () {
            this.getMood();
            this.todaysDate();

        },
        data() {
            return {
            today: '',
            mood : {

                },
            }
        },
                methods: {
                todaysDate(){
                    this.today = new Date().toISOString().slice(0, 10);
                },
                prev () {
                    this.$refs.calendar.prev()
                },
                next () {
                    this.$refs.calendar.next()
                },

                getMood () {
                    axios.request({
                        url : `${process.env.VUE_APP_BASE_DOMAIN}/api/mood`,
                            method : "GET",
                            headers : {
                                'Content-Type': 'application/json'
                            },
                            params : {
                                "userId" : cookies.get("userId"),
                            }
                        }).then((response) => {
                            console.log(response)
                            this.mood = response.data

                        }).catch((error) => {
                            console.error("There was an error" +error);
                        })
        },
    },
    }
</script>

<style scoped>

</style>