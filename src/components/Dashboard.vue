<template>
    <div class="wrapper">
        <SideBar class="sidebar"></SideBar>

        <div class="dashboard">
            <div class="dashboard-contents">
                <img class="dash-img" src="../assets/dashboard-icon-23683.png" height="75px" width="75px">
                <div class="dash-text">Dashboard</div>
            </div>
        </div>

        <div class="views">
            <h1 class="views-text">Profile Views</h1>
            <p><button class="button">Check In</button></p>
            <p><button class="button">Check Out</button></p>
        </div>

        <div class="graph">
            <h1>My Activity</h1>
            <line-chart :chart-data="datacollection"></line-chart>
        </div>

        <div class="date">
            <h2>Search agenda:</h2>
            <v-date-picker is-expanded
                    mode='single'
                    show-caps>
            </v-date-picker>
        </div>

        <div class="email">
            <img src="../assets/love-letter-email-svgrepo-com.svg" height="50px">
        </div>

    </div>
</template>

<script>
    import SideBar from "./Helpercomponents/SideBar";
    import LineChart from './Helpercomponents/LineChart'

    export default {
        name: "Dashboard",
        components: {SideBar, LineChart},
        data () {
            return {
                datacollection: null
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
        grid-template-columns: 16.8vw 50vw 20vw;
        grid-template-rows: 15vh 5vh 25vh 35vh;
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

    .dash-text{
        justify-self: start;
    }

    .views{
        margin-left: 10vw;
        grid-column: 2/3;
        grid-row: 3/4;
    }

    .graph{
        margin-left: 10vw;
        grid-column: 2/3;
        grid-row: 4/5;
        width: 300px;
        height: 300px;
    }

    .date{
        white-space: nowrap;
        grid-column: 3/4;
        grid-row: 3/4;
        width: 200px;
    }

    .email{
        grid-column: 3/4;
        grid-row: 4/5;
        justify-self: end;
        align-self: end;
    }
</style>