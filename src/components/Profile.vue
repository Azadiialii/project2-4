<template>
    <div class="wrapper">
        <side-bar></side-bar>

        <div class="profile">
            <div class="profile-contents">
                <img class="profile-img" src="../assets/profile-png-icon-2.jpg" height="75px" width="75px">
                <div class="profile-text">My Profile</div>
            </div>
        </div>

        <form class="profile-info" @submit="preventDefault()">
            <p>Name:</p><input type="text">
            <p>Age:</p><input type="text">
            <p>Contact Info:</p><input type="text">
            <p>State of Employment:</p><input type="text">
            <p>Availability:</p><input type="text">
            <p>Skill:</p>
            <select>
                <option value="0">Engineer - Mechanical</option>
                <option value="1">Engineer - Biomedical</option>
                <option value="2">Engineer - Software</option>
                <option value="3">Sales</option>
                <option value="4">Marketing</option>
                <option value="5">Management</option>
            </select>
            <p>Experience Level:</p>
            <select>
                <option value="0">Junior</option>
                <option value="1">Medior</option>
                <option value="2">Senior</option>
            </select>
            <input class="submit" type="submit">
        </form>
    </div>
</template>

<script>
    import SideBar from "./Helpercomponents/SideBar";
    export default {
        name: "Profile",
        components: {SideBar}
    }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: 16.8vw 40vw 40vw;
        grid-template-rows: 15vh 5vh 60vh;
    }

    .profile{
        grid-column: 2/5;
        grid-row: 1/2;
        display: grid;
        white-space: nowrap;
        width: 100%;
        grid-template-rows: 100%;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        font-size: 4em;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
        background-color: #fafafa;
    }

    .profile-contents{
        margin-left: 10vw;
        width: 25vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%;
        justify-items: start;
        align-items: center;
    }

    .profile-text{
        justify-self: start;
    }

    .profile-info{
        margin-left: 10vw;
        margin-top: 10vh;
        grid-column: 2/3;
        grid-row: 2/3;
        display: grid;
        grid-template-columns: 30% 50%;
        grid-auto-rows: 50px;
    }

    .submit{
        grid-column: 2/3;
    }

</style>