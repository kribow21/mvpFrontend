<template>
    <div>
    <v-container>
        <v-row class="text-center">
        <v-col col="12">
            <v-sheet height="600">
            <v-calendar
                ref="calendar"
                :value="today"
                :events="events"
                color="primary"
                type="month"
            ></v-calendar>
            </v-sheet>
        </v-col>
        </v-row>
    </v-container>
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
                today: "",
                events: [
                {
                    start: "2021-11-02",
                    name: "frustrated"
                }
                ],
            }
        },
                methods: {
                todaysDate(){
                    this.today = new Date().toISOString().slice(0, 10);
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
                            // this.start = response.data[0].dateStamp
                            // console.log(this.start);
                            // this.name = response.data[0].mood
                            // console.log(this.name);

                        }).catch((error) => {
                            console.error("There was an error" +error);
                        })
        },
    },
    }
</script>

<style scoped>

</style>