<template>
    <div class="wrapper">
        <SideBar class="sidebar"></SideBar>
        <div class="dashboard">
            <img class="dash-img" src="../assets/dashboard-icon-23683.png" height="75px" width="75px">
            <div class="dash-text">Dashboard</div>
        </div>
    </div>
</template>

<script>
    import SideBar from "./Helpercomponents/SideBar";
    export default {
        name: "Dashboard",
        components: {SideBar}
    }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: 16.8vw 83.2vw;
        grid-template-rows: 30vh 90vh;
    }

    .sidebar{
        grid-column: 1/2;
        grid-row: 1/3;
    }

    .dashboard{
        margin-left: 10vw;
        grid-column: 2/3;
        grid-row: 1/2;
        display: grid;
        width: 20vw;
        grid-template-rows: 100%;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        font-size: 4em;
    }
</style>