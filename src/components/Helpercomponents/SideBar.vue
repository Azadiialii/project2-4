<template>
    <div class="side-bar">
        <div class = "menu">
            <div class="menu-container">
                <p><router-link class="link" to="/profile">My Profile</router-link></p>
                <p><router-link class="link" to ="/dashboard">Dashboard</router-link></p>
                <p><router-link class="link" to ="/myprojects">My Projects</router-link></p>
                <p><router-link class="link" to ="/browseprojects">Browse Projects</router-link></p>
                <p><router-link class="link" to ="/browseusers">Browse Users</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
    .side-bar{
        position: fixed;
        box-sizing: border-box;
        height: 100vh;
        overflow: hidden;
        display: grid;
        grid-template-columns: 16.8vw;
        grid-template-rows: 30vh 20vh 30vh;
        font-family: "Source Sans Pro", serif;
        font-size: 16px;
        background: #26292c;
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
    }

    .menu{
        grid-column: 1/2;
        grid-row: 2/3;
        justify-self: center;
    }

    .link{
        text-decoration: none;
        color: #ffffff;
    }

    .link:hover{
        color: #02bbd0;
    }
</style>