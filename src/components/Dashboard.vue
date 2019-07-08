<template>
    <div class="wrapper">
        <SideBar class="sidebar"></SideBar>

        <div class="dashboard">
            <div class="dashboard-contents">
                <img class="dash-img" src="../assets/dashboard-icon-23683.png" height="75px" width="75px">
                <div class="dash-text">Dashboard</div>
            </div>
        </div>

        <div class="content">
            <h1> {{ name }} </h1>
            <h2>Projects</h2>
        </div>
        <projectHolder apiURL="http://localhost:5000/project/participating" storageKey="dashProjectsCache" />
        <div class="content">
            <h2>Contacts</h2>
            <table>
                <tr v-for="contact in contacts"><td>
                    {{ contact.name }}
                 </td>
                    <router-link :to="'Profile/'+contact.user_id">>Go to user</router-link>
                 </tr>
             </table>
        </div>
    </div>
</template>

<script>
    import SideBar from "./Helpercomponents/SideBar";
    import LineChart from './Helpercomponents/LineChart'
    import projectHolder from './Helpercomponents/ProjectHolder';
    import serviceworker from '@/serviceWorker.js'

    export default {
        name: "Dashboard",
        components: {SideBar, LineChart, projectHolder},
        data () {
            return {
                name: "Loading...",
                contacts: []
            }
        },
        mounted() {
            serviceworker.getWithServiceWorker('http://localhost:5000/user', 'get', 'dashUserData').then(data => {
                this.name = (data.firstName + " " + data.lastName);
                for (let i in data.contacts) {
                    this.contacts.push({name: data.contacts[i].name, user_id: data.contacts[i].user_id});
                }
            })
        }
    }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: 16.8vw 80vw;
        grid-template-rows: 15vh auto auto auto;
    }

    .sidebar{
        grid-column: 1/2;
        grid-row: 1/3;
    }

    .dashboard{
        grid-column: 2/3;
        grid-row: 1/2;
        display: grid;
        width: 100vw;
        grid-template-rows: 100%;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        font-size: 4em;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
        background-color: #fafafa;
    }

    .dashboard-contents{
        margin-left: 10vw;
        width: 25vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%;
        justify-items: center;
        align-items: center;
    }

    .content{
        display: grid;
        margin-left: 5vw;
        margin-top: 2vw;
        grid-column: 2/3;
    }

    .dash-text{
        justify-self: start;
    }

    .project-holder{
        display: grid;
        margin-left: 5vw;
        margin-top: 0px;
        grid-column: 2/3;
    }
</style>