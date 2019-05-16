<template>
    <div class="wrapper">
        <side-bar></side-bar>

        <div class="projects-bar">
                <img class="project-team-img" src="../assets/kisspng-users-group.png" height="75px" width="75px">
                <div class="projects-text">My Team</div>
                <input type="text" placeholder="project name">
                <input type="text" placeholder="sector">
                <img class="project-box-img" src="../assets/f7265d26a8ede183e98ccad5441f01cd.png" height="75px" width="75px">
        </div>

        <div class="user-container">
            <div class="user" v-for="user in users">
                <img class="user-img" src="../assets/user-img.png" height="75px" width="75px">
                <div class="name">
                    {{user[0]}}
                </div>
                <div class="contact">
                    {{user[1]}}
                </div>
                <div class="skill">
                    {{user[2]}}
                </div>
                <div class="chart">
                    <line-chart :chart-data="datacollection"></line-chart>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import SideBar from "./Helpercomponents/SideBar";
    import LineChart from './Helpercomponents/LineChart'

    export default {
        name: "MyProjects",
        components: {SideBar, LineChart},
        data(){
            return{
                users: [["user 1", "contact info 1", "skill 1"],
                    ["user 2", "contact info 2", "skill 2"],
                    ["user 3", "contact info 3", "skill 3"],
                    ["user 4", "contact info 4", "skill 4"],
                ],
                datacollection: null,
            }
        },
        mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.datacollection = {
                    labels: [this.getRandomInt(), this.getRandomInt()],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }, {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                }
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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

    .user-container{
        margin-top: 5vh;
        grid-column: 2/3;
        grid-row: 2/3;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .user{
        height: 40vh;
        width: 40vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
        font-size: 2em;
    }

    .name{
        grid-row: 1/2;
        grid-column: 2/3;
    }

    .contact{
        grid-row: 2/3;
        grid-column: 2/3;
    }

    .skill{
        grid-row: 3/4;
        grid-column: 2/3;
    }

    .chart{
        grid-row: 1/4;
        grid-column: 3/4;
        width: 15vw;
    }

</style>