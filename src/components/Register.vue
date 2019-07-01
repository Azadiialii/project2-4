<template>
    <form @submit.prevent="sendForm">
        <div class="wrapper">
            <nav-bar></nav-bar>

            <div class="text">Registreren</div>

            <div class="form-holder">
                <div class="firstname fullfield">Voornaam<p><input v-validate="'required|min:2'" type="text" v-model="firstName" name="Voornaam"></p>
                <div class="firstname error"><p class="alert" v-if="errors.has('Voornaam')">{{ errors.first('Voornaam')}}</p></div></div>
                <div class="lastname fullfield">Achternaam<p><input v-validate="'required|min:2'" type="text" v-model="lastName" name="Achternaam"></p>
                <div class="lastname error"><p class="alert" v-if="errors.has('Achternaam')">{{ errors.first('Achternaam')}}</p></div></div>
                <div class="job halffield">Beroep<p><input v-validate="'required|min:2'" type="text" v-model="job" name="Beroep"></p>
                <div class="job error"><p class="alert" v-if="errors.has('Beroep')">{{ errors.first('Beroep')}}</p></div></div>
                <div class="skill halffield">Skillniveau<p><input v-validate="'required|min:2'" type="text" v-model="skill" name="Skill"></p>
                <div class="skill error"><p class="alert" v-if="errors.has('Skill')">{{ errors.first('Skill')}}</p></div></div>
                <div class="email fullfield">E-mailadres<p><input v-validate="'required|email'" type="text" v-model="username" name="E-mail"></p>
                <div class="email error"><p class="alert" v-if="errors.has('E-mail')">{{ errors.first('E-mail')}}</p></div></div>
                <div class="password halffield">Wachtwoord<p><input v-validate="'required|min:8'" type="password" v-model="password" name="Wachtwoord" ref="password"></p>
                <div class="password error"><p class="alert" v-if="errors.has('Wachtwoord')">{{ errors.first('Wachtwoord')}}</p></div>
                <div class="passwordcheck error"><p class="alert" v-if="errors.has('Controle wachtwoord')">{{errors.first('Controle wachtwoord')}}</p></div></div>
                <div class="passwordcheck halffield">Herhaal wachtwoord<p><input v-validate="'required|confirmed:password'" type="password" v-model="passwordCheck" name="Controle wachtwoord" data-vv-as="Wachtwoord"></p></div>
            </div>

            <div class="submit"><input type="submit" value="Registreren" :disabled="this.disabled"/></div>

            <div class="error">{{this.error}}</div>
        </div>
    </form>


</template>

<script>
    import axios from 'axios';
    import NavBar from "./Helpercomponents/NavBar";
    export default {
        name: 'Register',
        data(){
            return {
                username: this.username,
                password: this.password,
                error: this.error,
                firstName: this.firstName,
                lastName: this.lastName,
                job: this.job,
                skill: this.skill,
                message: this.message,
                passwordCheck: this.passwordCheck,
                disabled: this.disabled
            }
        },
        components:{NavBar},
        methods : {
            sendForm(){
                this.$validator.validateAll().then((result) => {
                    if(result){
                        this.disabled = true;
                        let url = "http://localhost:5000/register";
                        let bodyFormData = new FormData();
                        bodyFormData.set('username', this.username);
                        bodyFormData.set('password', this.password);
                        bodyFormData.set('firstname', this.firstName);
                        bodyFormData.set('lastname', this.lastName);
                        bodyFormData.set('job', this.job);
                        bodyFormData.set('skill', this.skill);
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
                    }else {
                        //TODO
                    }
                })
            },
            handleResponse(response){
                let responseData = response['data'];
                this.error = responseData['message'];
                if(responseData['status']==='success'){
                    this.$router.push('/login');
                }
                else{
                    this.disabled = false;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
        padding-top: 10vh;
        display: grid;
        font-family: "Source Sans Pro", serif;
        justify-items: center;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-size: 16px;
    }
    .form-holder{
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);
    }
    .fullfield{
        width: 630px;
    }
    .halffield{
        width: 310px;
    }
    .text {
        font-size: 30px;
        justify-self: center;
    }
    .firstname{
        grid-column: 5/7;
        grid-row: 3/4;
    }
    .lastname{
        grid-column: 5/7;
        grid-row: 4/5;
    }
    .job{
        grid-column: 5/6;
        grid-row: 5/6;
    }
    .skill{
        padding-left: 10px;
        grid-column: 6/7;
        grid-row: 5/6;
    }
    .email{
        grid-column: 5/7;
        grid-row: 6/7;
    }
    .password{
        grid-column: 5/6;
        grid-row: 7/8;
    }
    .passwordcheck {
        padding-left: 10px;
        grid-column: 6/7;
        grid-row: 7/8;
    }
    .error{
        color: red;
    }
    .submit{
        align-self: center;
        justify-self: center;
    }
    input {
        outline: 0;
        width: 100%;
        font-family: "Source Sans Pro", serif;
        font-size: 16px;
    }
    input[type=submit] {
        width: 180px;
        height: 35px;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 600;
        border: none;
    }

</style>