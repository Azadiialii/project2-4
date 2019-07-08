<template>
    <div class="wrapper">
        <side-bar></side-bar>

        <div class="projects-bar">
                <img class="project-team-img" src="../assets/kisspng-users-group.png" height="75px" width="75px">
                <div class="projects-text">My Projects</div>
                <input type="text" placeholder="project name">
                <input type="text" placeholder="sector">
                <img class="project-box-img" src="../assets/f7265d26a8ede183e98ccad5441f01cd.png" height="75px" width="75px">
        </div>
        <projectHolder apiURL="http://localhost:5000/project/mine" storageKey="myProjectsCache" />
        <div class="content">
            <button v-if="!showProjectCreator" v-on:click="showProjectCreator=true">Create Project</button>
            <button v-if="showProjectCreator" v-on:click="showProjectCreator=false">Cancel</button>
            <table v-if="showProjectCreator"><tr><td class="inputTitle">
                <b>Name:</b> </td><td> <input v-model="projectName" placeholder="Name">
            </td></tr><tr><td class="inputTitle">
                <b>Description:</b> </td><td> <textarea v-model="projectDescription" placeholder="Description" class="projectDescriptionInput" />
            </td></tr>
                <button v-on:click="submitProject">Submit</button>
            </table>
        </div>
    </div>
</template>

<script>
    import SideBar from "./Helpercomponents/SideBar";
    import LineChart from './Helpercomponents/LineChart';
    import projectHolder from './Helpercomponents/ProjectHolder';
    import serviceworker from '@/serviceWorker.js'

    export default {
        name: "MyProjects",
        components: {SideBar, LineChart, projectHolder},
        data()
            { return{ selected: this.selected,
              showProjectCreator: false,
              projectName: "",
              projectDescription: ""
            }},
        methods: {
            submitProject: function(event) {
            if (this.projectName != "" && this.projectDescription != "") {
                    let formdata = new FormData();
                    formdata.set('project_name', this.projectName);
                    formdata.set('description', this.projectDescription);
                    serviceworker.postRequest('http://localhost:5000/project', formdata).then(resonse => {
                        location.reload(); })
                    .catch(error => { alert("Post submit failed") });
                }
            }
        }
        }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: 16.8vw 80vw;
        grid-template-rows: 15vh auto auto;
    }

    .projects-bar{
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
        font-size: 4em;
    }

    input[type="text"]{
        width: 200px;
        height: 30px;
    }

    .content{
        display: grid;
        margin-left: 5vw;
        margin-top: 2vw;
        grid-column: 2/3;
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

    .projectDescriptionInput{
        width: 30em;
        height: 5em;
        vertical-align: bottom;
    }
</style>