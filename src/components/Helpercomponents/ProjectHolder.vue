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
    import getWithServiceWorker from '@/serviceWorker.js'

    export default {
        name: "projectHolder",
        props: ['apiURL', "storageKey"],
        mounted() {
            getWithServiceWorker()
        },
        data() {
            return{
                projects: []
            }
        },
        mounted() {
            getWithServiceWorker(this.apiURL, "get", this.storageKey).then(data => {
                console.log(data);
                let i;
                for (i in data.projects) {
                    let projectData = data.projects[i]
                    let project = {'name': projectData.name, 'owner': projectData.owner.firstName + ' ' + projectData.owner.lastName, participants: 0};
                    if (!!projectData.participants) {
                        project.participants = projectData.participants.length;
                    }
                    this.projects.push(project);
                }
            })
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