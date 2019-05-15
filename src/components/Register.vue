<template>
    <div class="wrapper">
        <nav-bar></nav-bar>
        <form @submit="preventDefault()" class="register">
            <h1>Register</h1>

            <p class="label">Username: </p>
            <p><input type="text"></p>

            <p class="label">Password: </p>
            <p><input type="text"></p>

            <p class="label">Confirm password: </p>
            <p><input type="text"></p>

            <p><input type="submit" value="Register"></p>
        </form>
    </div>
</template>

<script>
    import NavBar from "./Helpercomponents/NavBar";
    export default {
        name: "Register",
        components: {NavBar}
    }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 70px 80vh;
        justify-items: center;
        white-space: nowrap;
    }

    .register{
        width: 15vw;
        margin-top: 15vh;
        grid-column: 2/3;
        grid-row: 2/3;
        display: grid;
        grid-template-columns: 100%;
        grid-auto-rows: 50px;
        grid-gap: 2vh;
        justify-items: center;

    }

    .label{
        justify-self: start;
    }

    input{
        height: 30px;
        width: 300px;
    }

    input[type="submit"]{
        grid-row: 4/5;
        grid-column: 1/2;
        justify-self: center;
        width: 180px;
    }
</style>