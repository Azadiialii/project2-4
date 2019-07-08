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
                    <b>Description:</b> {{ project_description }}
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
    import getWithServiceWorker from '@/serviceWorker.js'

    export default {
        name: "BrowseProjects",
        components: {SideBar},
        props: ["project_id"],
        data() {
            return {
                project_name: "",
                project_owner: "",
                project_description: "",
                posts: [],
                participants: []
            }
        },
        mounted() {
            getWithServiceWorker('http://localhost:5000/project/' + this.project_id, 'get', 'projectData' + this.project_id).then(data => {
                this.project_name = data.name;
                this.project_owner = (data.owner.firstName + " " + data.owner.lastName);
                this.project_description = data.description;
                if (!!data.posts) {
                    for (let i in data.posts) {
                        let post = data.posts[i];
                        console.log(post);
                        this.posts.push({author: post.author.firstName + " " + post.author.lastName, message: post.message});
                    }
                }
                if (!!data.participants) {
                    for (let i in data.participants) {
                        let participant = data.participants[i];
                        this.participants.push({name: participant.firstName + " " + participant.lastName, user_id: participant.id});
                    }
                }
            })
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