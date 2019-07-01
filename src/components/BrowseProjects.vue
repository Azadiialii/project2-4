<template>
    <div class="wrapper">
        <side-bar></side-bar>

        <div class="search-projects-bar">
            <div class="projects-text">Browse Projects</div>
            <input class="search" type="text" placeholder="Search on...">
            <select class="select" v-bind="this.selected">
                <option value="0">Title</option>
                <option value="1">Project</option>
                <option value="2">Sector</option>
                <option value="3">User</option>
                <option value="4">Area</option>
            </select>
        </div>

        <div class="projects-holder">
            <table class="project" v-for="project in projects">
                <tr><td>
                    <b>Project:</b> {{project.name}}
                </td><td>
                    <b>Owner:</b> {{project.owner}}
                </td><td>
                    <b>Participants:</b> {{project.participants}}
                </td></tr>
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
        data(){
            return{
                selected: this.selected,
                projects: [{'name': 'Project 01', 'owner': 'John Doe', 'participants': 23}]
            }
        },
        created() {
            axios
                .get("http://localhost:5000/project/all", {headers: {Authorization: "Bearer " + localStorage.token }})
                .then( response => {
                    console.log(response);
                    let i
                    for (i in response.data.projects) {
                    let project = response.data.projects[i]
                        this.projects.push({'name': project.name, 'owner': 'John Doe', 'participants': 23});
                    }
            });
        }
    }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: 16.8vw 80vw;
        grid-template-rows: 15vh 5vh 60vh;
    }

    .search-projects-bar{
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

    .search{
        margin-left: 5vw;
        grid-column: 2/4;
        width: 100%;
        border-radius: 20px;
        text-indent: 20px;
    }

    .projects-holder{
        margin-left: 5vw;
        margin-top: 2vw;
        grid-column: 2/3;
    }

    .project{
        display: grid;
        margin-top: 5vh;
        border-radius: 1em;
        border: 3px solid black;
        height: 3em;
        margin-top: 1em;
        text-indent: 3em;
        width: 100%;
        align-items: center;
    }

    .square{
        background-color: black;
        border-radius: 20px;
    }
</style>