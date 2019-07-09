<template>
    <div class="wrapper">
        <side-bar></side-bar>

        <div class="search-projects-bar">
            <div class="projects-text">Browse Users</div>
        </div>

        <div class="content">
            <table>
                <tr v-for="user in users">
                <td>
                    <b>Name: </b> {{ user.name }}
                </td><td>
                    <b>Job: </b> {{ user.job }}
                </td><td>
                    <b>Skill: </b> {{ user.skill }}
                </td><td>
                    <b>Posts: </b> {{ user.posts }}
                </td><td>
                    <router-link :to="'Profile/'+user.user_id">>Go to user</router-link>
                </td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script>
    import serviceworker from '@/serviceWorker.js'

    import SideBar from "./Helpercomponents/SideBar";
    export default {
        name: "BrowseUsers",
        components: {SideBar},
        data(){
            return{
                selected: this.selected,
                users: []
            }
        },
        mounted() {
            serviceworker.getWithServiceWorker('http://localhost:5000/user/all', 'get', 'browseUserCache').then(data => {
                console.log(data);
                for (let i in data.users) {
                    let user = data.users[i];
                    this.users.push({name: user.firstName + " " + user.lastName, job: user.job, skill: user.skill, user_id: user.id, posts: user.posts.length});
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

    .content{
        display: grid;
        margin-left: 5vw;
        margin-top: 2vw;
        grid-column: 2/3;
    }
</style>