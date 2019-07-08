<template>
    <div class="project-holder">
        <table class="project" v-for="project in projects">
            <tr><td>
                <b>Project:</b> {{project.name}}
            </td><td>
                <b>Owner: </b> <router-link :to="'../profile/'+project.owner.user_id">{{ project.owner.name }}</router-link>
            </td><td>
                <b>Participants:</b> {{project.participants}}
            </td><td>
                <b>Posts:</b> {{project.posts}}
            </td><td>
                <router-link :to="'../project/'+project.id">>Go to project</router-link>
            </td></tr>
        </table>
    </div>
</template>

<script>
    import serviceworker from '@/serviceWorker.js'

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
            serviceworker.getWithServiceWorker(this.apiURL, "get", this.storageKey).then(data => {
                let i;
                for (i in data.projects) {
                    let projectData = data.projects[i]
                    let project = {'name': projectData.name, id: projectData.id, 'owner': {name: projectData.owner.firstName + ' ' + projectData.owner.lastName, user_id: projectData.owner.id}, participants: 0, posts: 0};
                    if (!!projectData.participants) {
                        project.participants = projectData.participants.length;
                    }
                    if (!!projectData.posts) {
                        project.posts = projectData.posts.length;
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
        border-radius: .5em;
        border: 2px solid black;
        height: 3em;
        margin-top: 1em;
        text-indent: 3em;
        width: 100%;
        align-items: center;
    }
</style>