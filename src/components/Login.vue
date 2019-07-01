<template>
    <form @submit.prevent="sendForm">
        <div class="wrapper">
            <nav-bar></nav-bar>
            <div class="text">Inloggen</div>

            <div class="login">
                <div class="email-container">
                    <div class="email">
                        E-mailadres<p><input v-validate="'required'" type="text" v-model="username" name="E-mail"></p>
                        <div class="emailerror"><p class="alert" v-if="errors.has('E-mail')">{{ errors.first('E-mail')}}</p></div>
                    </div>

                </div>
                <div class="password">
                    Wachtwoord<p><input v-validate="'required'" type="password" v-model="password" name="Wachtwoord"></p>
                    <div class="passworderror"><p class="alert" v-if="errors.has('Wachtwoord')">{{ errors.first('Wachtwoord') }}</p></div>
                </div>
                <div class="submit"><input type="submit" value="Inloggen"/>
                    <div class="error">{{this.error}}</div>
                </div>
            </div>

            <footer><router-link to="/register">Heeft u geen account? Registreer nu!</router-link></footer>

        </div>
    </form>
</template>

<script>
    import NavBar from "./Helpercomponents/NavBar";
    import axios from 'axios';
    export default {
        name: 'Login',
        data() {
            return {
                username: this.username,
                password: this.password,
                error: this.error,
                disabled: this.disabled,
                loggedIn: this.loggedIn,
            }
        },
        components:{NavBar},
        methods: {
            sendForm() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.disabled = true;
                        let url = "http://localhost:5000/login";
                        let bodyFormData = new FormData();
                        bodyFormData.set('username', this.username);
                        bodyFormData.set('password', this.password);
                        return axios(url, {
                            method: 'POST',
                            mode: 'no-cors',
                            headers: {
                                'Access-Control-Allow-Origin': '*',
                                'Content-Type': 'application/json',
                            },
                            data: bodyFormData,
                        }).then(response => {
                            this.handleResponse(response);
                        })
                    }
                })
            },
            handleResponse(response) {
                let responseData = response['data'];
                this.error = responseData['message'];
                if (responseData['status'] === 'Success') {
                    this.loggedIn = true;
                    this.$router.push('/Dashboard');
                }
                localStorage.token = responseData['refresh_token'];
            },
        }
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

    .login{
        width: 15vw;
        margin-top: 20vh;
        grid-column: 2/3;
        grid-row: 2/3;
        display: grid;
        grid-template-columns: 100%;
        grid-auto-rows: 50px;
        grid-gap: 2vh;
        justify-items: center;

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