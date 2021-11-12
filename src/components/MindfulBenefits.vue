<template>
    <v-container fluid id="container">
            <v-img src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3" height="40vh" alt="mediating on the beach" id="main"></v-img>
        <v-row justify="center">
            <a href="https://www.helpguide.org/harvard/benefits-of-mindfulness.htm" target="_blank"><h1>Benefits of Mindfulness</h1></a>
        </v-row>
        <v-row>
            <p><b>Mindfulness improves well-being.</b> Increasing your capacity for mindfulness supports many attitudes that contribute to a satisfied life. Being mindful makes it easier to savor the pleasures in life as they occur, helps you become fully engaged in activities, and creates a greater capacity to deal with adverse events. By focusing on the here and now, many people who practice mindfulness find that they are less likely to get caught up in worries about the future or regrets over the past, are less preoccupied with concerns about success and self-esteem, and are better able to form deep connections with others.</p>
            <p><b>Mindfulness improves physical health.</b> If greater well-being isn’t enough of an incentive, scientists have discovered that mindfulness techniques help improve physical health in a number of ways. Mindfulness can: help relieve stress, treat heart disease, lower blood pressure, reduce chronic pain, , improve sleep, and alleviate gastrointestinal difficulties.</p>
            <p><b>Mindfulness improves mental health.</b> In recent years, psychotherapists have turned to mindfulness meditation as an important element in the treatment of a number of problems, including: depression, substance abuse, eating disorders, couples’ conflicts, anxiety disorders, and obsessive-compulsive disorder.</p>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name : "MindfulBenefits"
    }
</script>

<style scoped>

#container{
    background-image: linear-gradient(to bottom left, #86e9f7, #FFECB3);
}
p, h3{
    font-size: 1.4rem;
    color: #9e786a;
    text-indent: 30px;
    margin: 1% 10% 2% 10%;

}
#main{
    border-radius: 30px;
}
h1{
    padding: 2vw;
}
</style>