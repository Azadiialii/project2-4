<template>
    <div class="nav-bar">
        <router-link class="home" to="/">Home</router-link>

        <div class="login-register">
            <router-link class="login" to="/login">Login</router-link>
            <router-link class="register" to="/register">Register</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar{
        width: 100vw;
        font-weight: bold;
        color: #43484d;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
        background-color: #fafafa;
        height: 70px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display: grid;
        grid-template: 100% / 100%;
        align-items: center;
    }

    .home{
        margin-left: 4vw;
        grid-column: 1/2;
        grid-row: 1/2;
    }

    .login-register{
        margin-right: 4vw;
        justify-self: end;
        grid-column: 1/2;
        grid-row: 1/2;
        display: grid;
        grid-template-rows: 100%;
        grid-template-columns: 1fr 1fr;
    }

    .login, .register, .home{
        text-decoration: none;
        color: #43484d;
    }
</style>