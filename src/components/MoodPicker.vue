<template>
    <div>
        <v-container>
                <p>Limit 1 a day</p>
            <v-row justify="center">
                <h2>Would you like to check in on your mood?</h2>
                <h1> {{userMood}}</h1>
                <v-btn rounded color="secondary"
                @click="postMood">
                    Submit
                </v-btn>
                <p id="moodResp"></p>
            </v-row>
            <v-row>
                <v-col align="center" @click="moodSelector('joyful')">
                    <v-img
                    class="moodImg"
                        width="100"
                        src="../assets/mostly-sunny.png">
                    </v-img>
                    <h3>Joyful</h3>
                </v-col>
                <v-col align="center"  @click="moodSelector('peaceful')">
                    <v-img
                    class="moodImg"
                        width="100"
                        src="../assets/peace.png">
                    </v-img>
                    <h3>Peaceful</h3>
                </v-col>
                    <v-col align="center"  @click="moodSelector('calm')">
                    <v-img
                    class="moodImg"
                        width="100"
                        src="../assets/sea.png">
                    </v-img>
                    <h3>Calm</h3>
                </v-col>
                <v-col align="center"  @click="moodSelector('gloomy')">
                    <v-img
                    class="moodImg"
                        width="100"
                        src="../assets/cloudy-day.png">
                    </v-img>
                    <h3>Gloomy</h3>
                </v-col>
                </v-row>
                <v-row>
                <v-col align="center"  @click="moodSelector('anxious')">
                    <v-img
                    class="moodImg"
                        width="100"
                        src="../assets/rainy.png">
                    </v-img>
                    <h3>Anxious</h3>
                </v-col>
                <v-col align="center"  @click="moodSelector('frustrated')">
                    <v-img
                    class="moodImg"
                        width="100"
                        src="../assets/storm2.png">
                    </v-img>
                    <h3>Frustrated</h3>
                </v-col>
                    <v-col align="center"  @click="moodSelector('sensitive')">
                    <v-img
                    class="moodImg"
                        width="100"
                        src="../assets/rainy2.png">
                    </v-img>
                    <h3>Sensitive</h3>
                </v-col>
                <v-col align="center"  @click="moodSelector('annoyed')">
                    <v-img
                    class="moodImg"
                        width="100"
                        src="../assets/storm.png">
                    </v-img>
                    <h3>Annoyed</h3>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name : "MoodPicker",
        data() {
            return {
                userMood: "",
                moodDate: ""
            }
        },
        methods: {
            //passes the users mood to the post mood request based on the image clicked
            moodSelector(mood) {
                this.userMood = mood
            },
            postMood() {
                axios.request({
                    url : `${process.env.VUE_APP_BASE_DOMAIN}/api/mood`,
                        method : "POST",
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        data : {
                            "loginToken" : cookies.get("loginToken"),
                            "date" : this.userMoodDate(),
                            "mood" : this.userMood
                        }
                    }).then((response) => {
                        console.log(response)
                        document.getElementById('moodResp').innerText="Sucess"
                        
                    }).catch((error) => {
                        console.error(error);
                        document.getElementById('moodResp').innerText="Oh no, exceeded daily mood limit"
                    })
        },
        userMoodDate(){
            this.moodDate = new Date().toISOString().slice(0, 10);
            return this.moodDate
        }
        },
    }
</script>

<style scoped>
h2{
color: #A1887F;
}
h3{
color: #A1887F;
/* padding-left: px; */
}
h1{
    color: rgb(33, 47, 243);
    font-size: 2.2rem;
}
div{
    width: 100%;
}
.moodImg:hover{
    border-style: solid;
    border-color: rgb(240, 200, 24);
    border-radius: 5px;
    cursor: pointer
}
</style>