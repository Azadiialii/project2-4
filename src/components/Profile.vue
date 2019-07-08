<template>
    <div class="wrapper">
        <side-bar></side-bar>

        <div class="profile">
            <div class="profile-contents">
                <img class="profile-img" src="../assets/profile-png-icon-2.jpg" height="75px" width="75px">
                <div class="profile-text">Profile</div>
            </div>
        </div>

        <div class="content">
            <p>Name:</p> <b>{{ name }}</b>
            <p>Job:</p> <b>{{ job }}</b>
            <p>Skill:</p> <b>{{ skill }}</b>
            <button v-if="!isUser && !isContact" v-on:click="addContact">Add contact</button>
            <button v-if="!isUser && isContact" v-on:click="removeContact">Remove contact</button>
        </div>
    </div>
</template>

<script>
    import serviceworker from '@/serviceWorker.js'

    import SideBar from "./Helpercomponents/SideBar";
    export default {
        name: "Profile",
        components: {SideBar},
        props: ['user_id'],
        data() {
            return({
                name: 'Loading...',
                job: '',
                skill: '',
                isUser: true,
                isContact: false
            })
        },
        mounted() {
            serviceworker.getWithServiceWorker('http://localhost:5000/user/' + this.user_id, 'get', 'profileUserData' + this.user_id).then(data => {
                console.log(data);
                this.name = (data.firstName + " " + data.lastName);
                this.job = data.job;
                this.skill = data.skill
                if (!data.email) {
                    this.isUser = false;
                }
                this.isContact = data.isContact;
            })
        },
        methods: {
            addContact: function(event) {
                let formdata = new FormData();
                serviceworker.postRequest('http://localhost:5000/user/' + this.user_id + '/contact', formdata).then(resonse => {
                    location.reload(); })
                .catch(error => { alert("Contact request failed") });
            },
            removeContact: function(event) {
                let formdata = new FormData();
                serviceworker.deleteRequest('http://localhost:5000/user/' + this.user_id + '/contact', formdata).then(resonse => {
                    location.reload(); })
                .catch(error => { alert("Remove request failed") });
            }

        }
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

    .content{
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

    button{
        background-color: #008CBA;
        border: none;
        color: white;
        text-align: center;
        padding: 15px 32px;
        width: 12em;
    }

</style>