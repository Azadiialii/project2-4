<template>
    <div class="wrapper">
        <side-bar></side-bar>
        <div class="title-bar">
            <div class="projects-text"> {{ project_name }} </div>
        </div>
        <div class="projectView">
            <table>
                <tr><td>
                    <b>Project id:</b> {{ project_id }}
                </td></tr><tr><td>
                    <b>Owner:</b> {{ project_owner }}
                </td></tr><tr><td>
                    <b>Participants:</b> {{ participants.length }}
                </td></tr><tr><td>
                    <b>Posts:</b> {{ posts.length }}
                </td></tr>
            </table><br>
            <h2 class="sectionHeader"> Posts </h2>
            <table>
                <tr class="post" v-for="post in posts"><td>
                    <b>{{ post.author }}:</b>
                    {{ post.message }}
                 </td></tr>
             </table>
             <h2 class="sectionHeader"> Participants </h2>
             <table>
                <tr v-for="participant in participants"><td>
                    {{ participant.name }}
                 </td>
                    <a href="#">> Go to user</a>
                 </tr>
             </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import SideBar from "./Helpercomponents/SideBar";

    export default {
        name: "BrowseProjects",
        components: {SideBar},
        props: ["project_id"],
        data() {
            return {
                project_name: "Example Project",
                project_owner: "John Doe",
                nr_of_participants: 23,
                posts: [
                    {author: "John Doe", message: "Hello world, this is a post"},
                    {author: "Simon", message: "Bacon ipsum dolor amet flank turkey sirloin shank chuck. Ribeye drumstick shoulder t-bone, hamburger kevin pork meatball andouille alcatra landjaeger bacon. Swine tail strip steak shank, chicken ribeye sirloin ham hock short ribs alcatra flank kielbasa jerky. Porchetta prosciutto capicola, sirloin chuck chicken tri-tip ball tip flank. Pancetta shank corned beef tenderloin burgdoggen, turducken strip steak. Turkey drumstick salami, boudin shoulder ribeye venison picanha. Kevin pork chop pig ball tip."}
                ],
                participants: [
                    {name: "John Doe", user_id: 1},
                    {name: "Yo Mama", user_id: 2}
                ]
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: 16.8vw 80vw;
        grid-template-rows: 15vh 5vh 60vh;
    }

    .title-bar{
        grid-column: 2/3;
        grid-row: 1/2;
        display: grid;
        width: 83.2vw;
        grid-template-rows: 100%;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        justify-items: center;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
        background-color: #fafafa;
        white-space: nowrap;
    }

    .projects-text{
        font-size: 3em;
        margin-left: 10vw;
        grid-column: 1/2;
    }

    .projectView{
        display: grid;
        margin-left: 5vw;
        margin-top: 2vw;
        grid-column: 2/3;
    }

    .sectionHeader{
        margin-top: .3em;
    }

    .post{
        display: grid;
        margin-top: 5vh;
        border-radius: 1em;
        border: 2px solid black;
        margin-top: 1em;
        width: 100%;
        align-items: center;
        padding-left: 2em;
        padding-right: 1em;
    }
</style>