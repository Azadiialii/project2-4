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
            <div v-for="project in projects">
                <div class="project">
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import SideBar from "./Helpercomponents/SideBar";
    export default {
        name: "BrowseProjects",
        components: {SideBar},
        data(){
            return{
                selected: this.selected,
                projects: [["Project 1"],["Project 2"],["Project 3"],["Project 4"],["Project 5"],["Project 6"],["Project 7"],["Project 8"]]
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
        grid-row: 3/4;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 10vh;
        grid-gap: 9vw;
    }

    .project{
        margin-top: 5vh;
        display: grid;
        grid-template-columns: 5vw 5vw;
        grid-template-rows: 5vw 5vw;
        grid-gap: 1vw;
    }

    .square{
        background-color: black;
        border-radius: 20px;
    }
</style>