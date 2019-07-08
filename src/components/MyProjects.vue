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
    </div>
</template>

<script>
    import SideBar from "./Helpercomponents/SideBar";
    import LineChart from './Helpercomponents/LineChart';
    import projectHolder from './Helpercomponents/ProjectHolder';

    export default {
        name: "MyProjects",
        components: {SideBar, LineChart, projectHolder},
        data(){ return{ selected: this.selected }}
        }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: 16.8vw 80vw;
        grid-template-rows: 15vh 5vh 60vh;
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
</style>