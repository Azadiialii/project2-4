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
                    <b>Owner: </b> <router-link :to="'../profile/'+project_owner.user_id">{{ project_owner.name }}</router-link>
                </td></tr><tr><td>
                    <b>Participants:</b> {{ participants.length }}
                </td></tr><tr><td>
                    <b>Posts:</b> {{ posts.length }}
                </td></tr>
            </table><br>
            <h2 class="sectionHeader"> Posts </h2>
            <button v-if="!showingPost" v-on:click="showingPost=true">Write post</button>
            <button v-if="showingPost" v-on:click="showingPost=false">Cancel</button>
            <table v-if="showingPost"><tr><td class="inputTitle">
                <b>title:</b> </td><td> <input v-model="postTitle" placeholder="title">
            </td></tr><tr><td class="inputTitle">
                <b>message:</b> </td><td> <textarea v-model="postMessage" placeholder="message" class="postMessageInput" />
            </td></tr>
                <button v-on:click="submitPost">Submit</button>
            </table>
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
                    <router-link :to="'../profile/'+participant.user_id">>Go to user</router-link>
                 </tr>
             </table>
             <button v-if="!isOwner && !isParticipant" v-on:click="ParticipateInProject">Participate</button>
             <button v-if="!isOwner && isParticipant" v-on:click="leaveProject">Leave Project</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import SideBar from "./Helpercomponents/SideBar";
    import serviceworker from '@/serviceWorker.js'

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
                participants: [],
                showingPost: false,
                postTitle: "",
                postMessage: "",
                isParticipating: false,
                isOwner: true

            }
        },
        mounted() {
            serviceworker.getWithServiceWorker('http://localhost:5000/project/' + this.project_id, 'get', 'projectData' + this.project_id).then(data => {
                console.log(data);
                this.project_name = data.name;
                this.project_owner = {name: data.owner.firstName + " " + data.owner.lastName, user_id: data.owner.id};
                this.project_description = data.description;
                this.isParticipant = data.isParticipating;
                this.isOwner = data.isOwner
                if (!!data.posts) {
                    for (let i in data.posts) {
                        let post = data.posts[i];
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
        },
        methods: {
            submitPost: function(event) {
                let formdata = new FormData();
                formdata.set('title', this.postTitle);
                formdata.set('message', this.postMessage);
                formdata.set('project_id', this.project_id);
                serviceworker.postRequest('http://localhost:5000/post', formdata).then(resonse => {
                    location.reload(); })
                .catch(error => { alert("Post submit failed") });
            },
            ParticipateInProject: function(event) {
                let formdata = new FormData();
                serviceworker.postRequest('http://localhost:5000/project/' + this.project_id + '/participant', formdata).then(resonse => {
                    location.reload(); })
                .catch(error => { alert("Post submit failed") });
            },
            leaveProject: function(event) {
                let formdata = new FormData();
                serviceworker.deleteRequest('http://localhost:5000/project/' + this.project_id + '/participant', formdata).then(resonse => {
                    location.reload(); })
                .catch(error => { alert("Post submit failed") });
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

    button{
        background-color: #008CBA;
        border: none;
        color: white;
        text-align: center;
        padding: 15px 32px;
        width: 10em;
    }

    .inputTitle {
        width: 10em;
    }

    .postMessageInput{
        width: 50em;
        height: 15em;
        vertical-align: bottom;
    }
</style>