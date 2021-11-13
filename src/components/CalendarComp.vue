<template>
    <div>
        <NavBar2/>
        <v-img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80" alt="beach" height="250"/>
        <v-toolbar
        flat
        color="accent">
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
                    color="primary">
                    <!-- using the date key to bind the mood to the correct date-->
                        <template v-slot:day="{date }">
                            <v-row justify="center">
                                <div v-if="mood[date]">
                                    <h3 id="dayText">{{mood[date]}}</h3>
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
import NavBar2 from './NavBar2.vue';
    export default {
    components: { NavBar2 },
        name : 'CalendarComp',
        mounted () {
            this.getMood();
            this.todaysDate();

        },
        data() {
            return {
            today: '',
            //from the get request, a object with keys of dates and values being the moods to bind into the calendar slots
            mood : {},
            }
        },
        methods: {
            //so calendar can get correct month displayed
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
                        this.mood = response.data

                    }).catch((error) => {
                        console.error("There was an error" +error);
                    })
        },
    },
    }
</script>

<style scoped>
#dayText{
    margin-top: 10px;
    color: #f0cb5e;
}
</style>