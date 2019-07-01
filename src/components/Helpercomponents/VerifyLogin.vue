<template>

</template>

<script>
    import axios from 'axios';
    export default {
        name: "VerifyLogin",
        data() {
            return {
                loggedIn: this.loggedIn,
            }
        },
        methods: {
            checkLogin() {
                if (typeof localStorage.token !== 'undefined') {
                    let url = "http://localhost:5000/verifyLogin";
                    return axios(url, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.token,
                        },
                    }).then(response => {
                        let responseData = response['data'];
                        let responseMessage = responseData['message'];
                        if (responseMessage === "Login verified") {
                            this.loggedIn = 'LoggedIn';
                            this.$emit('loggedIn', this.loggedIn)
                        }
                    })
                } else {
                    this.$router.push('/login');
                }
            },
        },
        beforeMount() {
            this.checkLogin();
        },
    }
</script>

<style scoped>
</style>