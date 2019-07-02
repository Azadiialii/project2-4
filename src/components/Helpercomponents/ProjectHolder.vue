<template>
    <div class="project-holder">
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
</template>

<script>
    import axios from 'axios';

    export default {
        name: "projectHolder",
        props: ['apiURL'],
        data() {
            return{
                projects: []
            }
        },
        created() {
            axios
                .get(this.apiURL, {headers: {Authorization: "Bearer " + localStorage.token }})
                .then( response => {
                    console.log(response);
                    let i
                    for (i in response.data.projects) {
                    let project = response.data.projects[i]
                        this.projects.push({'name': project.name, 'owner': project.owner.firstName + ' ' + project.owner.lastName, 'participants': 23});
                    }
            });
        }
    }
</script>

<style scoped>
    .project-holder{
        display: grid;
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
</style>